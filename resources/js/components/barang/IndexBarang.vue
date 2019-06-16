<template>
	<div class="card">
		<div class="card-header">
      <router-link to="/" class="float-left"><i class="fa fa-arrow-left"></i></router-link>
      <h4 class="float-left">Table Barang</h4>
			<router-link to="/createbarang" class="btn btn-success float-right">Create</router-link>
		</div>
		<div class="card-body">
			<table class="table table-bordered">
			  <thead>
			    <tr>
			      <th scope="col">#</th>
			      <th scope="col">Kode Barang</th>
			      <th scope="col">Nama Barang</th>
            <th scope="col">Harga</th>
			      <th scope="col" width="110"></th>
			      <th scope="col" width="110"></th>
			      <th scope="col" width="110"></th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr v-for="barang, index in barangs">
			      <th scope="row">{{barang.id}}</th>
			      <td>{{barang.kode_barang}}</td>
			      <td>{{barang.nama_barang}}</td>
            <td>{{barang.harga}}</td>
                  <td>
                  <router-link :to="{name: 'readBarang', params:{id:barang.id}}" class="btn btn-info">
                  	<i class="fa fa-eye"></i> Show</router-link>
                  </td>
                  <td>
                  <router-link :to="{name: 'editBarang', params:{id:barang.id}}" class="btn btn-success">
                  	<i class="fa fa-pencil"></i> Edit</router-link>
                  </td>
                  <td><button class="btn btn-danger" v-on:click="submitBarangDelete(barang.id, index)"><i class="fa fa-trash"></i> Delete</button></td>

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
      barangs: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created() {
    axios.get('/barangs')
    .then(response => {
      // JSON responses are automatically parsed.
      this.barangs = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },

  methods:{
  // Fetches posts when the component is created.
  submitBarangDelete(id, index) {
  	if(confirm("Click 'Ok' to delete.")){
    axios.delete('/barangs/' + id)
    .then(response => {
      // console.log(response)
      // JSON responses are automatically parsed.
      this.barangs.splice(index, 1);
    })
    .catch(e => {
      this.errors.push(e)
    })
    }
}
  }
}
</script>