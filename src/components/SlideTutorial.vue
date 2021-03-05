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
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');
.container {
    // background: pink;
    width: 90vw;
    height: 425px;
    position: relative;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .image-container {
        width: 285px;
        height: 374px;
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
            width: 336px;
            height: 221px;
            position: absolute;
            top: 0;
        }
        &.orange {
            background-color: var(--ion-color-orange);
        }
        &.green {
            background-color: #03A696;
        }
        &.green-dark {
            background-color: #025159;
        }
    }
}

p {
    padding: 0 1em;
    margin: 0;
    text-align: start;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;

    color: #000000;
}

div.flex {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

</style>