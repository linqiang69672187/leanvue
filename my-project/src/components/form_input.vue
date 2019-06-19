<template>
    <div>
       input: <input type="text" v-model="input_value" />,
       输入的值:{{input_value}}
       <hr/>
       text area:<textarea v-model="textarea_value"></textarea>
       输入的值：{{textarea_value}}
       <hr/>
       radio:
       <input type="radio" v-model="radio_value" value="A" />A,
       <input type="radio" v-model="radio_value" value="B" />B,
       <input type="radio" v-model="radio_value" value="C" />C,
       输入的值:{{radio_value}}
       <hr/>
       checkbox:
        <input type="checkbox" v-model="check_value"  v-bind:true-value="true" v-bind:false-value="false"   />,
              输入的值:{{check_value}}
       <hr/>
       select:
       <select v-model="select_value">
           <option v-for="(e, index) in options" :key="index" :value="e.value">{{e.text}}</option>
       </select>
           输入的值:{{select_value}}
       <hr />

    </div>
</template>
<script>
export default {
    data(){
        return{
            input_value:'',
            textarea_value:'',
            radio_value:'',
            check_value:false,
            select_value:'C',
            options:[
                {text:'红烧肉',value:'A'},
                {text:'鸡肉',value:'B'},
                {text:'水煮活鱼',value:'C'},
            ]
        }
    },
    watch:{
        select_value:function(newtile){
            alert(newtile)
        }
    }
}
</script>

