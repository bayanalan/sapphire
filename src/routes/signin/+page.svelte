<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sign In</title>
  <!-- Load Poppins font from Google Fonts -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins">
  <style>
    /* Set body font to Poppins */
    body {
      font-family: 'Poppins', sans-serif;
    }
  </style>
</head>
<body>
  <!-- Center the sign-up form on the page -->
  <div class="flex justify-center items-center h-screen">
    <div class="w-full max-w-md">
      <!-- Sign-up form using DaisyUI classes -->
      <form class="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
        <h1 class="text-2xl font-bold text-center mb-4">Sign In</h1>
        <div class="mb-4">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter email">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter password">
        </div>
        <div class="pb-4">
          <a class="link link-hover" href="/signup">Don't have an account? Sign Up</a>
          </div>
        <div class="mb-4">
          <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign In
          </button>
          <center>
            <div class="pt-7">
              <button class="btn btn-square hover:bg-gray-200 btn-outline">
              <img src="/google.png" alt="Sign In with Google">
              </button>
              <button class="btn btn-square hover:bg-gray-200 btn-outline">
              <img src="/microsoft.png" alt="Sign In with Microsoft">
              </button>
              <button class="btn btn-square hover:bg-gray-200 btn-outline">
              <img src="/apple.png" alt="Sign In with Apple">
              </button>
            </div>
          </center> 
        </div>
      </form>
    </div>
  </div>
</body>
</html>