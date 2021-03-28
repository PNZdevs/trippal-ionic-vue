<template>
<div class="flex">
    <p>{{ text }}</p>
    <div class="container">
        <div class="shape" :class="[position, color]" />
        <div class="image-container" 
          :style="{backgroundImage: `url(${img})`}" />
    </div>
</div>
  
</template>

<script lang="ts">

import {  } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent ({
  name: 'SlideTutorial',
  components: {  },
  props: ['text', 'img', 'position', 'color']
  
});
</script>

<style lang="scss" scoped>

.container {
    position: relative;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;

    .image-container {
        width: 100vw;
        height: 55vh;
        box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.1);
        border-radius: 14px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        z-index: 1;
    }

    .shape {
        &.top-right {
            width: 210px;
            height: 223px;
            position: absolute;
            right: 0;
            top: 0;
        }
        &.bottom-left {
            width: 205px;
            height: 196px;
            position: absolute;
            left: 0;
            bottom: 0;
        }
        &.top {
            width: 100%;
            height: 221px;
            position: absolute;
            top: 0;
        }
        &.orange {
            background-color: var(--ion-color-orange);
        }
        &.green {
            background-color: var(--ion-color-persian-green);
        }
        &.green-dark {
            background-color: var(--ion-color-midnight-green);
        }
    }
}

p {
    padding: 0 1em;
    margin: 0;
    text-align: start;
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    margin-bottom: 1em;
    color: var(--ion-color-dark);

    @media (min-width: 700px) {
        & {
            font-size: 24px;
            line-height: 33px;
        }
    }
}

div.flex {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 100vw;
    padding: 0 1em;

    @media (min-width: 700px) {
        & {
            max-width: 536px;
            justify-content: center;
        }
    }
}

</style>