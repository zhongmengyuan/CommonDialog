<template>
   <div>
      <p>我是弹框体. </p>
      {{init_data.msg}}    
       <el-button type="primary" @click="cancel">取消/关闭弹框</el-button>
       <el-button type="primary" @click="sure">确定并关闭弹框（需要父组件执行回调,并回传值）</el-button>
   </div>
</template>
<script>
export default {
  data(){
      return {
          val1:''
      }
  },
  props:["init_data"],
  methods:{
    cancel(){
        this.$emit("callback",{type:'close'});
    },
    sure(){
        this.$emit("callback",{type:'sure',data:'hi，我是弹框体回传的值'});
    }
  },
  mounted(){
      
  }
}
</script>