# browserify-file-filter

A Browserify plugin for ignoring files 

## Usage

```
browserify src/index.js -o out/index.js -p [ browserify-file-filter -p \"\\.(?:css|less|scss|sass)$\" ]
```

You must specify a valid RegExp for the p-parameter for the plugin to work.

## install

```js
npm install browserify-file-filter
```


