<template>
  <div>
    <div v-if="loadAnimation" class="spin">
      <div class="ring">
        <div class="lds-dual-ring"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loadAnimation: false,
    };
  },
  methods: {},
};
</script>
<style scoped>
.test {
  padding-top: 200px;
}
.ring {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0 auto;
  height: 100%;
}
.spin {
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgb(24, 24, 24);
}
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #cef;
  border-color: #cef transparent #cef transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
