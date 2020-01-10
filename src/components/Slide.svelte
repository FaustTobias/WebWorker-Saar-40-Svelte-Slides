<script>
    import { goto, stores } from "@sapper/app";
    import { fade } from "svelte/transition";

    export let states = 1;

    const page = stores().page;
    const currentSlide = parseInt($page.path.substring(8));

    let state = $page.query.end !== undefined ? states - 1 : 0;

    function nextState() {
        if (state + 1 >= states) {
            return goto(`/slides/${(currentSlide + 1).toString().padStart(2, "0")}`);
        }

        ++state;
    }

    function previousState() {
        if (state - 1 < 0) {
            if (currentSlide > 0) {
                goto(`/slides/${(currentSlide - 1).toString().padStart(2, "0")}?end`);
            }
            return;
        }

        --state;
    }
</script>

<style>
    .container {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        user-select: none;
    }
</style>

<div class="container" transition:fade={{ duration: 150 }} on:click={nextState} on:contextmenu|preventDefault={previousState}>
    <slot {state} />
</div>
