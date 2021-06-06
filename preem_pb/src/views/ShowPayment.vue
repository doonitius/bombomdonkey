<template>
  <div id="showPayment">
    <bar2 />
    <div>
      <div>
        <div id="chart">
          <apexchart
            type="bar"
            height="350"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bar2 from "@/components/bar2.vue";
export default {
  name: "showPayment",
  components: {
    bar2,
  },
  data() {
    return {
      series: [
        {
          name: "$",
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "bar",
        },
        plotOptions: {
          bar: {
            columnWidth: "45%",
            distributed: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          labels: {
            style: {
              fontSize: "12px",
            },
          },
        },
      },
    };
  },
};
</script>

<style>
</style>