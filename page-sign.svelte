<script>
import { onMount } from 'svelte';
import auth from "./firebase.auth";

onMount(() => auth.uiStart("#container"));
</script>
<div id="container"></div>