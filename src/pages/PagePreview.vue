<script>
import {mapGetters} from "vuex";

export default {
  name: "PagePreview",
  computed: {
    ...mapGetters({user: 'getUser', children: 'getChildren'}),
  }
}
</script>

<template>
<div class="container">
  <h2 class="container__title">
    Персональные данные
  </h2>

  <div class="container__user">
    {{user.name}}, {{user.age}}лет
  </div>

  <h2 class="container__title">
    Дети
  </h2>

  <div class="container__children">
    <div v-for="child in children" class="child">
      {{child.name}}, {{child.age}} лет
    </div>
  </div>

</div>
</template>

<style scoped lang="scss">
.container {
  max-width: 600px;
  width: 100%;
  margin: 0 auto;

  &__title {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    color: rgba(17, 17, 17, 1);
  }

  &__user {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;

  }

  &__children {
    text-align: left;
    display: inline-block;
    .child {
      background-color: rgba(241, 241, 241, 1);
      padding: 10px 20px 10px 20px;
      margin-bottom: 20px;
      border-radius: 5px;

      color: rgba(0, 0, 0, 1);
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      text-align: left;

    }
  }

}
</style>