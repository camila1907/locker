<template>
  <div>
        <p class="decode-result">Last result: <b>{{ result }}</b></p>
     
        
        

        <qrcode-stream :camera="camera" @decode="onDecode" @init="onInit">
            
        <div v-if="validationSuccess" class="validation-success">
            Ingreso de casillero
        </div>

        <div v-if="validationFailure" class="validation-failure">
            No se puedo ingresar casillero
        </div>

        <div v-if="validationPending" class="validation-pending">
            Long validation in progress...
        </div>
        </qrcode-stream>
        <b-button type="submit" class="btn-large-space" :to="{ name:'ListLocker'}">Volver</b-button> 
    </div>
</template>




<script>
import axios from 'axios';
import swal from 'sweetalert';

import { QrcodeStream } from 'vue-qrcode-reader'
import Clipboard from 'v-Clipboard'

let color = 'pink';
let newcolor = 'pink';


export default {
    
    components: {
        QrcodeStream,
        Clipboard,
        
     
    },
     data () {
    return {
      isValid: undefined,
      camera: 'auto',
      result: null,
      form: {
                num_casillero: '',
                codigo: '',
                
            }
      
            
        

    }
  },
  computed: {
    validationPending () {
      return this.isValid === undefined
        && this.camera === 'off'
    },

    validationSuccess () {
      return this.isValid === true
    },

    validationFailure () {
      return this.isValid === false
    }
  },

    methods: {
        

    onInit (promise) {
      promise
        .catch(console.error)
        .then(this.resetValidationState)
    },

    resetValidationState () {
      this.isValid = undefined
    },

    async onDecode (content) {
      this.form.num_casillero = content
      this.form.codigo = content+ "hola"
      
      
      console.log(content)
      
      
   
      const path = 'http://localhost:8000/api/v1.0/Locker/'
      axios.post(path, this.form).then((response) => {
           
                this.form.num_casillero=response.data.num_casillero
                this.form.codigo=response.data.codigo
              
                
                
                swal ("Libro creado exitosamente!!", "", "success")
            })
        
   
      this.turnCameraOff()
      

      // pretend it's taking really long
      await this.timeout(2000)
      this.isValid = content.startsWith('Casillero 1')

      // some more delay, so users have time to read the message
      await this.timeout(1000)

      this.turnCameraOn()
    },
    
    

    turnCameraOn () {
      this.camera = 'auto'
    },

    turnCameraOff () {
      this.camera = 'off'
    },

    timeout (ms) {
      return new Promise(resolve => {
        window.setTimeout(resolve, ms)
      })
    },
        
    },
    created(){
        
    }
}
</script>

<style scoped>
.validation-success,
.validation-failure,
.validation-pending {
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, .8);
  text-align: center;
  font-weight: bold;
  font-size: 1.4rem;
  padding: 10px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
.validation-success {
  color: green;
}
.validation-failure {
  color: red;
}
</style>