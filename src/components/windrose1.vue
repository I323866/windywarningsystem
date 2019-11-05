<template id="windrose1">
  <highcharts :options="this.options"  ref="chart" ></highcharts>
</template>
<script>
import Highcahrts from 'highcharts'
export default {
  name: "t5",
  props: {
    speed: Number,
    dire: Number
  },
  data() {
    return {
      options: this.options
      
    };
  },
  methods: {

    getOptions() {
      var windDirection,
        windSpeed,
        windDirectionJSON,
        windSpeedJSON,
        windDataJSON;
      windDirection = "[0]";
      windSpeed = "[0]";
      windDirectionJSON = JSON.parse(windDirection);
      windSpeedJSON = JSON.parse(windSpeed);
      windDataJSON = [];
      for (var i = 0; i < windDirectionJSON.length; i++) {
        windDataJSON.push([windDirectionJSON[i], windSpeedJSON[i]]);
      }
      windDataJSON.sort(function(a, b) {
        return a[0] - b[0];
      });
      var categories = [
        "0",
        "30",
        "60",
        "90",
        "120",
        "150",
        "180",
        "210",
        "240",
        "270",
        "300",
        "330",
        "360"
      ];
      this.options = {
        series: [
          {
            data: windDataJSON,
            name: "18R"
          }
        ],
        chart: {
          polar: true,
          type: "column"
        },
        title: {
          text: ""
        },
        pane: {
          size: "68%"
        },
        legend: {
          align: "right",
          verticalAlign: "top",
          y: 100,
          layout: "vertical"
        },
        xAxis: {
          min: 0,
          max: 360,
          type: "",
          tickInterval: 30,
          tickmarkPlacement: "on",
          labels: {
            formatter: function() {
              return categories[this.value / 30] + "°";
            }
          }
        },
        yAxis: {
          min: 0,
          endOnTick: false,
          showLastLabel: true,
          title: {
            text: ""
          },
          labels: {
            formatter: function() {
              return this.value;
            }
          },
          reversedStacks: false
        },
        tooltip: {
          valueSuffix: ""
        },
        credits: {
          enabled: false
        },
        plotOptions: {
          series: {
            stacking: "normal",
            shadow: false,
            groupPadding: 0,
            pointPlacement: "on"
          }
        }
      };
    }
  },
  created() {
    this.getOptions();
  },

  watch: {
    
    speed: {
      immediate: true,
      handler(newValue, oldValue) {
        const a  = [this.dire,this.speed]
        const b = []
        b.push(a)
        if (this.options){
          this.options.series[0].data = b
        }
      }
    }
    
  }
};
</script>