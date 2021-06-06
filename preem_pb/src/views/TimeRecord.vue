<template>
  <div>
    <bar2 />
    <div id="mainform">
      <b-form @submit.prevent="timesubmit" id="form">
        <h3>Attendence Record</h3>
        <b-form-group
          id="input-group-1"
          label="Employee ID:"
          label-for="input-1"
          description="EX. EM123"
        >
          <input
            id="input-1"
            class="form-control"
            v-model="form.employeeID"
            type="text"
            placeholder="EMxxx"
            pattern="[E]{1}[M]{1}[0-9]{3}"
            required
          />
        </b-form-group>

        <b-form-group id="input-group-2" label="Date:" label-for="input-2">
          <b-form-input id="input-2" v-model="form.date" type="date" required />
        </b-form-group>

        <b-form-group id="input-group-3" label="Status:" label-for="input-3">
          <b-form-select v-model="form.status" id="input-3" class="mb-3">
            <b-form-select-option value="O">Ontime</b-form-select-option>
            <b-form-select-option value="L">Late</b-form-select-option>
            <b-form-select-option value="SL">Sick leave</b-form-select-option>
            <b-form-select-option value="CL">Casual leave</b-form-select-option>
            <b-form-select-option value="ML"
              >Maternity leave</b-form-select-option
            >
            <b-form-select-option value="PL"
              >Paternity leave</b-form-select-option
            >
            <b-form-select-option value="BL"
              >Bereavement leave</b-form-select-option
            >
            <b-form-select-option value="CSL"
              >Compensatory leave</b-form-select-option
            >
            <b-form-select-option value="SCL"
              >Sabbatical leave</b-form-select-option
            >
            <b-form-select-option value="UL">Unpaid Leave</b-form-select-option>
          </b-form-select>
        </b-form-group>

        <b-form-group id="input-group-4" label="Work hour:" label-for="input-4">
          <b-form-input
            id="input-4"
            v-model="form.workHour"
            type="number"
            required
          />
        </b-form-group>

        <b-form-group id="input-group-5" label="Detail:" label-for="input-5">
          <b-form-textarea
            id="input-5"
            v-model="form.detail"
            type="text"
            row="6"
            no-resize
            placeholder="Detail for leave..."
          />
        </b-form-group>
        <Button />
      </b-form>
    </div>
  </div>
</template>

<script>
import bar2 from "@/components/bar2.vue";
import timeRecord from "../../service/timeRecord";
import Button from "@/components/button.vue";
export default {
  name: "timerecord",
  components: {
    bar2,
    Button,
  },
  data() {
    return {
      form: {
        employeeID: "",
        date: "",
        status: "",
        workHour: 0,
        detail: "",
      },
    };
  },
  methods: {
    timesubmit() {
      alert(JSON.stringify(this.form));
      timeRecord.create(this.form).then(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error.message);
        }
      );

      (this.form.employeeID = ""),
        (this.form.date = ""),
        (this.form.status = ""),
        (this.form.workHour = 0),
        (this.form.detail = "");
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