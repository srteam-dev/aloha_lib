# Instalación de @srteam-dev/aloha-ui

## Desde GitHub Packages

### 1. Crear un Personal Access Token en GitHub

1. Ve a GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Genera un nuevo token con los siguientes permisos:
   - `read:packages` - Para descargar paquetes
   - `write:packages` - Para publicar paquetes (solo si necesitas publicar)

### 2. Configurar autenticación

Crea un archivo `.npmrc` en la raíz de tu proyecto (o en tu directorio home `~/.npmrc`) con:

```properties
@srteam-dev:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=TU_TOKEN_AQUI
```

Reemplaza `TU_TOKEN_AQUI` con tu GitHub Personal Access Token.

### 3. Instalar el paquete

```bash
npm install @srteam-dev/aloha-ui
```

## Uso básico

```tsx
import { Button, H1, Card } from '@srteam-dev/aloha-ui';
import '@srteam-dev/aloha-ui/dist/index.css';

function App() {
  return (
    <div>
      <H1>Hola Aloha!</H1>
      <Button onClick={() => alert('Click!')}>
        Click me
      </Button>
    </div>
  );
}
```

## Variables CSS y Colores

Importa los estilos globales para usar las variables de tema:

```tsx
import '@srteam-dev/aloha-ui/dist/index.css';
```

Luego puedes usar los colores y temas:

```tsx
import { colors, cssVars, themeVars, H1 } from '@srteam-dev/aloha-ui';

// Con colores directos
<H1 color="lima">Título verde</H1>

// Con variables de tema que se adaptan a modo claro/oscuro
<H1 color="theme-primary">Título adaptable</H1>
```

## Fuentes

La librería incluye dos fuentes principales:
- **JetBrains Mono**: Para contenido técnico/código
- **Nunito Sans**: Para contenido general

```tsx
<H1 font="jetbrains" weight="bold">Título técnico</H1>
<P font="nunito" weight="medium">Contenido amigable</P>
```

## Documentación completa

Visita [Storybook](https://srteam-dev.github.io/aloha_lib/) para ver todos los componentes y ejemplos.
