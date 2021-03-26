<template>
  <ion-page>
    <ion-content scroll-events="true" @ionScroll="(e) => (scrollTop = e.detail.scrollTop)" >
      <HeaderHome :scrollTop="scrollTop" />
      <div style="height: 100vh; background: #f9f9f9"></div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';
import HeaderHome from "@/components/HeaderHome.vue";

export default defineComponent({
  name: 'Home',
  components: {
    IonPage,
    IonContent,
    HeaderHome,
  },
  data() {
    return {
      scrollTop: 0,
    };
  },
});
</script>

<style scoped>
</style>