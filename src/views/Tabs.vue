<template>
  <ion-page>
    <ion-content>
      <ion-tabs @ionTabsDidChange="handleTabsDidChange">
        <ion-tab-bar slot="bottom" mode="ios">
          <ion-tab-button tab="home" href="/tabs/home">
            <ion-icon :icon="homeIcon" />
            <ion-label>Home</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="explore" href="/tabs/tab2">
            <ion-icon :icon="exploreIcon" />
            <ion-label>Explorar</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="tab3" href="/tabs/tab3">
            <ion-icon :icon="addCircleOutline" style="font-size: 5em" />
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
import { ellipse, square, home, homeOutline, compass, compassOutline, heart, heartOutline, notifications, notificationsOutline, addCircleOutline } from 'ionicons/icons';

export default defineComponent ({
  name: 'Tabs',
  components: { IonContent, IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  data() {
    return {
        homeIcon: home,
        exploreIcon: compassOutline,
        favoriteIcon: heartOutline,
        notificationsIcon: notificationsOutline,
        middleIcon: addCircleOutline
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
      notificationsOutline,
      addCircleOutline
    }
  }
})
</script>