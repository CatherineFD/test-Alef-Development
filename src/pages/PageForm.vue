<script>
import UserComponent from "@/components/PageForm/UserComponent.vue";
import ChildrenComponent from "@/components/PageForm/ChildrenComponent.vue";
import BlueButton from "@/components/UI/BlueButton.vue";

export default {
  name: "PageForm",
  components: {
    UserComponent,
    ChildrenComponent,
    BlueButton
  }
}
</script>

<template>
  <div>
    <UserComponent/>
    <ChildrenComponent/>
    <BlueButton :title="'Сохранить'"></BlueButton>

  </div>

</template>

<style scoped lang="scss">

</style>