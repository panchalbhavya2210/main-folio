<script>
    import Logo from "$lib/images/logo.svg";
    import { onMount } from "svelte";
    import CurveContact from "$lib/images/contact-curve.svg";
    import MailNoise from "$lib/images/mail-noise.svg";
    import gsap from "gsap";

    let isMenuOpen = false;

    function menuClick() {
        const quickContact = document.querySelector(".contact-quick");
        const list = document.querySelectorAll(".list");
        isMenuOpen = !isMenuOpen;

        if (isMenuOpen) {
            gsap.to(quickContact, {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.8,
                ease: "elastic.out(1, 0.8)",
            });

            gsap.to(list, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                delay: 0.8,
                ease: "elastic.out(1, 0.8)",
                stagger: 0.1,
            });
        } else {
            gsap.to(quickContact, {
                y: "100%",
                opacity: 0,
                duration: 0.8,
                delay: 0.8,
                ease: "power2.out",
            });

            gsap.to(list, {
                y: "100%",
                opacity: 0,
                duration: 0.8,
                delay: 0.8,
                ease: "power2.out",
                stagger: 0.1,
            });
        }
    }
    onMount(() => {
        const element = document.querySelector(".contact-curve");
        const revElement = document.querySelector(".contact-bg");
        const animation = gsap.to(element, {
            rotation: 360,
            repeat: -1,
            duration: 10,
            ease: "linear",
            delay: 1,
        });

        revElement.addEventListener("mouseenter", () => animation.reverse());
        element.addEventListener("mouseleave", () => animation.play());

        document.querySelectorAll(".head-links").forEach((link) => {
            const path = link.querySelector("path");

            link.addEventListener("mouseenter", () => {
                gsap.to(path, {
                    strokeDashoffset: 0,
                    duration: 0.5,
                    ease: "linear",
                });
            });

            link.addEventListener("mouseleave", () => {
                gsap.to(path, {
                    strokeDashoffset: 300, // Reset to hidden state
                    duration: 0.5,
                    ease: "power2.out",
                });
            });
        });
    });
</script>

<!-- tll -->
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
            <div class="menu-dots cursor-pointer" onclick={menuClick}>
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
        <div class="container flex justify-start relative h-full">
            <div class="body mt-[83px] text-[#fff] text-[40px] font-bold">
                <div class="list opacity-0 mt-5">
                    <a href="/" onclick={menuClick}>
                        <span
                            class="head-links relative flex items-end leading-none"
                        >
                            Home
                            <svg
                                width="92"
                                height="26"
                                viewBox="0 0 92 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 24H68L90.5 1.5M90.5 1.5H68M90.5 1.5V24"
                                    stroke="#7197FF"
                                    stroke-width="3"
                                />
                            </svg>
                        </span>
                    </a>
                </div>
                <div class="list opacity-0 mt-5">
                    <a href="/about" onclick={menuClick}>
                        <span
                            class="head-links relative flex items-end leading-none"
                        >
                            About
                            <svg
                                width="92"
                                height="26"
                                viewBox="0 0 92 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 24H68L90.5 1.5M90.5 1.5H68M90.5 1.5V24"
                                    stroke="#7197FF"
                                    stroke-width="3"
                                />
                            </svg>
                        </span>
                    </a>
                </div>
                <div class="list opacity-0 mt-5">
                    <a href="/projects">
                        <span
                            class="head-links relative flex items-end leading-none"
                        >
                            Project
                            <svg
                                width="92"
                                height="26"
                                viewBox="0 0 92 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 24H68L90.5 1.5M90.5 1.5H68M90.5 1.5V24"
                                    stroke="#7197FF"
                                    stroke-width="3"
                                />
                            </svg>
                        </span>
                    </a>
                </div>
                <div class="list opacity-0 mt-5">
                    <a href="/contact">
                        <span
                            class="head-links relative flex items-end leading-none"
                        >
                            Contact
                            <svg
                                width="92"
                                height="26"
                                viewBox="0 0 92 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 24H68L90.5 1.5M90.5 1.5H68M90.5 1.5V24"
                                    stroke="#7197FF"
                                    stroke-width="3"
                                />
                            </svg>
                        </span>
                    </a>
                </div>
            </div>

            <div
                class="contact-quick absolute bottom-5 translate-y-16 opacity-0 right-0"
            >
                <div class="relative z-10">
                    <img src={CurveContact} alt="" class="contact-curve" />
                    <a href="mailto:panchalbhavya2210@gmail.com">
                        <div
                            class="contact-bg text-[#fff] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] w-[139px] h-[139px]"
                        >
                            <img src={MailNoise} alt="" class="" />
                        </div>
                    </a>
                </div>
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
    .head-links svg path {
        stroke-dasharray: 300; /* Default length (adjusted dynamically) */
        stroke-dashoffset: 300; /* Initially hidden */
        transition: stroke-dashoffset 0.5s ease; /* Smooth animation */
    }

    .head-links:hover svg path {
        stroke-dashoffset: 0; /* Reveal the stroke */
    }
</style>
