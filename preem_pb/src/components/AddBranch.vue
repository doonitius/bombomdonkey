<template>
  <div id="adddbranch">
    <Bar />
    <b-form @submit.prevent="positionsubmit" id="form">
      <h3>Branch Information</h3>
      <b-form-group id="input-group-1" label="Branch ID:" label-for="input-1">
        <b-form-input id="input-1" v-model="form.b" type="text" required />
      </b-form-group>

      <b-form-group id="input-group-2" label="Tel:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.tel" type="text" required />
      </b-form-group>

      <b-form-group id="input-group-3" label="Address:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.address"
          type="text"
          required
        />
      </b-form-group>

      <b-button pill variant="info" id="submit" type="submit">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import Bar from "@/components/Bar.vue";
// import HRbar from "@/components/HRbar.vue";
import Behavior from "../../service/behavior";
export default {
  name: "adddepartment",
  components: {
    Bar,
  },
  data() {
    return {
      form: {
        branchID: "",
        tel: "",
        address: "",
      },
    };
  },
  methods: {
    departmentsubmit() {
      alert(JSON.stringify(this.form));
      Behavior.create(this.form).then(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error.message);
        }
      );
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

#submit {
  padding: 8px 68px 10px;
  margin: 35px 0 0 0;
  width: 100%;
}

#form {
  font-family: "Nunito", sans-serif;
  font-family: "Nunito Sans", sans-serif;
  max-width: 500px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 60px;
  background-color: #f2f2f2;
  width: 700px;
  padding: 35px 35px 45px;
  top: 10%;
  width: 100%;
  font-size: 15px;
}

label {
  text-align: right;
  padding: 10px 0 0 0;
}

input[type="date"] {
  width: 45%;
}

input[type="number"] {
  width: 45%;
}
</style>