<template>
	<div class="card">
		<div class="card-header">
			<router-link to="/create" class="btn btn-success float-right">Create</router-link> 
      <router-link to="/barang" class="btn btn-success">Barang</router-link>
		</div>
		<div class="card-body">
			<table class="table table-bordered">
			  <thead>
			    <tr>
			      <th scope="col">#</th>
			      <th scope="col">Title</th>
			      <th scope="col">Description</th>
			      <th scope="col" width="110"></th>
			      <th scope="col" width="110"></th>
			      <th scope="col" width="110"></th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr v-for="post, index in posts">
			      <th scope="row">{{post.id}}</th>
			      <td>{{post.title}}</td>
			      <td>{{post.description}}</td>
                  <td>
                  <router-link :to="{name: 'readPost', params:{id:post.id}}" class="btn btn-info">
                  	<i class="fa fa-eye"></i> Show</router-link>
                  </td>
                  <td>
                  <router-link :to="{name: 'editPost', params:{id:post.id}}" class="btn btn-success">
                  	<i class="fa fa-pencil"></i> Edit</router-link>
                  </td>
                  <td><button class="btn btn-danger" v-on:click="submitPostDelete(post.id, index)"><i class="fa fa-trash"></i> Delete</button></td>

			    </tr>
			  </tbody>
			</table>
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
    axios.get('/posts')
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
  submitPostDelete(id, index) {
  	if(confirm("Click 'Ok' to delete.")){
    axios.delete('/posts/' + id)
    .then(response => {
      // console.log(response)
      // JSON responses are automatically parsed.
      this.posts.splice(index, 1);
    })
    .catch(e => {
      this.errors.push(e)
    })
    }
}
  }
}
</script>