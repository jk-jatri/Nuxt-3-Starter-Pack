<template>
  <div class="h-screen w-[100vh-100px]">
    <div
      class="relative bg-white px-6 pt-10 pb-8 w-1/2 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10"
    >
      <div class="mx-auto space-y-4">
        <h5
          class="text-center text-transparent text-2xl font-bold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Login Here
        </h5>
        <div class="relative">
          <input
            id="email"
            type="email"
            placeholder="Email"
            class="peer w-full border-b-2 placeholder-transparent border-pink-600 focus:outline-none focus:border-2 pt-2 pl-2 pr-2 focus:rounded-md"
          />
          <label
            for="email"
            class="absolute left-0 -top-4 text-base text-gray-400 transition-all duration-300 ease-in-out peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:left-2 peer-focus:bg-white peer-focus:px-1"
            >Email</label
          >
        </div>
        <div class="relative">
          <input
            id="password"
            type="password"
            placeholder="Password"
            class="peer w-full border-b-2 placeholder-transparent border-pink-600 focus:outline-none focus:border-2 pt-2 pl-2 pr-2 focus:rounded-md"
          />
          <label
            for="password"
            class="absolute left-0 -top-4 text-base text-gray-400 transition-all duration-300 ease-in-out peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:left-2 peer-focus:bg-white peer-focus:px-1"
            >Password</label
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
