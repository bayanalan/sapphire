<div class="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
  <div class="flex items-center mb-4">
    <img src="/P+J+P1.png" alt="Pickles and Jeremiah Cricket" class="w-16 mr-4">
    <div>
      <h2 class="text-xl poppins font-bold mb-2">Pickles and Jeremiah Cricket</h2>
      <p class="mb-2 poppins ">Part 1: New York Times</p>
      <p class="poppins">By Maverick White</p>
    </div>
  </div>
  <div class="flex items-center">
    <button id="play-pause-btn" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <span id="play-btn-icon">▶</span>
      <span id="pause-btn-icon" class="hidden">❚❚</span>
    </button>
    <audio id="audio-player" src="/P+J+P1audio.mp3"></audio>
  </div>
</div>

<script>
  import { onMount } from 'svelte';
  
  onMount(() => {

    const audio = new Howl({
      src: ['/P+J+P1audio.mp3'],
      html5: true
    });

    const playPauseBtn = document.querySelector('#play-pause-btn');
    const playBtnIcon = document.querySelector('#play-btn-icon');
    const pauseBtnIcon = document.querySelector('#pause-btn-icon');

    playPauseBtn.addEventListener('click', () => {
      if (audio.playing()) {
        audio.pause();
        playBtnIcon.classList.remove('hidden');
        pauseBtnIcon.classList.add('hidden');
      } else {
        audio.play();
        playBtnIcon.classList.add('hidden');
        pauseBtnIcon.classList.remove('hidden');
      }
    });

});
</script>