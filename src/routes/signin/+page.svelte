<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sign In</title>
  <!-- Load TailwindCSS -->
  <link rel="stylesheet" href="https://unpkg.com/tailwindcss@0.25.0/dist/tailwind.min.css">
  <!-- Load DaisyUI -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@1.14.4/dist/daisyui.min.css" />
</head>
<body>
  <!-- Center the sign-In form on the page -->
  <div class="flex justify-center items-center h-screen">
    <div class="w-full max-w-md">
      <!-- Sign-In form using DaisyUI classes -->
      <form class="bg-white shadow-lg rounded-2xl px-8 pt-6 pb-8 mb-4">
        <h1 class="text-2xl font-bold text-center mb-4">Sign In</h1>
        <div class="mb-4">
        </div>
        <div class="mb-4">
          <!-- svelte-ignore a11y-missing-attribute -->
          <a class="ml-2 poppins block poppins text-gray-700 text-sm font-bold mb-2">
          Email
          </a>
          <input class="poppins appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter email">
        </div>
        <div class="mb-4">
          <!-- svelte-ignore a11y-missing-attribute -->
          <a class="ml-2 block poppins text-gray-700 text-sm font-bold mb-2">
           Password
          </a>
          <input class="poppins appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter password">
        </div>
        <div class="mb-4">
          <!-- svelte-ignore a11y-missing-attribute -->
        </div>
        <div class="pb-4">
          <a class="ml-2 link link-hover poppins" href="/setup/signup">Don't have an account? Sign Up</a>
        </div>
        <div class="mb-4">
          <!-- svelte-ignore a11y-missing-attribute -->
          <a class="w-full btn btn-outline poppins py-2 px-4 rounded-full">Sign In</a>
      </div>
      </form>
    </div>
  </div>
</body>
</html>
