import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListLocker from '@/components/Locker/ListLocker'
import EditLocker from '@/components/Locker/EditLocker'
import DeleteLocker from '@/components/Locker/DeleteLocker'
import NewLocker from '@/components/Locker/NewLocker'
import Login from '@/components/Locker/Login'
import RegistrarUsuario from '@/components/Locker/RegistrarUsuario'
import Lector from '@/components/Locker/Lector'
import QrcodeStream from '@/components/Locker/QrcodeStream'



QrcodeStream
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Locker',
      name: 'ListLocker',
      component: ListLocker
    },
    {
      path: '/Locker/:lockerId/edit',
      name: 'EditLocker',
      component: EditLocker
    },
    {
      path: '/locker/:lockerId/delete',
      name: 'DeleteLocker',
      component: DeleteLocker
    },
    {
      path: '/locker/new',
      name: 'NewLocker',
      component: NewLocker
    },
    {
      path: '/locker/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/locker/RegistrarUsuario',
      name: 'RegistrarUsuario',
      component: RegistrarUsuario
    },
  {
    path: '/locker/Lector',
    name: 'Lector',
    component: Lector
  },
  {
    path: '/locker/QrcodeStream',
    name: 'QrcodeStream',
    component: QrcodeStream
  },
  
],
  mode: 'history',
})
