<template>
  <ion-page>
    <ion-content scroll-events="true" @ionScroll="handleScroll" >
      <HeaderHome :scrollTop="scrollTop" :contentTop="contentTop" />
      <div class="content" ref="content">
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
      contentTop: undefined as number | undefined,
    };
  },
  methods: {
    handleScroll: function(e: any) {
      this.contentTop = (this.$refs.content as HTMLElement).getBoundingClientRect().top;
      this.scrollTop = e.detail.scrollTop
      
    }
  }
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