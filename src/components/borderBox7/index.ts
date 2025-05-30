import { App } from 'vue';
import BorderBox7 from './src/main.vue';

export default {
  install: (app: App) => {
    app.component(BorderBox7.name, BorderBox7);
  }
};
