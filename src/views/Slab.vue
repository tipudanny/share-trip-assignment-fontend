<template>
    <div class="mt-5">
        <div class="alert alert-primary" role="alert">
            <div class="d-flex justify-content-between">
                <h5>Your Orders</h5>
                <button
                    class="btn btn-sm btn-primary"
                    @click="addSlab()"
                    data-bs-toggle="modal"
                    data-bs-target="#editModal"
                > + Add Slab
                </button>
            </div>
        </div>
        <br>
        <div class="card">
            <div class="card-body">
                <div v-if="!loading" class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                
                <table v-else class="table table-striped">
                    <thead>
                    <tr>
                        <th>SL#</th>
                        <th>Title</th>
                        <th>Slab Point</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-if="slabs.length > 0" v-for="(slab,index) in slabs" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ slab.title }}</td>
                        <td>{{ slab.points }}</td>
                        <td>
                            <button
                                @click="editSlab(slab.id)"
                                class="btn btn-sm btn-warning"
                                data-bs-toggle="modal"
                                data-bs-target="#editModal"
                            >
                                Edit
                            </button>
                            <button
                                @click="deleteSlab(slab.id)"
                                class="btn btn-sm btn-danger ms-2"
                                data-bs-toggle="modal"
                                data-bs-target="#deleteModal"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                    <tr v-else>
                        <td colspan="7" class="text-center p-3"><strong>No Slab Add Yet.</strong></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        <!-- Modal -->
        <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModallLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editModallLabel">{{ isUpdate ?'Edit Slab':'Add Slab'}}</h5>
                        <button ref="CloseModal" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label class="form-label">Title</label>
                            <input type="text" class="form-control" v-model="slab.title" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Slab Point</label>
                            <input type="number" class="form-control" v-model="slab.points" required>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button v-if="isUpdate" @click="updateSlab()" type="button" class="btn btn-sm btn-primary">Update</button>
                        <button v-if="!isUpdate" @click="saveSlab()" type="button" class="btn btn-sm btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Delete Slab</h5>
                        <button ref="Close" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center">
                        <h5 class="text-danger">Are you Sure ? </h5>
                        <p>Want to delete this slab</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-sm btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
</template>

<script>
import Api from "../api/Api";

export default {
    name: "Slab",
    mounted() {
        this.getAllSlab()
    },
    data() {
        return {
            slabs: [],
            slab: {
                title: "",
                points: 0
            },
            loading: false,
            isUpdate:false
        }
    },
    methods: {
        getAllSlab() {
            Api.get('/admin/slab')
                .then(response => {
                    this.loading = true
                    this.slabs = response.data.data
                })
        },
        addSlab(){
            this.isUpdate = false
            this.slab={
                title: "",
                points: 0
            }
        },
        saveSlab(){
            Api.post(`/admin/slab`,this.slab)
                .then(response => {
                    this.$refs.CloseModal.click();
                    this.slab={
                        title: "",
                        points: 0
                    }
                    this.getAllSlab()
                })
        },
        updateSlab(id){
            Api.patch(`/admin/slab/${this.slab.id}`,this.slab)
                .then(response => {
                    this.$refs.CloseModal.click();
                    this.getAllSlab()
                })
        },
        editSlab(id){
            this.isUpdate = true
            Api.get(`/admin/slab/${id}`)
                .then(response => {
                    this.slab.id = response.data.data.id
                    this.slab.title = response.data.data.title
                    this.slab.points = response.data.data.points
                })
            
        },
        deleteSlab(id){
        
        }
    }
}
</script>

<style scoped>

</style>