<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
     <h2>详情请看代码</h2>
     <p><el-button type="primary" @click="open1">1.只打开弹框，无需执行回调</el-button></p>
     <p><el-button type="primary" @click="open2">2.打开弹框，弹框体内需关闭弹框</el-button></p>
     <p><el-button type="primary" @click="open3">3.打开弹框，弹框体内需关闭弹框,并让父组件执行回调,同时获得自组件返回值</el-button></p>
     <p><el-button type="danger" @click="open4">4.弹框嵌套</el-button></p>
     <p style="color:red">{{childMsg}}</p>
  </div>
</template>

<script>
import content1 from './content1.vue';
import content2 from './content2.vue';
import content3 from './content3.vue';
import child1 from './child1.vue';
import Vue from 'vue';
export default {
  name: 'app',
  data () {
    return {
      msg: 'ElementUi 1.x版本系列弹框嵌套优化',
      childMsg:''
    }
  },methods:{
    open1(){
         //title：弹框的标题，
         //compnent：弹框体。如果是对象类型表示传入当前引入的局部组件。如果是字符串表示全局组件。
         //data：往弹框体内传值
         //_size_:'弹框规则'
        let option = {
            title: '只打开弹框，无需执行回调',
            component: content1,
            _size_: 'small',
            data: {msg: 'hello：我是父组件传入过来的值。'}
        };
        common.dialog(option);
    },
     open2(){
        let option = {
            title: '打开弹框，弹框体内需关闭弹框',
            component: content2,
            _size_: 'small',
             data: {msg: 'hello：我是父组件传入过来的值。'}
        };
        common.dialog(option);
    },
     open3(){
         //title：弹框的标题，
         //compnent：弹框体。如果是对象类型表示传入当前引入的局部组件。如果是字符串表示全局组件。
         //data：往弹框体内传值
         //_size_:'弹框规则'
         let self=this;
        let option = {
            title: '只打开弹框，无需执行回调',
            component: content3,
            _size_: 'small',
            data: {msg: 'hello：我是父组件传入过来的值。'},
            callback:function(val){
             self.childMsg=val;
            }
        };
        common.dialog(option);
    },
    open4(){
         //title：弹框的标题，
         //compnent：弹框体。如果是对象类型表示传入当前引入的局部组件。如果是字符串表示全局组件。
         //data：往弹框体内传值
         //_size_:'弹框规则'
         let self=this;
        let option = {
            title: '弹框一',
            component: child1,
            _size_: 'small'
        };
        common.dialog(option);
    },
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
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
