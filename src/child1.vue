<template>
   <div>
      <p>我是弹框体一 </p>
      <el-button type="primary" @click="open2">打开弹框二</el-button>
   </div>
</template>
<script>
import child2 from './child2';
export default {
  data(){
      return {
          val1:''
      }
  },
  props:["init_data"],
  methods:{
    open2(){
         //title：弹框的标题，
         //compnent：弹框体。如果是对象类型表示传入当前引入的局部组件。如果是字符串表示全局组件。
         //data：往弹框体内传值
         //_size_:'弹框规则'
        let option = {
            title: '弹框二',
            component: child2,
            _size_: 'large'
        };
        common.dialog(option);
    },
  },
  mounted(){

  }
}
</script>

