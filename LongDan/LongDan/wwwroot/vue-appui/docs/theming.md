# Theming

As Bootstrap 4 uses SCSS as its preprocessor, so that we use it in our
application.

## SCSS

SCSS files are placed in `src/scss/` folder. They are compiled into CSS
during Webpack build process. You are free to modify / create files
but don't forget to @import them into "src/scss/main.scss" file.

- `src/scss/bootstrap.scss` imports all Bootstrap-related components.
- `src/scss/main.scss` imports all application components (including Bootstrap file)
and therefore is imported into `src/main.js`.

## Components

Note that components prefixed with `_app-` are part of
[Application Shell](https://developers.google.com/web/fundamentals/architecture/app-shell).
It means they are available globally across all views. They should be loaded last in `main.scss`.

## Theme Variables

Application theming is heavily based on Bootstrap variables. You can
change many things like colors, fonts and spacing in `src/scss/_variables.scss`
file.

For example, to match theme colors to your brand, open `src/scss/_variables.scss` file
and change `$brand-` prefixed variables to your values. Also there is a `src/theme.conf.js` file
which contains color variables for JavaScript charts, so don't forget change colors there too.

## Reducing Webpack build size

You can reduce your application's build size by excluding unnecessary
Bootstrap components. Open `src/scss/bootstrap.scss` file and comment out
components that you're not using (of course, except mixins and variables).
