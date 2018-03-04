"use strict";

exports.__esModule = true;
exports.diff = diff;
exports.diffLevel = void 0;
var diffLevel = 0;
exports.diffLevel = diffLevel;

function diff() {
  if (!(exports.diffLevel = diffLevel = diffLevel + 1)) {
    console.log("hey");
  }
}

diff();
