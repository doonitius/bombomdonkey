<template>
  <div>
    <bar2 />
    <div id="mainform">
      <b-form @submit.prevent="bonussubmit">
        <div id="form">
          <h3>Bonus Record</h3>
          <b-form-group
            class="fixBd"
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
              v-model="form.bdate"
              type="date"
              required
            />
          </b-form-group>

          <b-form-group id="input-group-3" label="Amount:" label-for="input-3">
            <b-input-group prepend="$">
              <b-form-input
                id="input-3"
                v-model="form.amount"
                type="number"
                required
              />
            </b-input-group>
          </b-form-group>
          <hr />
          <Button />
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import bar2 from "@/components/bar2.vue";
import bonus from "../../service/bonus";
import Button from "@/components/button.vue";
export default {
  name: "bonusrecord",
  components: {
    bar2,
    Button,
  },
  data() {
    return {
      form: {
        employeeID: "",
        bdate: "",
        amount: "",
      },
    };
  },
  methods: {
    bonussubmit() {
      bonus.create(this.form).then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err.message);
        }
      );
      this.form.employeeID = "";
      this.form.bdate = "";
      this.form.amount = "";
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