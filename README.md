## Getting Started

1. To download the framework enter the following command in your console :
 ```
 git clone -b new-bigdrop-kit git@bitbucket.org:bigdropinc/bigdrop-kit.git
 ```

2. Install the npm modules to your project with:
  ```
  sudo npm install
  ```.
  This command will install the node modules, that listed in  __package.json__, into your project .
3. Run gulp with ` gulp dev ` or ` gulp prod `  command.
    - ` gulp dev ` starts scss, js(browserify) , browsersync, html import and watch tasks without minification, with source maps.
    - ` gulp prod ` starts all tasks without watcher, creates minified files, removes source maps.
    - watch task watches only html and scss. Js(browserify) has his own watcher, it starts if it is development.
    - you can find all setting in ` gulp/config.js `.

  By default js task compiles __global.js__. To compile and watch another file change ` options.default_js_file ` key in ` gulp/config.js `
  or just run ` gulp js -f 'filename' ` in your console.


## Framework structure

```
Project root
│
├─── README.md
├─── index.html 
├─── .htaccess
│
└───assets
    │
    ├─── css
    │   ├─── libs 
    │   │   ├─── ( styles for plugins )
    │   │   ├─── _mixins.scss
    │   │   └─── _variables.scss
    │   ├─── framework
    │   ├─── pages ( contains scss files that describe pages, starts with '_' )
    │   ├─── components ( contains scss files that describe sections, starts with '_' )
    │   └─── global.scss
    │
    ├─── fonts
    │
    ├─── js
    │   ├─── modules 
    │   ├─── services 
    │   ├─── bundles 
    │   └─── global.js
    │
    ├─── images
    │   └─── temp 
    │
    ├─── html
    │   ├─── (non compiled html files)
    │   └─── templates (html sections)

```

## JavaScript

### Import your variable, function or even whole file!

#### CommonJS syntax:

Export function from module(file) fooFunction.js:

```
    var foo = function(a, b){
        return a * b;
    }

    module.exports = foo();

```

Then, import this function into your global.js:

```
    var foo = require('fooFunction.js');
```
And now you can use ` foo() ` in global.js!

#### The same actions using ES6 syntax:

```
    export function foo(a, b){
        return a * b;
    }

```

```
    import { foo } from 'fooFunction.js';
```

To avoid errors and warnings in the WebStorm, while using ES6, switch your JavaScript language version in ` File/Settings/Languages & Frameworks/JavaScript `.

Learn more about ES6: [Eng](http://es6-features.org/) | [Rus](https://learn.javascript.ru/es-modern)

### JavaScript plugins and libraries import

1. Install the plugin with NPM.
  Example: ` npm install slick-carousel --save `
  `--save` option will save this package into your __package.json__. It will help to support your project in future.
  __Please! Be sure that you've saved all installed and removed all unnecessary packages(plugins) from package.json __
2. Import installed plugin into your module(file):
  ` import 'slick-carousel' ` or ` require('slick-carousel') `

## .htaccess (important!)

If you are using Apache server to set up your local project, you may face '500 Internal server error'.
To avoid this, comment all the code in __.htaccess__ file, and turn this code back before uploading to the stage server.


