<template>
<!--  <nav>-->
<!--    <a href="index.html"><img src="@/assets/images/logo_nav.png" alt="nav_logo"></a>-->
<!--    <ul>-->
<!--      <li><a href="#">Home</a></li>-->
<!--      <li><router-link to="/">Over mij</router-link></li>-->
<!--      <li><router-link to="/Project">Projecten</router-link></li>-->
<!--      <li><a href="#">WPL1</a></li>-->
<!--      <li><a href="#">WPL2</a></li>-->

<!--    </ul>-->
<!--  </nav>-->
  <nav>
    <a href="index.html"><img src="@/assets/images/logo_nav.png" alt="nav_logo"></a>
    <ul>
      <li><a href="#">Home</a></li>
      <li><router-link to="/">Over mij</router-link></li>
      <li class="dropdown">
        <a href="#">Projecten</a>
        <ul class="dropdown-menu">
          <li><a href="/Project">Design</a></li>
          <li><a href="/Code">Code</a></li>
        </ul>
      </li>
      <li><a href="/WPL1">WPL1</a></li>
      <li><a href="/WPL2">WPL2</a></li>
    </ul>
  </nav>

</template>

<script>
export default {
  name: "NavComponent"
}
</script>

<style scoped>

</style>