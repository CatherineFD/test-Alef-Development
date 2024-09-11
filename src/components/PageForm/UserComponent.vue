<script>
import FieldInput from "@/components/UI/FieldInput.vue";
import {mapGetters} from "vuex";
export default {
  name: "UserComponent",
  components: {
    FieldInput
  },
  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  }
}
</script>

<template>
<div class="container">
  <h2 class="title">Персональные данные</h2>
  <FieldInput :name="'Имя'" :value="user.name" class="indent"></FieldInput>
  <FieldInput :name="'Возраст'" :value="user.age"></FieldInput>
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