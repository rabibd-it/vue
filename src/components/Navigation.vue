<template lang="">
    <header class="bg-white shadow">
<nav class="bg-gray-800">
<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
<div class="relative flex h-16 items-center justify-between">
<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
<div class="hidden sm:ml-6 sm:block">
<div class="flex space-x-4">

    <router-link to="/" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Home</router-link>
<router-link to="dashboard" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Dashboard</router-link>
<router-link to="login" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Login</router-link>
<router-link to="register" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Register</router-link>
</div>
</div>
</div>
</div>
</div>
</nav>
    </header>
</template>
<script setup>
import { RouterLink } from 'vue-router';
</script>
<style lang="">
    
</style>