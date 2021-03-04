<template>
<ion-page>
  <ion-header class="ion-no-border">
    <ion-toolbar>
      <ion-buttons slot="end">
        <ion-button @click="dismissModal">
          <ion-icon :icon="closeOutline" />
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</ion-page>
</template>

<script lang="ts">

import { IonPage, IonHeader, IonToolbar, IonButtons, IonIcon, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import { closeOutline } from 'ionicons/icons'

export default defineComponent ({
  name: 'BlankPage',
  components: { IonPage, IonHeader, IonToolbar, IonButtons, IonIcon, IonButton },
  methods: {
    dismissModal() {
      document.dispatchEvent( new Event('dismissModal'))
      return;
    },
    
  },
  
  setup() {  
    return { closeOutline }
  },
  
});
</script>

<style lang="scss" scoped>
  
</style>