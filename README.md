# vite-vue-package-skeleton
Starter template for building vue component libraries with VUE 3 and Typescript, running on vite.


## Setting up vite-vue-package-skeleton in your project

```
npm install vite-vue-package-skeleton
```
## Steps to set up your custom npm package
1. Configure your package.json file with correct name, description, author, and change 'vite-vue-package-skeleton' with the desired package name.
2. Configure build/rollup.config with the name and package file name that you did set up in package.json.
3. Search for the // TODO comment and make the required changes.
4. Clean up the unused example implementation, abd Start building your own components (similar to ExampleComponent).


## Future Development on your package
You can run the library in a standalone mode for development purposes, following these steps:

#### Installing external dependencies
```
npm install
```

<br/>

#### Compiles and hot-reloads for development
```
npm run dev
```

<br/>

#### Uses Vite to build our component library (compiles .vue files to .js) and call build:types script.
```
npm run build
```

<br/>

#### Generate TypeScript declaration files for our .vue files (this is using vue-tsc).
```
npm run build:types
```

<br/>

#### Running type checking on .ts files (this is using vue-tsc).
```
npm run typeCheck
```

<br/>

#### Running Eslint
```
npm run lint
```

<br/>

#### Running Eslint with --fix option
```
npm run lint:fix
```

<br/>

#### Running Style linting
```
npm run lint:style
```

<br/>

#### Auditing the package
```
 npm audit --registry=https://registry.npmjs.org/
```

<br/>

### Testing the npm package before publishing
[Howto](./docs/testing-package.md)


### Publishing the library
[Howto](./docs/build.md)
