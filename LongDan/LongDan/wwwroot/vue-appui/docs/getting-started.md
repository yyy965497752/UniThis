# Getting Started

It's assumed you are familiar with Vue.js, and Node.js 4.0.0+ is installed on your machine.

## Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Project overview

- Production build will be available at `dist/` folder.
- `build/` folder is for Webpack configuration.
- `config/` folder is for environment configuration.
- `src/` folder is actual source of our application.
- `static/` folder is for static assets like images.

To learn more you can read official documentation of [project structure](https://vuejs-templates.github.io/webpack/structure.html).

## Application overview

### index.html

`index.html` file is an application shell containing basic html elements and the assets like Google Fonts.
You basically don't need to add anything here since Webpack will inject required scripts automatically.
Just don't forget to change `<title>` for your application.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Vue Bootstrap Template</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700">
  </head>
  <body>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```

### src/main.js

`main.js` file drives our application. Vue instance and Vue plugins are initialized here like any
other helper function that is available globally. This is also a place for global import,
so, for example, `main.scss` is imported here.

### src/App.vue

`App.vue` is an app component containing elements available across the whole application:
global alert, header toolbar, side navigation, router links and router output. Read more about [router](./router.md).

### src/*.conf.js

`src/chartjs.conf.js` and `src/theme.conf.js` are configuration files containing color variables for JavaScript charts.

### components/

Components are reusable modules of application. Each component has its own API, which can be seen in
a .js source of the component or corresponding README.md file.

Please note that there are also third-party component libraries
which our application is extensively built on. There is an [appendix of used third-party libraries](third-party-libs.md)
which lists links to their documentation. If component has specific implementation,
you can find a hint for it in `recipes/` folder.
 
### scss/

Theme styles. Read more about [theming](./theming.md).

### views/

Views are pages of your application. They are tied to routes so every route imports a corresponding view.
