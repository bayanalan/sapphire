<script>
    import { page } from '$app/stores';
    var isBook 
    var isAudiobook
    $: isBook = $page.url.pathname.indexOf('book/')>0
    $: isAudiobook = $page.url.pathname.indexOf('audiobook/')>0

    import { onMount } from 'svelte';
import { Howl } from 'howler';

let intervalId;
let minutes = 0;
let seconds = 0;
let timeElapsed = '0:00';
let isRunning = false;
let startTime;
let elapsedTime = 0;
let sound;

const playSound = () => {
  sound = new Howl({
    src: '/mixkit-classic-alarm-995.wav',
  });
  sound.play();
};

const stopSound = () => {
  sound.stop();
};

const startStopwatch = () => {
  isRunning = true;
  startTime = Date.now() - elapsedTime;
  intervalId = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    const elapsedMinutes = Math.floor(elapsedTime / 60000);
    const elapsedSeconds = Math.floor((elapsedTime % 60000) / 1000);
    timeElapsed = `${elapsedMinutes}:${elapsedSeconds.toString().padStart(2, '0')}`;
  }, 1000);
};

const pauseStopwatch = () => {
  clearInterval(intervalId);
  isRunning = false;
  elapsedTime = Date.now() - startTime;
};

const resetStopwatch = () => {
  clearInterval(intervalId);
  isRunning = false;
  minutes = 0;
  seconds = 0;
  timeElapsed = '0:00';
  elapsedTime = 0;
};

onMount(() => {
  // Initialize sound
  playSound();
  stopSound();
});

let scrollPercentage = 0;
  
  onMount(() => {
    window.addEventListener('scroll', updateScrollPercentage);
    scrollPercentage = localStorage.getItem('scrollPercentage') || 0;
  });
  
  function updateScrollPercentage() {
    const scrollPosition = document.documentElement.scrollTop;
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    scrollPercentage = Math.floor(scrollPosition / pageHeight * 100);
    localStorage.setItem('scrollPercentage', scrollPercentage);
  }
 </script>

{#if !isBook}

<div class="navbar bg-white top-0 rounded-full sticky z-50">
    <div class="navbar-start">
      <div class="bg-grey-300 dropdown poppins">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <img src="/menu.png" alt="Menu" class="h-6 w-6"/>
        </label>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul tabindex="0" class="bg-white text-black menu menu-compact dropdown-content mt-3 p-2 shadow rounded-2xl w-52">
          <!-- svelte-ignore a11y-missing-attribute -->
          <li><a href="/">About</a></li>
          <!-- svelte-ignore a11y-missing-attribute -->
          <li><a href="/library">Library</a></li>
          <!-- svelte-ignore a11y-missing-attribute -->
         <li><a href="/pricing">Pricing</a></li> 
          
        </ul>
     </div>
    </div>
    <div class="navbar-center">
      <!-- svelte-ignore a11y-missing-attribute -->
      <!-- <a href="/"><img width="60" src="/headerlogo.png" alt="Reload"></a> -->
      <!-- svelte-ignore a11y-missing-content -->
      <a class="poppins rounded-full text-lg text-black" href="/">Maverick White Reading Software
      </a>
    </div>
    <div class="navbar-end">
    
      <div tabindex="0" class="avatar w-12 btn ml-12 btn-ghost btn-circle">
        <a href="/profile"><img src="/profile.png" alt="profile" class="rounded-full"/></a>
      </div>
</div>
</div>  

{/if}

{#if isBook}
       
<style>
  .timer-button {
    height: 40px;
    width: 80px;
  }
</style>
  
  <div class="w-full top-0 mx-auto sticky z-50 p-5 rounded-full bg-white">
  <div class="flex items-center">
    <!-- svelte-ignore a11y-label-has-associated-control -->
       <div tabindex="0" class="btn btn-ghost btn-circle">
        <a href="/library"><img src="/back.png" alt="back button" class="h-6 w-6"/></a>
     </div>

     <div class="bg-grey-300 dropdown poppins">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <img src="/menu.png" alt="Menu" class="h-6 w-6"/>
      </label>
      <ul tabindex="0" class="bg-white text-black menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
        <!-- svelte-ignore a11y-missing-attribute -->
        <li><a href="/">About</a></li>
        <!-- svelte-ignore a11y-missing-attribute -->
        <li><a href="/library">Library</a></li>
        <!-- svelte-ignore a11y-missing-attribute -->
       <li><a href="/pricing">Pricing</a></li> 
        
      </ul>
   </div>

   <div class="divider divider-horizontal"></div> 

   <div class="flex items-center gap-2">

<div>
  <button
    class="bg-gray-100 text-black font-bold rounded-full poppins py-2 px-4 rounded timer-button"
    on:click={() => { if (!isRunning) startStopwatch(); else pauseStopwatch(); }}
  >
    {!isRunning ? 'Start' : 'Pause'}
  </button>
  <button
    class="bg-gray-100 text-black rounded-full font-bold poppins py-2 px-5 rounded timer-button pr-10"
    on:click={resetStopwatch}
  >
    Reset
  </button>
</div>


<div class="pr-1">
  <div class="text-xl rounded-full font-medium text-center text-black p-3 rounded bg-gray-100">
    {timeElapsed}
  </div>
</div>
    

</div>

      <div class="divider divider-horizontal"></div> 
      
<div class="w-48">

<center>
  <p class="poppins text-base pb-3">Progress:</p>
</center> 
      
<div class="progress-bar rounded-full">
  <div class="progress" style="width: {scrollPercentage}%;"></div>
</div>

<style>
  .progress-bar {
    width: 100%;
    height: 8px;
    background-color: #f0f0f0;
  }
  
  .progress {
    height: 100%;
    background-color: #0ea5e9;
  }
</style>

</div>   

<div class="divider divider-horizontal"></div> 
   
<div class="dropdown">
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <label tabindex="0"><img src="/bookoptions.png" alt="Book Options" class="w-12 btn btn-ghost btn-circle"></label>
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <ul tabindex="0" class="bg-white text-black menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
    <!-- svelte-ignore a11y-missing-attribute -->
    <li><a class="poppins">Reading Mode</a></li>
    <!-- svelte-ignore a11y-missing-attribute -->
    <li><a class="poppins">Audiobook Mode</a></li>
    <!-- svelte-ignore a11y-missing-attribute -->
    <!-- <li><a class="poppins">Immersive Mode</a></li> -->
  </ul>
</div>
      
      <div class="divider divider-horizontal"></div> 
      
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <div tabindex="0" class="avatar w-12 btn btn-ghost btn-circle">
        <a href="/profile"><img src="/profile.png" alt="profile" class="rounded-full"/></a>
      </div>
    
    </div></div> 



    {/if}