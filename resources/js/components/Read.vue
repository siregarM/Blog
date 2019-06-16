<template>
	<div class="card">
		<div class="card-header">
			<router-link to="/"><i class="fa fa-arrow-left"></i></router-link>
		</div>
		<div class="card-body">
			<h1>{{posts.title}}</h1>
			<p>{{posts.description}}</p>
		</div>
	</div>
</template>

<script>

export default {
  data() {
    return {
      posts: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created() {
  	let id = this.$route.params.id;
    axios.get('/posts/' + id)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>