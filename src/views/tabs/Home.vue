<template>
  <ion-page>
    <ion-content scroll-events="true" @ionScroll="(e) => (scrollTop = e.detail.scrollTop)" >
      <HeaderHome :scrollTop="scrollTop" />
      <div class="content">
        <!-- insert content here -->
        <ion-button color="orange" router-link="/tutorial" class="ion-margin">Watch Tutorial</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import HeaderHome from "@/components/HeaderHome.vue";

export default defineComponent({
  name: 'Home',
  components: {
    IonPage,
    IonContent,
    HeaderHome,
    IonButton
  },
  data() {
    return {
      scrollTop: 0,
    };
  },
});
</script>

<style lang="scss" scoped>
.content{
  width: 100%;
  min-height: 100vh;
  background-color: #f9f9f9;
  margin-top: 65vw;
  @media (min-width: 670px) {
    &{
      margin-top: 50vh;
    }
  }
}
</style>