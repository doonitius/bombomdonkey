<template>
  <div id="AddForm">
    <form @submit.prevent="register">
      <div>
        <label>Telephone</label>
        <input type="tel" name="phone" v-model="phone" />
      </div>
      <div>
        <label>Email</label>
        <input type="text" name="email" v-model="email" />
      </div>
      <div>
        <h3>Personal Information</h3>
        <div>
          <label>First name</label>
          <br />
          <input type="text" name="firstname" v-model="firstname" />
          <h4 v-if="firstnameInvalid === true">*first name required</h4>
        </div>
        <div>
          <label>Last name</label>
          <br />
          <input type="text" name="lastname" v-model="lastname" />
        </div>
        <div>
          <label>Gender</label>
          <select name="gender" v-model="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label>Birth date</label>
          <br />
          <input type="date" name="birth" v-model="birth" />
        </div>
        <div>
          <label>Religion</label>
          <br />
          <input type="text" name="religion" v-model="religion" />
        </div>
      </div>
      <div>
        <h3>Address</h3>
        <div>
          <label>Address</label>
          <br />
          <input type="text" name="adress" v-model="adress" />
        </div>
        <div>
          <label>Street</label>
          <br />
          <input type="text" name="street" v-model="street" />
        </div>
        <div>
          <label>City</label>
          <br />
          <input type="text" name="city" v-model="city" />
        </div>
        <div>
          <label>Country</label>
          <br />
          <input type="text" name="country" v-model="country" />
        </div>
        <div>
          <label>ZIP Code</label>
          <br />
          <input type="text" name="zip" v-model="zip" />
        </div>
      </div>
      <div>
        <h3>Employee Information</h3>
        <div>
          <label>Employee ID</label>
          <br />
          <input
            type="text"
            name="employeeid"
            v-model="employeeid"
            placeholder="EMxxxxx"
          />
        </div>
        <div>
          <label>Position ID</label>
          <br />
          <input
            type="text"
            name="positionid"
            v-model="positionid"
            placeholder="POxxx"
          />
        </div>
        <div>
          <label>DepartmentID ID</label>
          <br />
          <input
            type="text"
            name="departmentid"
            v-model="departmentid"
            placeholder="DPxxx"
          />
        </div>
        <div>
          <label>Branch ID</label>
          <br />
          <input
            type="text"
            name="branchid"
            v-model="branchid"
            placeholder="BRxx"
          />
        </div>
      </div>
      <button type="submit">Next</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddForm",
  data() {
    return {
      firstname: "",
      lastname: "",
      phone: "",
      gender: "",
      email: "",
      birth: "",
      religion: "",
      nation: "",
      address: "",
      street: "",
      city: "",
      country: "",
      zip: "",
      employeeid: "",
      positionid: "",
      departmentid: "",
      branchid: "",
      firstnameInvalid: false,
    };
  },
  method: {
    register() {
      this.$router.push("/mainpage");
    },
  },
};
</script>

<style></style>
