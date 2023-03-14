"use strict";

module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
  ],
  env: {
    "browser": true,
    "es2021": true
  },
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "eslint-plugin-obj-url-repeat"
  ],
  "rules": {
      "obj-url-repeat/url-repeat": "error"
  }
};
