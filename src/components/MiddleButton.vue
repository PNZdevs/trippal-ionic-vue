<template>
<ion-icon
  :icon="addCircleOutline"
  style="font-size: 3rem; padding: 0 .2em"
  @click="handleClick" />
</template>

<script lang="ts">

import BlankPageVue from '@/views/BlankPage.vue';
import { IonIcon, modalController } from '@ionic/vue';
import { addCircleOutline } from 'ionicons/icons'
import { defineComponent } from 'vue';

export default defineComponent ({
  name: 'MiddleButton',
  components: { IonIcon },
  methods: {
    handleClick: async function() {
      const modal = await modalController
        .create({
              component: BlankPageVue,
              cssClass: 'half-modal',
              componentProps: {isModal: true, label: 'modal'}
          })
      document.addEventListener('dismissModal', () => modal.dismiss() )
      return modal.present();
    }
    
  },
  
  setup() {
    return {
        addCircleOutline
    }
  }
});
</script>

<style scoped>
  
</style>