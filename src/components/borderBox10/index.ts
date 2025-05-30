import { App } from 'vue';
import BorderBox10 from './src/main.vue';

export default {
  install: (app: App) => {
    app.component(BorderBox10.name, BorderBox10);
  }
};
