<script>
import FieldInput from "@/components/UI/FieldInput.vue";

export default {
  name: "UserComponent",
  components: {
    FieldInput
  },
  props: {
    user: {
      type: Object,
      default: () => ({
        name: '',
        age: 0
      })
    }
  },
  data() {
    return {
      newUser: this.user,
    }
  },
  methods: {
    updateUser(key, value) {
      this.newUser[key] = value;
      this.$emit('update:user', { ...this.newUser });
    }
  }
}
</script>

<template>
<div class="container">
  <h2 class="title">Персональные данные</h2>
  <FieldInput :name="'Имя'" :value="newUser.name" class="indent" @update:value="updateUser('name', $event)"></FieldInput>
  <FieldInput :name="'Возраст'" :value="newUser.age" @update:value="updateUser('age', $event)"></FieldInput>
</div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  max-width: 60%;
  margin: 0 auto 44px;
}

.title {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: rgba(17, 17, 17, 1)
}

.indent {
  margin-bottom: 10px;
}
</style>