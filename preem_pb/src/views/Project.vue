<template>
  <div>
    <bar2 />
    <div id="mainform">
      <div id="boxPale">
        <h2>
          Project
          <b-icon icon="bookmark-star-fill" aria-hidden="true"></b-icon>
        </h2>
        <b-button class="Addinfo" variant="success" @click="clickAdd">
          Add Project
          <b-icon icon="bookmark-plus-fill" aria-hidden="true"></b-icon>
        </b-button>

        <div>
          <div v-if="render">
            <b-container class="bv-example-row">
              <!-- head -->
              <b-row class="showAll-body-head">
                <b-col cols="2" class="showAll-text">Project Name</b-col>
                <b-col cols="2" class="showAll-text smallPlz">ID:</b-col>
                <b-col cols="3" class="showAll-text">StartDate</b-col>
                <b-col cols="2" class="showAll-text">Status</b-col>
                <b-col cols="2"> </b-col>
              </b-row>
              <!-- runhere -->
              <div v-for="(project, index) in project" :key="index">
                <!-- body -->
                <b-row class="showAll-body">
                  <b-col cols="2" class="showAll-text">
                    {{ project.Name }}</b-col
                  >

                  <b-col cols="2" class="showAll-text">{{
                    project.ProjectID
                  }}</b-col>

                  <b-col cols="3" class="showAll-text">{{
                    project.StartDate
                  }}</b-col>

                  <b-col
                    cols="2"
                    class="showAll-text"
                    v-if="project.Status == 'D'"
                    ><b-badge variant="success">Done</b-badge></b-col
                  >
                  <b-col
                    cols="2"
                    class="showAll-text"
                    v-else-if="project.Status == 'O'"
                  >
                    <b-badge variant="primary">On going</b-badge></b-col
                  >
                  <b-col cols="2" class="showAll-text" v-else
                    ><b-badge variant="danger">Cancel</b-badge></b-col
                  >

                  <b-col cols="2">
                    <b-button
                      class="view"
                      variant="success"
                      @click="goProject(index)"
                    >
                      View Project
                    </b-button>
                  </b-col>
                </b-row>
                <!-- body -->
              </div>
            </b-container>
          </div>
          <div v-else>
            <!-- โหลด หมุนๆๆๆ -->
            <div class="p-4" style="text-align: center">
              <b-icon
                icon="x-diamond-fill"
                animation="spin"
                font-scale="3"
                shift-v="0"
              ></b-icon>
            </div>
            <!-- โหลด หมุนๆๆๆ -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import bar2 from "@/components/bar2.vue";
import project from "../../service/project";
export default {
  name: "project",
  components: {
    bar2,
  },
  data() {
    return {
      project: [],
      render: false,
    };
  },
  created() {
    project.viewAll().then((res) => {
      if (res) {
        console.log(res);
        this.project = res.pro;
        console.log(this.project);
        this.render = true;
      }
    });
  },
  methods: {
    clickAdd() {
      this.$router.push("/project/add");
    },
    goProject(index) {
      this.$store.state.goProjectID = this.project[index].ProjectID;
      localStorage.setItem("foundPID", this.project[index].ProjectID);
      this.$router.push("/project/info");
    },
  },
};
</script>


<style scoped>
.h2,
h2 {
  margin-bottom: 3rem;
  font-size: 2.5rem;
}

.showAll-body {
  background-color: #f1f1f1;
  padding-bottom: 15px;
  padding-top: 15px;
  border: 2px solid #51515100;
  border-radius: 22px;
  margin-bottom: 15px;
}

.showAll-body-head {
  background-color: #f1f1f100;
  padding-bottom: 10px;
  padding-top: 0px;
  border-radius: 22px;
  margin-bottom: 0px;
  font-size: 15px;
}
.view {
  font-size: 12px;
  letter-spacing: 1px;
  width: 150px;
  transition-duration: 0.2s;
  margin: -5px;
  background-color: #ffffff00;
  color: #0a74ff;
  border: 1px solid;
}

.view:hover {
  background: #0a74ff;
  color: #ffff;
}
</style>