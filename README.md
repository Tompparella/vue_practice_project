# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Headed Component Tests with [Cypress Component Testing](https://on.cypress.io/component)

```sh
npm run test:unit:dev # or `npm run test:unit` for headless testing
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### File structure

The project is divided into the following file structure under "src":
- /assets       - Static files, images, etc.
- /components       - App vue components divided by feature. Folder could just as well be called features
-   ~/common        - Components that are used often and generically across the application
-   ~/<FeatureName> - Feature specific items, divided in folders by their use (t.ex. utils, hooks, components) in hierarchical structure
- /hooks        - Often and generically used hooks, such as queries
- /router       - Includes index file that specifies the route navigation of the app
- /stores       - Commonly used stores
- /style        - Styling files, constants, and mixins
- /utils        - Utility functions for all-round use

## Environment variables

The frontend requires an array of environment variables to function properly. They are as follows:
- VITE_API_URL=<Url of the backend instance>
- VITE_PORT=<Port where we want to run our application>

## Deployment

The frontend is deployed within a docker container and consists of three parts.
1. Setup
2. Development
3. Deployment

- The setup stage initializes a docker image for us to use with the application environment set up
- Development creates a container suitable for development work
- Deployment builds an optimized version of the application that is then deployed in an nginx container

- Setup:
```
docker build \
  --build-arg USER_ID=$(id -u) \
  --build-arg GROUP_ID=$(id -g) \
  -t vue_helper - < ./dockerfiles/Setup.Dockerfile
```
And
```
docker run -v /path/to/project/:/vue-setup -it vue_helper
```

- Development:
```
docker build  \
    -f ./dockerfiles/Dev.Dockerfile \
    -t vue_app:dev 
    vue_app

```
And 
```
docker run \
    -v /path/to/project/vue_app:/vue_app \
    -p 8080:8080
    -it vue_app:dev
```

This will run the development container and bind it with our local files, making dynamic development possible

- Deployment:
```
docker build \
    -f ./dockerfiles/Deploy.Dockerfile \
    -t vue_app:production \
    vue_app

```
And
```
docker run -p 80:80 vue_app:production

```