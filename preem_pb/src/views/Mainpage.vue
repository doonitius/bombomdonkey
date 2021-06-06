<template>
  <div>
    <bar2 />
    <div id="mainform">
      <div class="mainpageBox">
        <div align="center" class="logoBox">
          <img src="../assets/mylogo.png" alt="Logo" width="500" height="170" />
        </div>
        <div>
          <h2 align="center">Welcome to HR Management System</h2>
        </div>

        <div style="padding-top: 10px; padding-bottom: 10px">
          <h3>Analysis</h3>
          <div id="boxPale">
            <div id="chart" v-if="render2">
              <apexchart
                type="bar"
                height="350"
                :options="optionDepartment"
                :series="seriesDepartment"
              ></apexchart>
            </div>
            <!-- โหลด หมุนๆๆๆ -->
            <div id="chart" class="p-4" v-else style="text-align: center">
              <b-icon
                icon="x-diamond-fill"
                animation="spin"
                font-scale="3"
                shift-v="0"
              ></b-icon>
            </div>
          </div>

          <div id="boxPale">
            <div id="chart" v-if="render1">
              <apexchart
                type="pie"
                width="380"
                :options="optionGender"
                :series="seriesGender"
              ></apexchart>
            </div>
            <div id="chart" v-else style="text-align: center">
              <!-- โหลด หมุนๆๆๆ -->
              <div class="p-4" style="text-align: center">
                <b-icon
                  icon="x-diamond-fill"
                  animation="spin"
                  font-scale="3"
                  shift-v="0"
                ></b-icon>
              </div>
              <!-- โหลด หมุนๆๆๆ -->
            </div>
          </div>

          <div id="boxPale">
            <div id="chart" v-if="render1">
              <apexchart
                type="line"
                height="350"
                :options="optionNew"
                :series="seriesNew"
              ></apexchart>
            </div>
            <!-- โหลด หมุนๆๆๆ -->
            <div id="chart" class="p-4" v-else style="text-align: center">
              <b-icon
                icon="x-diamond-fill"
                animation="spin"
                font-scale="3"
                shift-v="0"
              ></b-icon>
            </div>
          </div>

          <div id="boxPale">
            <div v-if="render3">
              <h4>Work hard employee last year</h4>
              <hr />
              <b-row class="showAll-body-head">
                <b-col cols="5" class="showAll-text"> EmployeeID </b-col>
                <b-col cols="4" class="showAll-text smallPlz"
                  >Name-Surname</b-col
                >
                <b-col class="showAll-text">Count Project</b-col>
              </b-row>
              <!-- body -->
              <b-row class="showAll-body">
                <b-col cols="5" class="showAll-text">
                  {{ mostEmp.emp }}
                </b-col>
                <b-col cols="4" class="showAll-text smallPlz">
                  {{ mostEmp.name.Name }} {{ mostEmp.name.Surname }}
                </b-col>
                <b-col class="showAll-text">
                  {{ mostEmp.most }}
                </b-col>
              </b-row>
              <!-- body -->
            </div>
            <div id="chart" v-else style="text-align: center">
              <!-- โหลด หมุนๆๆๆ -->
              <div class="p-4" style="text-align: center">
                <b-icon
                  icon="x-diamond-fill"
                  animation="spin"
                  font-scale="3"
                  shift-v="0"
                ></b-icon>
              </div>
              <!-- โหลด หมุนๆๆๆ -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bar2 from "@/components/bar2.vue";
import home from "../../service/home";
export default {
  name: "Mainpage",
  components: {
    bar2,
  },
  methods: {
    AlertMe() {
      alert(this.seriesDepartment[0].data[0]);
      alert(this.seriesGender[0]);
    },
  },
  data() {
    return {
      render1: false,
      render2: false,
      render3: false,
      mostEmp: {},
      seriesDepartment: [
        {
          name: "count",
          data: [],
        },
      ],
      cdata: {},
      cdata2: [],
      seriesGender: [],
      seriesNew: [
        {
          name: "New Employee",
          data: [],
        },
      ],
      optionGender: {
        chart: {
          width: 380,
          type: "pie",
        },
        title: {
          text: "Gender",
          align: "left",
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#4DB7FC", "#FC6DDC", "#898686"],
        labels: ["Male", "Female", "Other"],
        responsive: [
          {
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
      optionDepartment: {
        chart: {
          height: 350,
          width: 300,
          type: "bar",
        },
        title: {
          text: "Employee in department",
          align: "left",
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
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: [
            "Marketing",
            ["Research &", "Development"],
            "Production",
            ["Accounting &", "Finance"],
            "HR",
            "IT",
          ],
          labels: {
            style: {
              fontSize: "12px",
            },
          },
        },
      },
      optionNew: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        title: {
          text: "New employee by Month last year",
          align: "left",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
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
        },
      },
    };
  },
  created() {
    home.ana().then((res) => {
      if (res) {
        console.log(res);
        this.cdata = res;
        this.seriesGender[0] = this.cdata.male;
        this.seriesGender[1] = this.cdata.female;
        this.seriesGender[2] = this.cdata.other;
        this.seriesNew[0].data[0] = this.cdata.jan;
        this.seriesNew[0].data[1] = this.cdata.feb;
        this.seriesNew[0].data[2] = this.cdata.mar;
        this.seriesNew[0].data[3] = this.cdata.apr;
        this.seriesNew[0].data[4] = this.cdata.may;
        this.seriesNew[0].data[5] = this.cdata.june;
        this.seriesNew[0].data[6] = this.cdata.july;
        this.seriesNew[0].data[7] = this.cdata.aug;
        this.seriesNew[0].data[8] = this.cdata.sep;
        this.seriesNew[0].data[9] = this.cdata.oct;
        this.seriesNew[0].data[10] = this.cdata.nov;
        this.seriesNew[0].data[11] = this.cdata.dec;
        this.render1 = true;
      }
    });
    home.countdepart().then((res) => {
      if (res) {
        console.log(res);
        this.seriesDepartment[0].data = res;
        this.render2 = true;
      }
    });
    home.hardwork().then((res) => {
      if (res) {
        console.log(res);
        this.mostEmp = res;
        this.render3 = true;
      }
    });
    // this.AlertMe();
  },
};
</script>

<style scoped>
.mainpageBox {
  /* ตั้งค่า Background  */
  background-image: url(../assets/Gif.gif);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* ตั้งค่า Background  */
  /* จงอ้วน */
  width: 100%;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  box-shadow: 3px 5px 20px 0px #9c9c9c61;
}

.logoBox {
  background-color: #36b1b9;
  padding: 100px;
}

.h2,
h2 {
  font-size: 16px;
  margin-bottom: 0rem;
  background-color: #171717;
  padding: 10px;
  color: white;
}

.h3,
h3 {
  font-size: 55px;
  margin-top: 3rem;
  color: white;
  text-align: center;
}

.h4,
h4 {
  font-size: 25px;
  margin-bottom: 12px;
}

#boxPale {
  margin-top: 30px;
}
</style>
