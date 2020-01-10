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
</style>

<Slide states={4} let:state>
    <img class="backdrop" transition:fade={{ duration: 1000 }} src="https://svelte.dev/svelte-logo-outline.svg">
    <img class="logo" in:receive={{ key: "logo" }} out:send={{ key: "logo" }} src="https://svelte.dev/svelte-logotype.svg">
    <span class="text">
        <h1 transition:fade={{ duration: 150, delay: 1000 }}>Was ist svelte?</h1>
        {#if state > 0}
            <p transition:fade={{ duration: 150 }}>
                Svelte ist ein JavaScript <b>Frontend Framework</b>, das dem <b>Reactive Programming Paradigma</b> folgt.
            </p>
        {/if}
        {#if state > 1}
            <p transition:fade={{ duration: 150 }}>
                Benutzeroberflächen werden über <b>Zustände</b> deklariert und das Framework kümmert sich darum, dass <b>Zustandsänderungen</b> effizient angezeigt werden.
            </p>
        {/if}
        {#if state > 2}
            <p transition:fade={{ duration: 150 }}>
                Ein Vorteil von Svelte ist, dass, im Gegensatz zu populären Frameworks wie React und Vue <b>kein Virtual DOM</b> zum Einsatz kommt.
            </p>
        {/if}
    </span>
    <!-- {#if state > 2}
        <span in:fade={{ duration: 150, delay: 2500 }} class="notes">
            * Später mehr dazu
        </span>
    {/if} -->
</Slide>
