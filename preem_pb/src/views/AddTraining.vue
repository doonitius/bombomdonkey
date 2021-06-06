<template>
  <div>
    <bar2 />
    <div id="mainform">
      <b-form @submit.prevent="trainsubmit">
        <div id="form">
          <h3>Training Information</h3>
          <b-form-group
            id="input-group-1"
            label="TrainingID:"
            label-for="input-1"
            description="EX. TR1234"
          >
            <input
              id="input-1"
              class="form-control"
              v-model="form.trainingID"
              type="text"
              placeholder="TRxxxx"
              pattern="[T]{1}[R]{1}[0-9]{4}"
              required
            />
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Training Title:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.trainingT"
              type="text"
              required
            />
          </b-form-group>

          <b-form-group id="input-group-3" label="Detail:" label-for="input-3">
            <b-form-textarea
              id="input-3"
              v-model="form.detail"
              type="text"
              row="6"
              no-resize
              required
            />
          </b-form-group>
        </div>

        <div id="form">
          <h3>Participant</h3>
          <b-form-group
            id="input-group-11"
            label="EmployeeID:"
            label-for="input-11"
            description="EX. EM123"
          >
            <input
              id="input-11"
              class="form-control"
              v-model="trecord.empID"
              type="text"
              placeholder="EMxxx"
              pattern="[E]{1}[M]{1}[0-9]{3}"
            />
          </b-form-group>

          <b-form-group
            id="input-group-9"
            label="Employee Start date:"
            label-for="input-5"
          >
            <b-form-input id="input-9" v-model="trecord.sDate" type="date" />
          </b-form-group>

          <b-form-group
            id="input-group-6"
            label="Employee Due date:"
            label-for="input-6"
          >
            <b-form-input id="input-6" v-model="trecord.eDate" type="date" />
          </b-form-group>

          <b-button pill variant="info" class="add" @click="addwRecord"
            >Add</b-button
          >
          <div v-for="(trecord, index) in dynamicform" :key="index">
            {{ trecord.empID }},{{ trecord.tID }},{{ trecord.sDate }},{{
              trecord.eDate
            }}
            <b-button variant="danger" @click="removeform(index)">X</b-button>
          </div>
          <hr />
          <Button />
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import bar2 from "@/components/bar2.vue";
import train from "../../service/training";
import Button from "@/components/button.vue";
export default {
  name: "addproject",
  components: {
    bar2,
    Button,
  },
  data() {
    return {
      form: {
        trainingID: "",
        trainingT: "",
        detail: "",
      },
      dynamicform: [],
      trecord: {
        empID: "",
        tID: "",
        sDate: "",
        eDate: "",
      },
    };
  },
  methods: {
    trainsubmit() {
      alert(JSON.stringify(this.form));
      alert(JSON.stringify(this.dynamicform));
      train.createTrain(this.form).then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err.message);
        }
      );
      train.createEmp(this.dynamicform).then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err.message);
        }
      );
      (this.form = {
        trainingID: "",
        trainingT: "",
        detail: "",
      }),
        (this.dynamicform = []),
        (this.trecord = {
          empID: "",
          tID: "",
          sDate: "",
          eDate: "",
        });
    },
    addwRecord() {
      if (
        this.trecord.empID == "" ||
        this.trecord.sDate == "" ||
        this.trecord.eDate == ""
      ) {
        alert("Must complete form");
      } else if (this.trecord.trainingID == "") {
        alert("Must enter Training ID first");
      } else {
        this.trecord.tID = this.form.trainingID;
        this.dynamicform.push(this.trecord);
        this.trecord = {
          empID: "",
          sDate: "",
          tID: "",
          eDate: "",
        };
      }
    },
    removeform(index) {
      this.dynamicform.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-bottom: 2rem;
  font-size: 2.5rem;
}

label {
  text-align: right;
  padding: 10px 0 0 0;
}

input,
textarea.form-control,
.mb-3,
.my-3 {
  border-radius: 1.25rem;
  background-color: #fff0;
}
</style>