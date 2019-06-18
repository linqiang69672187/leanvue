<template>
    <div class="h1">
         <div>Hi Vue{{message}}!</div>
         <input type="button" @click="show_my_message()" value="显示消息" />
    </div>
</template>

<script>
export default {
  data () {
    return {
      message: '你好本消息！来自变量'
    }
  },
  methods: {
    show_my_message: function () {
      alert(this.message)
    }
  }
}
</script>
<style>
.h1{
    color: red;
    font-size: 40px;
}
</style>
