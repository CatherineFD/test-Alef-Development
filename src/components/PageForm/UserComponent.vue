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
  },
  computed: {
    isErrorUser() {
      const values = Object.values(this.newUser);
      return values.some(value => value === '');
    }
  }
}
</script>

<template>
<div class="user">
  <h2 class="title">Персональные данные</h2>
  <FieldInput :name="'Имя'" :value="newUser.name" class="indent" @update:value="updateUser('name', $event)"></FieldInput>
  <FieldInput :name="'Возраст'" :value="newUser.age" @update:value="updateUser('age', $event)"></FieldInput>

  <p class="error" v-if="isErrorUser">Введите данные</p>
</div>
</template>

<style scoped lang="scss">
.user {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 33px;
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

.error {
  color: #c20101;
  margin-top: 0;
  font-size: 12px;
}
</style>