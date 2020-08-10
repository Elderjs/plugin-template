# Elder.js Plugin Template

If you are looking to write an [Elder.js](https://elderguide.com/tech/elderjs/) plugin we've setup this template to help streamline that process.

Recommended naming is `elderjs-plugin-` + `your-plugin`.

Below you'll find recommended minimal documenation. 

Once you've got your plugin written, please drop us a PR to add it to [Elderjs/plugins](https://github.com/Elderjs/plugins) repo. 

--------


# Elder.js Plugin: Your Plugin

> Here is where you'd write an intro to your plugin.


## Install

> Here is where you'd want to include how to install your plugin.

```bash
npm i -s elderjs-plugin-your-plugin
```


## Config

> Here is where you want to outline the config options of your plugin.

Once installed, open your `elder.config.js` and configure the plugin by adding 'elder-plugin-your-plugin' to your plugin object.

```javascript
plugins: {

  'elderjs-plugin-your-plugin': {
    ... your plugin options
  },

}
```
