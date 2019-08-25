<template id="windrose2">
  <highcharts :options="options"></highcharts>
</template>
<script>
var windDirection, windSpeed, windDirectionJSON, windSpeedJSON, windDataJSON;
windDirection = "[202,229,218,208,230,202,205,213,223,227,239,250,237,240,248]";
windSpeed = "[9,13.4,12,9.7,6.6,12.1,10.2,12.2,4.6,9,6.6,6.6,8.7,8.3,9.7]";
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
  "N",
  "NNE",
  "NE",
  "ENE",
  "E",
  "ESE",
  "SE",
  "SSE",
  "S",
  "SSW",
  "SW",
  "WSW",
  "W",
  "WNW",
  "NW",
  "NNW"
];
var options = {
  chart: {
    polar: true,
    type: "column"
  },

  xAxis: {
    min: 0,
    max: 360,
    tickInterval: 22.5,
    tickmarkPlacement: "on",
    labels: {
      formatter: function() {
        return categories[this.value / 22.5] + "°";
      }
    }
  },
  yAxis: {
    min: 0,
    endOnTick: false,
    reversedStacks: false
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
  },

  series: [
    {
      data: [
        {
          x: 0,
          y: 5
        },
        {
          x: 22.5,
          y: 3
        },
        {
          x: 45,
          y: 4
        },
        {
          x: 67.5,
          y: 2
        },
        {
          x: 90,
          y: 9
        },
        {
          x: 112.5,
          y: 2
        },
        {
          x: 135,
          y: 8
        },
        {
          x: 157.5,
          y: 9
        },
        {
          x: 180,
          y: 2
        }
      ]
    },
    {
      data: [
        {
          x: 0,
          y: 2
        },
        {
          x: 22.5,
          y: 6
        },
        {
          x: 45,
          y: 1
        },
        {
          x: 67.5,
          y: 9
        },
        {
          x: 90,
          y: 9
        },
        {
          x: 112.5,
          y: 3
        },
        {
          x: 135,
          y: 5
        },
        {
          x: 157.5,
          y: 3
        },
        {
          x: 180,
          y: 7
        }
      ]
    },
    {
      data: [
        {
          x: 0,
          y: 5
        },
        {
          x: 22.5,
          y: 3
        },
        {
          x: 45,
          y: 4
        },
        {
          x: 67.5,
          y: 2
        },
        {
          x: 90,
          y: 9
        },
        {
          x: 112.5,
          y: 2
        },
        {
          x: 135,
          y: 8
        },
        {
          x: 157.5,
          y: 9
        },
        {
          x: 180,
          y: 2
        }
      ]
    }
  ]
};
export default {
  name: "t5",
  data() {
    return {
      options: options
    };
  }
};
</script>