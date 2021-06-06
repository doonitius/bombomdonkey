<template>
  <div>
    <bar2 />
    <div id="mainform">
      <b-form @submit.prevent="checkEmpty" id="form">
        <h3>Position Information</h3>
        <b-form-group
          id="input-group-1"
          label="Position ID:"
          label-for="input-1"
          description="EX. PO123"
        >
          <input
            id="input-1"
            class="form-control"
            v-model="posform.positionID"
            type="text"
            placeholder="POxxx"
            pattern="[P]{1}[O]{1}[0-9]{3}"
            required
          />
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Department ID:"
          label-for="input-2"
          description="EX. DP12"
        >
          <input
            id="input-2"
            class="form-control"
            v-model="posform.departmentID"
            type="text"
            placeholder="DPxx"
            pattern="[D]{1}[P]{1}[0-9]{2}"
            required
          />
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Position Title:"
          label-for="input-3"
        >
          <b-form-input id="input-3" v-model.trim="posform.posT" type="text" />
        </b-form-group>

        <b-form-group
          class="fixBd"
          id="input-group-4"
          label="Max salary:"
          label-for="input-4"
        >
          <b-input-group prepend="$">
            <b-form-input
              id="input-4"
              v-model="posform.maxSalary"
              type="number"
              required
            />
          </b-input-group>
        </b-form-group>

        <b-form-group
          class="fixBd"
          id="input-group-5"
          label="Min salary:"
          label-for="input-5"
        >
          <b-input-group prepend="$">
            <b-form-input
              id="input-5"
              v-model="posform.minSalary"
              type="number"
              required
            />
          </b-input-group>
        </b-form-group>

        <b-form-group
          id="input-group-6"
          label="Base work hour:"
          label-for="input-6"
        >
          <b-form-input
            id="input-6"
            v-model="posform.bWorkHour"
            type="number"
            required
          />
        </b-form-group>

        <h3>Department Information</h3>
        <b-badge variant="info">Optional</b-badge>
        <b-form-group
          id="input-group-1"
          label="Department ID:"
          label-for="input-1"
          description="EX. DP12"
        >
          <input
            class="form-control"
            id="input-1"
            v-model="departform.departmentID"
            type="text"
            placeholder="DPxx"
            pattern="[D]{1}[P]{1}[0-9]{2}"
          />
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Branch ID:"
          label-for="input-2"
          description="EX. BR12"
        >
          <input
            class="form-control"
            id="input-2"
            v-model="departform.branchID"
            type="text"
            placeholder="BRxx"
            pattern="[B]{1}[R]{1}[0-9]{2}"
          />
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Department Title:"
          label-for="input-3"
        >
          <b-form-input
            id="input-3"
            v-model="departform.departmentT"
            type="text"
          />
        </b-form-group>

        <b-form-group
          id="input-group-4"
          label="Manager ID:"
          label-for="input-4"
          description="EX.EM123"
        >
          <input
            class="form-control"
            id="input-4"
            v-model="departform.managerID"
            type="text"
            placeholder="EMxxx"
            pattern="[E]{1}[M]{1}[0-9]{3}"
          />
        </b-form-group>
        <hr />
        <Button />
      </b-form>
      <div></div>
    </div>
  </div>
</template>

<script>
import bar2 from "@/components/bar2.vue";
import posi from "../../service/position";
import Button from "@/components/button.vue";
export default {
  name: "addpositon",
  components: {
    bar2,
    Button,
  },
  data() {
    return {
      posform: {
        positionID: "",
        departmentID: "",
        posT: "",
        minSalary: 0,
        maxSalary: 0,
        bWorkHour: 0,
      },
      departform: {
        departmentID: "",
        branchID: "",
        departmentT: "",
        managerID: "",
      },
      em1: true,
      em2: true,
    };
  },
  methods: {
    checkEmpty() {
      if (
        this.departform.departmentID != "" ||
        this.departform.branchID != "" ||
        this.departform.departmentT != "" ||
        this.departform.managerID != ""
      ) {
        if (
          this.departform.departmentID == "" ||
          this.departform.branchID == "" ||
          this.departform.departmentT == "" ||
          this.departform.managerID == ""
        ) {
          alert("Must complete the department form");
        } else {
          this.positionsubmit();
        }
      } else {
        this.positionsubmit();
      }
    },
    positionsubmit() {
      alert(JSON.stringify(this.posform));
      alert(JSON.stringify(this.departform));
      posi.create(this.posform).then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err.message);
        }
      );
      posi.createDe(this.departform).then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err.message);
        }
      );
      this.posform = {
        positionID: "",
        departmentID: "",
        posT: "",
        minSalary: 0,
        maxSalary: 0,
        bWorkHour: 0,
      };
      this.departform = {
        departmentID: "",
        branchID: "",
        departmentT: "",
        managerID: "",
      };
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
</style>