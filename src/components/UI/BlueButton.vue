<script>
export default {
  name: "BlueButton",
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <button class="blue-button" @click="$emit('clickBtn')">
    {{ title }}
  </button>
</template>

<style scoped lang="scss">
.blue-button {
  padding: 10px 20px 10px 20px;
  border: none;
  border-radius: 100px;
  background-color: rgba(1, 167, 253, 1);
  cursor: pointer;

  color: #fff;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;


  &:hover {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.35);
  }

  &:active {
    background-color: #0683c3;
  }
}
</style>