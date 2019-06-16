<template>
	<div class="card">
		<div class="card-header">
			<router-link to="/barang"><i class="fa fa-arrow-left"></i></router-link>
		</div>
		<div class="card-body">
			<h1>{{barangs.kode_barang}}</h1>
			<ul>
        <li>{{barangs.nama_barang}}</li>
        <li>{{barangs.harga}}</li>
      </ul>
		</div>
	</div>
</template>

<script>

export default {
  data() {
    return {
      barangs: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created() {
  	let id = this.$route.params.id;
    axios.get('/barangs/' + id)
    .then(response => {
      // JSON responses are automatically parsed.
      this.barangs = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>