<template>
  <div id="main">
    <div class="home">
      <div class="bg" left></div>
      <div class="forLogin">
        <div class="head">SIGN IN</div>

        <form @submit.prevent="loggingIn">
          <!----- Username ----->
          <label>Username</label>
          <div class="right">
            <div class="inputWithIcon inputIconBg">
              <input
                type="text"
                class="inputText"
                name="userID"
                v-model="User.userID"
                placeholder="name@example.com"
              />
              <i class="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
            </div>
          </div>

          <label>Password</label>
          <div class="right">
            <div class="inputWithIcon inputIconBg">
              <input
                type="password"
                class="inputText"
                name="password"
                v-model="User.password"
                placeholder="••••••••"
              />
              <i class="fa fa-lock fa-lg fa-fw" aria-hidden="true"></i>
            </div>
          </div>

          <!-- <button type="summit" class="Login">Login</button> -->
          <button type="summit" class="Login">HR</button>
          <button @click="goEmployee" class="Login">Employee</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      User: {
        userID: "",
        password: "",
      },
      TestUser: "admin",
      TestPass: "1234",
    };
  },
  methods: {
    loggingIn() {
      this.$router.push("/mainpage");
      // if (
      //   this.User.userID === this.TestUser &&
      //   this.User.password === this.TestPass
      // ) {
      //   //api
      //   this.$router.push("/mainpage");
      // } else {
      //   alert("Invalid username or password");
      // }
    },
    goEmployee() {
      this.$router.push("/mainpage/demo");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@700&family=Nunito:wght@200&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css");

.bg {
  /* ตั้งค่า Background  */
  background-image: url(https://media1.giphy.com/media/QMHoU66sBXqqLqYvGO/giphy.gif?cid=790b76116b3b8fa500368cd9c9b8a15ab67f0fb1c2659bc4&rid=giphy.gif&ct=g);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* ตั้งค่า Background  */

  /* เอาไว้ทำให้หน้าอยู่ตรงกลาง  */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 38vh;
  /* เอาไว้ทำให้หน้าอยู่ตรงกลาง  */
  border-radius: 29px 29px 0 0;
  border-bottom: 3px solid rgb(0, 0, 0);
}

.forLogin {
  padding-inline: 40px;
  padding-top: 0px;
  padding-bottom: 10px;
}

#main {
  background-image: url(../assets/kom.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* ตั้งค่า Background  */
  /* เอาไว้ทำให้หน้าอยู่ตรงกลาง  */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  /* เอาไว้ทำให้หน้าอยู่ตรงกลาง  */
}

.head {
  font-size: 40px;
  padding-bottom: 20px;
}
.Login {
  width: 50%;
  background-color: #000000;
  color: white;
  padding: 10px 10px 10px 10px;
  margin: 18px 0px 10px 0px;
  border: none;
  border-radius: 37px;
  text-align: center;
}

/* กล่องใหญเลย */
.home {
  max-width: 500px;
  margin: 0 auto;
  height: 100%;
  top: 10%;
  width: 100%;
  text-align: center;

  border-radius: 30px;
  box-shadow: 3px 5px 20px 0px #222222a8;
  background-color: #fcfcfce5;
  border: 1px solid rgba(0, 0, 0, 0.562);
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
  font-size: 18px;
}

/* help */
input {
  width: 100%;
  border: 2px solid #212529;
  border-radius: 4px;
  margin: 8px 0;
  outline: none;
  padding: 4px;
  box-sizing: border-box;
  transition: 0.3s;
}

input:focus {
  border-color: #1ecbff;
  box-shadow: 0 0 8px 0 #1ecbff;
}

.inputWithIcon input {
  padding-left: 40px;
}

.inputWithIcon {
  position: relative;
}

.inputWithIcon i {
  position: absolute;
  left: 0;
  top: 8px;
  padding: 9px 8px;
  color: #212529;
  transition: 0.3s;
}

.inputWithIcon input:focus + i {
  color: #1ecbff;
}

.inputWithIcon.inputIconBg i {
  background-color: #212529;
  color: #fff;
  padding: 10px 3px;
  border-radius: 4px 0 0 4px;
  width: 36px;
  left: -8px;
}

.inputWithIcon.inputIconBg input:focus + i {
  color: #fff;
  background-color: #1ecbff;
}

.right {
  float: right;
  width: 65%;
}

.Login {
  width: 45%;
  margin: 10px;
  margin-top: 35px;
  margin-bottom: 35px;
}
</style>
