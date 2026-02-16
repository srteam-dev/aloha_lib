const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const babel = require('@rollup/plugin-babel');
const postcss = require('rollup-plugin-postcss');
const url = require('@rollup/plugin-url');

const packageJson = require('./package.json');

module.exports = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
        exports: 'named',
      },
    ],
    plugins: [
      url({
        include: ['**/*.svg'],
        limit: Infinity, // Always inline SVGs as data URIs
        fileName: '[name][extname]',
      }),
      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: 'dist',
        exclude: ['**/*.stories.tsx', '**/*.test.tsx', 'node_modules'],
      }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          '@babel/preset-typescript',
        ],
      }),
      postcss({
        extract: true,
        modules: false,
        use: ['sass'],
        minimize: true,
      }),
    ],
    external: ['react', 'react-dom', 'react/jsx-runtime', 'lucide-react', 'react-router-dom'],
  },
];
