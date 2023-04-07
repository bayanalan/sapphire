<div class="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
  <div class="flex items-center mb-4">
    <img src="/P+J+P1.png" alt="Pickles and Jeremiah Cricket" width="250" class="mr-12">
    <div>
      <h2 class="text-xl poppins font-bold mb-2">Pickles and Jeremiah Cricket</h2>
      <p class="poppins ">Part 1: New York Times</p>
      <p class="poppins">By Maverick White</p>
    </div>
  </div>
  <div class="flex items-center mt-6">
    <button id="back-btn" class="text-black font-bold py-2 px-4 rounded mr-2">↞</button>
    <button id="play-pause-btn" class="text-black font-bold py-2 px-4 rounded mr-2">
      <span id="play-btn-icon">▶</span>
      <span id="pause-btn-icon" class="hidden">❚❚</span>
    </button>
    <button id="forward-btn" class="text-black font-bold py-2 px-4 rounded mr-2">↠</button>
    <audio id="audio-player" src="/P+J+P1audio.mp3"></audio>
    <button id="restart-btn" class="text-black font-bold py-2 px-4 rounded mr-2">↻</button>
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
    const restartBtn = document.querySelector('#restart-btn');
    const backBtn = document.querySelector('#back-btn');
    const forwardBtn = document.querySelector('#forward-btn');

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

    restartBtn.addEventListener('click', () => {
      if (audio.playing()) {
        audio.pause();
        audio.seek(0);
        playBtnIcon.classList.remove('hidden');
        pauseBtnIcon.classList.add('hidden');
      } else {
        audio.stop();
        audio.seek(0);
      }
    });

    backBtn.addEventListener('click', () => {
      if (audio.seek() >= 5) {
        audio.seek(audio.seek() - 5);
      } else {
        audio.seek(0);
      }
    });

    forwardBtn.addEventListener('click', () => {
      if (audio.duration() - audio.seek() >= 5) {
        audio.seek(audio.seek() + 5);
      } else {
        audio.seek(audio.duration());
      }
    });

  });
</script>