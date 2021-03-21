<template>
  <ion-page>
    <ion-content>
      <ion-tabs @ionTabsDidChange="handleTabsDidChange">
        <ion-tab-bar slot="bottom" mode="ios">
          <ion-tab-button tab="home" href="/tabs/home">
            <ion-icon :icon="homeIcon" />
            <ion-label>Home</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="explore" href="/tabs/explore">
            <ion-icon :icon="exploreIcon" />
            <ion-label>Explorar</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="null">
          <MiddleButton />
          </ion-tab-button>
          

          <ion-tab-button tab="favorites" href="/tabs/favorites">
            <ion-icon :icon="favoriteIcon" />
            <ion-label>Favoritos</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="notifications" href="/tabs/notifications">
            <ion-icon :icon="notificationsIcon" />
            <ion-label>Notificaciones</ion-label>
          </ion-tab-button>

        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonContent, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { defineComponent } from '@vue/runtime-core';
import { ellipse, square, home, homeOutline, compass, compassOutline, heart, heartOutline, notifications, notificationsOutline,  } from 'ionicons/icons';
import MiddleButton from '@/components/MiddleButton.vue'

export default defineComponent ({
  name: 'Tabs',
  components: { IonContent, IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, MiddleButton },
  data() {
    return {
        homeIcon: home,
        exploreIcon: compassOutline,
        favoriteIcon: heartOutline,
        notificationsIcon: notificationsOutline
    }
  },
  methods: {
    handleTabsDidChange() {
      const ionTabBar = document.querySelector('ion-tab-bar') as HTMLIonTabBarElement
      const { selectedTab } = ionTabBar
      this.homeIcon = selectedTab == 'home' ? home : homeOutline
      this.exploreIcon = selectedTab == 'explore' ? compass : compassOutline
      this.favoriteIcon = selectedTab == 'favorites' ? heart : heartOutline
      this.notificationsIcon = selectedTab == 'notifications' ? notifications : notificationsOutline
    }
  },
  
  setup() {
    return {
      ellipse, 
      square, 
      home,
      homeOutline,
      compass,
      compassOutline,
      heart,
      heartOutline,
      notifications,
      notificationsOutline
    }
  }
})
</script>

<style scoped>
ion-tab-button {
  --color-selected: var(--ion-color-dark);
}
</style>