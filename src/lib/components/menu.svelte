<script>
  import { page } from '$app/stores';
  var isBook 
  var isAudiobook
  var isAbout
  var isSetup
  var isSignin
  var isSignup
  $: isBook = $page.url.pathname.indexOf('book/')>0
  $: isAudiobook = $page.url.pathname.indexOf('audiobook/')>0
  $: isAbout = $page.url.pathname == '/'
  $: isSignin = $page.url.pathname == '/signin'
  $: isLibrary = $page.url.pathname == '/library'
  $: isSignup = $page.url.pathname == '/setup/signup'
  $: isSetup = $page.url.pathname.indexOf('setup/')>0

  import { onMount } from 'svelte';
  import { Howl } from 'howler';

  import supabase from '$lib/supabase.js'

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
    updateScrubberBar();
  }

  function updateScrubberBar() {
    const scrubber = document.getElementById('scrubber');
    if (scrubber && scrubber.value && scrollPercentage) scrubber.value = scrollPercentage;
  }

  function onScrubberChange() {
    const scrubber = document.getElementById('scrubber');
    const scrollPosition = scrubber.value / 100 * (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    window.scrollTo(0, scrollPosition);
  }
</script>

 

 
       

<!-- toolbar layout  -->
<div class="fixed inset-x-0 top-0 z-50 bg-white">
  <div class="container mx-auto px-5 py-2">
    <nav class="flex justify-between overflow-x-auto">

  

 
  {#if !isLibrary & !isAbout & !isSetup & !isSignin}   <!-- back to library  -->
  <div class="flex items-center">
    <!-- svelte-ignore a11y-label-has-associated-control -->
       <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
       <div tabindex="0" class="btn btn-ghost btn-circle">
        <a href="/library"><img src="/back.png" alt="back button" class="h-6 w-6"/></a>
  </div></div>
  {/if}

  {#if isSignup}   <!-- back to library  -->
  <div class="flex items-center">
    <!-- svelte-ignore a11y-label-has-associated-control -->
       <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
       <div tabindex="0" class="btn btn-ghost btn-circle">
        <a href="/"><img src="/back.png" alt="back button" class="h-6 w-6"/></a>
  </div></div>
  {/if}

  {#if !isBook}  <!-- title, does not show up in books  -->
    <!-- svelte-ignore a11y-missing-attribute -->
    <a class="text-2xl pb-1 poppins pt-2 mx-auto">
      Maverick White Reading Software
    </a>
  {/if}



  {#if isBook}  <!-- reading controls for book only  -->
   <div class="divider divider-horizontal"></div> 
   <div class="flex items-center gap-2">
      <div>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="poppins text-xl pr-4">Stopwatch:</a>
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
  </div>   

<!-- <div class="divider divider-horizontal"></div>  -->
  
{/if}
      
   
{#if !isAbout & !isBook & !isSetup & !isSignin}   <!-- profile icon -->
  <div  class="avatar w-12 btn btn-ghost btn-circle">
    <a href="/profile"><img src="/profile.png" alt="profile" class="rounded-full"/></a>
  </div>
{/if}  

  </nav>      
 </div>
</div>
 

  



<style>
  .timer-button {
    height: 40px;
    width: 80px;
  }
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