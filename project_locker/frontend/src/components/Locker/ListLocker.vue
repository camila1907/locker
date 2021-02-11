<template lang="html">
    <body style="background-color:#FFA07A;">
    <div class="container">
        <div class="row">
                <div class="col text-left">
                    <h2>Socursal Miraflores</h2>
                    <b-button size="sm" :to="{name:'NewLocker'}" variant="primary">Nuevo Casillero </b-button>
                    <br>
                    <div class="col-md-12">
                        <b-table striped hover :items="locker" :fields="fields">
                            <template v-slot:cell(action)="data">
                                <b-button size="sm" variant="primary" :to="{name:'EditLocker', params:{lockerId: data.item.id}}">Editar</b-button>
                                <b-button size="sm" variant="danger" :to="{name:'DeleteLocker', params:{lockerId: data.item.id}}">Eliminar</b-button>                
                            </template>  
                        </b-table>
                    </div>
                </div>  
            </div>
        </div>
    </body>
</template>

<script>
import axios from 'axios';

export default {
    data () {
        return {
            fields: [
                { key: 'num_casillero', label:'num_casillero'},
                { key: 'estado', label:'estado'},
                { key: 'fecha', label:'fecha'},
                { key: 'email', label:'email'},
                { key: 'action', label:'Acción'},
            ],
            locker: []
        }
    },
    methods: {

        getLocker () {

            const path = 'http://localhost:8000/api/v1.0/Locker/'
            axios.get(path).then((response) => {
                this.locker = response.data

            })
            .catch((error) => {
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
