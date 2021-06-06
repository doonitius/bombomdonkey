<template>
  <div>
    <bar2 />
    <div id="mainform">
      <div id="boxPale">
        <h2>
          Employee
          <b-icon icon="people-fill" aria-hidden="true"></b-icon>
        </h2>

        <b-button class="Addinfo" variant="success" @click="clickAdd">
          Add Employee
          <b-icon icon="person-plus-fill" aria-hidden="true"></b-icon>
        </b-button>

        <div>
          <div v-if="render">
            <b-container class="bv-example-row">
              <!-- head -->
              <b-row class="showAll-body-head">
                <b-col cols="3" class="showAll-text"> Name-Surname </b-col>
                <b-col cols="2" class="showAll-text smallPlz">ID:</b-col>
                <b-col cols="4" class="showAll-text">Position:</b-col>
                <b-col cols="2"> </b-col>
              </b-row>
              <div v-for="(employee, index) in employee" :key="index">
                <!-- body -->
                <b-row class="showAll-body">
                  <b-col cols="3" class="showAll-text">
                    {{ employee.Name }} {{ employee.Surname }}
                  </b-col>
                  <b-col cols="2" class="showAll-text smallPlz">
                    {{ employee.EmployeeID }}
                  </b-col>
                  <b-col cols="4" class="showAll-text">
                    {{ position[index] }}
                  </b-col>
                  <b-col cols="2">
                    <b-button class="view" @click="goProfile(index)">
                      View Profile
                    </b-button>
                  </b-col>
                </b-row>
                <!-- body -->
              </div>
            </b-container>
          </div>
          <div v-else>
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
</template>
<script>
import bar2 from "@/components/bar2.vue";
import employee from "../../service/employee";
export default {
  name: "Employee",
  components: {
    bar2,
  },
  data() {
    return {
      employee: [],
      position: [],
      index: 0,
      render: false,
      searchEmployeeID: "",
    };
  },
  created() {
    employee.view().then((res) => {
      if (res) {
        console.log(res);
        this.employee = res.employee;
        this.position = res.name;
        this.render = true;
      }
    });
  },
  methods: {
    clickAdd() {
      this.$router.push("/employee/add");
    },
    goProfile(index) {
      localStorage.setItem("foundEID", this.employee[index].EmployeeID);
      this.$store.state.profileID = this.employee[index].EmployeeID;
      this.$router.push("/profile");
    },
  },
};
</script>


<style scoped>
.h2,
h2 {
  margin-bottom: 3rem;
  font-size: 2.5rem;
}
</style>
