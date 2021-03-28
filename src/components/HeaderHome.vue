<template>
  <div class="container">
    <div class="overlay">
        <div v-if="opTop > 0" :style="{opacity: opTop }" class="row">
            <span>{{opTop}} - {{scrollTop}} </span>
        </div>
        <div v-if="opMiddle > 0" :style="{opacity: opMiddle }" ref="middleRow" class="row middle">
            <span>Comienza<br>tu aventura</span>
        </div>
        <div v-if="opBottom > 0" :style="{opacity: opBottom }" ref="bottomRow" class="row bottom">
            <span>{{opBottom}} </span>
        </div>

    </div>
  </div>
</template>

<script lang="ts">
import {} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderHome",
  components: {},
  props: ['scrollTop', 'contentTop'],
  computed: {
      opBottom(): number {
        return (100 - this.scrollTop * 3 ) / 100
      },
      opTop(): number {
        return this.contentTop ? (this.contentTop - 30) / 100 : 1
      },
      opMiddle(): number {
        const height = window.innerWidth * .35
        return (height - this.scrollTop) / 100
      }
  }
  
});
</script>

<style lang="scss" scoped>
.container {
  background: url("../assets/img/img-home.jpeg") no-repeat center/100%;
  width: 100%;
  height: 65vw; 
  /*
  /* w: 100 
  /* h: 65 
  */
  max-height: 50vh; /* if vw > vh */
  position: fixed;
  z-index: -100;
  & > div.overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    background: rgba(0, 51, 56, 0.58);
  }

}


.row {
  color: #fff;
  font-size: 1.5em;
  position: relative;
  display: flex;
  justify-content: center;
  height: 0;
}
.row:first-child{
  top: 10px;
}
.row.bottom{
  top: 42vh
}
.row.middle{
  top: 11vh;
  span {
    font-size: 77px;
    font-family: 'Open Sans';
    line-height: 95px;
    text-align: center;
  }
}
@media (max-width: 620px) {
  .row.bottom{
    top: 50vw;
  }
  .row.middle{
    span {
      line-height: 33px;
      font-size: 24px;
    }
    top: 22vw;
  }
}
</style>