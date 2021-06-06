<template>
  <div>
    <EmBar />
    <div id="mainform">
      <div>
        <h2>Work History</h2>
        <b-button variant="info" @click="clickPro">Profile</b-button>
        <div v-if="!workHistory.length" id="boxPale">No record!</div>
        <div
          v-for="(workHistory, index) in workHistory"
          :key="index"
          id="boxPale"
        >
          {{ workHistory.EmployeeID }}, {{ workHistory.Company }}
          {{ workHistory.position }}, {{ workHistory.yearExp }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmBar from "@/components/EmBar.vue";
import his from "../../service/history";
export default {
  name: "workhisDemo",
  components: {
    EmBar,
  },
  data() {
    return {
      workHistory: [],
      IDemp: {
        employeeID: "",
      },
      empty: true,
    };
  },
  created() {
    this.IDemp.employeeID = this.$store.state.profileID;
    console.log(this.$store.state.profileID);
    his.viewWork(this.IDemp).then((res) => {
      if (res) {
        this.workHistory = res.work;
        console.log(this.workHistory);
        console.log(res);
      }
    });
  },
  methods: {
    clickPro() {
      this.$router.push("/profile/demo");
    },
  },
};
</script>

<style scoped>
.h1,
.h3,
.h4,
.h5,
.h6,
h1,
h3,
h4,
h5,
h6 {
  margin-bottom: 2rem;
  font-size: 2rem;
}

.h2,
h2 {
  margin-top: 60px;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  color: #ffff;
}
</style>