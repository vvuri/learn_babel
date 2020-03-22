## Babel

- транспайлер в ES5
- сайт с докой babeljs.io
- разбор абстрактного синтаксического дерева astexplorer.net

### install
$ npm init -y
$ npm install babel-cli --save-dev
$ npm install babel-preset-env --save-dev

если необходима поддержка новых версий:
$ npm install babel-preset-es2015 --save-dev
$ npm install babel-preset-es2017 --save-dev
+ указать в конфигурации "es2017"

если необходимо обновить глобально, то на MacOS через sudo:
$ sudo npm install -g npm

если необходима полная поддержка es2015, то установить еще:
$ npm install babel-polyfill --save-dev
+ in code: require('babel-polyfill')

### configure
add to package.json in 
```
"script": {
    "build": "babel src -d dist"
}
```

create .babelrc 
```
{
  "presets": ["env"]
}
```
или аналогично можно запускать с ключем ```--presets es2015```
или в файле package.json добавить секцию
```
"babel": {
    "presets": ["env"]
},
```

### run
$ npm run build
или напрямую:
$ babel src -d dist --presets es2015
сжать результат --minified
исключить файл --ignore name *test.js
если скрипт назвать start, то можно еще сократить запуск:
$ npm start 

## React
$ npm install babel-preset-react --save-dev
{
  "presets": ["react"]
}

## ESLint
$ npm install eslint --save-dev
$ npx eslint --init
$ npx eslint src/main.js
add .eslintrc
```
{
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
}
```
Итого:
$ npx eslint src

## Prettier
$ npm install prettier --save-dev
добавить в package.json 
```
"scripts": {
  "prettier": "prettier --write src/**/*.js"
}
```
--check выдавал ошибки npm
добавить строки в файл .eslintrc
