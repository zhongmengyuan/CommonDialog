<template>
   <div>
      <p>我是弹框体. </p>
      {{init_data.msg}}    
       <el-button type="primary" @click="cancel">取消/关闭弹框</el-button>
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
    }
  },
  mounted(){
      
  }
}
</script>