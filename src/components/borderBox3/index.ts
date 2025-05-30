import { App } from 'vue';
import BorderBox3 from './src/main.vue';

export default {
  install: (app: App) => {
    app.component(BorderBox3.name, BorderBox3);
  }
};
