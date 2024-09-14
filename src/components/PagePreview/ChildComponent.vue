<script>
export default {
  name: "ChildComponent",
  props: {
    child: {
      type: Object,
      default: () => ({
        id: '',
        name: '',
        age: 0
      })
    }
  }
}
</script>

<template>
  <div class="child">
    {{child.name}}, {{child.age}} лет
  </div>
</template>

<style scoped lang="scss">
.child {
  display: inline-block;
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
</style>