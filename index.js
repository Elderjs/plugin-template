const plugin = {
  name: 'elderjs-plugin-your-plugin',
  description: `[copy and paste the start of your readme]`,
  init: (plugin) => {
    // this is a sync function that runs on plugin initialization.
    // if you need async, it is recommended that you extract the async logic to run on the 'bootstrap' hook.

    // Plugins have their own closure scope. This means that if you set:
    // plugin.init = true
    // you will have access to plugin.init in all of your hooks.
    // this data can be updated in hooks and will be persistent between page loads.
    
    // IMPORTANT: It is important to note that since builds are run across child processes, 
    // the 'plugin' object is not consistent across all processes.

    // Plugins also get the build settings (plugin.settings) and the config (plugin.config) settings. 
 
    return plugin;
  },
  hooks: [
    {
      hook: 'bootstrap',
      name: 'yourFirstHook',
      description: `A description of what this hook does.`,
      priority: 50,
      run: async ({ plugin, routes }) => {

        // all props and mutations are detailed here: https://github.com/Elderjs/elderjs/blob/master/src/hooks/hookInterface.ts
        // if you are looking for details on what a prop or mutation represents you can read this: https://github.com/Elderjs/elderjs/blob/master/src/hooks/hookEntityDefinitions.ts

        // here is how you'd read the init property set in the init() function
        plugin.bootstrapRan = true;
        return {
          plugin,
        };
      }
    },
    {
      hook: 'request',
      name: 'yourSecondHook',
      description: `A description of what this hook does.`,
      priority: 50,
      run: async ({ plugin, routes }) => {
        // plugin.bootstrapRan will alaways be true in this example because `bootstrap` runs before `request`. 
        return {
          plugin,
        };
      }
    },
  ],
  config: { // here is where you set the default configs for your plugin. These are merged with the configs found in the user's elder.config.js file.
    doMagic: true,
  },
};

module.exports = plugin;
