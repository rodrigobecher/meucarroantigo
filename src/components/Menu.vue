<template>
    <div>
        <sidebar-menu :menu="menu" />
    </div>
</template>

<script>

import { SidebarMenu } from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
export default {
  components: {
    SidebarMenu
  },
  data() {
      return {
        menu: [
          {
            header: 'Meu carro antigo',
            hiddenOnCollapse: true
          },
          {
            href: '/',
            title: 'Home',
            icon: 'fa fa-home'
          },
          {
            href: '/carros',
            title: 'Carros',
            icon: 'fa fa-car'
          }
        ]
      }
    }
}
</script>

<style>

</style>