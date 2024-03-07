<template>
  <footer>
    <ul>
      <li><a href="mailto:Thomas.Peeters3@student.pxl.be"><i class="fa-regular fa-envelope"></i></a>Thomas.Peeters3@student.pxl.be
      </li>
      <li><a href="mailto:peetersthomas550@gmail.com"><i class="fa-regular fa-envelope"></i></a>peetersthomas550@gmail.com
      </li>
      <li><a href="#"><i class="fa-solid fa-mobile-screen"></i></a>0476 66 49 28</li>
    </ul>
  </footer>

</template>

<script>
export default {
  name: "FooterComponent"
}
</script>

<style scoped>
footer ul {
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

footer ul li a {
  display: inline-block;
  padding: 0 20px 0 0;
  font-size: 1.5rem;
  color: #545479;
  align-content: center;
}

footer ul li a:hover {
  color: #5C9D8B;
}
</style>