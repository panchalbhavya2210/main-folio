<script>
    import gsap from "gsap";
    import { onMount } from "svelte";

    let rects = [];

    onMount(() => {
        // Log rects to ensure they are correctly bound
        console.log("Rects:", rects);

        // Ensure initial styles for all rects
        gsap.set(rects, {
            transformOrigin: "center bottom", // Anchor for scaling
            scaleY: 0, // Collapsed state
        });

        // Animate rects
        gsap.to(rects, {
            scaleY: 1, // Expand to full height
            duration: 1.5,
            ease: "elastic.out(1, 1)", // Elastic easing
            stagger: 0.2, // Stagger the animation
        });
    });
</script>

<main>
    <section class="banner relative">
        <div class="container">
            <div class="banner-wrap flex">
                <div
                    class="banner-content mt-[163px] xl:max-w-[45.533vw] lg:max-w-[55vw] lg:mt-[30vw] sm:mt-[35vw] sm:max-w-full"
                >
                    <h1
                        class="text-[54px] lg:text-[26px] xl:text-[3.6vw] leading-tight"
                    >
                        <span class="block">Good Morning!</span>
                        <span class="block"
                            >I Am <span class="text-primary-color">Bhavya</span>
                            Panchal.</span
                        >
                        <span class="block">Front-end Web Developer.</span>
                    </h1>
                    <p
                        class="xl:text-[1.067vw] lg:text-[14px] text-[#424242] lg:mt-5"
                    >
                        A web developer who loves turning ideas into reality.
                        I'm always looking for ways to improve and grow in my
                        craft!
                    </p>
                </div>
                <div
                    class="banner-image absolute right-0 top-0 lg:-top-10 sm:top-0"
                >
                    <svg
                        width="991"
                        height="311"
                        viewBox="0 0 991 311"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="hidden lg:block w-full object-cover h-auto"
                    >
                        <rect
                            y="-178"
                            width="68.6667"
                            height="489"
                            fill="url(#paint0_linear_0_1)"
                        />
                        <rect
                            x="64.6667"
                            y="-178"
                            width="68.6667"
                            height="489"
                            fill="url(#paint1_linear_0_1)"
                        />
                        <rect
                            x="129.333"
                            y="-178"
                            width="68.6667"
                            height="489"
                            fill="url(#paint2_linear_0_1)"
                        />
                        <rect
                            x="194"
                            y="-178"
                            width="68.6667"
                            height="489"
                            fill="url(#paint3_linear_0_1)"
                        />
                        <rect
                            x="258.667"
                            y="-178"
                            width="68.6667"
                            height="489"
                            fill="url(#paint4_linear_0_1)"
                        />
                        <rect
                            x="323.334"
                            y="-178"
                            width="68.6667"
                            height="489"
                            fill="url(#paint5_linear_0_1)"
                        />
                        <rect
                            x="388"
                            y="-178"
                            width="68.6667"
                            height="489"
                            fill="url(#paint6_linear_0_1)"
                        />
                        <rect
                            x="453.667"
                            y="-178"
                            width="68.6667"
                            height="489"
                            fill="url(#paint7_linear_0_1)"
                        />
                        <rect
                            x="519.333"
                            y="-178"
                            width="68.6667"
                            height="489"
                            fill="url(#paint8_linear_0_1)"
                        />
                        <rect
                            x="585"
                            y="-178"
                            width="68.6667"
                            height="489"
                            fill="url(#paint9_linear_0_1)"
                        />
                        <rect
                            x="650.667"
                            y="-178"
                            width="68.6667"
                            height="489"
                            fill="url(#paint10_linear_0_1)"
                        />
                        <rect
                            x="716.334"
                            y="-178"
                            width="68.6667"
                            height="489"
                            fill="url(#paint11_linear_0_1)"
                        />
                        <rect
                            x="784"
                            y="-178"
                            width="68.6667"
                            height="489"
                            fill="url(#paint12_linear_0_1)"
                        />
                        <rect
                            x="852.667"
                            y="-178"
                            width="68.6667"
                            height="489"
                            fill="url(#paint13_linear_0_1)"
                        />
                        <rect
                            x="921.333"
                            y="-178"
                            width="68.6667"
                            height="489"
                            fill="url(#paint14_linear_0_1)"
                        />
                        <rect
                            x="990"
                            y="-178"
                            width="68.6667"
                            height="489"
                            fill="url(#paint15_linear_0_1)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_0_1"
                                x1="34.3333"
                                y1="-178"
                                x2="34.3333"
                                y2="311"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.06" stop-color="#164BDC" />
                                <stop offset="1" stop-color="#7197FF" />
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_0_1"
                                x1="99.0001"
                                y1="-178"
                                x2="99.0001"
                                y2="311"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.12" stop-color="#164BDC" />
                                <stop offset="0.700957" stop-color="#527DF3" />
                                <stop offset="1" stop-color="#7197FF" />
                            </linearGradient>
                            <linearGradient
                                id="paint2_linear_0_1"
                                x1="163.667"
                                y1="-178"
                                x2="163.667"
                                y2="311"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.18" stop-color="#164BDC" />
                                <stop offset="1" stop-color="#7197FF" />
                            </linearGradient>
                            <linearGradient
                                id="paint3_linear_0_1"
                                x1="228.334"
                                y1="-178"
                                x2="228.334"
                                y2="311"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.24" stop-color="#164BDC" />
                                <stop offset="1" stop-color="#7197FF" />
                            </linearGradient>
                            <linearGradient
                                id="paint4_linear_0_1"
                                x1="293"
                                y1="-178"
                                x2="293"
                                y2="311"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.3" stop-color="#164BDC" />
                                <stop offset="1" stop-color="#7197FF" />
                            </linearGradient>
                            <linearGradient
                                id="paint5_linear_0_1"
                                x1="357.667"
                                y1="-178"
                                x2="357.667"
                                y2="311"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.36" stop-color="#164BDC" />
                                <stop offset="1" stop-color="#7197FF" />
                            </linearGradient>
                            <linearGradient
                                id="paint6_linear_0_1"
                                x1="422.333"
                                y1="-178"
                                x2="422.333"
                                y2="311"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.42" stop-color="#164BDC" />
                                <stop offset="1" stop-color="#7197FF" />
                            </linearGradient>
                            <linearGradient
                                id="paint7_linear_0_1"
                                x1="488"
                                y1="-178"
                                x2="488"
                                y2="311"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.48" stop-color="#164BDC" />
                                <stop offset="1" stop-color="#7197FF" />
                            </linearGradient>
                            <linearGradient
                                id="paint8_linear_0_1"
                                x1="553.667"
                                y1="-178"
                                x2="553.667"
                                y2="311"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.54" stop-color="#164BDC" />
                                <stop offset="1" stop-color="#7197FF" />
                            </linearGradient>
                            <linearGradient
                                id="paint9_linear_0_1"
                                x1="619.334"
                                y1="-178"
                                x2="619.334"
                                y2="311"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.6" stop-color="#164BDC" />
                                <stop offset="1" stop-color="#7197FF" />
                            </linearGradient>
                            <linearGradient
                                id="paint10_linear_0_1"
                                x1="685"
                                y1="-178"
                                x2="685"
                                y2="311"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.66" stop-color="#164BDC" />
                                <stop offset="1" stop-color="#7197FF" />
                            </linearGradient>
                            <linearGradient
                                id="paint11_linear_0_1"
                                x1="750.667"
                                y1="-178"
                                x2="750.667"
                                y2="311"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.72" stop-color="#164BDC" />
                                <stop offset="1" stop-color="#7197FF" />
                            </linearGradient>
                            <linearGradient
                                id="paint12_linear_0_1"
                                x1="818.333"
                                y1="-178"
                                x2="818.333"
                                y2="311"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.78" stop-color="#164BDC" />
                                <stop offset="1" stop-color="#7197FF" />
                            </linearGradient>
                            <linearGradient
                                id="paint13_linear_0_1"
                                x1="887"
                                y1="-178"
                                x2="887"
                                y2="311"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.84" stop-color="#164BDC" />
                                <stop offset="1" stop-color="#7197FF" />
                            </linearGradient>
                            <linearGradient
                                id="paint14_linear_0_1"
                                x1="955.667"
                                y1="-178"
                                x2="955.667"
                                y2="311"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.9" stop-color="#164BDC" />
                                <stop offset="1" stop-color="#7197FF" />
                            </linearGradient>
                            <linearGradient
                                id="paint15_linear_0_1"
                                x1="1024.33"
                                y1="-178"
                                x2="1024.33"
                                y2="311"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.395" stop-color="#164BDC" />
                                <stop offset="1" stop-color="#7197FF" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <svg
                        width="635"
                        height="982"
                        viewBox="0 0 635 982"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-[100vh] object-cover lg:hidden w-full"
                    >
                        <rect
                            bind:this={rects[0]}
                            x="635"
                            y="982"
                            width="110"
                            height="982"
                            transform="rotate(180 635 982)"
                            fill="url(#paint0_linear_8_107)"
                            class="rects"
                        />
                        <rect
                            bind:this={rects[1]}
                            x="530"
                            y="982"
                            width="110"
                            height="982"
                            transform="rotate(180 530 982)"
                            fill="url(#paint1_linear_8_107)"
                            class="rects"
                        />
                        <rect
                            bind:this={rects[2]}
                            x="425"
                            y="982"
                            width="110"
                            height="982"
                            transform="rotate(180 425 982)"
                            fill="url(#paint2_linear_8_107)"
                            class="rects"
                        />
                        <rect
                            bind:this={rects[3]}
                            x="320"
                            y="982"
                            width="110"
                            height="982"
                            transform="rotate(180 320 982)"
                            fill="url(#paint3_linear_8_107)"
                            class="rects"
                        />
                        <rect
                            bind:this={rects[4]}
                            x="215"
                            y="982"
                            width="110"
                            height="982"
                            transform="rotate(180 215 982)"
                            fill="url(#paint4_linear_8_107)"
                            class="rects"
                        />
                        <rect
                            bind:this={rects[5]}
                            x="110"
                            y="982"
                            width="110"
                            height="982"
                            transform="rotate(180 110 982)"
                            fill="url(#paint5_linear_8_107)"
                            class="rects"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_8_107"
                                x1="690"
                                y1="982"
                                x2="690"
                                y2="1964"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.065" stop-color="#164BDC" />
                                <stop offset="1" stop-color="#7197FF" />
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_8_107"
                                x1="585"
                                y1="982"
                                x2="585"
                                y2="1964"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.205" stop-color="#164BDC" />
                                <stop offset="1" stop-color="#7197FF" />
                            </linearGradient>
                            <linearGradient
                                id="paint2_linear_8_107"
                                x1="480"
                                y1="982"
                                x2="480"
                                y2="1964"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.32" stop-color="#164BDC" />
                                <stop offset="1" stop-color="#7197FF" />
                            </linearGradient>
                            <linearGradient
                                id="paint3_linear_8_107"
                                x1="375"
                                y1="982"
                                x2="375"
                                y2="1964"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.395" stop-color="#164BDC" />
                                <stop offset="1" stop-color="#7197FF" />
                            </linearGradient>
                            <linearGradient
                                id="paint4_linear_8_107"
                                x1="270"
                                y1="982"
                                x2="270"
                                y2="1964"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.47" stop-color="#164BDC" />
                                <stop offset="1" stop-color="#7197FF" />
                            </linearGradient>
                            <linearGradient
                                id="paint5_linear_8_107"
                                x1="165"
                                y1="982"
                                x2="165"
                                y2="1964"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.551667" stop-color="#164BDC" />
                                <stop offset="1" stop-color="#7197FF" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    </section>
</main>

<style>
</style>
