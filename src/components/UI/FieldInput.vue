<script>
export default {
  name: "FieldInput",
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    handleInput(event) {
      this.text = event.target.value;
      this.$emit('update:value', this.text);
    }
  },
  data() {
    return {
      text: this.value,
    }
  },
  watch: {
    value(newVal) {
      this.text = newVal;
    }
  }
}
</script>

<template>
<div class="element">

  <label class="element__label" for="text">{{name}}</label>
  <input class="element__input" name="text" type="text" :value="text" @input="handleInput">
</div>
</template>

<style scoped lang="scss">
.element {
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