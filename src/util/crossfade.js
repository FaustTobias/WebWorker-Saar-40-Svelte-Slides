import { crossfade, fade } from "svelte/transition";

export const [ send, receive ] = crossfade({
    duration: 300,
    fallback: node => fade(node, { duration: 250 })
});
