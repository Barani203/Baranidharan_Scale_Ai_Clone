import React from "react";

export default function Apply() {
  return (
    <>
      <section
        id=""
        class="py-18 lg:py-20 bg-transparent pb-24 lg:pb-0 relative "
      >
        <div class="container lg:max-w-[1344px] relative">
          <div class="select-none pointer-events-none absolute top-0 -left-[10%] -right-[10%] bottom-[9%] opacity-50 bg-gradient_background__GEkO8 bg-gradient_background-blue__fhjbE"></div>
          <div class="flex flex-col max-w-3xl mx-auto items-center justify-center text-center mb-10 md:mb-20 md:mt-12 relative z-10 !mb-12 md:!mb-16">
            <div class="mb-5 lg:mb-5 overflow-hidden tracking-[3px] text-xs md:px-5 md:py-2 lg:text-xs uppercase bg-dark bg-opacity-5 text-[#7B8FDD] rounded-full px-4 py-2">
              <span>Apply AI</span>
            </div>
            <h2 class="font-aeonik text-light leading-snug lg:leading-[1.25] text-3xl md:text-4.5xl lg:text-5xl [text-wrap:balance]">
              Generative AI Applications
            </h2>
            <p class="mt-4 lg:mt-2 leading-[1.60] text-neutral-100 lg:text-gray-300 lg:text-xl [text-wrap:balance]">
              Easily Apply AI to your most challenging use cases with pre‑built
              applications that harness the power of customized LLMs.
            </p>
          </div>
          <div class="relative w-screen -translate-x-1/2 sm:w-auto left-1/2 px-7 sm:px-0">
            <div class="keen-slider pb-20 !overflow-visible opacity-100 visible">
              <a
                class="keen-slider__slide"
                href="/donovan"
                style={{
                          transform: "translate3d(0px, 0px, 0px)",
                          minWidth: "484.667px",
                          maxWidth: "484.667px"
                        }}
              >
                <div
                  style={{borderOpacity: "0.16"}}
                  class="box_box__wrapper__7yWdR box_box__wrapper--hoverable___A4_d box_box-blue__FPEs4 before:z-20"
                >
                  <div class="!pt-9 md:!pt-12 !pb-0 !overflow-hidden max-h-[436px] lg:h-[540px] min-h-[450px] lg:!min-h-[540px] z-10 3xl:py-[95px] z-10 relative lg:items-center xl:py-20 md:p-10 lg:py-12 p-6 pt-3 rounded-2xl overflow-hidden md:overflow-visible">
                    <p class="uppercase leading-4  text-light text-xs tracking-[4px] mb-4 lg:mb-6 z-10 relative">
                      Scale Donovan
                    </p>
                    <p class="md:text-[1.625rem] text-light text-3.5xl leading-tight md:leading-8 mb-2 font-aeonik z-10 relative">
                      AI-Powered Decision-Making for Defense
                    </p>
                    <p class="z-10 mb-8 leading-6 text-light md:mb-18 text-zinc-400">
                      AI-powered decision-making support: plan, analyze, and act
                      in minutes.
                    </p>
                    <img
                      alt="Scale Donovan"
                      loading="lazy"
                      width="616"
                      height="400"
                      decoding="async"
                      data-nimg="1"
                      class="absolute left-6 md:left-9 top-46 md:top-auto md:-bottom-32 lg:bottom-0 aspect-[436/276] w-full h-full md:h-auto overflow-hidden object-contain xl:-bottom-[85px] object-left-top"
                      style={{color: "transparent"}}
                      src="./img/dono1.webp"
                    />
                  </div>
                </div>
              </a>
              <a
                class="keen-slider__slide"
                href="/genai-platform"
                style={{
                          transform: "translate3d(32px, 0px, 0px)",
                          minWidth:" 484.667px",
                          maxWidth: "484.667px"
                        }}
              >
                <div
                  style={{ borderOpacity: "0.16" }}
                  class="box_box__wrapper__7yWdR box_box__wrapper--hoverable___A4_d box_box-blue__FPEs4 before:z-20"
                >
                  <div class="!pt-9 md:!pt-12 !pb-0 !overflow-hidden max-h-[436px] lg:h-[540px] min-h-[450px] lg:!min-h-[540px] z-10 3xl:py-[95px] z-10 relative lg:items-center xl:py-20 md:p-10 lg:py-12 p-6 pt-3 rounded-2xl overflow-hidden md:overflow-visible">
                    <p class="uppercase  text-light leading-4 text-xs tracking-[4px] mb-4 lg:mb-6 z-10 relative">
                      Scale GenAI Platform
                    </p>
                    <p class="md:text-[1.625rem] text-light text-3.5xl leading-tight md:leading-8 mb-2 font-aeonik z-10 relative">
                      AI for the Enterprise
                    </p>
                    <p class="z-10 mb-8 leading-6 text-light md:mb-18 text-zinc-400">
                      Transform your data into customized enterprise-ready
                      Generative AI applications.
                    </p>
                    <img
                      alt="Gen AI"
                      loading="lazy"
                      width="575"
                      height="400"
                      decoding="async"
                      data-nimg="1"
                      class="absolute left-6 md:left-9 top-46 md:top-auto md:-bottom-32 lg:bottom-0 aspect-[436/277] w-full h-full md:h-auto overflow-hidden object-contain xl:-bottom-[85px] object-left-top"
                      style={{ color: "transparent" }}
                      src="./img/dono2.webp"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="relative flex justify-center mx-auto lg:hidden -mt-14">
            <button
              type="button"
              class="py-2 px-1 sm:px-2"
              aria-label="Go to slide 1"
            >
              <div class="h-1 sm:h-1.5 md:h-2 rounded-full transition-width duration-300 bg-white w-4 sm:w-5 md:w-6"></div>
            </button>
            <button
              type="button"
              class="py-2 px-1 sm:px-2"
              aria-label="Go to slide 2"
            >
              <div class="h-1 sm:h-1.5 md:h-2 rounded-full transition-width duration-300 bg-white/40 w-1 sm:w-1.5 md:w-2"></div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
