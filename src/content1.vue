<template>
   <div>
      <p>我是弹框体. </p>
      {{init_data.msg}}    
       
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

  },
  mounted(){

  }
}
</script>

