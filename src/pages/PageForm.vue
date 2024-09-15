<script>
import UserComponent from "@/components/PageForm/UserComponent.vue";
import ChildrenComponent from "@/components/PageForm/ChildrenComponent.vue";
import BlueButton from "@/components/UI/BlueButton.vue";
import {mapActions, mapGetters} from "vuex";
import Loader from "@/components/UI/Loader.vue";

export default {
  name: "PageForm",
  components: {
    UserComponent,
    ChildrenComponent,
    BlueButton,
    Loader
  },
  methods: {
    ...mapActions(['updateAllData']),
    handleChildrenUpdate(newChildren) {
      this.localChildren = newChildren;
    },
    handleUser(newUser) {
      this.localUser = newUser;
    },
    saveChildren() {
      if (!this.isErrorUser && !this.isErrorChildren) {
        this.updateAllData({user: this.localUser, children: this.localChildren});
      }
    }
  },
  data() {
    return {
      localUser: {},
      localChildren: []
    };
  },
  computed: {
    ...mapGetters(
        {
          user: 'getUser',
          children: 'getChildren',
          isLoading: 'getLoading'
        }
    ),
    isErrorUser() {
      const values = Object.values(this.localUser);
      return values.some(value => value === '');
    },
    isErrorChildren() {
      return this.localChildren.some(item => {
        return Object.keys(item).length === 0 || Object.values(item).some(value => value === '');
      });
    }
  },
  watch: {
    user(newUser) {
      this.localUser = newUser;
    },
    children(newChildren) {
      this.localChildren = newChildren;
    }
  },
  mounted() {
    this.localUser = this.user;
    this.localChildren = this.children;
  }

}
</script>

<template>
  <Loader v-if="isLoading"/>

  <div v-else class="container">
    <UserComponent :user="user" @update:user="handleUser"/>
    <ChildrenComponent :children="children" @update:children="handleChildrenUpdate"/>

    <div class="container__button">
      <BlueButton :title="'Сохранить'" @clickBtn="saveChildren"></BlueButton>
    </div>
  </div>

</template>

<style scoped lang="scss">
.container {
  max-width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  &__button {
    display: flex;
  }
}

</style>