<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

* {
  font-family: "Poppins", sans-serif;
  font-style: normal !important;
}
/* displayallform */
.headInfo {
  color: #070707af;
  text-align: right;
  font-size: 16px;
}

.info {
  color: #000000;
  font-size: 17px;
}

.viewOwnInfo,
.backTo {
  padding: 16px !important;
  margin: 10px !important;
  margin-top: 15px !important;
  margin-bottom: 10px !important;
  transition-duration: 0.2s;
  background-color: #f2f2f2ed !important;
  color: #007fc8 !important;
  border-radius: 14px !important;
  font-size: 18px;
}

.viewOwnInfo:hover,
.backTo:hover {
  background: #00a2ff !important;
  color: #f2f2f2ed !important;
}

.viewOwnInfo {
  text-align: right !important;
  width: 100% !important;
}

.backTo {
  text-align: left !important;
  width: 30% !important;
}

.editButt {
  text-align: center;
  width: 14%;
  padding: 5px;
  margin: 10px;
  margin-top: 7px;
  margin-bottom: 0px;
  transition-duration: 0.2s;
  background-color: #00a6ffed !important;
  color: #f2f2f2ed !important;
  border-radius: 24px;
  float: right;
  font-size: 15px;
}

.editButt:hover {
  background: #f2f2f2ed !important;
  color: #00a6ffed !important;
}

.delButt {
  text-align: center;
  width: 14%;
  padding: 5px;
  margin: 10px;
  margin-top: 7px;
  margin-bottom: 0px;
  transition-duration: 0.2s;
  background-color: #ff3a3aed !important;
  color: #f2f2f2ed !important;
  border-radius: 24px;
  float: right;
  font-size: 15px;
}

.delButt:hover {
  background: #f2f2f2ed !important;
  color: #ff3a3aed !important;
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
  font-size: 12px !important;
  padding-bottom: 15px;
  padding-top: 0px;
  border-radius: 22px;
  margin-bottom: 10px !important;
}
.view {
  font-size: 12px !important;
  letter-spacing: 1px;
  width: 150px;
  transition-duration: 0.2s;
  margin: -5px;
  background-color: #ffffff00 !important;
  color: #0a74ff !important;
  border: 1px solid !important;
}

.view:hover {
  background: #0a74ff !important;
  color: #ffff !important;
}
/* displayallform */

#mainform {
  /* ตั้งค่า Background  */
  background-image: url(./assets/Gif.gif);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  /* ตั้งค่า Background  */

  /* จงอยู่อยู่ตรงกลาง */
  justify-content: center;

  /* เอาไว้ทำให้หน้าอยู่ตรงกลาง  */
  display: flex;
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  padding-top: 50px;
  /* เอาไว้ทำให้หน้าอยู่ตรงกลาง  */
}

#form {
  font-family: "Nunito Sans", sans-serif;
  max-width: 500px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 60px;
  background-color: #19191985;
  padding: 35px 35px 45px;
  top: 10%;
  width: 700px !important;
  font-size: 15px;
  box-shadow: 3px 5px 20px 0px #000000 !important;
  border-radius: 0px;
  color: white;
}

#form input {
  color: #fff;
  background-color: #00000000 !important;
  border-radius: 1.25rem;
}

#form input:focus {
  color: #fff;
  background-color: #000000e7 !important;
  border-color: #1ecbff;
  box-shadow: 0 0 8px 0 #1ecbff83;
}
/* longtext */
input,
textarea.form-control,
.mb-3,
.my-3 {
  border-radius: 1.25rem;
  color: #fff;
  background-color: #00000000 !important;
}
/* longtext */
textarea.form-control:focus,
.mb-3:focus,
.my-3:focus {
  border-radius: 1.25rem;
  color: #fff;
  background-color: #000000e7 !important;
  border-color: #1ecbff;
  box-shadow: 0 0 8px 0 #1ecbff83;
}
/* fix $ box */
.fixBd {
  border-radius: 0 1.25rem 1.25rem 0 !important;
}

/* เจ้าผึ้ง */
#mainpage {
  /* ตั้งค่า Background  */
  background: rgb(247, 247, 247);
  background-position: center;
  /* ห้ามก๊อปตัวเอง */
  background-repeat: no-repeat;
  /* คลุมให้หมดกรอบ */
  background-size: cover;
  /* ห้ามขยับตาม */
  background-attachment: fixed;
  /* ตั้งค่า Background  */

  /* เอาไว้ทำให้หน้าอยู่ตรงกลาง  */
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding-top: 60px;
  /* เอาไว้ทำให้หน้าอยู่ตรงกลาง  */
}

/* กล่องจาง */
#boxPale {
  font-family: "Nunito", sans-serif;
  font-family: "Nunito Sans", sans-serif;
  max-width: 800px;
  width: 800px !important;
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 60px;
  padding: 35px 35px 45px;
  top: 10%;
  width: 100%;
  font-size: 15px;
  background-color: #f2f2f2ed;
  border: 1px solid #f2f2f28f;
  box-shadow: 3px 5px 20px 0px #000000c4 !important;
  border-radius: 0.5rem;
}

#submit {
  padding: 8px 68px 10px;
  margin: 35px 0 0 0;
  width: 100%;
}

input[type="date"],
input[type="number"] {
  width: 45% !important;
}

/* ห้ามยุ่งงงง */

/* ปุ่มadd */
.add {
  margin-top: 30px;
  cursor: pointer;
  font-size: 16px;
  letter-spacing: 2px;
  position: relative;
  background-color: #19191994 !important;
  border: 1px solid #ffff !important;
  width: 200px;
  transition-duration: 0.4s;
  overflow: hidden;
  /* box-shadow: 0px 0px 5px 2px #474747; */
  border-radius: 4px;
  width: 100% !important;
  height: 2.5rem;
  text-align: center;
}

.add:hover {
  background: rgb(230, 230, 230) !important;
  box-shadow: 0px 0px 5px 2px #474747;
  color: #000 !important;
}

.add:after {
  content: "";
  background: #181818;
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px !important;
  margin-top: -120%;
  opacity: 0;
  transition: all 0.5s;
}

.add:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s;
}

.add:focus {
  outline: 0;
}
/* ปุ่มadd */

/* ปุ่มBack */
.BackButt {
  margin-top: 30px;
  cursor: pointer;
  font-size: 14px;
  letter-spacing: 2px;
  position: relative;
  background-color: #ffba0c !important;
  border: none !important;
  color: #000;
  width: 100px;
  width: 100px;
  transition-duration: 0.4s;
  overflow: hidden;
  /* box-shadow: 0px 0px 5px 2px #474747; */
  border-radius: 5px;
  height: 2.5rem;
  text-align: center;
}

.BackButt:hover {
  background: rgb(255, 255, 255) !important;
  box-shadow: 0px 0px 5px 2px #ffba0c;
  color: #000000 !important;
}

.BackButt:after {
  content: "";
  background: #181818;
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px !important;
  margin-top: -120%;
  opacity: 0;
  transition: all 0.5s;
}

.BackButt:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s;
}

.BackButt:focus {
  outline: 0;
}

/* ปุ่มAddinformation */
.Addinfo {
  margin-bottom: 30px;
  cursor: pointer;
  font-size: 14px;
  letter-spacing: 2px;
  position: relative;
  background-color: #0a74ff !important;
  border: none !important;
  color: #000;
  width: 100%;
  transition-duration: 0.4s;
  overflow: hidden;
  /* box-shadow: 0px 0px 5px 2px #474747; */
  border-radius: 5px;
  height: 2.5rem;
  text-align: center;
}

.Addinfo:hover {
  background: rgb(255, 255, 255) !important;
  box-shadow: 0px 0px 5px 2px #0a74ff85;
  color: #000000 !important;
}

.Addinfo:after {
  content: "";
  background: #181818;
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px !important;
  margin-top: -120%;
  opacity: 0;
  transition: all 0.5s;
}

.Addinfo:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s;
}

.Addinfo:focus {
  outline: 0;
}
</style>
