<script>
export default {
  name: "FieldInput",
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      text: this.value,
    }
  }
}
</script>

<template>
<div class="block">
  <label class="block__label" for="text">{{name}}</label>
  <input class="block__input" name="text" type="text" v-model="text">
</div>
</template>

<style scoped lang="scss">
.block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid #1111117A;
  border-radius: 5px;
  padding: 8px 16px;
  text-align: left;

  &__label {
    font-size: 13px;
    font-weight: 400;
    line-height: 15.85px;
    color: rgba(17, 17, 17, 0.48);
  }

  &__input {
    font-family: Montserrat;
    border: none !important;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color: rgba(17, 17, 17, 1);

    &:focus-visible {
      outline: none;
    }
  }
}
</style>