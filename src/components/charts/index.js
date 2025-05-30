import Charts from './src/main.vue';
export default {
  install: (app) => {
    app.component(Charts.name, Charts);
  }
};
