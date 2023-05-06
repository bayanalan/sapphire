<center>
    <div class="pt-2">
      <ul class="steps">
      <li class="step step-primary">Register</li>
      <li class="step step-primary">Choose Plan</li>
      <li class="step step-primary" data-content="?">Profile</li>
      <li class="step" data-content="?">Done!</li>
    </ul>
    </div>
    </center>
    <!-- svelte-ignore a11y-missing-attribute -->
    <html>
        <head>
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
          <style>
            .hidden-ring {
              border-color: transparent;
            }
          </style>
        </head>
        <body class="flex flex-col items-center justify-start h-auto pt-10">
          <center class="pt-4 pb-6">
            <!-- svelte-ignore a11y-missing-attribute -->
            <a class="text-6xl poppins">Profile</a>
          </center>
          <div class="flex flex-col items-center">
            <div class="flex items-center mb-4">
              <input type="text" id="daisyInput" placeholder="Name" class="poppins text-center rounded-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200" />
              <button onclick="displayFirstLetters()" class="daisy-outline bg-black rounded-full btn-sm ml-2 px-4 text-white poppins">Submit</button>
            </div>
            <div class="ring-container flex items-center justify-center w-16 h-16 border-2 border-black rounded-full">
              <div class="text-xl font-bold" id="output"></div>
            </div>
          </div>
        
          <script>
            function displayFirstLetters() {
              // Get the input value
              const inputValue = document.getElementById('daisyInput').value.trim();
              const outputElement = document.getElementById('output');
              const ringContainer = document.querySelector('.ring-container');
        
              // If the input is empty, set the output to an empty string and hide the ring
              if (inputValue === '') {
                outputElement.innerText = '';
                ringContainer.classList.add('hidden-ring');
                return;
              }
        
              // Split the input value into words
              const words = inputValue.split(' ');
        
              // Extract the first letter of each word and convert to uppercase
              const firstLetters = words.map(word => word.charAt(0).toUpperCase()).join('');
        
              // Display the result in the output element and show the ring
              outputElement.innerText = firstLetters;
              ringContainer.classList.remove('hidden-ring');
            }
        
            // Listen for the "Enter" key press in the input field
            document.getElementById('daisyInput').addEventListener('keydown', function(event) {
              if (event.key === 'Enter') {
                displayFirstLetters();
              }
            });
          </script>
        </body>
        </html>            
    <center class="mx-auto pt-24">
    <a class="btn btn-outline rounded-full" href="/setup/done">Next</a>
    </center>