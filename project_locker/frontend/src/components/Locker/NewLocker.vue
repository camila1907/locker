<template lang="html">
    <body bgcolor="red">
        
        <div class="container">
                <div class="row">
                    <div class="col text-left">
                        <h2>Nuevo libro</h2>
                        
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="card">    
                            <div class="card-body">
                                <form @submit="onsubmit">  
                                    <div class="form-group row">
                                        <label form="titulo" class="col-sm-2 col-form-label">num_casillero</label>
                                        <div class="col-sm-6">
                                            <input type="text" placeholder="num_casillero" name="num_casillero" class="form-control" v-model.trim="form.num_casillero">
                                        </div>
                                    </div> 

                                    <div class="form-group row">
                                        <label form="estao" class="col-sm-2 col-form-label">estado</label>
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
                                        <label form="email" class="col-sm-2 col-form-label">email</label>
                                        <div class="col-sm-6">
                                            <input type="text" placeholder="email" name="email" class="form-control" v-model.trim="form.email">
                                        </div>
                                    </div> 

                                    <div class="rows">
                                        <div class="col text-left">
                                            <b-button type="submit" variant="primary">Crear</b-button>
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
            const path = 'http://localhost:8000/api/v1.0/Locker/'
            axios.post(path, this.form).then((response) => {
                this.form.num_casillero=response.data.num_casillero
                this.form.estado=response.data.estado
                this.form.fecha=response.data.fecha
                this.form.email=response.data.email
                
                swal ("Libro creado exitosamente!!", "", "success")
            })
            .catch ((error)=>{
              swal ("El ibro no pudo ser creado!!", "", "error")
            })
        

        },
    },
    created(){
        
    }
}
</script>
<style lang="css" scoped>
</style>
