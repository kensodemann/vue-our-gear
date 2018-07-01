<template>
  <span>{{formattedTemperature}}</span>
</template>

<script>
export default {
  name: 'Temperature',
  props: {
    scale: String,
    temperature: Number
  },
  computed: {
    formattedTemperature() {
      const t =
        this.scale === 'C'
          ? this.temperature - 273.15
          : this.temperature * 9 / 5 - 459.67;
      const lbl = this.scale === 'C' ? '℃' : '℉';
      return this.temperature && `${t.toFixed(0)} ${lbl}`;
    }
  }
};
</script>