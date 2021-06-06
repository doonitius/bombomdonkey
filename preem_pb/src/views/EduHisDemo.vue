<template>
  <div>
    <EmBar />
    <div id="mainform">
      <div>
        <h2>Education History</h2>

        <b-button variant="info" @click="clickPro">Profile</b-button>
        <div v-if="!eduHistory.length" id="boxPale">No record!</div>
        <div
          v-for="(eduHistory, index) in eduHistory"
          :key="index"
          id="boxPale"
        >
          {{ eduHistory.EmployeeID }}, {{ eduHistory.GPA }}
          {{ eduHistory.University }}, {{ eduHistory.Faculty }}
          {{ eduHistory.Department }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmBar from "@/components/EmBar.vue";
import his from "../../service/history";
export default {
  name: "eduhisDemo",
  components: {
    EmBar,
  },
  data() {
    return {
      eduHistory: [],
      IDemp: {
        employeeID: "",
      },
    };
  },
  created() {
    this.IDemp.employeeID = this.$store.state.profileID;
    console.log(this.$store.state.profileID);
    his.viewEdu(this.IDemp).then((res) => {
      if (res) {
        this.eduHistory = res.education;
        console.log(this.eduHistory);
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