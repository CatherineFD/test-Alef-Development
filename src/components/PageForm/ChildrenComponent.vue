<script>
import AddButton from "@/components/UI/AddButton.vue";
import ChildComponent from "@/components/PageForm/ChildComponent.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "ChildrenComponent",
  components: {
    AddButton,
    ChildComponent
  },
  props: {
    children: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isShow: false,
      newChildren: [...this.children] || [],
      newChild: {},
    }
  },
  methods: {
    ...mapActions({saveNewChildren: 'setChildren'}),
    addChildren() {
      let newChild = {};
      this.newChildren.push(newChild);
      this.$emit('update:children', this.newChildren);
    },
    saveChildren() {
      this.saveNewChildren(this.newChildren);
    },
    deleteChild(child) {
      this.newChildren = this.newChildren.filter((c) => c.id !== child.id);
    },
    updateChild(child) {
      this.newChildren = this.newChildren.map((c) => c.id === child.id ? child : c);
      this.$emit('update:children', this.newChildren);
    }
  },
  watch: {
    children(newVal) {
      this.newChildren = [...newVal];
    }
  },
}
</script>

<template>
<div class="container">
  <div class="container__header">
    <h2 class="title">Дети (макс. 5)</h2>

    <AddButton :title="'Добавить ребенка'" @clickBtn="addChildren"></AddButton>
  </div>

  <div v-for="child in newChildren">
    <ChildComponent
        :child="child"
        @deleteChild="deleteChild(child)"
        @update:child="updateChild(child)"
    ></ChildComponent>
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