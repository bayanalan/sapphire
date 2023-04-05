<script>
  import "../app.postcss";
  import Menu from "$lib/components/menu.svelte"
  import Footer from "$lib/components/footer.svelte"
  //import Screenwidth from "$lib/components/screenwidth.svelte"

  export const prerender = true;
</script>

<Menu/>


 
  <slot/>

  

<!-- <Screenwidth/> -->



<Footer/>

