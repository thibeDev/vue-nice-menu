# vue-nice-menu [![NPM version](https://img.shields.io/npm/v/vue-nice-menu.svg)](https://www.npmjs.com/package/vue-nice-menu)

> Beautiful little menu for Vuejs applications, it works on webpage and on mobile devices. The only limitation is the number of submenus, it can show 2, 3 or 4 submenus.
> The starting point of this repo was 
[this abandonned one](https://github.com/AshleyLv/vue-quick-menu/blob/master/README.md),
> I made some changes to extends its behaviour, make it more customisable and user friendly, thanks to AshleyLv for the good job about css

## Installation

``` bash
 npm install vue-nice-menu --save
```

## Usage
``` xml
<nice-menu :items="items"></nice-menu>
```

``` javascript
import Vue from 'vue'
import niceMenu from 'vue-nice-menu'

export default {
  ...
  components: {
    niceMenu
  },
  ...
}
```
## Props

Property|Type|Default|Required|Description
---|---|---|--- | ----
items|Array|null|true|Array of object which represent the links {`id`:1,`url`:'\foo',`isRouterLink`:false,`iconClass`:'iconClass',`backgroundColor`:null,`color`:null,`openNewTab`:false,`openNewTab`:false,}
position|top-left,top-right,bottom-left or bottom-right|top-left|false|The position of quick menu
backgroundColor|String|#009dc7|false|The background color of quick menu
color|String|#ffffff|false| The color of quick menu icon
autoClose|Boolean|true|false| Defines if the menu get closed after click on submenu


## Events

### sub-menu-clicked
Emitted when click a submenu, the param is the submenu object.
### nice-menu-opened
Emitted when the menu is opened
### nice-menu-opened
Emitted when the menu is closed

## Methods

You can access the menu's methoods through reference:

``` xml
<nice-menu ref="my-nice-menu" :items="items"></nice-menu>
```
``` javascript
this.$refs.my-nice-menu.close()
```