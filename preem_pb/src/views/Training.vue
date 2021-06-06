<template>
  <div>
    <bar2 />
    <div id="mainform">
      <div id="boxPale">
        <h2>
          Training
          <b-icon icon="calendar2-week" aria-hidden="true"></b-icon>
        </h2>
        <b-button class="Addinfo" variant="success" @click="clickAdd">
          Add Training
          <b-icon icon="calendar2-plus" aria-hidden="true"></b-icon>
        </b-button>
        <div>
          <div v-if="render">
            <b-container class="bv-example-row">
              <!-- head -->
              <b-row class="showAll-body-head">
                <b-col cols="4" class="showAll-text">Training Title</b-col>
                <b-col cols="3" class="showAll-text smallPlz">ID:</b-col>
                <b-col cols="2"> </b-col>
              </b-row>
              <div v-for="(training, index) in training" :key="index">
                <!-- body -->
                <b-row class="showAll-body">
                  <b-col cols="4" class="showAll-text">
                    {{ training.Name }}
                  </b-col>
                  <b-col cols="3" class="showAll-text">
                    {{ training.TrainID }}
                  </b-col>
                  <b-col cols="2">
                    <b-button class="view" @click="goTraining(index)">
                      View Training
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
import train from "../../service/training";
export default {
  name: "training",
  components: {
    bar2,
  },
  data() {
    return {
      training: {},
      render: false,
    };
  },
  created() {
    train.view().then((res) => {
      if (res) {
        console.log(res);
        this.training = res.train;
        console.log(this.training);
        this.render = true;
      }
    });
  },
  methods: {
    clickAdd() {
      this.$router.push("/training/add");
    },
    goTraining(index) {
      this.$store.state.goTrainingID = this.training[index].TrainID;
      localStorage.setItem("foundTID", this.training[index].TrainID);
      this.$router.push("/training/info");
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

.view {
  margin-left: 111px;
}
</style>