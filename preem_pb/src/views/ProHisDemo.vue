<template>
  <div>
    <EmBar />
    <div id="mainform">
      <div>
        <h2>Promotion History</h2>
        <b-button variant="info" @click="clickPro">My Profile</b-button>
        <div v-if="!proHistory.length" id="boxPale">No record!</div>
        <div v-for="(proHistory, index) in proHistory" :key="index">
          {{ proHistory.EmployeeID }}, {{ proHistory.promoDate }}
          {{ proHistory.PreviousPosition }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmBar from "@/components/EmBar.vue";
import promoHis from "../../service/promoHis";
export default {
  name: "prohisDemo",
  components: {
    EmBar,
  },
  data() {
    return {
      proHistory: {
        EmployeeID: "",
        promoDate: "",
        PreviousPosition: "",
      },
      IDemp: {
        employeeID: "",
      },
    };
  },
  created() {
    this.IDemp.employeeID = this.$store.state.profileID;
    console.log(this.$store.state.profileID);
    promoHis.viewOne(this.IDemp).then((res) => {
      if (res) {
        this.proHistory = res.promotion;
        console.log(this.proHistory);
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