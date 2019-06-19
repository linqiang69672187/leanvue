<template>
    <div>
        <p>页面上的值：</p>
        <p>通过视图层，修改my_value:</p>
        <input v-model="my_value"   />
        <hr />
        <input type="button" @click="change_value()" value="修改my_value" />
        <hr />
        <input type="button" @click="show_my_value()" value="显示代码中的my_value" />
    </div>
</template>
<script>
export default {
    data(){
        return {
            my_value:'默认值'
        }
    },
    methods:{
        change_value:function(){
            this.my_value="修改后的值"
        },
        show_my_value:function(){
            alert(this.my_value);
        }
    }
}
</script>

