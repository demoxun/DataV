import { App } from 'vue';
import BorderBox5 from './src/main.vue';

export default {
  install: (app: App) => {
    app.component(BorderBox5.name, BorderBox5);
  }
};
