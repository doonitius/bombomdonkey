<template>
  <div id="Bar2">
    <b-navbar class="navbar navbar-dark bg-dark">
      <b-navbar-nav>
        <!-- ภาพผึ้ง -->
        <b-navbar-brand href="#">
          <img
            src="../assets/mylogo.png"
            alt="logo"
            height="34px"
            width="110px"
          />
        </b-navbar-brand>

        <!-- ลิงค์ -->
        <b-nav-item href="/mainpage">Home</b-nav-item>
        <b-nav-item href="/employee">Employee</b-nav-item>
        <b-nav-item href="/project">Project</b-nav-item>
        <b-nav-item href="/training">Training</b-nav-item>
        <b-nav-item-dropdown text="Record">
          <b-dropdown-item href="/behavior">Behavior Record</b-dropdown-item>
          <b-dropdown-item href="/bonus">Bonus Record</b-dropdown-item>
          <b-dropdown-item href="/paymentslip">Payment Slip</b-dropdown-item>
          <b-dropdown-item href="/timerecord">Attendence</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Add">
          <b-dropdown-item href="/history/add">Add History</b-dropdown-item>
          <b-dropdown-item href="/addposition"
            >Add Position & Department</b-dropdown-item
          >
          <b-dropdown-item href="/promotionhistory/add"
            >Add Promotion history</b-dropdown-item
          >
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- ขวาสุด -->
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em><b-icon icon="person-fill"></b-icon>User</em>
          </template>
          <b-dropdown-item href="/">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
        <!-- ขวาสุด -->
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Bar2",
};
</script>

<style scoped>
.bg-dark {
  background-color: #141414 !important;
}

#Bar2 {
  position: fixed !important;
  z-index: 9999;
  width: 100%;
  margin-top: 0px !important;
}
</style>  
