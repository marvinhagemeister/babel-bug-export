# Bug with babel 7 beta 40

Source:

```js
export let diffLevel = 0;

export function diff() {
  if (!--diffLevel) {
    console.log("hey");
  }
}

diff();
```

Expected:

```js
"use strict";

exports.__esModule = true;
exports.diff = diff;
exports.diffLevel = void 0;
var diffLevel = 0;
exports.diffLevel = diffLevel;

function diff() {
  if (!(exports.diffLevel = diffLevel = diffLevel - 1)) {
    console.log("hey");
  }
}

diff();
```

Actual:

```js
"use strict";

exports.__esModule = true;
exports.diff = diff;
exports.diffLevel = void 0;
var diffLevel = 0;
exports.diffLevel = diffLevel;

function diff() {
  if (!(exports.diffLevel = diffLevel = diffLevel + 1)) { // "+ 1" instead of "- 1"
    console.log("hey");
  }
}

diff();
```
