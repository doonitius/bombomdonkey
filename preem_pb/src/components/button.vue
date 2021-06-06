<template>
  <div>
    <b-button pill variant="info" class="button" type="submit">Submit</b-button>
  </div>
</template>


<script>
export default {
  name: "button",
};
</script>

<style scoped>
html,
body {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to left, #606c88, #3f4c6b);
  font-family: "Oswald", sans-serif;
}

.button {
  margin-top: 30px;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 20px;
  letter-spacing: 4px;
  position: relative;
  background-color: #2bc6d1;
  border: none;
  color: black;
  width: 200px;
  transition-duration: 0.2s;
  overflow: hidden;
  /* box-shadow: 0 2px 12px#193047; */
  border-radius: 4px;
  width: 100%;
  height: 3rem;
  text-align: center;
}

.button:hover {
  background: #fff;
  box-shadow: 0px 0px 10px 5px #2bc6d1a9;
  color: #000;
}

.button:after {
  content: "";
  background: #2bc6d1;
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px !important;
  margin-top: -120%;
  opacity: 0;
  transition: all 0.8s;
}

.button:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s;
}

.button:focus {
  outline: 0;
}
</style>