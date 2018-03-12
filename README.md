## vue-steps
[![](https://img.shields.io/badge/npm-v5.5.1-519dd9.svg)](https://github.com/morehardy/vue-steps)
[![](https://img.shields.io/badge/版本-v1.0-519dd9.svg)](https://github.com/morehardy/vue-steps)
[![](https://img.shields.io/badge/Vue->2.0-519dd9.svg)](https://github.com/morehardy/vue-steps)
[![npm](https://img.shields.io/npm/l/vue-qs-form.svg)](http://opensource.org/licenses/MIT)

### 技术栈
- Vue
- Scss

> 一个简单轻巧的 Vue 组件, 简单创建步骤条功能

#### 使用:
```
import VueSteps from 'vue-steps'
import 'vue-steps/dist/vue-steps.min.css'
Vue.use(VueSteps)
```

#### 配置项
属性 | 类型 | 示例 | 说明
----|----|----|----|
items | Array| [{num: '一',text: '测试阶段1'},...] | num 为步骤数, text 为步骤说明文字
activeIndex | Number| 1 | 默认为0