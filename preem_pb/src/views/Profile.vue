<template>
  <div>
    <!-- popupp vv -->
    <!-- <div>{{ profile.Birthdate }}</div> -->
    <b-modal
      v-model="modalShow"
      hide-footer
      title="Edit information"
      @hidden="resetModal"
    >
      <form @submit.prevent="editInfo">
        <b-form-group label="Name" label-for="name-input">
          <b-form-input
            id="name-input"
            v-model="Newprofile.Name"
            type="text"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Surname:" label-for="surname-input">
          <b-form-input
            id="surname-input"
            v-model.trim="Newprofile.Surname"
            type="text"
          />
        </b-form-group>

        <b-form-group label="Gender:" label-for="input-3">
          <b-form-select v-model="Newprofile.Gender" id="input-3" class="mb-3">
            <b-form-select-option value="male">Male</b-form-select-option>
            <b-form-select-option value="female">Female</b-form-select-option>
            <b-form-select-option b-form-select-option value="other"
              >Other</b-form-select-option
            >
          </b-form-select>
        </b-form-group>

        <b-form-group label="Birth date:" label-for="input-4">
          <b-form-input
            id="input-4"
            v-model="Newprofile.Birthdate"
            type="date"
          />
        </b-form-group>

        <b-form-group id="input-group-5" label="Religion:" label-for="input-5">
          <b-form-input
            id="input-5"
            v-model.trim="Newprofile.Religion"
            type="text"
          />
        </b-form-group>

        <b-form-group
          id="input-group-6"
          label="Nationality:"
          label-for="input-6"
        >
          <b-form-input
            id="input-6"
            v-model.trim="Newprofile.Nationality"
            type="text"
          />
        </b-form-group>

        <b-form-group id="input-group-99" label="Email:" label-for="input-99">
          <b-form-input
            id="input-99"
            v-model.trim="Newprofile.Email"
            type="email"
          />
        </b-form-group>

        <b-form-group id="input-group-66" label="Tel:" label-for="input-66">
          <input
            id="input-66"
            class="form-control"
            v-model="Newprofile.Tel"
            type="tel"
            pattern="[0-9]{10}"
          />
        </b-form-group>

        <b-form-group id="input-group-8" label="Street:" label-for="input-8">
          <b-form-input
            id="input-8"
            v-model.trim="Newprofile.street"
            type="text"
          />
        </b-form-group>

        <b-form-group id="input-group-9" label="City:" label-for="input-9">
          <b-form-input
            id="input-9"
            v-model.trim="Newprofile.City"
            type="text"
          />
        </b-form-group>

        <b-form-group
          id="input-group-10"
          label="ZIP Code:"
          label-for="input-10"
        >
          <b-form-input id="input-10" v-model="Newprofile.zip" type="text" />
        </b-form-group>
        <b-button variant="success" type="submit">Update</b-button>
      </form>
    </b-modal>
    <!-- popup ^^ -->
    <bar2 />
    <div>
      <div id="mainform">
        <div style="padding-bottom: 70px">
          <h2>My Profile > {{ profile.EmployeeID }}</h2>
          <div>
            <img
              src="../assets/propic.jpg"
              alt="HR image"
              style="width: 300px; height: 300px"
            />
            <!-- ปุ่มแก้ลบ -->
            <div>
              <b-button class="delButt" @click="clickdel"
                >Delete
                <b-icon icon="trash" aria-hidden="true"></b-icon>
              </b-button>
              <!-- ปุ่มแก้ลบ -->
            </div>
            <div>
              <!-- ปุ่มแก้ลบ -->
              <b-button class="editButt" @click="clickModal"
                >Edit
                <b-icon icon="pen" aria-hidden="true"></b-icon>
              </b-button>
            </div>
            <!-- ปุ่มแก้ลบ -->
          </div>

          <div id="boxPale">
            <h3>Personal Information</h3>
            <b-container class="bv-example-row">
              <b-row>
                <b-col class="headInfo" cols="3">First name:</b-col>
                <b-col class="info" cols="4">{{ profile.Name }}</b-col>
              </b-row>
              <b-row>
                <b-col class="headInfo" cols="3">Last name:</b-col>
                <b-col class="info" cols="4">{{ profile.Surname }}</b-col>
              </b-row>
              <b-row>
                <b-col class="headInfo" cols="3">Gender:</b-col>
                <b-col class="info" cols="4">{{ profile.Gender }}</b-col>
              </b-row>
              <b-row>
                <b-col class="headInfo" cols="3">Birth Date:</b-col>
                <b-col class="info" cols="6">{{ profile.Birthdate }}</b-col>
              </b-row>
              <b-row>
                <b-col class="headInfo" cols="3">Religion:</b-col>
                <b-col class="info" cols="4">{{ profile.Religion }}</b-col>
              </b-row>
              <b-row>
                <b-col class="headInfo" cols="3">Nationality:</b-col>
                <b-col class="info" cols="4">{{ profile.Nationality }}</b-col>
              </b-row>
              <b-row>
                <b-col class="headInfo" cols="3">Tel:</b-col>
                <b-col class="info" cols="4">{{ profile.Tel }}</b-col>
              </b-row>
              <b-row>
                <b-col class="headInfo" cols="3">Email:</b-col>
                <b-col class="info" cols="4">{{ profile.Email }}</b-col>
              </b-row>
            </b-container>
          </div>

          <div id="boxPale">
            <h3>Address</h3>
            <b-container class="bv-example-row">
              <b-row>
                <b-col class="headInfo" cols="3">Street:</b-col>
                <b-col class="info" cols="4">{{ profile.street }}</b-col>
              </b-row>
              <b-row>
                <b-col class="headInfo" cols="3">City:</b-col>
                <b-col class="info" cols="4">{{ profile.City }}</b-col>
              </b-row>
              <b-row>
                <b-col class="headInfo" cols="3">ZIP Code:</b-col>
                <b-col class="info" cols="4">{{ profile.zip }}</b-col>
              </b-row>
            </b-container>
          </div>

          <div id="boxPale">
            <h3>Work</h3>
            <b-container class="bv-example-row">
              <b-row>
                <b-col class="headInfo" cols="3">Employee ID:</b-col>
                <b-col class="info" cols="4">{{ profile.EmployeeID }}</b-col>
              </b-row>
              <b-row>
                <b-col class="headInfo" cols="3">Position ID:</b-col>
                <b-col class="info" cols="4">{{ profile.PositionID }}</b-col>
              </b-row>
            </b-container>
          </div>

          <div class="buntut">
            <b-button class="viewOwnInfo" variant="info" @click="clickEdu"
              >Education History
              <b-icon icon="arrow-right-circle" aria-hidden="true"></b-icon
            ></b-button>
          </div>
          <div class="buntut">
            <b-button class="viewOwnInfo" variant="info" @click="clickWork"
              >Work History
              <b-icon icon="arrow-right-circle" aria-hidden="true"></b-icon>
            </b-button>
          </div>
          <div class="buntut">
            <b-button class="viewOwnInfo" variant="info" @click="clickProh"
              >Promotion History
              <b-icon icon="arrow-right-circle" aria-hidden="true"></b-icon
            ></b-button>
          </div>

          <div>
            <button class="BackButt" @click="back" left>
              <b-icon icon="caret-left-fill" aria-hidden="true"></b-icon>
              BACK
            </button>
          </div>

          <b-modal v-model="delModal" @ok="sureDel">Are you sure daddy</b-modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bar2 from "@/components/bar2.vue";
import employee from "../../service/employee";
export default {
  name: "Profile",
  components: {
    bar2,
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
      render: true,
      seriesPayment: [
        {
          name: "$",
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        },
      ],
      optionPayment: {
        chart: {
          height: 350,
          type: "bar",
        },

        plotOptions: {
          bar: {
            columnWidth: "45%",
            distributed: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          labels: {
            style: {
              fontSize: "12px",
            },
          },
        },
      },
    };
  },
  created() {
    this.IDemp.employeeID = this.$store.state.profileID;
    this.IDemp.employeeID = localStorage.getItem("foundEID");
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
      this.$router.push("/educationhistory");
    },
    clickWork() {
      this.$router.push("/workhistory");
    },
    clickProh() {
      this.$router.push("/promotionhistory");
    },
    back() {
      localStorage.removeItem("foundEID");
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
      this.IDemp.employeeID = this.$store.state.profileID;
      employee.delete(this.IDemp).then(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error.message);
        }
      );
      this.$router.push("/employee");
    },
    AlertMe() {},
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

img {
  margin-top: 50px;
  border: 1px solid #f2f2f21f;
  box-shadow: 3px 5px 20px 0px #0000004f !important;
  border-radius: 1.5rem;
}
</style>
