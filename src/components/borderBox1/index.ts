import { App } from 'vue';
import BorderBox1 from './src/main.vue';

export default {
  install: (app: App) => {
    app.component(BorderBox1.name, BorderBox1);
  }
};
