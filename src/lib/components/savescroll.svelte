<script> 
  import { onMount, onDestroy } from 'svelte';

  if (!import.meta.env.SSR) {
    let storage = localStorage;
    let scrollPosition = 0;
    let bookid = location.pathname.split('/').pop();
    let scroll_key = `scrollpos_${bookid}`

    const saveScrollPosition = () => {
      const scrollY = window.scrollY;
      storage.setItem(scroll_key, scrollY.toString()); 
    };

    const loadScrollPosition = () => {
      const savedScrollPosition = storage.getItem(scroll_key);
      scrollPosition = savedScrollPosition ? parseInt(savedScrollPosition, 10) : 0;
      setTimeout(() => {
        window.scrollTo(0, scrollPosition);
      }, 0);  
    };

    onMount(() => {
      loadScrollPosition();
      setTimeout(()=>{
        window.addEventListener('scroll', saveScrollPosition);
      }, 1000)
    });

    onDestroy(() => {
      window.removeEventListener('scroll', saveScrollPosition);
    });

  }

</script>