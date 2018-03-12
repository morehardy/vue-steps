<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Steps :items="items" :activeIndex='index'/>
    <br>
    <button @click="next">下一步</button>
  </div>
</template>

<script>
import Steps from './Steps'
export default {
  name: 'App',
  components: {
    Steps
  },
  data () {
    return {
      items: [
        {
          num: '一',
          text: '测试阶段1'
        },
        {
          num: '二',
          text: '测试阶段2'
        },
        {
          num: '三',
          text: '测试阶段3'
        }
      ],
      index: 0
    }
  },
  methods: {
    next () {
      if (this.index < 2) {
        this.index += 1
      } else {
        this.index = 0
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 80%;
  margin: 0 auto;
}
</style>
