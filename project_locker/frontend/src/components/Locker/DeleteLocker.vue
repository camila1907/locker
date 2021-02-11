<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col">

                <h3>¿Eliminar libro?</h3>
                <P> num_casillero: {{this.element.num_casillero }}</P>
                <P> estado: {{this.element.estado }}</P>
                <P> fecha: {{this.element.fecha }}</P>
                <P> email: {{this.element.email }}</P>
            </div>
        </div> 
    
    
        <div class="row">
            <div class="col">
                <b-button v-on:click="deleteLocker" variant="danger" >Eliminar</b-button>

                <b-button type="submit" class="btn-large-space" :to="{ name:'ListLocker'}">Volver</b-button> 
            </div>
        </div>
    </div> 
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';

export default {
    data (){
        return {
            lockerId: this.$route.params.lockerId,
            element: {
                num_casillero: '',
                estado: '',
                fecha: '',
                email: '',
            }
        }
    },

     methods: {

         getLocker (){
            const path = `http://localhost:8000/api/v1.0/Locker/${this.lockerId}/`
            axios.get(path).then((response)=> {
                this.element.num_casillero=response.data.num_casillero
                this.element.estado=response.data.estado
                this.element.fecha=response.data.fecha
                this.element.email=response.data.email

            })
            .catch ((response)=>{
                console.log(error)
            })
        },
         deleteLocker() {
            const path = `http://localhost:8000/api/v1.0/Locker/${this.lockerId}/`
            axios.delete(path).then((response)=> {
                location.href= '/lockers'
            })
            .catch ((error)=>{
                swal("No es posible eliminar el libro", "", "error")
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
