<script>
import FieldInput from "@/components/UI/FieldInput.vue";
export default {
  name: "ChildComponent",
  components: {
    FieldInput
  },
  props: {
    child: {
      type: Object,
      default: () => ({
        name: '',
        age: 0
      })
    }
  }
}
</script>

<template>
  <div class="container">
    <FieldInput :name="'Имя'" :value="child.name"></FieldInput>
    <FieldInput :name="'Возраст'" :value="child.age"></FieldInput>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>