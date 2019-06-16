<template>
    <div class="container">
                <div class="card">
                    <div class="card-header">Create New Post</div>

                    <div class="card-body">
                        <form v-on:submit="submitPost()">
                          <div class="form-group">
                            <label for="title">Title</label>
                            <input type="text" class="form-control" id="title" placeholder="Title" v-model="posts.title">
                          </div>
                          <div class="form-group">
                            <label for="description">Description</label>
                            <textarea class="form-control" id="description" rows="5" placeholder="Description..." v-model="posts.description"></textarea>
                          </div>
                          <div class="form-group">
                            <router-link to="/" class="btn btn-warning">Cancel</router-link>
                            <button class="btn btn-success">Create</button>
                          </div>
                        </form>
                    </div>
        </div>
    </div>
</template>

<script>

export default {
  data:function() {
    return {
      posts: {
        title : '',
        description : '',
      },
      errors: []
    }
  },

  methods:{
  // Fetches posts when the component is created.
  submitPost() {
    axios.post('/posts', this.posts)
    .then(response => {
      // console.log(response)
      // JSON responses are automatically parsed.
      this.$router.push({path: '/'})
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
    }
  }
}
</script>
