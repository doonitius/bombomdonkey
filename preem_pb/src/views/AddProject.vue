<template>
  <div>
    <bar2 />
    <div id="mainform">
      <b-form @submit.prevent="projectsubmit">
        <div id="form">
          <h3>Project Information</h3>
          <b-form-group
            id="input-group-1"
            label="ProjectID:"
            label-for="input-1"
            description="EX. PJ1234"
          >
            <input
              id="input-1"
              class="form-control"
              v-model="form.projectID"
              type="text"
              placeholder="PJxxxx"
              pattern="[P]{1}[J]{1}[0-9]{4}"
              required
            />
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="ProjectName:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model.trim="form.projectName"
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

          <b-form-group id="input-group-4" label="Status:" label-for="input-4">
            <b-form-select
              v-model="form.status"
              type="text"
              id="input-4"
              class="mb-3"
            >
              <b-form-select-option value="D">Done</b-form-select-option>
              <b-form-select-option value="O">On going</b-form-select-option>
              <b-form-select-option value="C">Cancel</b-form-select-option>
            </b-form-select>
          </b-form-group>

          <b-form-group
            id="input-group-5"
            label="Start date:"
            label-for="input-5"
          >
            <b-form-input
              id="input-5"
              v-model="form.startDate"
              type="date"
              required
            />
          </b-form-group>

          <b-form-group
            id="input-group-6"
            label="Due date:"
            label-for="input-6"
          >
            <b-form-input
              id="input-6"
              v-model="form.dueDate"
              type="date"
              required
            />
          </b-form-group>

          <b-form-group
            id="input-group-7"
            label="Profit ratio:"
            label-for="input-7"
          >
            <b-input-group append="%">
              <b-form-input
                id="input-7"
                v-model="form.profit"
                type="number"
                required
              />
            </b-input-group>
          </b-form-group>

          <b-form-group
            id="input-group-8"
            label="Project Manager ID:"
            label-for="input-8"
            description="EX. EM123"
          >
            <input
              id="input-8"
              class="form-control"
              v-model="form.pManager"
              type="text"
              placeholder="EMxxx"
              pattern="[E]{1}[M]{1}[0-9]{3}"
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
              id="input-8"
              class="form-control"
              v-model="wrecord.empID"
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
            <b-form-input id="input-9" v-model="wrecord.sDate" type="date" />
          </b-form-group>

          <b-form-group
            id="input-group-6"
            label="Employee Due date:"
            label-for="input-6"
          >
            <b-form-input id="input-6" v-model="wrecord.dDate" type="date" />
          </b-form-group>

          <b-button class="add" variant="success" @click="addwRecord">
            Add
            <b-icon icon="plus-circle" aria-hidden="true"></b-icon>
          </b-button>

          <div v-for="(wrecord, index) in dynamicWrecord" :key="index">
            {{ wrecord.empID }},{{ wrecord.pID }},{{ wrecord.sDate }},{{
              wrecord.dDate
            }}
            <b-button variant="danger" @click="removewform(index)">X</b-button>
          </div>

          <hr />

          <Button />

          <button class="BackButt" @click="back">BACK</button>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import bar2 from "@/components/bar2.vue";
import project from "../../service/project";
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
        projectID: "",
        projectName: "",
        detail: "",
        status: "",
        startDate: "",
        dueDate: "",
        profit: 0,
        pManager: "",
      },
      dynamicWrecord: [],
      wrecord: {
        empID: "",
        pID: "",
        sDate: "",
        dDate: "",
      },
    };
  },
  methods: {
    projectsubmit() {
      alert(JSON.stringify(this.form));
      alert(JSON.stringify(this.dynamicWrecord));
      project.createPro(this.form).then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err.message);
        }
      );
      project.createPar(this.dynamicWrecord).then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err.message);
        }
      );
      (this.form = {
        projectID: "",
        projectName: "",
        detail: "",
        status: "",
        startDate: "",
        dueDate: "",
        profit: 0,
        pManager: "",
      }),
        (this.dynamicWrecord = []),
        (this.wrecord = {
          empID: "",
          pID: "",
          sDate: "",
          dDate: "",
        });
    },
    addwRecord() {
      if (this.wrecord.empID == "") {
        alert("Must complete form");
      } else {
        this.wrecord.pID = this.form.projectID;
        this.dynamicWrecord.push(this.wrecord);
        this.wrecord = {
          empID: "",
          sDate: "",
          dDate: "",
        };
      }
    },
    removewform(index) {
      this.dynamicWrecord.splice(index, 1);
    },
    back() {
      this.$router.push("/project");
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