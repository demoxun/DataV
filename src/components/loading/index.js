import Component from './src/main.vue';

// Attempt to get the component name from Component.name, otherwise use a placeholder.
// A more robust solution might involve reading the .vue file to extract the name if not directly available.
// For now, this placeholder approach is acceptable for the plugin structure.
const componentName = Component.name || `Dv${Component.__file ? Component.__file.split('/').slice(-2, -1)[0] : 'UnknownComponent'}`;

export default {
  install: (app) => {
    app.component(componentName, Component);
  }
};
