import { App } from 'vue';
import BorderBox6 from './src/main.vue';

export default {
  install: (app: App) => {
    app.component(BorderBox6.name, BorderBox6);
  }
};
