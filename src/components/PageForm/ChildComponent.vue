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
        id: '',
        name: '',
        age: 0
      })
    }
  },
  data() {
    return {
      newChild: this.child || {},
    }
  },
  methods: {
    updateChild(key, value) {
      this.newChild[key] = value;
      this.$emit('update:child', { ...this.newChild });
    }
  }
}
</script>

<template>
  <div class="block">
    <FieldInput
        :name="'Имя'"
        :value="newChild.name"
        @update:value="updateChild('name', $event)"
    ></FieldInput>
    <FieldInput
        :name="'Возраст'"
        :value="newChild.age"
        @update:value="updateChild('age', $event)"
    ></FieldInput>

    <button @click="$emit('deleteChild')">Удалить</button>
  </div>
</template>

<style scoped lang="scss">
.block {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
</style>