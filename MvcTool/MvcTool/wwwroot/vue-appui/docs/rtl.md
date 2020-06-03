# RTL Support

To enable RTL in application, open `index.html` file
and add `dir="rtl"` to `<html>` element.

```html
<!DOCTYPE html>
<html dir="rtl">
...
</html>
```

## RTL SCSS Mixins

Please note that Bootstrap 4 is not RTL-aware by default,
so if you need to write RTL-aware application, we do not recommend
using side-related utility classes (mr-*, ml-*, pr-*, pl-*, etc.).

Instead of this, use SCSS mixins when styling RTL-aware
content.

There are three types of RTL mixins:

```scss
@import "mixins/rtl";

.component {
  // Universal RTL mixin
  float: right;
  padding: 0 4px 16px 24px;

  @include rtl {
    float: left;
    padding: 0 24px 16px 4px;
  }
}

.component {
  // RTL mixin for margin, padding, border
  // it means:
  // for ltr, use margin-right: 5px;
  // for rtl, use margin-left: 5px;
  @include rtl-reflexive-box(margin, right, 5px);
}

.component {
  // RTL mixin for positioning
  // it means:
  // for ltr, use right: 0;
  // for rtl, use left: 0;
  @include rtl-reflexive-position(right, 0);
}
