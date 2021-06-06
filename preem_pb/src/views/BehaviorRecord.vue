<template>
  <div>
    <bar2 />
    <div id="mainform">
      <b-form @submit.prevent="behavesubmit" id="form">
        <h3>Behavior Record</h3>
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
          <b-form-input
            id="input-2"
            v-model="form.behavedate"
            type="date"
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
        <hr />
        <Button />
      </b-form>
    </div>
  </div>
</template>

<script>
import bar2 from "@/components/bar2.vue";
import Behavior from "../../service/behavior";
import Button from "@/components/button.vue";
export default {
  name: "behavior",
  components: {
    bar2,
    Button,
  },

  data() {
    return {
      form: {
        employeeID: "",
        behavedate: "",
        detail: "",
      },
    };
  },
  methods: {
    behavesubmit() {
      Behavior.create(this.form).then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err.message);
        }
      );
      (this.form.employeeID = ""),
        (this.form.behavedate = ""),
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
</style>