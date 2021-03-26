<template>
  <div class="container">
    <div class="overlay">
        <div v-if="opTop > 0" :style="{opacity: opTop }" class="row center">
            <span>{{opTop}} - {{scrollTop}} </span>
        </div>
        <div v-if="opBottom > 0"  ref="bottomRow" class="row bottom center">
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
  props: ['scrollTop'],
  computed: {
      opBottom(): number {
          return (100 - this.scrollTop * 2) / 100
      },
      opTop(): number {

        return (200 - this.scrollTop ) / 100
      }
  }
  
});
</script>

<style lang="scss" scoped>
.container {
  background: url("../assets/img/img-home.jpeg") no-repeat top/100%;
  background-attachment: fixed;
  width: 100%;
  height: 65vw; 
  /*
  /* w: 100 
  /* h: 65 
  */
  max-height: 50vh; /* if vw > vh */
  position: relative;
  & > div.overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    background: rgba(0, 51, 56, 0.58);
  }

  .row{
      color: #fff;
      font-size: 1.5em;
      position: sticky;
  }
  .row:first-child{
      top: 10px;
  }
  .row.bottom{
      top: 42vh
  }
  @media (max-width: 500px) {
    .row.bottom{
        top: calc(65vw - 60px);
    }
  }
}

.row.center {
    display: flex;
    justify-content: center;
    height: 0;
}
</style>