<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sign Up</title>
  <!-- Load TailwindCSS -->
  <link rel="stylesheet" href="https://unpkg.com/tailwindcss@0.25.0/dist/tailwind.min.css">
  <!-- Load DaisyUI -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/daisyui@1.14.4/dist/daisyui.min.css" />
</head>
<body>
  <!-- Steps at the top of the page -->
  <center class="pt-2">
    <div>
      <ul class="steps">
        <li class="step step-primary poppins" data-content="?">Register</li>
        <li class="step poppins" data-content="?">Profile</li>
        <li class="step poppins" data-content="?">Done!</li>
      </ul>
    </div>
  </center>

  <!-- Center the sign-up form on the page -->
  <div class="flex justify-center pt-24 items-center">
    <div class="w-full max-w-md">
      <!-- Sign-up form using DaisyUI classes -->
      <form class="bg-white shadow-lg rounded-2xl px-8 pt-6 pb-8 mb-4">
        <h1 class="text-2xl font-bold text-center mb-4">Sign Up</h1>
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
          <a class="ml-2 block poppins text-gray-700 text-sm font-bold mb-2">
            Confirm Password
          </a>
          <input class="poppins appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password-confirm" type="password" placeholder="Confirm password">
        </div>
        <div class="pb-4">
          <a class="ml-2 link link-hover poppins" href="/signin">Already have an account? Sign In</a>
        </div>
        <div class="mb-4">
          <!-- svelte-ignore a11y-missing-attribute -->
<a class="w-full btn btn-outline poppins py-2 px-4 rounded-full" href="/setup/profile">Sign Up</a>
</div>
</form>
</div>

  </div>
</body>
</html>
