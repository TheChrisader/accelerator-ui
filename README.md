# Accelerator-UI

Helping you during the process of creating entreprise applications that provide meaningful and relevant experiences to your users.

## Usage

Documentation incoming.

## Install

```
npm i accelerator-ui
```

or

```
yarn add accelerator-ui
```

## Contributions

Contributions are welcomed.

Local development is done with Storybook. First fork and clone the repo, navigate to the project folder, and then launch the Storybook on your localhost by running

```
npm install

npm run storybook
```

There is a script already prepared to help you in setting up the files and folder to build a new component with. Simply run

```
npm run generate <ComponentName>
```

and it should create a ComponentName folder for you under components, complete with an already configured Storybook file, .tsx and .scss files for building the component, and a Jest file for testing.

When you're done creating and testing your component, run rollup to watch your `src/` module and automatically recompile it into `dist/`, and then make a pull request.


## License

MIT © [TheChrisader](https://github.com/TheChrisader)
