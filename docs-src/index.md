---
layout: page.11ty.cjs
title: <sinpapeles-profile> ⌲ Home
---

# &lt;sinpapeles-profile>

`<sinpapeles-profile>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<sinpapeles-profile>` is just an HTML element. You can it anywhere you can use HTML!

```html
<sinpapeles-profile></sinpapeles-profile>
```

  </div>
  <div>

<sinpapeles-profile></sinpapeles-profile>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<sinpapeles-profile>` can be configured with attributed in plain HTML.

```html
<sinpapeles-profile name="HTML"></sinpapeles-profile>
```

  </div>
  <div>

<sinpapeles-profile name="HTML"></sinpapeles-profile>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<sinpapeles-profile>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;sinpapeles-profile&gt;</h2>
    <sinpapeles-profile .name=${name}></sinpapeles-profile>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;sinpapeles-profile&gt;</h2>
<sinpapeles-profile name="lit-html"></sinpapeles-profile>

  </div>
</section>
