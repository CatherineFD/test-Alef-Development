<script>

</script>

<template>
<header class="header">
  <div class="header__logo">
    <img src="@/assets/logo.svg" alt="logo">
  </div>

  <div class="header__menu">
    <nav>
      <router-link to="/" class="header__menu__link">Форма</router-link>
      <router-link to="/about" class="header__menu__link">Превью</router-link>
    </nav>
  </div>

</header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  padding: 24px;

  &__menu{
    align-self: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;

    &__link {
      text-decoration: none;
      color: rgba(17, 17, 17, 0.48);
    }
  }
}
</style>