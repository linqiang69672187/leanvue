<template>
    <div class='logo'>
        <h1>{{title}}</h1>
        <img src="https://www.baidu.com/img/bd_logo1.png?where=super" />
    </div>
</template>
<script>
export default {
    props:['title']  //父传递参数到子
    ,
    watch:{
        title:function(newtile){
            alert(newtile)
        }
    }
}
</script>
