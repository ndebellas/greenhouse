<template>
  <div>
    <h1>Greenhouse</h1>
    <div class="widgetGrid">
      <TempOutside />
      <TempInside />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TempOutside from "@/components/TempOutside.vue";
import TempInside from "@/components/TempInside.vue";

export default {
  name: "HomeView",
  components: {
    TempOutside,
    TempInside,
  },
};
</script>

<style>
.widgetGrid {
  display: grid;
  grid-template-columns: auto auto auto;
}
</style>