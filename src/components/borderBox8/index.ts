import { App } from 'vue';
import BorderBox8 from './src/main.vue';

export default {
  install: (app: App) => {
    app.component(BorderBox8.name, BorderBox8);
  }
};
