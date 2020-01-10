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
        display: block;
        position: absolute;
        top: 5vmin;
        left: 5vmin;
        height: 10vmin;
    }

    .slogan {
        display: block;
        position: absolute;
        top: 16vmin;
        left: 5vmin;
        font-size: 4.6vmin;
        font-weight: 300;
    }

    h1 {
        font-size: 8vmin;
        margin: 0;
        margin-bottom: 6vmin;
    }

    p {
        margin: 2rem 0;
    }

    .text {
        display: block;
        position: absolute;
        top: 27vmin;
        left: 4vmin;
        font-size: 3.5vmin;
        width: 120vmin;
    }
</style>

<Slide states={8} let:state>
    {#if state > 0}
    <img class="backdrop" in:fade={{ duration: 2000 }} src="https://svelte.dev/svelte-logo-outline.svg" alt="">
    <img class="logo" in:fade={{ duration: 150 }} out:send={{ key: "logo" }} src="https://svelte.dev/svelte-logotype.svg" alt="">
    {/if}
    {#if state > 1}
    <span class="slogan" in:fly={{ duration: 150, y: 10 }}>Cybernetically enhanced web apps</span>
    {/if}
    <span class="text">
        {#if state > 2}
        <h1 transition:fade={{ duration: 150 }}>Agenda</h1>
        {/if}
        <ul>
        {#if state > 3}
            <li transition:fade={{ duration: 150 }}>
                Was ist Svelte?
            </li>
        {/if}
        {#if state > 4}
            <li transition:fade={{ duration: 150 }}>
                Wie wird Svelte verwendet?
            </li>
        {/if}
        {#if state > 5}
            <li transition:fade={{ duration: 150 }}>
                Wer steckt hinter Svelte?
            </li>
        {/if}
        {#if state > 6}
            <li transition:fade={{ duration: 150 }}>
                Livecoding
            </li>
        {/if}
        </ul>
    </span>
</Slide>
