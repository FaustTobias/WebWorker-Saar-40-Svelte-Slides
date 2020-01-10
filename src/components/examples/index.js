export default {
  "Hello World": {
    components: [
      {
        name: "App",
        type: "svelte",
        source: "<h1>Hello, World!</h1>"
      }
    ]
  },
  "Control Structures 1": {
    components: [
      {
        name: "App",
        type: "svelte",
        source: `<script>
  let firstName = "";
  let lastName = "";

  $: name = \`\${firstName} \${lastName}\`;
</script>

<!-- TODO: Only show if name is actually given. -->
<h1>Hallo, {name}!</h1>

<input placeholder="Vorname" bind:value={firstName}>
<input placeholder="Nachname" bind:value={lastName}>`
      }
    ]
  },
  "Control Structures 2": {
    components: [
      {
        name: "App",
        type: "svelte",
        source: `<script>
  let name = "";
  let people = [];
  
  const addPerson = () => { people = [...people, name]; }
</script>

<input bind:value={name}>
<button on:click={addPerson}>Hinzufügen</button>

<!-- TODO: Display all ze people. -->`
      }
    ]
  },
  "Control structures 3": {
    components: [
      {
        name: "App",
        type: "svelte",
        source: `<script>
  let promise;
  
  function doRequest() {
    promise = new Promise(
      resolve => {
        setTimeout(
          () => resolve("fertig"),
          2000
        )
      }
    );
  }
</script>

<button on:click={doRequest}>Speichern</button>

<!-- TODO: Display status -->`
      }
    ]
  },
  "Embedded html": {
    components: [
      {
        name: "App",
        type: "svelte",
        source: `<script>
  let content = "";
</script>

{@html content}`
      }
    ]
  },
  "Debug": {
    components: [
      {
        name: "App",
        type: "svelte",
        source: `<script>
  let name = "";
</script>

<input bind:value={name} placeholder="Name">

{#if name === "Tobias Faust"}
  {@debug name}
{/if}`
      }
    ]
  },
  "bind:group Radio": {
    components: [
      {
        name: "App",
        type: "svelte",
        source: `
<script>
  let choice;
</script>

<input type="radio" value="Pommes">
<input type="radio" value="Kroketten">
<input type="radio" value="Kartoffelecken">

{JSON.stringify(choice)}`
      }
    ]
  },
  "bind:group Checkbox": {
    components: [
      {
        name: "App",
        type: "svelte",
        source: `<script>
  let choices = [];
</script>

<input type="checkbox" value="Pommes" bind:group={choices}>
<input type="checkbox" value="Kroketten" bind:group={choices}>
<input type="checkbox" value="Kartoffelecken" bind:group={choices}>

{JSON.stringify(choices)}`
      }
    ]
  },
  "bind:this": {
    components: [
      {
        name: "App",
        type: "svelte",
        source: `<script>
  let element;
</script>

<div bind:this={element}>
  Give me chocolate
</div>`
      }
    ]
  },
  "Livecycle events": {
    components: [
      {
        name: "App",
        type: "svelte",
        source: `<script>
  import { onMount, beforeUpdate, afterUpdate, onDestroy} from "svelte";
  
  let text = "Hallo Webserver!";
  
  onMount(() => {
    text = "Hallo Browser!"
  });
</script>

{text}`
      }
    ]
  },
  "tick": {
    components: [
      {
        name: "App",
        type: "svelte",
        source: `<script>
  let firstName = "Tobias";
  let lastName = "Faust";

  $: name = \`\${firstName} \${lastName}\`;
</script>

<p>{name}</p>
<button on:click={() => {
  lastName = "Schifftner";
  alert(name);
}}>Name ändern</button>`
      }
    ]
  },
  "stores: Counter Example": {
    components: [
      {
        name: "App",
        type: "svelte",
        source: `<script>
  import Counter from "./Counter.svelte";
  import { counter } from "./stores.js";
</script>

<Counter />
{counter}`
      },
      {
        name: "stores",
        type: "js",
        source: `export const counter = 0;`
      },
      {
        name: "Counter",
        type: "svelte",
        source: `<script>
  import IncrementButton from "./IncrementButton.svelte";
  import DecrementButton from "./DecrementButton.svelte";
  import ResetButton from "./ResetButton.svelte";
</script>

<div>
  <IncrementButton />
  <DecrementButton />
  <ResetButton />
</div>`
      },
      {
        name: "IncrementButton",
        type: "svelte",
        source: `<script>
  import { counter } from "./stores.js";
</script>

<button on:click={() => {}}>+</button>`
      },
      {
        name: "DecrementButton",
        type: "svelte",
        source: `<script>
  import { counter } from "./stores.js";
</script>

<button on:click={() => {}}>+</button>`
      },
      {
        name: "ResetButton",
        type: "svelte",
        source: `<script>
    import { counter } from "./stores.js";
  </script>
  
  <button on:click={() => {}}>Zurücksetzen</button>`
      }
    ]
  },
  "getContext, setContext": {
    components: [
      {
        name: "App",
        type: "svelte",
        source: `<script>
  import { setContext } from "svelte";
  import Nested  from "./Nested.svelte";
  
  setContext("bg", "white");
</script>

<Nested />`
      },
      {
        name: "Nested",
        type: "svelte",
        source: `<script>
  import { getContext } from "svelte";
  
  const bg = getContext("bg");
</script>

<div style="background: {bg};">
  Test
</div>`
      }
    ]
  },
  "Styles": {
    components: [
      {
        name: "App",
        type: "svelte",
        source: `<script>
  import Nested from "./Nested.svelte";
</script>

<div>
  App.svelte
</div>
<Nested />`
      },
      {
        name: "Nested",
        type: "svelte",
        source: `<div>Nested.svelte</div>`
      }
    ]
  },
  "Transitions": {
    components: [
      {
        name: "App",
        type: "svelte",
        source: `<script>
  let visible = false;
</script>

<button on:click={() => visible = !visible}>
  {!visible ? "Anzeigen" : "Ausblenden"}
</button>
{#if visible}
<div>
  Oh, yeah!
</div>
{/if}`
      }
    ]
  },
  "Crossfades": {
    components: [
      {
        name: "App",
        type: "svelte",
        source: `<script>
  import Page1 from "./Page1.svelte";
  import Page2 from "./Page2.svelte";

  const pages = {
    Page1,
    Page2
  };
  
  let page = "Page1";
</script>

<select bind:value={page}>
  {#each Object.keys(pages) as page}
  <option value={page}>{page}</option>
  {/each}
</select>

<svelte:component this={pages[page]} />`
      }, {
        name: "Page1",
        type: "svelte",
        source: `<script>
  import { fade } from "svelte/transition";
</script>

<style>
  div {
    position: absolute;
    top: 5rem;
    left: 0;
  }
</style>

<div>
  <h1 transition:fade>Seite 1</h1>
</div>`
      }, {
        name: "Page2",
        type: "svelte",
        source: `<script>
  import { fade } from "svelte/transition";
</script>

<style>
  div {
    position: absolute;
    top: 5rem;
    left: 0;
  }
</style>

<div>
  <p transition:fade>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  </p>
  <strong transition:fade>Seite 2</strong>
</div>`
      }
    ]
  }
}
