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
  <button class="blue-button">
    {{ title }}
  </button>
</template>

<style scoped lang="scss">
.blue-button {
  padding: 10px 20px 10px 20px;
  border: none;
  border-radius: 100px;
  background-color: rgba(1, 167, 253, 1);

  color: #fff;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;


}
</style>