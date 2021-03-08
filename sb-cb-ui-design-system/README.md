# Shared design-system
[![npm version](https://badge.fury.io/js/%40sunbird-cb%2Fdesign-system.svg)](https://badge.fury.io/js/%40sunbird-cb%2Fdesign-system)

This package works as a demo to illustrate how to share typography and colors through SASS mixins:

# Installation
- `yarn add @sunbird-cb/design-system`
- `or `
- `npm i @sunbird-cb/design-system`
##
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
@import '~@sunbird-cb/design-system/<name/path>';
```
The `design-system` mixin includes `color`, `font-size`, `font-weight`, `line-height`, `margin` and alignment for all common HTML text elements (h1, h2, p, b, strong, i, em, mark, del, ins).