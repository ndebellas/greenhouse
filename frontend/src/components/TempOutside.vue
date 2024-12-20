<template ><Card class="outside-temp">
  <template #title>Outside</template>
<template #content>  
      <h1>{{temp}}<sup>o</sup></h1> 
      <h2>{{humidity}}% humidity</h2>
</template>
  </Card>
</template>

<script> 
import Card from "primevue/card";
export default {
  name: "TempOutside",
  components: { 
    Card
  },
  props: {
    msg: String,
  },
  data:() =>  ({
    temp: 1,
    humidity: 2
  }),
  created() {
    setInterval(() => {
      fetch('/api/outdoor-temp')
        .then(response => response.json())
        .then(data => {
          this.temp = Math.round(data.temp,2);
          this.humidity = Math.round(data.humidity,2);
        });
    }, 10000);
  }
};
</script>

<style>
.p-component.outside-temp { 
  color: #ebb94f;
  margin: 40px;
}
.outside-temp h1 {
  font-size: 6em;
  margin: 1rem;
}
.outside-temp h1 sup {
  font-weight:100;
  font-size: .7em;
}
</style>