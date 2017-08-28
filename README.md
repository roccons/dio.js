# DIO

[![dio.js](https://dio.js.org/imgs/logo.svg)](https://dio.js.org/)

A Library For Building User Interfaces.

- ~5kb

[![CDNJS](https://img.shields.io/cdnjs/v/dio.svg?style=flat)](https://cdnjs.com/libraries/dio)
[![npm](https://img.shields.io/npm/v/dio.js.svg?style=flat)](https://www.npmjs.com/package/dio.js) [![licence](https://img.shields.io/badge/licence-MIT-blue.svg?style=flat)](https://github.com/thysultan/dio.js/blob/master/LICENSE.md) [![Build Status](https://semaphoreci.com/api/v1/thysultan/dio-js/branches/master/shields_badge.svg)](https://semaphoreci.com/thysultan/dio-js)
 ![dependencies](https://img.shields.io/badge/dependencies-none-green.svg?style=flat) [![Join the chat at https://gitter.im/thysultan/dio.js](https://img.shields.io/badge/chat-gitter-green.svg?style=flat)](https://gitter.im/thysultan/dio.js)

## Support

* Edge
* IE 9+
* Chrome
* Firefox
* Safari
* Node

---

## Installation

#### Direct Download

```html
<script src=dio.min.js></script>
```

#### CDN

```html
<script src=https://unpkg.com/dio.js@latest/dist/dio.min.js></script>
```

#### NPM

```
npm install dio.js --save
```

---

## Getting started

```js
dio.render(
  h('h1', 'Hello, world!'),
  document.getElementById('root')
)
```

The easiest way to get started with DIO is to walk through the [Introduction to DIO](https://dio.js.org/introduction.html) or the [API Documentation](https://dio.js.org/api.html).

## Highlights

### Render

1. Elements.
1. Primitives: `Strings, Numbers, null, undefined`.
1. Fragments: `Arrays, Iterables`.
1. Async: `Promises`.
1. Other: `Portals, Errors, Objects` etc.

### Components

1. Statefull functional components.
1. Plain class components.

### Events

1. Event delegation.
1. Support for the `handleEvent` interface.
1. Event listeners `this` defaults to the closest `Component` relegating the need to `.bind` methods.

### Errors

1. Cascading error boundaries with `componentDidCatch`.
1. Additional support for recovering from an error state from `componentDidCatch` return signature.

### setState

1. Support for returning an `Object` from an event.
1. Support for Promises `this.setState(Promise)`.

### Lifecycle

1. Functional component lifecycles.
1. Support async `componentWillUnmount`.

### Refs

1. Support for string/function refs on both functional and class components.
