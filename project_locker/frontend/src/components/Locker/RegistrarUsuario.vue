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
                                        <label form="titulo" class="col-sm-2 col-form-label">num_casillero</label>
                                        <div class="col-sm-6">
                                            <input type="text" placeholder="num_casillero" name="num_casillero" class="form-control" v-model.trim="form.num_casillero">
                                        </div>
                                    </div> 

                                    <div class="form-group row">
                                        <label form="estado" class="col-sm-2 col-form-label">Estado</label>
                                        <div class="col-sm-6">
                                            <textarea name="estado" class="form-control" placeholder="estado" rows="3" v-model.trim="form.estado">   
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
        

            const path = `http://localhost:8000/api/v1.0/locker/${this.lockerId}/`
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
        getBook (){
            const path = `http://localhost:8000/api/v1.0/locker/${this.lockerId}/`
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