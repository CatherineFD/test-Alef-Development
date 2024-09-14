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
  },
  computed: {
    isErrorChild() {
      const values = Object.values(this.newChild);
      return values.some(value => value === '');
    }
  },
  child(newVal) {
    this.newChild = newVal;
  }
}
</script>

<template>

  {{newChild}}
  <div class="block">
    <div class="input-field">
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

      <button @click="$emit('deleteChild')" class="input-field__btn">Удалить</button>
    </div>
    <p v-if="isErrorChild" class="error">Введите данные</p>
  </div>
</template>

<style scoped lang="scss">

.block {
  margin-bottom: 10px;
}

.input-field {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > *:not(:last-child) {
    margin-right: 18px;
  }

  &__btn {
    background-color: rgba(0,0,0,0);
    border: none;
    color: rgba(1, 167, 253, 1);
    font-family: Montserrat, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    transition: text-shadow 0.5s ease;
    cursor: pointer;

    &:hover {
      text-shadow: 0 2px 4px rgba(197, 188, 188, 0.6);
    }
  }
}

.error {
  color: #c20101;
  margin-top: 0;
  font-size: 12px;
}
</style>