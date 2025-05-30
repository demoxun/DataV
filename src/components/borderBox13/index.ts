import { App } from 'vue';
import BorderBox13 from './src/main.vue';

export default {
  install: (app: App) => {
    app.component(BorderBox13.name, BorderBox13);
  }
};
