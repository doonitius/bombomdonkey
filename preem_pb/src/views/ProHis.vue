<template>
  <div>
    <bar2 />
    <div id="mainform">
      <div>
        <h2>Promotion History</h2>

        <div class="buntut">
          <b-button class="backTo" variant="info" @click="clickPro">
            <b-icon icon="arrow-left-circle" aria-hidden="true"></b-icon>
            Back to Profile
          </b-button>
        </div>

        <div v-if="!proHistory.length" id="boxPale">No record!</div>
        <div
          v-for="(proHistory, index) in proHistory"
          :key="index"
          id="boxPale"
        >
          <b-container class="bv-example-row">
            <b-row>
              <b-col class="headInfo" cols="4">PreviousPosition:</b-col>
              <b-col class="info" cols="6">{{
                proHistory.PreviousPosition
              }}</b-col>
            </b-row>
            <b-row>
              <b-col class="headInfo" cols="4">Promoted Date:</b-col>
              <b-col class="info" cols="6">{{ proHistory.promoDate }}</b-col>
            </b-row>
          </b-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bar2 from "@/components/bar2.vue";
import promoHis from "../../service/promoHis";
export default {
  name: "prohis",
  components: {
    bar2,
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
      this.$router.push("/profile");
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