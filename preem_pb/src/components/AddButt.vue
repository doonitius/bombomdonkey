<template>
  <div>
    <b-button pill variant="info" class="add" type="submit">Add</b-button>
  </div>
</template>


<script>
export default {
  name: "AddButt",
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

.add {
  text-transform: uppercase;
  cursor: pointer;
  font-size: 16px;
  letter-spacing: 2px;
  position: relative;
  background-color: #181818;
  border: none;
  color: #fff;
  width: 200px;
  transition-duration: 0.4s;
  overflow: hidden;
  /* box-shadow: 0px 0px 5px 2px #474747; */
  border-radius: 4px;
  width: 15%;
  height: 2.5rem;
  text-align: center;
}

.add:hover {
  background: rgb(230, 230, 230);
  box-shadow: 0px 0px 5px 2px #474747;
  color: #000;
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
</style>