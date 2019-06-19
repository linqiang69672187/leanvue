<template>
    <div>
        <table>
            <tr v-for="(blog, index) in blogs" :key="index">
                <td @click="show_blog(blog.id)"><router-link :to="{name:'blog',query:{id:blog.id}}">{{blog.title}}</router-link></td>
                <!--链接方式二 <td @click="show_blog(blog.id)"><router-link :to="{name:'blog',query:{id:blog.id}}">{{blog.title}}</router-link></td> -->
                    
            </tr>
        </table>
    </div>
</template>
<script>
export default {
  data () {
    return {
      title: '博客列表',
      blogs: []
    }
  },
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