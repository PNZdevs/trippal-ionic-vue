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

let currentModal: HTMLIonModalElement | null = null
export default defineComponent ({
  name: 'MiddleButton',
  components: { IonIcon },
  methods: {
    handleClick: async function() {
      const modal = await modalController
        .create({
              component: BlankPageVue,
              cssClass: 'half-modal'
          })
      currentModal = modal
      return modal.present();
    }
    
  },
  mounted() {
      document.addEventListener('dismissModal', () => {
        if(currentModal) {
            currentModal.dismiss()
            currentModal = null
        }
      })
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