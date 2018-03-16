# vue-steps

[![](https://img.shields.io/badge/npm-v5.5.1-519dd9.svg)](https://github.com/morehardy/vue-steps)
[![](https://img.shields.io/badge/版本-v1.0-519dd9.svg)](https://github.com/morehardy/vue-steps)
[![](https://img.shields.io/badge/Vue->2.0-519dd9.svg)](https://github.com/morehardy/vue-steps)
[![](https://img.shields.io/badge/code_style-Eslint-brightgreen.svg)](https://eslint.org/)


> 2k大小, 简单轻巧的 Vue 组件, 轻松创建步骤条

### 在自己项目中使用

#### 下载
```
npm i a-vue-steps --save
```

#### 使用:
```
import VueSteps from 'a-vue-steps'
import 'a-vue-steps/dist/vue-steps.min.css'
Vue.use(VueSteps)
```

#### 配置项
属性 | 类型 | 示例 | 说明
----|----|----|----|
items | Array| [{num: '一',text: '测试阶段1'},...] | num 为步骤数, text 为步骤说明文字
activeIndex | Number| 1 | 默认为0

#### 示例
```
<template>
  <VueSteps :items="items" :activeIndex='index'/>
</template>

<script>
export default {
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
```

#### 演示图
![](https://github.com/morehardy/vue-steps/blob/master/img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202018-03-07%20%E4%B8%8B%E5%8D%8810.48.41.png?raw=true)
![](https://github.com/morehardy/vue-steps/blob/master/img/2018-03-07%2022.44.47.gif?raw=true)
![](https://github.com/morehardy/vue-steps/blob/master/img/2018-03-07%2022.46.16.gif?raw=true)
