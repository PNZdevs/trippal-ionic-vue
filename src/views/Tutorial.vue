<template>
<ion-page>
    <router-link id="skip" to="/tabs/home">Skip</router-link>
    <ion-content>
        <ion-slides
          pager="true"
          @ionSlideReachEnd="togglePagination"
          :options="swiperOptions">
            <ion-slide v-for="slide of slides" :key="slide.id">
              <Slide
                :text="slide.text" 
                :img="slide.image" 
                :position="slide.position"
                :color="slide.color"/>
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
import Slide from '@/components/SlideTutorial.vue'

export default defineComponent ({
  name: 'Tutorial',
  components: { IonPage, IonSlides, IonSlide, IonContent, IonButton, Slide },
  data() {
    return {
      isLast: false as boolean,
      swiperOptions: {
        //  options here
        spaceBetween: 100
      },
      slides: [
        {id: 1, text: 'Mantén tus memorias vivas', position: 'top-right', color: 'orange' , image: require('@/assets/img/tutorial/img1.jpg')},
        {id: 2, text: 'Sigue a personas con intereses similares a los tuyos', position: 'bottom-left', color: 'green' , image: require('@/assets/img/tutorial/img2.jpg')},
        {id: 3, text: 'Inspírate e inspira a otros a ver el mundo', position: 'top', color: 'green-dark' , image: require('@/assets/img/tutorial/img3.jpg')}
      ]
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



#skip {
  position: fixed;
  top: 1em;
  z-index: 1;
  width: 100%;
  text-align: center;
}
</style>