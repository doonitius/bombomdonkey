import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Mainpage from "../views/Mainpage.vue";
import Employee from "../views/Employee.vue";
import Profile from "../views/Profile.vue";
import AddEmployee from "../views/AddEmployee.vue";
import testform from "../views/testform.vue"
import Behavior from "../views/BehaviorRecord.vue"
import AddPromotionhis from "../views/AddPromotionHis.vue"
import Bonus from "../views/BonusRecord.vue"
import Payment from "../views/Payment.vue"
import AddHistory from "../views/AddHistory.vue"
import TimeRecord from "../views/TimeRecord.vue"
import AddProject from "../views/AddProject.vue"
import AddPosition from "../views/AddPosition.vue"
// import AddDepartment from "../views/AddDepartment.vue"
// import AddBranch from "../views/AddBranch.vue"
import AddTraining from "../views/AddTraining.vue"
import EducationHis from "../views/EduHis.vue"
import WorkHis from "../views/WorkHis.vue"
import ProHis from "../views/ProHis.vue"
import Project from "../views/Project.vue"
import ProjectInfo from "../views/ProjectInfo.vue"
import Demo from "../views/EmPage.vue"
import ProfileDemo from "../views/ProfileDemo.vue"
import EduHisDemo from "../views/EduHisDemo.vue"
import WorkHisDemo from "../views/WorkHisDemo.vue"
import ProHisDemo from "../views/ProHisDemo.vue"
import Train from "../views/Training.vue"
import TrainInfo from "../views/TrainingInfo.vue"
import sPayment from "../views/ShowPayment.vue"

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/mainpage",
        name: "Mainpage",
        component: Mainpage,
    },
    {
        path: "/employee",
        name: "Employee",
        component: Employee,
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
    },
    {
        path: "/employee/add",
        name: "AddEmployee",
        component: AddEmployee,
    },
    {
        path: "/test",
        name: "testform",
        component: testform,
    },
    {
        path: "/behavior",
        name: "Behavior",
        component: Behavior,
    },
    {
        path: "/promotionhistory/add",
        name: "AddPromotionhis",
        component: AddPromotionhis,
    },
    {
        path: "/bonus",
        name: "Bonus",
        component: Bonus,
    },
    {
        path: "/paymentslip",
        name: "Payment",
        component: Payment,
    },
    {
        path: "/history/add",
        name: "AddHistory",
        component: AddHistory,
    },
    {
        path: "/timerecord",
        name: "TimeRecord",
        component: TimeRecord,
    },
    {
        path: "/project/add",
        name: "AddProject",
        component: AddProject,
    },
    {
        path: "/addposition",
        name: "AddPosition",
        component: AddPosition,
    },
    // {
    //     path: "/adddepartment",
    //     name: "AddDepartment",
    //     component: AddDepartment,
    // },
    // {
    //     path: "/addbranch",
    //     name: "AddBranch",
    //     component: AddBranch,
    // },
    {
        path: "/training/add",
        name: "AddTraining",
        component: AddTraining,
    },
    {
        path: "/educationhistory",
        name: "EducationHis",
        component: EducationHis,
    },
    {
        path: "/workhistory",
        name: "WorkHis",
        component: WorkHis,
    },
    {
        path: "/promotionhistory",
        name: "ProHis",
        component: ProHis,
    },
    {
        path: "/project",
        name: "Project",
        component: Project,
    },
    {
        path: "/project/info",
        name: "ProjectInfo",
        component: ProjectInfo,
    },
    {
        path: "/mainpage/demo",
        name: "Demo",
        component: Demo,
    },
    {
        path: "/profile/demo",
        name: "ProfileDemo",
        component: ProfileDemo,
    },
    {
        path: "/educationhistory/demo",
        name: "EduHisDemo",
        component: EduHisDemo,
    },
    {
        path: "/workhistory/demo",
        name: "WorkHisDemo",
        component: WorkHisDemo,
    },
    {
        path: "/promotionhistory/demo",
        name: "ProHisDemo",
        component: ProHisDemo,
    },
    {
        path: "/training",
        name: "Train",
        component: Train,
    },
    {
        path: "/training/info",
        name: "TrainInfo",
        component: TrainInfo,
    },
    {
        path: "/payment",
        name: "sPayment",
        component: sPayment,
    },


];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;