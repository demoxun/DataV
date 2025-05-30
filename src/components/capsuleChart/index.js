import CapsuleChart from './src/main.vue';
export default {
  install: (app) => {
    app.component(CapsuleChart.name, CapsuleChart);
  }
};
