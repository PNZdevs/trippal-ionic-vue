<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import { Plugins } from '@capacitor/core';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  mounted() {
    const { App } = Plugins
    App.addListener('backButton', () => {      
      const isModalPresent = Boolean(document.querySelector('ion-modal'))
      const canGoBack = Boolean(this.$router.options.history.state.back || isModalPresent)
      if(!canGoBack) App.exitApp()
    })

  }
  
});
</script>