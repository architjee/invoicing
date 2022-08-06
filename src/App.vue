<script>

</script>

<template>

  <div class="columns is-vcentered">


    <div class="column is-2 banner  has-background-danger has-text-right">
      <div class="content has-text-white mt-6 px-3 title is-1">
        i-Manas
      </div>
      <div class="subtitle is-3 has-text-white">
        Made with ♥ by AJ
      </div>
      <aside class="menu">
        <p class="menu-label">
          General
        </p>
        <ul class="menu-list">
          <li>
            <router-link to="/main">Main</router-link>
          </li>
          <li>
            <router-link to="/admin">Admin</router-link>
          </li>
          <li>
            <router-link to="/about">about</router-link>
          </li>
        </ul>

      </aside>
    </div>
    <div class="column">
      <router-view></router-view>
    </div>
  </div>

</template>
<style scoped>
.columns{
  min-height: 100vh;
  display: flex;
  align-items: stretch
}

</style>