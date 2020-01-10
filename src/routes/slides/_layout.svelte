<style>
    div {
        position: absolute;
        width: 100vw;
        height: 56.25vw;
        left: 0;
        top: calc((100vh - 56.25vw) / 2);
        font-size: 1vmin;
        color: #444;
    }

    i {
        display: inline-block;
        position: absolute;
        bottom: 4vmin;
        left: 50%;
        transform: translateX(-50%);
    }
    
    @media (min-aspect-ratio: 16/9) {
        div {
            width: 177.777777777777778vh;
            height: 100vh;
            left: calc((100vw - 177.777777777777778vh) / 2);
            top: 0;
            cursor: none;
        }
    }
</style>

<div>
    <slot />
</div>
<i>Slides © 2019 Tobias Faust • MIT</i>
