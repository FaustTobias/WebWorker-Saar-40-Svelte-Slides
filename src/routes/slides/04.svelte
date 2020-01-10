<script>
    import { fade, fly } from "svelte/transition";
    import { send, receive } from "../../util/crossfade";
    import Slide from "../../components/Slide.svelte";
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
        left: 50%;
        top: 8vmin;
        transform: translateX(-50%);
    }

    .meme-XD {
        position: absolute;
        left: 50%;
        top: 30vmin;
        transform: translateX(-50%);
        box-shadow: 0 2vmin 5vmin #0006;
        border-radius: 2vmin;
    }
</style>

<Slide>
    <img class="backdrop" transition:fade={{ duration: 1000 }} src="https://svelte.dev/svelte-logo-outline.svg" alt="">
    <img class="logo" in:receive={{ key: "logo" }} out:send={{ key: "logo" }} src="https://svelte.dev/svelte-logotype.svg" alt="">
    <h1 in:receive={{ key: "header" }} out:send={{ key: "header" }}>Livecoding \o/</h1>
    <img in:fade={{ duration: 250, delay: 200 }} out:fly={{ duration: 100, y: 200 }} class="meme-XD" src="http://i.imgur.com/aTMLvyA.jpg" alt="">
</Slide>
