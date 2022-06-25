<script>
  import auth from './firebase.auth';
  const handleSignOut = () => auth.signOut();

  export let id, email;
</script>

<p>Welcome { email }!</p>
<p>Your id is { id }</p>
<button on:click={handleSignOut}>Sign Out</button>

