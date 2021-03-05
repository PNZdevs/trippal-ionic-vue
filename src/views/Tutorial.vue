<template>
<ion-page>
    <ion-content class="ion-padding">
        <router-link to="/tabs/home">Skip</router-link>
        <ion-slides
          pager="true"
          @ionSlideReachEnd="togglePagination"
          :options="swiperOptions">
            <ion-slide>
                <h1 @click="togglePagination">Slide1</h1>
            </ion-slide>
            <ion-slide>
                <h1>Slide2</h1>
            </ion-slide>
            <ion-slide>
                <h1>Slide3</h1>
            </ion-slide>
        </ion-slides>
    </ion-content>
    <transition name="fade">
        <div v-if="isLast" class="flex-center">
            <ion-button router-link="/tabs/home" mode="md" strong color="orange">Comenzar</ion-button>
        </div>
    </transition>
</ion-page>
</template>

<script lang="ts">

import { IonPage, IonSlides, IonSlide, IonContent, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent ({
  name: 'Tutorial',
  components: { IonPage, IonSlides, IonSlide, IonContent, IonButton },
  data() {
    return {
      isLast: false as boolean,
      swiperOptions: {
        //  options here
      }
    }
  },
  methods: {
    togglePagination() {
      this.isLast = !this.isLast
      const pagination = document.querySelector('div.swiper-pagination') as HTMLElement
      pagination.classList.toggle('swiper-pagination-hidden')
      const ionSlides = document.querySelector('ion-slides') as HTMLIonSlidesElement
      ionSlides.lockSwipes(true)
      return;
    }
    
  },
  
  
});
</script>

<style lang="scss" scoped>

ion-slides {
    height: 100%;
    --bullet-background-active: var(--ion-color-orange);
    --bullet-background: var(--ion-color-dark);
}

div.flex-center {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 2em;
    width: 100%;
    ion-button {
        --padding-start: 4em;
        --padding-end: 4em;
        text-transform: unset;
        font-family: Open Sans;
    }
}


// Vue transition classes
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
  
</style>