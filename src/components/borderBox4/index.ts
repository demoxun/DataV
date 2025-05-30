import { App } from 'vue';
import BorderBox4 from './src/main.vue';

export default {
  install: (app: App) => {
    app.component(BorderBox4.name, BorderBox4);
  }
};
