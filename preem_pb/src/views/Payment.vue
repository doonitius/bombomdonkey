<template>
  <div>
    <bar2 />
    <div id="mainform">
      <b-form @submit.prevent="paymentsubmit" id="form">
        <h3>Payment Slip</h3>

        <b-form-group
          id="input-group-1"
          label="EmployeeID:"
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
          label="PaymentID:"
          label-for="input-2"
          description="EX. PAY1234567"
        >
          <input
            id="input-2"
            class="form-control"
            v-model="form.paymentID"
            type="text"
            placeholder="PAYxxxxxxx"
            pattern="[P]{1}[A]{1}[Y]{1}[0-9]{7}"
            required
          />
        </b-form-group>

        <b-form-group id="input-group-3" label="Date:" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="form.paymentdate"
            type="date"
            required
          />
        </b-form-group>

        <b-form-group label="Deduction:">
          <b-form-checkbox-group
            id="input-5"
            v-model="form.deduction"
            name="input-5"
          >
            <b-form-checkbox value="DD1">DD1</b-form-checkbox>
            <b-form-checkbox value="DD2">DD2</b-form-checkbox>
            <b-form-checkbox value="DD3">DD3</b-form-checkbox>
            <b-form-checkbox value="DD4">DD4</b-form-checkbox>
            <b-form-checkbox value="DD5">DD5</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <b-form-group id="input-group-4" label="Tax:" label-for="input-4">
          <b-input-group prepend="$">
            <b-form-input
              class="fixBd"
              id="input-4"
              v-model="form.tax"
              type="number"
              required
            />
          </b-input-group>
        </b-form-group>

        <b-form-group
          id="input-group-6"
          label="Pay amount:"
          label-for="input-6"
        >
          <b-input-group prepend="$">
            <b-form-input
              class="fixBd"
              id="input-6"
              v-model="form.pAmount"
              type="number"
              required
            />
          </b-input-group>
        </b-form-group>

        <hr />
        <Button />
      </b-form>
    </div>
  </div>
</template>

<script>
import bar2 from "@/components/bar2.vue";
import pay from "../../service/payment";
import Button from "@/components/button.vue";
export default {
  name: "Payment",
  components: {
    bar2,
    Button,
  },
  data() {
    return {
      form: {
        employeeID: "",
        paymentID: "",
        paymentdate: "",
        deduction: [],
        tax: 0.0,
        pAmount: 0.0,
      },
    };
  },
  methods: {
    paymentsubmit() {
      pay.create(this.form).then(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error.message);
        }
      );
      (this.form.employeeID = ""),
        (this.form.paymentID = ""),
        (this.form.paymentdate = ""),
        (this.form.deduction = []),
        (this.form.tax = 0);
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
</style>