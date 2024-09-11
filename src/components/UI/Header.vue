<script>

</script>

<template>
<header class="header">
  <div class="header__logo">
    <img src="@/assets/logo.svg" alt="logo">
  </div>

  <div class="header__menu">
    <nav>
      <router-link to="/">Форма</router-link> |
      <router-link to="/about">Превью</router-link>
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
  }
}
</style>