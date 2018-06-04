# Storybook Addon Styled Themes

Greatly inspired by [Tonai](https://github.com/tonai)'s [Storybook Addon Themes](https://github.com/tonai/storybook-addon-themes).

This Storybook Theme Decorator can be used to add a custom styles to the the preview in [Storybook](https://storybook.js.org).

This addon works with Storybook for:

-   [React](https://github.com/storybooks/storybook/tree/master/app/react)

## Installation

```sh
npm i --save storybook-addon-styled-themes
```

## Configuration

Then create a file called `addons.js` in your storybook config.

  Add following content to it:

  ```js
import 'storybook-addon-styled-themes/register';
```

## Usage

Then write your stories like this:

```js
import React from 'react';
import { storiesOf } from "@storybook/react";
import withThemes from "storybook-addon-styled-themes";

storiesOf("Button", module)
  .addDecorator(withThemes([
    { name: "MyStyle", src: "/your/style/route.less", color: "#00aced", default: true },
    { name: "MyOtherStyle", src: "/your/other/style/route.css", color: "#3b5998" },
  ]))
  .add("with text", () => <button>Click me</button>);
```

This will load into DOM (by require()) your styles.
