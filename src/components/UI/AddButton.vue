<script>
export default {
  name: "AddButton",
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <button class="white-button" @click="$emit('clickBtn')">
    <img src="@/assets/add-icon.svg" alt="add">
    <span>{{title}}</span>
  </button>
</template>

<style scoped lang="scss">
.white-button {
  background-color: white;
  border: 2px solid rgba(1, 167, 253, 1);
  border-radius: 100px;
  padding: 10px 20px 10px 20px;

  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: rgba(17, 17, 17, 1);

  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  cursor: pointer;

  & img {
    margin-right: 5px;
  }

  &:hover {
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>