# Hide / show elements on specific routes

Sometimes you need to conditionally hide / show elements on specific routes.
Here's one of the ways.

You need to specify name for every route you have, then use this name for selective loading.
For example, you have route 'Profile', then to _show_ some element only on this route, use this:

```html
<div v-if="['Profile'].indexOf($route.name) > -1">
  ...
</div>
```

To _hide_ some element only on route 'Profile', use this:

```html
<div v-if="['Profile'].indexOf($route.name) === -1">
  ...
</div>
```
