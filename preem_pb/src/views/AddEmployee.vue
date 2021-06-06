<template>
  <div>
    <Bar2 />
    <div id="mainform">
      <b-form @submit.prevent="addemployee">
        <div id="form">
          <h3>Personal Information</h3>

          <!-- <form class="row g-3"> -->
          <!-- <div class="col-md-6"> -->
          <div class="left">
            <b-form-group
              id="input-group-1"
              label="First name:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model.trim="form.firstName"
                type="text"
                required
              />
            </b-form-group>
            <!-- </div> -->
          </div>

          <!-- <div class="col-md-6"> -->
          <div class="right">
            <b-form-group
              id="input-group-2"
              label="Last name:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model.trim="form.lastName"
                type="text"
                required
              />
            </b-form-group>
            <!-- </div> -->
          </div>

          <!-- <div class="col-md-2"> -->
          <div class="smallLeft">
            <b-form-group
              id="input-group-3"
              label="Gender:"
              label-for="input-3"
            >
              <b-form-select
                v-model="form.gender"
                id="input-3"
                class="mb-3"
                required
              >
                <b-form-select-option value="male">Male</b-form-select-option>
                <b-form-select-option value="female"
                  >Female</b-form-select-option
                >
                <b-form-select-option b-form-select-option value="other"
                  >Other</b-form-select-option
                >
              </b-form-select>
            </b-form-group>
          </div>

          <!-- <div class="col-md-4"> -->
          <div class="medianLeftLast">
            <b-form-group
              id="input-group-4"
              label="Birth date:"
              label-for="input-4"
            >
              <b-form-input
                id="input-4"
                v-model="form.birthDate"
                type="date"
                required
              />
            </b-form-group>
          </div>

          <div class="normal">
            <b-form-group
              id="input-group-5"
              label="Religion:"
              label-for="input-5"
            >
              <b-form-input
                id="input-5"
                v-model.trim="form.religion"
                type="text"
              />
            </b-form-group>
          </div>

          <div class="normal">
            <b-form-group
              id="input-group-6"
              label="Nationality:"
              label-for="input-6"
            >
              <b-form-input
                id="input-6"
                v-model.trim="form.nation"
                type="text"
                required
              />
            </b-form-group>
          </div>

          <div class="normal">
            <b-form-group
              id="input-group-99"
              label="Email:"
              label-for="input-99"
            >
              <b-form-input
                id="input-99"
                v-model.trim="form.email"
                type="email"
                placeholder="example@email.com"
                required
              />
            </b-form-group>
          </div>

          <div class="normal">
            <b-form-group id="input-group-66" label="Tel:" label-for="input-66">
              <input
                id="input-66"
                class="form-control"
                v-model="form.tel"
                type="tel"
                pattern="[0-9]{10}"
                placeholder="1234567890"
                required
              />
            </b-form-group>
          </div>

          <!-- </form> -->
        </div>
        <div id="form">
          <h3>Address</h3>
          <!-- <form class="row g-3"> -->
          <div class="left">
            <b-form-group
              id="input-group-8"
              label="Street:"
              label-for="input-8"
            >
              <b-form-input
                id="input-8"
                v-model.trim="form.street"
                type="text"
                required
              />
            </b-form-group>
          </div>

          <div class="right">
            <b-form-group id="input-group-9" label="City:" label-for="input-9">
              <b-form-input
                id="input-9"
                v-model.trim="form.city"
                type="text"
                required
              />
            </b-form-group>
          </div>

          <div class="smallLeft">
            <b-form-group
              id="input-group-10"
              label="ZIP Code:"
              label-for="input-10"
            >
              <b-form-input
                id="input-10"
                v-model="form.zip"
                type="text"
                required
              />
            </b-form-group>
          </div>
          <!-- </form> -->
        </div>
        <div id="form">
          <h3>Employee Information</h3>
          <!-- <form class="row g-3"> -->
          <div class="normal">
            <br />
            <b-form-group
              id="input-group-11"
              label="EmployeeID:"
              label-for="input-11"
              description="EX. EM123"
            >
              <input
                id="input-11"
                class="form-control"
                v-model="form.employeeID"
                type="text"
                placeholder="EMxxx"
                pattern="[E]{1}[M]{1}[0-9]{3}"
                required
              />
            </b-form-group>
          </div>
          <div class="normal">
            <b-form-group
              id="input-group-12"
              label="PositionID:"
              label-for="input-12"
              description="EX. PO123"
            >
              <input
                id="input-12"
                class="form-control"
                v-model="form.positionID"
                type="text"
                placeholder="POxxx"
                pattern="[P]{1}[O]{1}[0-9]{3}"
                required
              />
            </b-form-group>
          </div>
          <div class="medianLeftLast">
            <b-form-group
              id="input-group-13"
              label="Joined:"
              label-for="input-13"
            >
              <b-form-input
                id="input-13"
                v-model="form.joined"
                type="date"
                required
              />
            </b-form-group>
          </div>
          <div>
            <b-form-group
              id="input-group-13"
              label="Picture:"
              label-for="input-13"
            >
              <b-form-file
                v-model="form.pic"
                class="mt-3"
                type="file"
                plain
                required
              ></b-form-file>
            </b-form-group>
          </div>
          <!-- </form> -->
          <hr />
          <Button />

          <button class="BackButt" @click="back">
            <b-icon icon="caret-left-fill" aria-hidden="true"></b-icon>
            BACK
          </button>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import Bar2 from "@/components/bar2.vue";
import employee from "../../service/employee";
import Button from "@/components/button.vue";
// import AddButt from "@/components/AddButt.vue";
export default {
  name: "AddEmployee",
  components: {
    Bar2,
    Button,
    // AddButt,
  },
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        gender: "",
        birthDate: "",
        religion: "",
        nation: "",
        tel: "",
        email: "",
        street: "",
        city: "",
        zip: "",
        joined: "",
        employeeID: "",
        positionID: "",
        pic: null,
      },
    };
  },
  methods: {
    addemployee() {
      alert(JSON.stringify(this.form));
      employee.create(this.form).then(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error.message);
        }
      );
      this.form = {
        firstName: "",
        lastName: "",
        gender: "",
        birthDate: "",
        religion: "",
        nation: "",
        tel: "",
        email: "",
        street: "",
        city: "",
        zip: "",
        joined: "",
        employeeID: "",
        positionID: "",
        pic: "",
      };
    },
    back() {
      this.$router.push("/employee");
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

#form {
  max-width: 1000px !important;
}

label {
  text-align: right;
  padding: 10px 0 0 0;
  width: 50%;
}

body {
  background: linear-gradient(to right, #78a7ba 0%, #385d6c 50%, #78a7ba 99%);
}

.smallLeft {
  width: 20%;
  margin-right: 100px;
  border-radius: 1.25rem;
}
.smallLeft:focus {
  color: #fff;
  background-color: #000000e7 !important;
  border-color: #1ecbff;
  box-shadow: 0 0 8px 0 #1ecbff83;
}
.error {
  color: red;
}
</style>


