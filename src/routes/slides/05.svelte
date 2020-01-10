<script>
    import { fade, fly } from "svelte/transition";
    import { send, receive } from "../../util/crossfade";
    import Repl from "../../components/Repl.svelte";
    import Slide from "../../components/Slide.svelte";

    let repl;
</script>

<style>
    .backdrop {
        position: absolute;
        bottom: 4vmin;
        right: 4vmin;
        width: 50vmin;
    }
    
    .logo {
        position: absolute;
        bottom: 4vmin;
        left: 4vmin;
        height: 7vmin;
    }

    h1 {
        display: inline-block;
        font-size: 8vmin;
        position: absolute;
        left: 4vmin;
        top: auto;
        bottom: 12vmin;
        padding: 0;
        margin: 0;
        font-size: 4vmin;
        font-weight: 200;
        transform: none;
    }

</style>

<Slide let:state>
    <img class="backdrop" transition:fade={{ duration: 1000 }} src="https://svelte.dev/svelte-logo-outline.svg" alt="">
    <img class="logo" in:receive={{ key: "logo" }} out:send={{ key: "logo" }} src="https://svelte.dev/svelte-logotype.svg" alt="">
    <h1 class="corner" in:receive={{ key: "header" }} out:send={{ key: "header" }}>Livecoding!</h1>
    <div in:fade={{ duration: 300, delay: 500 }}>
        <Repl bind:this={repl} />
    </div>
</Slide>
