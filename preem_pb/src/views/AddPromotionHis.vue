<template>
  <div>
    <Bar2 />
    <div id="mainform">
      <b-form @submit.prevent="promosubmit" id="form">
        <h3>Promotion History</h3>
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

        <b-form-group
          id="input-group-2"
          label="Promotion Date:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.pdate"
            type="date"
            required
          />
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Previous Position ID:"
          label-for="input-3"
          description="EX. PO123"
        >
          <input
            id="input-3"
            class="form-control"
            v-model="form.ppID"
            type="text"
            placeholder="POxxx"
            pattern="[P]{1}[O]{1}[0-9]{3}"
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
import Bar2 from "@/components/bar2.vue";
import promoHis from "../../service/promoHis";
import Button from "@/components/button.vue";
export default {
  name: "promotionhis",
  components: {
    Bar2,
    Button,
  },
  data() {
    return {
      form: {
        employeeID: "",
        pdate: "",
        ppID: "",
      },
    };
  },
  methods: {
    promosubmit() {
      promoHis.create(this.form).then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err.message);
        }
      );
      (this.form.employeeID = ""),
        (this.form.pdate = ""),
        (this.form.ppID = "");
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