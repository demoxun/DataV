import { App } from 'vue';
import BorderBox2 from './src/main.vue';

export default {
  install: (app: App) => {
    app.component(BorderBox2.name, BorderBox2);
  }
};
