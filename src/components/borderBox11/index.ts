import { App } from 'vue';
import BorderBox11 from './src/main.vue';

export default {
  install: (app: App) => {
    app.component(BorderBox11.name, BorderBox11);
  }
};
