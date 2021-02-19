# Shared design demo
[![npm version](https://badge.fury.io/js/%40tallang%2Fshared-design-demo.svg)](https://badge.fury.io/js/%40tallang%2Fshared-design-demo)

This package works as a demo to illustrate how to share typography and colors through SASS mixins:

# Colors
The colors and their SASS-names are provided below.
## Colors
- ![#2196F3](https://placehold.it/15/2196F3/000000?text=+) #2196F3: `$calm-blue`
- ![#009688](https://placehold.it/15/009688/000000?text=+) #009688: `$teal`
- ![#FFC107](https://placehold.it/15/FFC107/000000?text=+) #FFC107: `$amber`
- ![#D32F2F](https://placehold.it/15/D32F2F/000000?text=+) #D32F2F: `$red`

## Greys
- ![#282828](https://placehold.it/15/282828/000000?text=+) #282828: `$dark-grey`
- ![#dedede](https://placehold.it/15/dedede/000000?text=+) #dedede: `$light-grey`

 All of the provided colors are available in three shades. They can be used by postfixing the SASS-name with `-75` or `-50`. This will give the color an opacity of 75% or 50%, depending on your choice. An example is given below:
 ```
 background: $calm-blue;
 color: $calm-blue-75;
 border-color: $calm-blue-50;
 ```

# Material Design Colors
If you're using `@angular/material`, this package provides prebuilt primary, accent and warn colors. These variables are named
- `$demo-primary`
- `$demo-accent`
- `$demo-warn`

They can be used when configuring the `@angular/material` palette:
```
@import '~@angular/material/theming';
@import '~@tallang/shared-design-demo/theme';

@include mat-core();
$primary-color:  mat-palette($demo-primary);
$accent-color:   mat-palette($demo-accent);
$warn-color:     mat-palette($demo-warn);
$theme:          mat-light-theme($primary-color, $accent-color, $warn-color);

@include angular-material-theme($theme);
```

# Shared typography
The typography configuration is implemented as a SASS mixin, and can be used by including it in your styles:
```
@import '~@tallang/shared-design-demo/theme';

@include demo-typography();
```
The `demo-typography` mixin includes `color`, `font-size`, `font-weight`, `line-height`, `margin` and alignment for all common HTML text elements (h1, h2, p, b, strong, i, em, mark, del, ins). It also sets the global font family to `Montserrat` with a fallback to sans-serif if `Montserrat` is not available.