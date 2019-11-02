<template id="windrose1">
  <highcharts :options="options"></highcharts>
</template>
<script>
import highchartsMore from 'highcharts/highcharts-more';
import { getAWOS1 } from '../api/api';
var windDirection, windSpeed, windDirectionJSON, windSpeedJSON, windDataJSON;
windDirection = '[230]';
windSpeed = '[9]';
windDirectionJSON = JSON.parse(windDirection);
windSpeedJSON = JSON.parse(windSpeed);
windDataJSON = [];
for (var i = 0; i < windDirectionJSON.length; i++) {
  windDataJSON.push([windDirectionJSON[i], windSpeedJSON[i]]);
}
windDataJSON.sort(function(a, b) {
  return a[0] - b[0];
});
var categories = ['0', '30', '60', '90', '120', '150', '180', '210', '240', '270', '300', '330' ,  '360'];
var options = {
  series: [
    {
      data: windDataJSON,
      name: '18R'
    }
  ],
  chart: {
    polar: true,
    type: 'column'
  },
  title: {
    text: ''
  },
  pane: {
    size: '68%'
  },
  legend: {
    align: 'right',
    verticalAlign: 'top',
    y: 100,
    layout: 'vertical'
  },
  xAxis: {
    min: 0,
    max: 360,
    type: '',
    tickInterval: 30,
    tickmarkPlacement: 'on',
    labels: {
      formatter: function() {
        return categories[this.value / 30] + '°';
      }
    }
  },
  yAxis: {
    min: 0,
    endOnTick: false,
    showLastLabel: true,
    title: {
      text: ''
    },
    labels: {
      formatter: function() {
        return this.value + '%';
      }
    },
    reversedStacks: false
  },
  tooltip: {
    valueSuffix: '%'
  },
  credits: {
    enabled: false
  },
  plotOptions: {
    series: {
      stacking: 'normal',
      shadow: false,
      groupPadding: 0,
      pointPlacement: 'on'
    }
  }
};
export default {
  name: 't5',
  props: {
    testdata: Array,
  },
  data() {
    return {
      options: options,
      windSpeed1: '',
      windSpeed2: ''
    };
  },
  methods: {
    //获取用户列表
    getUsers() {
      let para = {
        page: '',
        name: ''
      };
      var aa = this.testdata
      //NProgress.start();
      getAWOS1(para).then(res => {
        res.data.AWOS1[0].forEach((awos, index) => {
          switch (index) {
            case 15:
              this.windSpeed1 = awos;
              break;
            case 16:
              this.windSpeed2 = awos;
              break;
          }
        });
      });
    }
  },
  mounted() {
    this.getUsers();
  }
};
</script>