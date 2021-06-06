<template>
  <div>
    <bar2 />
    <div id="mainform">
      <b-form @submit.prevent="historysubmit">
        <!-- ให้มันแบ่ง -->
        <div id="form">
          <b-form-group
            id="input-group-1"
            label="Employee ID:"
            label-for="input-1"
            description="EX. EM123"
          >
            <input
              id="input-1"
              class="form-control"
              v-model="employeeID"
              type="text"
              placeholder="EMxxx"
              pattern="[E]{1}[M]{1}[0-9]{3}"
              required
            />
          </b-form-group>
        </div>

        <!-- ให้มันแบ่ง -->
        <div id="form">
          <h3>Education History</h3>
          <b-form-group
            id="input-group-2"
            label="University:"
            label-for="input-2"
          >
            <b-form-input id="input-2" v-model="eduform.uni" type="text" />
          </b-form-group>

          <b-form-group id="input-group-3" label="Faculty:" label-for="input-3">
            <b-form-input id="input-3" v-model="eduform.faculty" type="text" />
          </b-form-group>

          <b-form-group
            id="input-group-4"
            label="Department:"
            label-for="input-4"
          >
            <b-form-input
              id="input-4"
              v-model="eduform.department"
              type="text"
            />
          </b-form-group>

          <b-form-group id="input-group-5" label="GPA:" label-for="input-5">
            <b-form-input id="input-5" v-model="eduform.gpa" type="number" />
          </b-form-group>

          <b-form-group
            id="input-group-6"
            label="Transcript file:"
            label-for="input-6"
          >
            <b-form-file
              v-model="eduform.tranfile"
              class="mt-3"
              plain
            ></b-form-file>
          </b-form-group>

          <b-Button pill variant="info" class="add" @click="addEdu"
            >Add</b-Button
          >

          <div v-for="(eduform, index) in dynamicedu" :key="index">
            {{ eduform.empID }},{{ eduform.uni }},{{ eduform.faculty }},{{
              eduform.department
            }},{{ eduform.gpa }},{{ eduform.tranfile }}
            <b-button variant="danger" @click="removeEdu(index)">X</b-button>
          </div>
        </div>

        <!-- ให้มันแบ่ง -->
        <div id="form">
          <h3>Work History</h3>
          <b-form-group id="input-group-7" label="Company:" label-for="input-7">
            <b-form-input id="input-7" v-model="workform.company" type="text" />
          </b-form-group>

          <b-form-group
            id="input-group-8"
            label="Position:"
            label-for="input-8"
          >
            <b-form-input
              id="input-8"
              v-model="workform.position"
              type="text"
            />
          </b-form-group>

          <b-form-group
            id="input-group-9"
            label="Year Experience:"
            label-for="input-9"
          >
            <b-form-input id="input-9" v-model="workform.exp" type="number" />
          </b-form-group>
          <b-button pill variant="info" class="add" @click="addWork"
            >Add</b-button
          >
          <div v-for="(workform, index) in dynamicwork" :key="index">
            {{ workform.empID }},{{ workform.company }},{{
              workform.position
            }},{{ workform.exp }}
            <b-button variant="danger" @click="removeWork(index)">X</b-button>
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
import his from "../../service/history";
import Button from "@/components/button.vue";
export default {
  name: "addhistory",
  methods: {
    historysubmit() {
      alert(JSON.stringify(this.dynamicedu));
      alert(JSON.stringify(this.dynamicwork));
      his.createEdu(this.dynamicedu).then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err.message);
        }
      );
      his.createWork(this.dynamicwork).then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err.message);
        }
      );
      (this.eduform = {
        empID: "",
        uni: "",
        faculty: "",
        department: "",
        gpa: "",
        // tranfile:"",
      }),
        (this.dynamicedu = []),
        (this.workform = {
          empID: "",
          company: "",
          position: "",
          exp: 0,
        }),
        (this.dynamicwork = []);
    },
    addEdu() {
      if (
        this.eduform.uni == "" ||
        this.eduform.faculty == "" ||
        this.eduform.department == "" ||
        this.eduform.gpa == ""
      ) {
        alert("Must complete form");
      } else {
        this.eduform.empID = this.employeeID;
        this.dynamicedu.push(this.eduform);
        this.eduform = {
          uni: "",
          faculty: "",
          department: "",
          gpa: "",
          // tranfile:""}
        };
      }
    },
    addWork() {
      if (
        this.workform.company == "" ||
        this.workform.position == "" ||
        this.workform.exp == 0
      ) {
        alert("Must complete form");
      } else {
        this.workform.empID = this.employeeID;
        this.dynamicwork.push(this.workform);
        this.workform = {
          company: "",
          position: "",
          exp: 0,
        };
      }
    },
    removeEdu(index) {
      this.dynamicedu.splice(index, 1);
    },
    removeWork(index) {
      this.dynamicwork.splice(index, 1);
    },
  },
  components: {
    bar2,
    Button,
  },
  data() {
    return {
      employeeID: "",
      eduform: {
        empID: "",
        uni: "",
        faculty: "",
        department: "",
        gpa: "",
        // tranfile:"",
      },
      dynamicedu: [],
      workform: {
        empID: "",
        company: "",
        position: "",
        exp: 0,
      },
      dynamicwork: [],
    };
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