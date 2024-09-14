<script>

</script>

<template>
<header class="header">
  <div class="header__logo">
    <img src="@/assets/logo.svg" alt="logo">
  </div>


    <nav class="header__menu">
      <router-link to="/" class="header__menu__link">Форма</router-link>
      <router-link to="/preview" class="header__menu__link">Превью</router-link>
    </nav>


</header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  position: relative;



  &__menu{
    position: absolute;
    left: 50%;
    display: flex;
    justify-content: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;

    > *:not(:last-child) {
      margin-right: 24px;
    }

    &__link {
      text-decoration: none;
      color: rgba(17, 17, 17, 0.48);
    }
  }
}
</style>