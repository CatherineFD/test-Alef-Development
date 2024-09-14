<script>
import {mapGetters} from "vuex";
import ChildComponent from "@/components/PagePreview/ChildComponent.vue";

export default {
  name: "PagePreview",
  components: {
    ChildComponent
  },
  computed: {
    ...mapGetters({user: 'getUser', children: 'getChildren'}),
  }
}
</script>

<template>
<div class="preview">
  <h2 class="preview__title">
    Персональные данные
  </h2>

  <div class="preview__user">
    {{user.name}}, {{user.age}} лет
  </div>

  <h2 class="preview__title">
    Дети
  </h2>


  <div class="preview__children">
    <div v-for="child in children" class="preview__child">
    <ChildComponent
        :key="child.id"
        :child="child"
    />
    </div>
  </div>

</div>
</template>

<style scoped lang="scss">
.preview {
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
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  &__child {
    display: flex;
    justify-content: flex-start;
  }

}
</style>