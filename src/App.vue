<template>
  <div id="app">
    <nav>
      <a href="#" class="active">Home</a> |
      <a href="#">About</a>
    </nav>
    <main>
      <div class="welcome-container">
        <h1 class="welcome-text">WELCOME TO BECCO</h1>
      </div>
    </main>
  </div>
</template>

<script setup>
// No router needed now
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: white;
}

nav {
  padding: 30px;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 0 10px;
}

nav a.active {
  color: #42b983;
}

main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.welcome-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  background-color: white;
}

.welcome-text {
  font-size: 3rem;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
</style>