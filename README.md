# vue-touch-card-dl
<img alt="GitHub" src="https://img.shields.io/github/license/josejuan81/vue-touch-card-effect">
<img alt="npm" src="https://img.shields.io/npm/dm/vue-touch-card-effect">
<img alt="npm" src="https://img.shields.io/npm/v/vue-touch-card-effect">


> **vue-touch-card-dl** is a `vue` directive used to animating cards.

live example: https://codepen.io/JOSEJUAN/pen/QWbvzoV

## Install
```code
npm install --save vue-touch-card-effect
```
## Installation
in your `main.js`
```js
import Vue from 'vue';
import myDirective from 'vue-touch-card-effect';

Vue.directive('touch-card', myDirective);
```
> you can choose the directive's name.

```html
<div id="app">
	<h1>mouseover this card</h1>
	<div v-touch-card="15" class="card"></div>
</div>
```

## Directive's value
```html
	<div v-touch-card="15" class="card"></div>
```
> NOTE: `15` is the directive's value and represent degrees of rotating.