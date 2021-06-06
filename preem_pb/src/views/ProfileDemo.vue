<template>
  <div>
    <div>
      <EmBar />
      <div id="mainform">
        <div style="padding-bottom: 80px">
          <h2>My Profile</h2>
          <div>
            <img
              src="../assets/propic.jpg"
              alt="HR image"
              style="width: 150px; height: 150px"
            />
          </div>
          <div id="boxPale">
            <h3>Personal Information</h3>
            <div>First name: {{ profile.Name }}</div>
            <div>Last name: {{ profile.Surname }}</div>
            <div>Gender: {{ profile.Gender }}</div>
            <div>Birth Date: {{ profile.Birthdate }}</div>
            <div>Religion: {{ profile.Religion }}</div>
            <div>Nationality: {{ profile.Nationality }}</div>
            <div>Tel: {{ profile.Tel }}</div>
            <div>e-mail: {{ profile.Email }}</div>
          </div>
          <div id="boxPale">
            <h3>Address</h3>
            <div>Street: {{ profile.street }}</div>
            <div>City: {{ profile.City }}</div>
            <div>ZIP Code: {{ profile.zip }}</div>
          </div>
          <div id="boxPale">
            <h3>Work</h3>
            <div>Employee ID: {{ profile.EmployeeID }}</div>
            <div>Position ID: {{ profile.PositionID }}</div>
            <!-- <div>Department ID : {{ departmentID }}</div> -->
            <!-- <div>Branch ID: {{ branchID }}</div> -->
          </div>

          <b-button variant="info" @click="clickEdu"
            >Education History</b-button
          >
          <b-button variant="info" @click="clickWork">Work History</b-button>
          <b-button variant="info" @click="clickProh"
            >Promotion History</b-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmBar from "@/components/EmBar.vue";
import employee from "../../service/employee";
export default {
  name: "ProfileDemo",
  components: {
    EmBar,
  },
  data() {
    return {
      profile: {
        Name: "",
        Surname: "",
        Gender: "",
        Birthdate: "",
        Religion: "",
        Nationality: "",
        Tel: "",
        Email: "",
        street: "",
        City: "",
        zip: "",
        Hire: "",
        EmployeeID: "",
        PositionID: "",
        //pic: null,
      },
      IDemp: {
        employeeID: "",
      },
      Newprofile: {},
      modalShow: false,
      delModal: false,
    };
  },
  created() {
    this.IDemp.employeeID = this.$store.state.profileID;
    console.log(this.$store.state.profileID);
    employee.viewOne(this.IDemp).then((res) => {
      if (res) {
        this.profile = res;
        console.log(this.profile);
        console.log(res);
      }
    });
  },
  methods: {
    clickEdu() {
      this.$router.push("/educationhistory/demo");
    },
    clickWork() {
      this.$router.push("/workhistory/demo");
    },
    clickProh() {
      this.$router.push("/promotionhistory/demo");
    },
    back() {
      this.$router.push("/employee");
    },
    editInfo() {
      this.modalShow = false;
      this.profile = this.Newprofile;
      this.Newprofile.employeeID = this.$store.state.profileID;
      console.log(this.profile);
      employee.edit(this.profile).then(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error.message);
        }
      );
    },
    resetModal() {
      this.Newprofile = {};
    },
    clickModal() {
      this.modalShow = !this.modalShow;
      this.Newprofile.Name = this.profile.Name;
      this.Newprofile.Surname = this.profile.Surname;
      this.Newprofile.Gender = this.profile.Gender;
      this.Newprofile.Birthdate = this.profile.Birthdate;
      this.Newprofile.Religion = this.profile.Religion;
      this.Newprofile.Nationality = this.profile.Nationality;
      this.Newprofile.Tel = this.profile.Tel;
      this.Newprofile.Email = this.profile.Email;
      this.Newprofile.street = this.profile.street;
      this.Newprofile.City = this.profile.City;
      this.Newprofile.zip = this.profile.zip;
      this.Newprofile.Hire = this.profile.Hire;
      this.Newprofile.PositionID = this.profile.PositionID;
      this.Newprofile.EmployeeID = this.profile.EmployeeID;
    },
    clickdel() {
      this.delModal = !this.delModal;
    },
    sureDel() {
      alert("DELETE!");
      this.$router.push("/employee");
    },
  },
};
</script>


<style scoped>
.h1,
.h3,
.h4,
.h5,
.h6,
h1,
h3,
h4,
h5,
h6 {
  margin-bottom: 2rem;
  font-size: 2rem;
}

.h2,
h2 {
  margin-top: 60px;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  color: #ffff;
}

label {
  text-align: right;
  padding: 10px 0 0 0;
}
</style>
