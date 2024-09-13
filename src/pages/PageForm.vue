<script>
import UserComponent from "@/components/PageForm/UserComponent.vue";
import ChildrenComponent from "@/components/PageForm/ChildrenComponent.vue";
import BlueButton from "@/components/UI/BlueButton.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "PageForm",
  components: {
    UserComponent,
    ChildrenComponent,
    BlueButton
  },
  methods: {
    ...mapActions(['updateAllData']),
    handleChildrenUpdate(newChildren) {
      this.children = newChildren;
    },
    handleUser(newUser) {
      this.user = newUser;
    },
    saveChildren() {
      this.updateAllData({user: this.user, children: this.children});
    }
  },
  computed: {
    ...mapGetters(
        {
          user: 'getUser',
          children: 'getChildren'
        }
    ),
  },

}
</script>

<template>
  <div>
    <UserComponent :user="user" @update:user="handleUser(user)"/>
    <ChildrenComponent v-model:children="children" @update:children="handleChildrenUpdate(children)"/>
    <BlueButton :title="'Сохранить'" @clickBtn="saveChildren"></BlueButton>
  </div>

</template>

<style scoped lang="scss">

</style>