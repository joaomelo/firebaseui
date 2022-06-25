<script>
import auth from "./firebase.auth";
import PageSign from "./page-sign.svelte";
import PageWelcome from "./page-welcome.svelte";

let status = "UNDEFINED";
let email, id;
auth.onChanged((user) => {
  status = user ? "SIGNED_IN" : "SIGNED_OUT";
  email = user ? user.email : null;
  id = user ? user.uid : null;
});  
</script>

<main>
  {#if status === 'SIGNED_OUT'}
    <PageSign />
  {:else if status === 'SIGNED_IN'}
    <PageWelcome id={id} email={email} />
  {:else}
    <p>loading...</p>
  {/if}
</main>