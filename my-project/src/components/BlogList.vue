<template>
    <div>
      <my-logo title="博客列表页"></my-logo>
        <table>
            <tr v-for="(blog, index) in blogs" :key="index">
                <td @click="show_blog(blog.id)"><router-link :to="{name:'blog',query:{id:blog.id}}">{{blog.title}}</router-link></td>
                <!--链接方式二 <td @click="show_blog(blog.id)"><router-link :to="{name:'blog',query:{id:blog.id}}">{{blog.title}}</router-link></td> -->
                    
            </tr>
        </table>
    </div>
</template>
<script>
import MyLogo from '@/components/Logo'
export default {
  data () {
    return {
      title: '博客列表',
      blogs: []
    }
  },
  components:{
    MyLogo:MyLogo 
  },//前面的 MyLogo template 中的名字，后面的 MyLogo 是import 进来的代码
  mounted () {
     this.$http.get('api/interface/blogs/all').then((response) => {
      console.info(response.body)
       this.blogs = response.body.blogs
     }, (response) => {
       console.error(response)
     })
  },
  methods:{
      show_blog:function(blogid){
          this.$router.push({
              name:'blog',query:{id:blogid}
          })
      }
  }
}
</script>
<style scoped>
td {
    border-bottom: 1px solid black;
   text-align: left;
}
</style>