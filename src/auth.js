import { createAuth } from 'svelte-auth';
import { supabaseScheme } from '@sveltejs/kit/auth';
import supabase from '$lib/supabase.js';


const auth = createAuth({
    strategies: {
      supabase: {
        scheme: supabaseScheme,
        options: {
          supabase,
        },
      },
    },
  });
  