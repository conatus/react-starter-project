# React Starter Project

A (slightly less than) minimal project to get started with React:

* webpack and webpack-dev-server
* ES2015 and JSX via Babel
* `webpack-config.js` written in ES2015 using Babel
* hot module reloading via [React Hot Loader](https://github.com/gaearon/react-hot-loader)
* hot CSS reloading with [Post-CSS loaded](https://github.com/postcss/postcss-loader) included - only using [Autoprefixer](https://github.com/postcss/autoprefixer) for the moment
* Basic ESLint setup, using the [Airbnb style-guide](https://github.com/airbnb/javascript)
* Some sensible npmrc defaults to protect against user stupidity (e.g. forgetting --save, installing with `^` versions)

## Installation

```
git clone git@github.com:conatus/react-starter-project.git
cd react-starter-project
npm install
```

Thanks to `npm run`, everything is installed locally!

## Development

* Build once: `npm run webpack`
* Run dev server: `npm start`
    * Web page: [http://localhost:8080/]
    * Keep the console open to see errors and warnings

You can check out hot reloading by making changes to the JavaScript source code. You’ll see the results of those changes in the browser right away.

No support for testing, yet, I’m still in the process of figuring out what I want there.
