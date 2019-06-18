<template>
    <div>
        <table>
            <tr v-for="(blog, index) in blogs" :key="index">
                <td>{{blog.title}}</td>
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
  }
}
</script>
<style scoped>
td {
    border-bottom: 1px;
}
</style>