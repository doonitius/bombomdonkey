<template>
  <div>
    <bar2 />
    <div id="mainform">
      <div>
        <h2>Work History</h2>

        <div class="buntut">
          <b-button class="backTo" variant="info" @click="clickPro">
            <b-icon icon="arrow-left-circle" aria-hidden="true"></b-icon>
            Back to Profile
          </b-button>
        </div>

        <div v-if="!workHistory.length" id="boxPale">No record!</div>
        <div
          v-for="(workHistory, index) in workHistory"
          :key="index"
          id="boxPale"
        >
          <b-container class="bv-example-row">
            <b-row>
              <b-col class="headInfo" cols="4">Company:</b-col>
              <b-col class="info" cols="6">{{ workHistory.Company }}</b-col>
            </b-row>
            <b-row>
              <b-col class="headInfo" cols="4">Position:</b-col>
              <b-col class="info" cols="6">{{ workHistory.position }}</b-col>
            </b-row>
            <b-row>
              <b-col class="headInfo" cols="4">Year EXP:</b-col>
              <b-col class="info" cols="6">{{ workHistory.yearExp }}</b-col>
            </b-row>
          </b-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bar2 from "@/components/bar2.vue";
import his from "../../service/history";
export default {
  name: "workhis",
  components: {
    bar2,
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