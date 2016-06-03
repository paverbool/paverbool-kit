## Getting Started

1. To download the framework enter the following command in your console :
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
