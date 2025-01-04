<script>
    import Logo from "$lib/images/logo.svg";
    import { onMount } from "svelte";

    let isMenuOpen = false; // Track menu state

    function menuClick() {
        isMenuOpen = !isMenuOpen; // Toggle menu state
    }
</script>

<main>
    <header
        class="container fixed top-0 left-[50%] translate-x-[-50%] py-5 z-50 lg:py-5"
    >
        <div class="header-nav flex justify-between">
            <div class="logo-container">
                <p
                    class="text-[44px] lg:text-[26px] leading-none"
                    class:active={isMenuOpen}
                >
                    Bhavya.
                </p>
            </div>

            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div class="menu-dots" onclick={menuClick}>
                <div class="menu-ham">
                    <div
                        class="ham-1 ham"
                        class:menu-toggle-1={isMenuOpen}
                    ></div>
                    <div
                        class="ham-2 ham"
                        class:menu-toggle-2={isMenuOpen}
                    ></div>
                    <div
                        class="ham-3 ham"
                        class:menu-toggle-3={isMenuOpen}
                    ></div>
                </div>
            </div>
        </div>
    </header>
    <div
        class="header-body fixed top-0 left-0 w-full h-full bg-[#000] z-10"
        class:header-toggle={isMenuOpen}
    >
        <div class="container flex justify-end">
            <div class="body mt-[83px]">
                <div class="list">1</div>
                <div class="list">1</div>
                <div class="list">1</div>
            </div>
        </div>
    </div>
</main>

<style>
    .header-body {
        transform: translateY(100%);
        transition: all 1s cubic-bezier(1, 0, 0, 1);
    }
    .header-toggle {
        transform: translateY(0%);
    }
    .menu-dots {
        width: 50px;
        height: 50px;
        border-radius: 100%;
        border: 2px solid #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 0px;
        z-index: 555;
    }

    .menu-ham {
        width: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .ham {
        height: 2px;
        background-color: #fff;
        margin: 2px;
        width: 70%;
        border-radius: 10px;
        transition: all 1s cubic-bezier(1, 0, 0, 1);
    }
    .ham-1 {
        width: 40%;
    }
    .ham-3 {
        width: 40%;
    }

    /* Add styles for toggled state */
    .menu-toggle-1 {
        transform: rotate(45deg) translateX(8.5px);
        margin-left: -10px;
    }
    .menu-toggle-2 {
        width: 100%;
        opacity: 0;
    }
    .menu-toggle-3 {
        transform: rotate(-45deg) translateX(8.5px);
        margin-left: -10px;
    }
    .logo-container p {
        transition: all 1s cubic-bezier(1, 0, 0, 1);
    }
    .active {
        color: #fff;
        transition: all 1s cubic-bezier(1, 0, 0, 1);
    }

    @media screen and (max-width: 991px) {
        .menu-dots {
            width: 30px;
            height: 30px;
            border-radius: 100%;
            border: 2px solid #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0 0px;
            z-index: 555;
        }
    }
</style>
