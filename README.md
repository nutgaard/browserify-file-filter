# browserify-file-filter

A Browserify plugin for ignoring files 

## Usage

```
browserify src/index.js -o out/index.js -p [ browserify-file-filter -p \"\\.(?:css|less|scss|sass)$\" ]
```

## install

```js
npm install browserify-file-filter
```

## Options

By default none files are excluded. 

