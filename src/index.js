import steps from '../Steps'
const VueSteps = {
  install: function (Vue) {
    if (typeof window !== 'undefined' && window.Vue) Vue = window.Vue
    Vue.component('VueSteps', steps)
  }
}

export default VueSteps