# Accelerator-UI

Helping you during the process of creating entreprise applications that provide meaningful and relevant experiences to your users.

## Usage

Documentation incoming.

## Components Created So Far

* Button
* Card
* ThemeProvider
* Checkbox
* Dropdown
* Field
* TextArea
* Modal
* Select
* ImageUpload

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


## What I Learned With This Project

* I learned quite a bit about how bundling and transpiling works in JavaScript through working with Rollup - and by extension, I learned about how Webpack works too - and Babel.
* I got first-hand experience in using Storybook to build components in isolation.
* This project refreshed my understanding on how React works under the hood. I've become too accustomed to associating React with html web pages, so it was a good experience working with it oustide the context of templates like CRA.

## What I Could Have Done Differently

* Instead of making every component from scratch, I could've started off with headless components as a base. The whole point of this project was to build customisable and accessible components that could be reused across projects, but those already exist with stuff like Headless UI. This project was a good learing experience, though.
* I would have started off completely with Styled-Components instead of using Sass. There's nothing wrong with Sass, SC is just more intuitive when it comes to building libraries like this, and it's a lot easier to create customizable components with than with regular CSS.


## License

MIT © [TheChrisader](https://github.com/TheChrisader)
