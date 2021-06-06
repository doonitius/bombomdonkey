<template>
  <div id="ProjectInfo">
    <bar2 />
    <div>
      <div id="mainform">
        <div style="padding-bottom: 70px">
          <h2>Project Information > {{ project.ProjectID }}</h2>

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

          <div id="boxPale">
            <h3>Project Information</h3>
            <b-container class="bv-example-row">
              <b-row>
                <b-col class="headInfo" cols="3">Project ID:</b-col>
                <b-col class="info" cols="4">{{ project.ProjectID }}</b-col>
              </b-row>
              <b-row>
                <b-col class="headInfo" cols="3">Project name:</b-col>
                <b-col class="info" cols="6">{{ project.Name }}</b-col>
              </b-row>
              <b-row>
                <b-col class="headInfo" cols="3">Detail:</b-col>
                <b-col class="info" cols="6">{{ project.Detail }}</b-col>
              </b-row>
              <b-row>
                <b-col class="headInfo" cols="3">Status:</b-col>
                <div v-if="project.Status == 'D'">
                  <b-col class="info" cols="8">Done</b-col>
                </div>
                <div v-else-if="project.Status == 'O'">
                  <b-col class="info" cols="8">On going</b-col>
                </div>
                <div v-else>
                  <b-col class="info" cols="8">Cancel</b-col>
                </div>
              </b-row>
              <b-row>
                <b-col class="headInfo" cols="3">Start date:</b-col>
                <b-col class="info" cols="6">{{ project.StartDate }}</b-col>
              </b-row>
              <b-row>
                <b-col class="headInfo" cols="3">Due date:</b-col>
                <b-col class="info" cols="6">{{ project.DueDate }}</b-col>
              </b-row>
              <b-row>
                <b-col class="headInfo" cols="3">Profit ratio:</b-col>
                <b-col class="info" cols="8">{{ project.ProfitRatio }}</b-col>
              </b-row>
              <b-row>
                <b-col class="headInfo" cols="3">Project ManagerID:</b-col>
                <b-col class="info" cols="8">{{ project.pManager }}</b-col>
              </b-row>
            </b-container>
          </div>

          <div id="boxPale">
            <h3>Participant</h3>
            <div v-for="(name, index) in name" :key="index">
              <b-container class="bv-example-row">
                <b-row>
                  <b-col class="headInfo" cols="3">EmployeeID:</b-col>
                  <b-col class="info" cols="4">{{
                    employee[index].EmployeeID
                  }}</b-col>
                </b-row>
                <b-row>
                  <b-col class="headInfo" cols="3">Employee name:</b-col>
                  <b-col class="info" cols="4">{{ name }}</b-col>
                </b-row>
                <hr />
              </b-container>
            </div>
          </div>

          <div>
            <button class="BackButt" @click="back" left>
              <b-icon icon="caret-left-fill" aria-hidden="true"></b-icon>
              BACK
            </button>
          </div>
        </div>
      </div>
    </div>
    <b-modal
      v-model="modalShow"
      hide-footer
      title="Edit information"
      @hidden="resetModal"
    >
      <form @submit.prevent="editInfo">
        <b-form-group
          id="input-group-2"
          label="ProjectName:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model.trim="newproject.Name"
            type="text"
          />
        </b-form-group>

        <b-form-group id="input-group-3" label="Detail:" label-for="input-3">
          <b-form-textarea
            id="input-3"
            v-model="newproject.Detail"
            type="text"
            row="6"
            no-resize
          />
        </b-form-group>

        <b-form-group id="input-group-4" label="Status:" label-for="input-4">
          <b-form-select
            v-model="newproject.Status"
            type="text"
            id="input-4"
            class="mb-3"
          >
            <b-form-select-option value="D">Done</b-form-select-option>
            <b-form-select-option value="O">On going</b-form-select-option>
            <b-form-select-option value="C">Cancel</b-form-select-option>
          </b-form-select>
        </b-form-group>

        <b-form-group
          id="input-group-5"
          label="Start date:"
          label-for="input-5"
        >
          <b-form-input
            id="input-5"
            v-model="newproject.StartDate"
            type="date"
          />
        </b-form-group>

        <b-form-group id="input-group-6" label="Due date:" label-for="input-6">
          <b-form-input id="input-6" v-model="newproject.DueDate" type="date" />
        </b-form-group>

        <b-form-group
          id="input-group-7"
          label="Profit ratio:"
          label-for="input-7"
        >
          <b-input-group append="%">
            <b-form-input
              id="input-7"
              v-model="newproject.ProfitRatio"
              type="number"
              required
            />
          </b-input-group>
        </b-form-group>

        <b-form-group
          id="input-group-8"
          label="Project Manager ID:"
          label-for="input-8"
        >
          <input
            id="input-8"
            class="form-control"
            v-model="newproject.pManager"
            type="text"
            placeholder="EMxxx"
            pattern="[E]{1}[M]{1}[0-9]{3}"
          />
        </b-form-group>

        <b-button variant="success" type="submit">Update</b-button>
      </form>
    </b-modal>
    <!-- popup ^^ -->
    <!-- <button @click="clickdel">Delete</button> -->
    <b-modal v-model="delModal" @ok="sureDel">Are you sure?</b-modal>
  </div>
</template>

<script>
import bar2 from "@/components/bar2.vue";
import project from "../../service/project";
export default {
  name: "projectInfo",
  components: {
    bar2,
  },
  data() {
    return {
      project: {
        ProjectID: "",
        Name: "",
        Detail: "",
        Status: "",
        StartDate: "",
        DueDate: "",
        ProfitRatio: 0,
        pManager: "",
      },
      newproject: {
        ProjectID: "",
        Name: "",
        Detail: "",
        Status: "",
        StartDate: "",
        DueDate: "",
        ProfitRatio: 0,
        pManager: "",
      },
      IDemp: {
        ProjectID: "",
      },
      employee: [],
      name: [],
      delModal: false,
      modalShow: false,
    };
  },
  created() {
    this.IDemp.ProjectID = this.$store.state.goProjectID;
    this.IDemp.ProjectID = localStorage.getItem("foundPID");
    console.log(this.IDemp);
    project.viewOne(this.IDemp).then((res) => {
      if (res) {
        this.project = res.foundproject;
        this.employee = res.work;
        this.name = res.name;
        console.log(res.work);
        console.log(this.employee[1].EmployeeID);
      }
    });
  },
  methods: {
    back() {
      localStorage.removeItem("foundPID");
      this.$router.push("/project");
    },
    clickdel() {
      this.delModal = !this.delModal;
    },
    sureDel() {
      alert("DELETE!");
      project.deleteProject(this.IDemp).then(
        (res) => {
          console.log(res);
          localStorage.removeItem("foundPID");
        },
        (error) => {
          console.log(error.message);
        }
      );
      // employee.delete(this.IDemp).then(
      //   (res) => {
      //     console.log(res);
      //   },
      //   (error) => {
      //     console.log(error.message);
      //   }
      // );
      this.$router.push("/project");
    },
    clickModal() {
      this.modalShow = !this.modalShow;
      this.newproject.Name = this.project.Name;
      this.newproject.Detail = this.project.Detail;
      this.newproject.Status = this.project.Status;
      this.newproject.StartDate = this.project.StartDate;
      this.newproject.DueDate = this.project.DueDate;
      this.newproject.ProfitRatio = this.project.ProfitRatio;
      this.newproject.pManager = this.project.pManager;
      this.newproject.ProjectID = this.project.ProjectID;
    },
    resetModal() {
      this.newproject = {};
    },
    editInfo() {
      this.modalShow = false;
      this.project = this.newproject;
      project.editProject(this.project).then(
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