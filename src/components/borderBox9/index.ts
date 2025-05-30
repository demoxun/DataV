import { App } from 'vue';
import BorderBox9 from './src/main.vue';

export default {
  install: (app: App) => {
    app.component(BorderBox9.name, BorderBox9);
  }
};
