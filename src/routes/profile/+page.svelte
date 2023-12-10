<!-- svelte-ignore a11y-missing-attribute -->
<center class="pt-7"><a class="text-8xl poppins">Profile</a></center>

<!-- svelte-ignore a11y-img-redundant-alt -->
<script>
  import { user } from '$lib/stores'; // Import the user store
</script>

<center class="pb-5 pt-10">
  <div class="ring-container" style="background-image: url({$user.profilePic || '/default-profile.png'}); background-size: cover; background-position: center; background-repeat: no-repeat; width: 225px; height: 225px; border-radius: 50%;"></div>
</center>

<!-- svelte-ignore a11y-missing-attribute -->
<center><a class="pb-3 text-3xl poppins">Bayan Jones</a></center>

<!-- svelte-ignore a11y-missing-attribute -->
<center><a class="pb-10 poppins">Member Since 2023</a></center>

<!-- svelte-ignore a11y-missing-attribute -->
<center class="mt-10"><a href="mailto:bayan.alan.jones@gmail.com" target="_blank" class="text-2xl poppins">Email: bayan.alan.jones@gmail.com</a></center>

<!-- svelte-ignore a11y-missing-attribute -->
<center class="mt-10"><a class="text-2xl poppins">Plan: $4/Month</a></center>

<center class="mt-10"><a href="/signin" class="rounded-full btn btn-outline text-white bg-red-500 text-2xl poppins">Sign Out</a></center>
  

 
