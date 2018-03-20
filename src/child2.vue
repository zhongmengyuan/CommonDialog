<template>
   <div>
      <p>我是弹框体二 </p>
      <el-button type="primary" @click="open3">打开弹框二</el-button>
   </div>
</template>
<script>
import child3 from './child3';
export default {
  data(){
      return {
          val1:''
      }
  },
  props:["init_data"],
  methods:{
    open3(){
            //title：弹框的标题，
            //compnent：弹框体。如果是对象类型表示传入当前引入的局部组件。如果是字符串表示全局组件。
            //data：往弹框体内传值
            //_size_:'弹框规则'
            let option = {
                title: '弹框三',
                component: child3,
                _size_: 'small'
            };
            common.dialog(option);
        },
  },
  mounted(){

  }
}
</script>

