<template>
  <div>
    <h1>Common Page with common layout</h1>
    <NuxtLink to="/about" :enableCustomLayout="enableCustomLayout">go somewhere</NuxtLink>
  </div>
</template>

<script setup>

function enableCustomLayout () {
  route.meta.layout = "custom"
}
</script>
