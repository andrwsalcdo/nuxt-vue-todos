<template>
   <nav class="db dt-l w-100 border-box pa3 ph5-l">
       <a class="dtc v-mid mid-gray link dim w-25" href="#" title="Home">
          <img src="http://tachyons.io/img/logo.jpg" class="dib w2 h2 br-100" alt="Github Link">
      </a>
      <div class="db dtc-l v-mid w-100 w-75-l tc tr-l">
        <nuxt-link exact class="link dim gray f6 f5-l dib mr3 mr4-l" to="/" title="Home">Home</nuxt-link>
        <nuxt-link class="link dim gray f6 f5-l dib mr3 mr4-l" to="/active" title="Active">Active</nuxt-link>
        <nuxt-link class="link dim gray f6 f5-l dib mr3 mr4-l" to="/completed" title="Completed">Completed</nuxt-link>
      </div>
   </nav> 
</template>

<style scoped>
  a.nuxt-link-active {
    color: black; 
    font-weight: bold; 
  }
</style>