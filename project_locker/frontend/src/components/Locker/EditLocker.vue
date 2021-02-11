<template lang="html">
    <body bgcolor="red">
        <div class="container">
                <div class="row">
                    <div class="col text-left">
                        <h2>Editar libros</h2>
                        
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="card">    
                            <div class="card-body">
                                <form @submit="onsubmit">  
                                <div class="form-group row">
                                        <label form="num_casillero" class="col-sm-2 col-form-label">num_casillero</label>
                                        <div class="col-sm-6">
                                            <input type="text" placeholder="num_casillero" name="num_casillero" class="form-control" v-model.trim="form.num_casillero">
                                        </div>
                                    </div> 

                                     <div class="form-group row">
                                        <label form="estado" class="col-sm-2 col-form-label">estado</label>
                                        <div class="col-sm-6">
                                            <input type="text" placeholder="estado" name="estado" class="form-control" v-model.trim="form.estado">
                                        </div>
                                    </div> 

                                      <div class="form-group row">
                                        <label form="fecha" class="col-sm-2 col-form-label">fecha</label>
                                        <div class="col-sm-6">
                                            <input type="text" placeholder="fecha" name="fecha" class="form-control" v-model.trim="form.fecha">
                                        </div>
                                    </div> 

                                    <div class="form-group row">
                                        <label form="email" class="col-sm-2 col-form-label">Email</label>
                                        <div class="col-sm-6">
                                            <textarea name="email" class="form-control" placeholder="email" rows="3" v-model.trim="form.email">   
                                            </textarea>
                                        </div>
                                    </div> 
                                    
                                    <div class="rows">
                                        <div class="col text-left">
                                            <b-button type="submit" variant="primary">Editar</b-button>
                                            <b-button type="submit" class="btn-large-space" :to="{ name:'ListLocker'}">Volver</b-button> 
                                        </div>
                                    </div>
                                </form>        
                            </div>
                        </div>
                    </div>

                </div>
        </div>
    </body>
</template>

<script>

import axios from 'axios';

import swal from 'sweetalert';

export default {
    data () {
        return {
            lockerId: this.$route.params.lockerId,
            form: {
                num_casillero: '',
                estado: '',
                fecha: '',
                email: '',
                
            }
        }
    },
    methods: {
        onsubmit(evt){
            evt.preventDefault()
        

            const path = `http://localhost:8000/api/v1.0/Locker/${this.lockerId}/`
            axios.put(path, this.form).then((response) => {
                this.form.num_casillero=response.data.num_casillero
                this.form.estado=response.data.estado
                this.form.fecha=response.data.fecha
                this.form.email=response.data.email
    
                swal ("Libro actualizado exitosamente!!", "", "success")
            })
            .catch ((response)=>{
                console.log(error)
            })
        

        },
        getLocker (){
            const path = `http://localhost:8000/api/v1.0/Locker/${this.lockerId}/`
            axios.get(path).then((response)=> {
                this.form.num_casillero=response.data.num_casillero
                this.form.estado=response.data.estado
                this.form.fecha=response.data.fecha
                this.form.email=response.data.email

            })
            .catch ((response)=>{
                console.log(error)
            })
        }
    },
    created(){
        this.getLocker()
    }
}
</script>
<style lang="css" scoped>
</style>
