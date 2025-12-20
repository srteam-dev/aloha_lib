# @srteam-dev/aloha-ui

A comprehensive React design system with UI components, typography system, and color palette for modern applications.

## 📦 Installation

### From GitHub Packages

1. **Create a GitHub Personal Access Token** with `read:packages` permission
2. **Configure npm** to authenticate with GitHub Packages:

Create a `.npmrc` file in your project root or home directory:

```properties
@srteam-dev:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

3. **Install the package:**

```bash
npm install @srteam-dev/aloha-ui
```

📖 See [INSTALL.md](./INSTALL.md) for detailed installation instructions.

## 🚀 Quick Start

```tsx
import { Button, H1, Card, colors } from '@srteam-dev/aloha-ui';
import '@srteam-dev/aloha-ui/dist/index.css';

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

- **20+ UI Components**: Button, Card, Input, Badge, Avatar, Grid, Image, Popup, etc.
- **Typography System**: H1-H4, P, Subtitle, Lead, Small, Muted with font and color options
- **Color Palette**: 11 predefined colors + adaptive theme colors
- **Two Fonts**: JetBrains Mono and Nunito Sans with multiple weights
- **Dark Mode Support**: Theme colors that adapt automatically
- **TypeScript**: Fully typed for better DX
- **Storybook**: Interactive component documentation

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
