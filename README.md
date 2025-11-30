# @aloha/ui

A comprehensive React design system with UI components for social applications.

## Installation

```bash
npm install @aloha/ui
```

## Usage

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent, H1, Grid, GridItem } from '@aloha/ui';
import '@aloha/ui/dist/index.css';
```

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
