<template>
    <div class="chart">
        <div :id="id" :options="options"></div>
    </div>
</template>

<script>
import HighCharts from 'highcharts'
  import highchartsMore from 'highcharts/highcharts-more';
  highchartsMore(HighCharts);
    export default {
        // 验证类型
        props: {
            id: {
                type: String
            },
            options: {
                type: Object
            }
        },
        mounted() {
            HighCharts.chart(this.id, this.options)
        }
    }
</script>

<style scoped>

</style>