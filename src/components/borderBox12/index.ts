import { App } from 'vue';
import BorderBox12 from './src/main.vue';

export default {
  install: (app: App) => {
    app.component(BorderBox12.name, BorderBox12);
  }
};
