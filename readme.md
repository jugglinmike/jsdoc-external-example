# External Example plugin for [JSDoc](http://usejsdoc.org/)

This project defines a plugin for [the JSDoc documentation
generator](http://usejsdoc.org/) that injects the contents of an external
source file into the documentation. This allows code examples to be maintained
in standalone files (i.e. outside of in-line JavaScript comments) where they
may be validated with standard developer tooling like style checkers and
linters.

## Installation

The `src/external-example.js` file may be downloaded from this source code
repository. Alternatively, it may be install via [npm](https://www.npmjs.com/)
with the following command:

    npm install --save jsdoc-external-example

## Usage

Extend JSDoc comments in your JavaScript source files with the
`@externalExample` tag. This should reference an external JavaScript file
(omitting the `.js` extension). For example:

```js
/**
 * This is a description
 *
 * @externalExample external-file-name
 *
 * @param {Object} parameter This is a parameter
 */
```

To configure JSDoc to recognize this tag, add a reference to the
`external-example.js` file in your JSDoc configuration file:

```json
{
  "plugins": [
    "node_modules/jsdoc-external-example/src/external-example"
  ]
}
```

An example `jsdoc-config.json` file can be found in the source code for the
Miso Project's web site:
https://github.com/misoproject/misoproject.github.io/blob/823a740e1dddba442bcbf96d91ef49dd585e5271/jsdoc-config.json)

For more on using JSDoc and its plugins, please see
http://usejsdoc.org/about-plugins.html

## License

Copyright (c) 2014 Mike Pennisi  
Licensed under the MIT license.
