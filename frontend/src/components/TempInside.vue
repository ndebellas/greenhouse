<template ><Card class="inside-temp">
  <template #title>Inside</template>
<template #content>  
      <h1>72<sup>o</sup></h1> 
      <h2>40% humidity</h2>
</template>
  </Card>
</template>

<script>
import Card from "primevue/card";
export default {
  name: "TempInside",
  components: {
    Card
  },
  props: {
    msg: String,
  },
};
</script>

<style>
.p-component.inside-temp { 
  color: #6ee7b7;
  margin: 40px;
}
.inside-temp h1 {
  font-size: 6em;
  margin: 1rem;
}
.inside-temp h1 sup {
  font-weight:100;
  font-size: .7em;
}
</style>