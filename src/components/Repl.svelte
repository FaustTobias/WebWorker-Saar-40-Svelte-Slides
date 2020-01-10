<script>
    import Repl from "@sveltejs/svelte-repl";
    import examples from "./examples";

    let example = "Hello World";

    let repl = undefined;

    $: {
        if (!example && repl) {
            repl.set(examples["Empty"]);
        }
    }

    $: {
        if (repl) {
            console.log(example);
            repl.set(examples[example]);
        }
    }
</script>

<style>
    .repl {
        position: absolute;
        top: 4vmin;
        left: 50%;
        transform: translate(-50%, 0);
        width: 85%;
        height: 75%;
        background: #f7f7f7;
        box-shadow: 0 2vmin 5vmin #0003;
        cursor: default;
    }

    .bottom-right {
        position: absolute;
        top: 0;
        left: calc(15% / 2);
        cursor: default;
    }

    div :global(.svelte-1p3b02q),
    div :global(.add-new.svelte-1wzo3es),
    div :global(.button.svelte-1wzo3es) {
        outline: none;
        background: transparent !important;
    }

    div :global(.CodeMirror) {
        font-size: 3em !important;
    }

    div :global(button.add-new) {
        height: 2rem;
        width: 1rem;
    }

    select {
        margin-top: 2vmin;
    }
</style>

<div class="repl" on:click|stopPropagation on:contextmenu|stopPropagation>
    <Repl
        workersUrl="repl"
        svelteUrl="https://unpkg.com/svelte@3.12.1"
        rollupUrl="https://unpkg.com/rollup@1/dist/rollup.browser.js"
        bind:this={repl} />
</div>
<div class="bottom-right" on:click|stopPropagation on:contextmenu|stopPropagation>
    <select bind:value={example}>
        {#each Object.keys(examples) as example}
        <option value={example}>{example}</option>
        {/each}
    </select>
</div>
