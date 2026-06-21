import React, { createContext, useContext } from 'react';
import { cn } from '../../lib/utils';
import { colors } from '../../colors';
import { P } from '../Typography';
import './Radio.css';

// Context to share RadioGroup state with individual Radio items
interface RadioGroupContextType {
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

const RadioGroupContext = createContext<RadioGroupContextType | undefined>(undefined);

export interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  name?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, name, value: controlledValue, defaultValue, onChange, disabled = false, children, ...props }, ref) => {
    const [localValue, setLocalValue] = React.useState(defaultValue || '');
    
    const isControlled = controlledValue !== undefined;
    const activeValue = isControlled ? controlledValue : localValue;

    const handleValueChange = (newValue: string) => {
      if (!isControlled) {
        setLocalValue(newValue);
      }
      if (onChange) {
        onChange(newValue);
      }
    };

    return (
      <RadioGroupContext.Provider
        value={{
          name,
          value: activeValue,
          onChange: handleValueChange,
          disabled,
        }}
      >
        <div
          ref={ref}
          role="radiogroup"
          className={cn('aloha-radio-group', className)}
          {...props}
        >
          {children}
        </div>
      </RadioGroupContext.Provider>
    );
  }
);
RadioGroup.displayName = 'RadioGroup';

export interface RadioGroupItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  label?: string;
}

const RadioGroupItem = React.forwardRef<HTMLInputElement, RadioGroupItemProps>(
  ({ className, value, label, id, disabled: itemDisabled, ...props }, ref) => {
    const context = useContext(RadioGroupContext);
    
    if (!context) {
      throw new Error('RadioGroupItem must be used within a RadioGroup component');
    }

    const name = props.name || context.name;
    const isChecked = context.value === value;
    const isDisabled = itemDisabled || context.disabled;

    const inputId = id || `radio-${name}-${value}`;

    const handleChange = () => {
      if (!isDisabled && context.onChange) {
        context.onChange(value);
      }
    };

    return (
      <label
        htmlFor={inputId}
        className={cn(
          'aloha-radio-item',
          isChecked && 'aloha-radio-item--checked',
          isDisabled && 'aloha-radio-item--disabled',
          className
        )}
      >
        <input
          ref={ref}
          type="radio"
          id={inputId}
          name={name}
          value={value}
          checked={isChecked}
          disabled={isDisabled}
          onChange={handleChange}
          className="sr-only"
          {...props}
        />
        <span 
          className="aloha-radio-indicator"
          style={{
            borderColor: isChecked ? colors.bosque : colors.piedra,
            backgroundColor: isChecked ? colors.hueso : colors.koala,
          }}
        >
          {isChecked && (
            <span 
              className="aloha-radio-inner-dot"
              style={{
                backgroundColor: colors.olivo,
              }}
            />
          )}
        </span>
        {label && (
          <P className="aloha-radio-label text-sm m-0 [&:not(:first-child)]:mt-0">
            {label}
          </P>
        )}
      </label>
    );
  }
);
RadioGroupItem.displayName = 'RadioGroupItem';

export { RadioGroup, RadioGroupItem };
