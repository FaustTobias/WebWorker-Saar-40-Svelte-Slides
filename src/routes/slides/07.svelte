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
        font-size: 8vmin;
        margin: 0;
        margin-bottom: 6vmin;
        text-align: center;
        position: absolute;
        top: 40vmin;
        left: 0;
        right: 0;
    }

    p {
        margin: 2rem 0;
    }

    .text {
        display: block;
        position: absolute;
        top: 4vmin;
        left: 4vmin;
        font-size: 3.5vmin;
        width: 120vmin;
    }

    .notes {
        display: inline-block;
        position: absolute;
        bottom: 20vmin;
        left: 4vmin;
        font-size: 3.5vmin;
    }

    .cat {
        position: absolute;
        top: 50vmin;
        left: 50%;
        transform: translate(-50%, -50%) scale(1.5);
        height: 20vmin;
        object-fit: contain;
        border-radius: 2vmin;
        box-shadow: 0 2vmin 5vmin #0003;
    }
</style>

<Slide states={100} let:state>
    <img class="backdrop" transition:fade={{ duration: 1000 }} src="https://svelte.dev/svelte-logo-outline.svg">
    <img class="logo" in:receive={{ key: "logo" }} out:send={{ key: "logo" }} src="https://svelte.dev/svelte-logotype.svg">
    <h1 transition:fade={{ duration: 150 }}>Vielen Dank für Eure Aufmerksamkeit!</h1>
</Slide>
