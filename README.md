# aloha-ui-library

A comprehensive React design system with UI components, typography system, and color palette for modern applications.

## 📦 Installation

```bash
npm install aloha-ui-library
```

That's it! No authentication required.

## 🚀 Quick Start

```tsx
import { Button, H1, Card, colors, themeVars } from 'aloha-ui-library';
import 'aloha-ui-library/dist/index.css';

function App() {
  return (
    <div>
      <H1 font="nunito" color="theme-primary">
        Welcome to Aloha UI
      </H1>
      <Button variant="default" onClick={() => alert('Hello!')}>
        Click me
      </Button>
    </div>
  );
}
```

## 🎨 Features

- **25+ UI Components**: Button, Card, Input, Badge, Avatar, Grid, Image, Popup, Loading, Error, Navbar, etc.
- **Pattern System**: Pattern, PatternGroup, PatternFill - Create beautiful pattern-based designs
- **Emoji System**: 8 SVG emojis ready to use
- **Advanced Grid**: Bento UI layouts with col/row span support (1-12 columns)
- **Typography System**: H1-H4, P, Subtitle, Lead, Small, Muted with font, color, and weight options
- **Color Palette**: 14 predefined colors (olivo, lima, bosque, hueso, piedra, corteza, girasol, coral, aqua, lavanda, electrico, marmol, ice, koala)
- **Theme System**: Adaptive colors for light/dark mode (theme-background, theme-text, theme-highlight, theme-primary)
- **Two Fonts**: JetBrains Mono (monospace) and Nunito Sans (sans-serif) with multiple weights (light, medium, bold, black)
- **Dark Mode Support**: Theme colors that adapt automatically
- **Full-screen Components**: LoadingFullScreen, ErrorFullScreen, FullPage
- **TypeScript**: Fully typed for better DX
- **Storybook**: Interactive component documentation

## 💡 Usage Examples

### Pattern Components

```tsx
import { Pattern, PatternFill, PatternGroup } from 'aloha-ui-library';

// Single pattern
<Pattern name="face1" size="xl" color="bosque" />

// Auto-filling pattern grid
<PatternFill
  width={800}
  height={400}
  patternSize={80}
  gap={10}
  colors={['bosque', 'lima']}
  randomRotation
  backgroundColor="ice"
/>

// Group of patterns with custom rotations
<PatternGroup
  direction="row"
  size="lg"
  patterns={[
    { pattern: 'face1', color: 'bosque', rotation: 0 },
    { pattern: 'face2', color: 'lima', rotation: 90 },
  ]}
/>
```

### Emoji Components

```tsx
import { Emoji } from 'aloha-ui-library';

<Emoji name="happy" size="lg" />
<Emoji name="melt" size="xl" />
```

### Advanced Grid (Bento UI)

```tsx
import { Grid, GridItem } from 'aloha-ui-library';

// Bento-style layout
<Grid columns={4} gap={4}>
  <GridItem colSpan={2} rowSpan={2} backgroundColor="bosque" padding={8} rounded="2xl">
    <h2>Main Content</h2>
  </GridItem>
  
  <GridItem backgroundColor="lima" padding={6} rounded="xl">
    <div>Card 1</div>
  </GridItem>
  
  <GridItem backgroundColor="coral" padding={6} rounded="xl">
    <div>Card 2</div>
  </GridItem>
</Grid>
```

### Typography with Colors

```tsx
import { H1, H2, P } from 'aloha-ui-library';

// Using palette colors
<H1 color="lima">Green Title</H1>
<H2 color="coral">Coral Subtitle</H2>
<P color="olivo">Olive text</P>

// Using theme colors (adapt to light/dark mode)
<H1 color="theme-primary">Adaptive Title</H1>
<P color="theme-text">Adaptive text</P>
```

### Typography with Fonts

```tsx
import { H1, P } from 'aloha-ui-library';

// JetBrains Mono for technical content
<H1 font="jetbrains" weight="bold">Technical Title</H1>
<P font="jetbrains" weight="light">Code-like content</P>

// Nunito Sans for friendly content
<H1 font="nunito" weight="black">Friendly Title</H1>
<P font="nunito" weight="medium">Readable content</P>
```

### Combining Options

```tsx
<H1 font="nunito" weight="bold" color="bosque">
  Custom Styled Title
</H1>
```

### Using Colors

```tsx
import { colors, cssVars, themeVars } from 'aloha-ui-library';

// Direct hex values
<div style={{ backgroundColor: colors.lima }}>Content</div>

// CSS variables
<div style={{ backgroundColor: cssVars.coral }}>Content</div>

// Theme variables (adapt to mode)
<div style={{ 
  backgroundColor: themeVars.background,
  color: themeVars.text 
}}>Adaptive Content</div>
```

### Full-screen Components

```tsx
import { LoadingFullScreen, ErrorFullScreen, FullPage } from 'aloha-ui-library';

// Loading screen
<LoadingFullScreen message="Loading..." spinnerSize="lg" />

// Error screen
<ErrorFullScreen 
  title="Error"
  message="Something went wrong"
  onRetry={() => window.location.reload()}
/>

// Full page container
<FullPage centered background="gray">
  <YourContent />
</FullPage>
```

## 📚 Documentation

Visit our [Storybook](https://srteam-dev.github.io/aloha_lib/) to explore all components and examples.

## Development

### Install dependencies
```bash
npm install
```

### Run Storybook
```bash
npm run dev
```

### Build the library
```bash
npm run build
```

### Build Storybook
```bash
npm run build-storybook
```

## Publishing

1. Update version in package.json
2. Build the library: `npm run build`
3. Publish to npm: `npm publish`

Or use the version scripts:
```bash
npm run version:patch  # 1.0.0 -> 1.0.1
npm run version:minor  # 1.0.0 -> 1.1.0
npm run version:major  # 1.0.0 -> 2.0.0
```

## License

MIT © Aloha Team
