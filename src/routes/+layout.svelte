<script>
  import "../app.postcss";
  import Menu from "$lib/components/menu.svelte"
  import Footer from "$lib/components/footer.svelte"
  //import Screenwidth from "$lib/components/screenwidth.svelte"
</script>

<div class="max-w-screen mx-auto overflow-hidden"> 
  <Menu/>
  <div class="h-20"> &nbsp; </div>
   <slot/>
   <!-- <Screenwidth/> -->
  <Footer/>
</div>

