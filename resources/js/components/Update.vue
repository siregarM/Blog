<template>
    <div class="container">
                <div class="card">
                    <div class="card-header">Edit Post</div>

                    <div class="card-body">
                        <form v-on:submit="submitPostEdit()">
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
                            <button class="btn btn-success">Update</button>
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

  created() {
    let id = this.$route.params.id;
    axios.get('/posts/' + id + '/edit')
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },

  methods:{
  // Fetches posts when the component is created.
  submitPostEdit() {
    let id = this.$route.params.id;
    axios.put('/posts/' + id, this.posts)
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
