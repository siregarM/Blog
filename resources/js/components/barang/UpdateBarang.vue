<template>
    <div class="container">
                <div class="card">
                    <div class="card-header">Edit Barang</div>

                    <div class="card-body">
                        <form v-on:submit="submitBarangEdit()">
                          <div class="form-group">
                            <label for="kode_barang">Kode Barang</label>
                            <input type="text" class="form-control" id="kode_barang" placeholder="Kode Barang" v-model="barangs.kode_barang">
                          </div>
                          <div class="form-group">
                            <label for="nama_barang">Nama Barang</label>
                            <input type="text" class="form-control" id="nama_barang" placeholder="Nama Barang" v-model="barangs.nama_barang">
                          </div>
                          <div class="form-group">
                            <label for="harga">Harga</label>
                            <input type="text" class="form-control" id="harga" placeholder="Harga" v-model="barangs.harga">
                          </div>
                          
                          <div class="form-group">
                            <router-link to="/barang" class="btn btn-warning">Cancel</router-link>
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
      barangs: {
        kode_barang : '',
        nama_barang : '',
        harga : '',
      },
      errors: []
    }
  },

  created() {
    let id = this.$route.params.id;
    axios.get('/barangs/' + id + '/edit')
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
  submitBarangEdit() {
    let id = this.$route.params.id;
    axios.patch('/barangs/' + id, this.barangs)
    .then(response => {
      // console.log(response)
      // JSON responses are automatically parsed.
      this.$router.push({path: '/barang'})
      this.barangs = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
    }
  }
}
</script>

