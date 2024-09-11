<script>
import AddButton from "@/components/UI/AddButton.vue";
import ChildComponent from "@/components/PageForm/ChildComponent.vue";
import {mapGetters} from "vuex";

export default {
  name: "ChildremComponent",
  components: {
    AddButton,
    ChildComponent
  },
  computed: {
    ...mapGetters({
      children: 'getChildren'
    })
  }
}
</script>

<template>
<div class="container">
  <div class="container__header">
    <h2 class="title">Дети (макс. 5)</h2>

    <AddButton :title="'Добавить ребенка'"></AddButton>
  </div>
  <ChildComponent></ChildComponent>
  <div v-for="child in children">
    <ChildComponent :child="child"></ChildComponent>
  </div>
</div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  max-width: 60%;
  margin: 0 auto;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    color: rgba(17, 17, 17, 1);
  }
}
</style>