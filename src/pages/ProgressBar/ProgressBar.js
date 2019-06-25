import VueProgressBar from './ProgressBar.vue';

const ProgressBar = {
  install:function (Vue) {
    Vue.component('vue-progress-bar',VueProgressBar);
  }
}

export default ProgressBar;
