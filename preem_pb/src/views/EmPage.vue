<template>
  <div>
    <EmBar />
    <div id="mainform">
      <div class="mainpageBox">
        <div align="center" class="logoBox" style="margin-top: -60px">
          <img src="../assets/mylogo.png" alt="Logo" width="500" height="170" />
        </div>
        <div>
          <h2 align="center">Welcome to MainPage</h2>
        </div>
        <img
          src="https://media1.giphy.com/media/QMHoU66sBXqqLqYvGO/giphy.gif?cid=790b76116b3b8fa500368cd9c9b8a15ab67f0fb1c2659bc4&rid=giphy.gif&ct=g"
          alt="Logo"
          width="100%"
          height="800"
          align="center"
        />
      </div>
    </div>
  </div>
</template>

<script>
import EmBar from "@/components/EmBar.vue";
export default {
  name: "empage",
  components: {
    EmBar,
  },
};
</script>

<style scoped>
.mainpageBox {
  background: #eeeeee;
  /* จงอ้วน */
  width: 100%;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  box-shadow: 3px 5px 20px 0px #9c9c9c61;
}

.logoBox {
  background-color: #36b1b9;
  padding: 100px;
}

.h2,
h2 {
  font-size: 16px;
  margin-bottom: 0rem;
  background-color: #171717;
  padding: 10px;
  color: white;
}
</style>