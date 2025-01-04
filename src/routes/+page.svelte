<script>
    import { onMount } from "svelte";
    import "../app.css";
    import Home from "../Components/Home/Home.svelte";

    let cursorX = 0;
    let cursorY = 0;
    let isMouseMoving = false; // State to track mouse movement
    let timeoutId;

    // Update cursor position and show cursor
    const handleMouseMove = (event) => {
        cursorX = event.clientX;
        cursorY = event.clientY;
        isMouseMoving = true;
    };

    // Attach event listener to the window
    onMount(() => {
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    });
</script>

<main>
    <div
        class="custom-cursor lg:hidden"
        class:hidden={!isMouseMoving}
        style="top: {cursorY}px; left: {cursorX}px;"
    ></div>
    <Home />
</main>

<style>
    .custom-cursor {
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #164bdc;
        z-index: 5555;
        mix-blend-mode: color-burn;
        pointer-events: none !important;
        transform: translate(-50%, -50%);
        transition:
            opacity 0.2s,
            transform 0.2s;
        opacity: 1;
    }

    .hidden {
        opacity: 0; /* Hide cursor */
    }
</style>
