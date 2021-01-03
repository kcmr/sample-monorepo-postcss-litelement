# Projecto de ejemplo usando PostCSS con LitElement en un monorepo

Este repositorio es un ejemplo de proyecto de tipo monorepo en el que se utiliza PostCSS con LitElement.

## Vídeos

- [PostCSS con LitElement en monorepos (parte 1)](https://youtu.be/uamq7x4c-rI)
- [PostCSS con LitElement en monorepos (parte 2)](https://youtu.be/fxlMSebJ6ow)

## Herramientas utilizadas

- [Volta](http://volta.sh/) para controlar las versiones de utilidades globales como yarn y Node.
- [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) para facilitar el trabajo con múltiples paquetes npm en un mismo proyecto.
- [Lerna](https://lerna.js.org/) para gestionar el versionado de los paquetes del monorepo, su publicación o la ejecución de múltiples scripts npm con un único comando.
- [Scripty](https://github.com/testdouble/scripty) para centralizar los scripts npm de los paquetes del monorepo.
- [Verdaccio](https://verdaccio.org/) como npm registry privado.
- [Webpack](https://webpack.js.org/) para servir y construir las demos de los componentes para desarrollo.
- [Babel](https://babeljs.io/) para transformar los scripts con los siguientes plugins:
  - [babel-plugin-postcss](https://github.com/unlight/babel-plugin-postcss)
  - [@babel/plugin-proposal-class-properties](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties)
- [PostCSS](https://postcss.org/) para aplicar autoprefixer a los estilos y usar sintaxis tipo SASS con los siguientes plugins:
  - [autoprefixer](https://github.com/postcss/autoprefixer)
  - [precss](https://github.com/jonathantneal/precss)