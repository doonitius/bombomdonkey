<template>
  <div id="embar">
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
        <b-nav-item href="/mainpage/demo">Home</b-nav-item>
        <b-nav-item href="/profile/demo">Profile</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- ขวาสุด -->
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em><b-icon icon="person-fill"></b-icon>EMxxx</em>
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
  name: "EmBar",
};
</script>wa

<style scoped>
.bg-dark {
  background-color: #141414 !important;
}

#Embar {
  position: fixed !important;
  z-index: 9999;
  width: 100%;
  margin-top: 0px !important;
}
</style>  
