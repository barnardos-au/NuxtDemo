<template>
  <div class="charts-overview">
    <h1 class="page-title">
      Visual -
      <span class="fw-semi-bold">Charts</span>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Charts',
  data() {
    return {
      initEchartsOptions: {
        renderer: 'canvas',
      },
    }
  },
  computed: {
    sparklineData() {
      return {
        series: [{ data: [1, 7, 3, 5, 7, 8] }],
        options1: {
          colors: [this.appConfig.colors.primary],
          plotOptions: {
            bar: {
              columnWidth: '50%',
            },
          },
        },
        options2: {
          colors: [this.appConfig.colors.info],
          plotOptions: {
            bar: {
              columnWidth: '50%',
            },
          },
        },
      }
    },
  },
}
</script>
