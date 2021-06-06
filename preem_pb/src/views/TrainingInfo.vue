<template>
  <div id="trainInfo">
    <bar2 />
    <div>
      <div id="mainform">
        <div style="padding-bottom: 70px">
          <h2>Training Information > {{ train.TrainID }}</h2>
          <!-- ปุ่มแก้ลบ -->
          <div>
            <b-button class="delButt" @click="clickdel"
              >Delete
              <b-icon icon="trash" aria-hidden="true"></b-icon>
            </b-button>
            <!-- ปุ่มแก้ลบ -->
          </div>
          <div id="boxPale">
            <h3>Training Information</h3>
            <b-container class="bv-example-row">
              <b-row>
                <b-col class="headInfo" cols="4">Training ID:</b-col>
                <b-col class="info" cols="4">{{ train.TrainID }}</b-col>
              </b-row>
              <b-row>
                <b-col class="headInfo" cols="4">Training Name:</b-col>
                <b-col class="info" cols="6">{{ train.Name }}</b-col>
              </b-row>
              <b-row>
                <b-col class="headInfo" cols="4">Training Detail:</b-col>
                <b-col class="info" cols="6">{{ train.Detail }}</b-col>
              </b-row>
            </b-container>
          </div>
          <div id="boxPale">
            <h3>Participant</h3>
            <div v-for="(name, index) in name" :key="index">
              <b-container class="bv-example-row">
                <b-row>
                  <b-col class="headInfo" cols="3">EmployeeID: </b-col>
                  <b-col class="info" cols="4">{{
                    employee[index].EmployeeID
                  }}</b-col>
                </b-row>
                <hr />
              </b-container>
            </div>
          </div>
          <div>
            <button class="BackButt" @click="back" left>
              <b-icon icon="caret-left-fill" aria-hidden="true"></b-icon>
              BACK
            </button>
          </div>
        </div>
      </div>
    </div>
    <b-modal v-model="delModal" @ok="sureDel">Are you sure?</b-modal>
  </div>
</template>

<script>
import bar2 from "@/components/bar2.vue";
import train from "../../service/training";
export default {
  name: "trainInfo",
  components: {
    bar2,
  },
  data() {
    return {
      train: {},
      IDemp: {
        TrainID: "",
      },
      employee: [],
      name: [],
      delModal: false,
    };
  },
  created() {
    this.IDemp.TrainID = localStorage.getItem("foundTID");
    console.log(this.IDemp);
    train.viewOne(this.IDemp).then((res) => {
      if (res) {
        this.train = res.foundtrain;
        this.employee = res.trainer;
        this.name = res.name;
        console.log(res);
        console.log(this.train);
        console.log(this.employee[0].EmployeeID);
      }
    });
  },
  methods: {
    back() {
      localStorage.removeItem("foundTID");
      this.$router.push("/training");
    },
    clickdel() {
      this.delModal = !this.delModal;
    },
    sureDel() {
      alert("DELETE!");
      this.IDemp.TrainID = this.$store.state.goTrainingID;
      train.deleteTrain(this.IDemp).then(
        (res) => {
          console.log(res);
          localStorage.removeItem("foundTID");
        },
        (error) => {
          console.log(error.message);
        }
      );
      this.$router.push("/training");
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

label {
  text-align: right;
  padding: 10px 0 0 0;
}
</style>