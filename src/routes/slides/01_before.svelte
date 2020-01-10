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

    .slogan-tag {
        display: block;
        position: absolute;
        top: 16vmin;
        left: 5vmin;
        font-size: 4.6vmin;
        font-weight: 300;
        background: #40b3ff;
        color: #fff;
        overflow: hidden;
        white-space: nowrap;
        width: 0;
        transition: width 150ms;
    }

    .slogan-tag.active {
        width: 27.6vmin;
    }

    .dictionary {
        font-size: 4vmin;
        position: absolute;
        left: 5vmin;
        top: 30vmin;
        max-width: 90vmin;
    }

    .dictionary .title {
        height: 1.75em;
    }

    .dictionary b {
        font-style: italic;
    }

    .dictionary small {
        font-size: 2vmin;
        font-weight: 200;
        margin-left: 2vmin;
        position: relative;
        top: -0.6vmin;
    }

    .dictionary span {
        font-size: 3vmin;
    }
</style>

<Slide states={3} let:state>
    <img class="backdrop" src="https://svelte.dev/svelte-logo-outline.svg" alt="">
    <img class="logo" out:send={{ key: "logo" }} src="https://svelte.dev/svelte-logotype.svg" alt="">
    <span class="slogan">Cybernetically enhanced web apps</span>
    <tag class="slogan-tag" out:fly={{ duration: 150, y: 10 }} class:active={state > 0}>Cybernetically enhanced web apps</tag>
    {#if state > 1}
        <div class="dictionary" transition:fly={{ duration: 150, y: 10 }}>
            <div class="title" in:fly={{ duration: 150, y: 10 }} out:fly={{ duration: 150, y: 10 }}>
                <b>Cybernetics</b> <small>cy·​ber·​net·​ics | \ ˌsī-bər-ˈne-tiks  \</small>
            </div>
            <span in:fade={{ duration: 150, y: 10, delay: 500 }} out:fade={{ duration: 150, y: 10 }}>The science of communication and control theory that is concerned especially with the comparative study of automatic control systems (such as the nervous system and brain and mechanical-electrical communication systems)</span>
        </div>
    {/if}
</Slide>
