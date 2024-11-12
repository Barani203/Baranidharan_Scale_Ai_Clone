import React from "react";

export default function Enterprise() {
  return (
    <>
      <section id="" class="py-18 lg:py-20 bg-transparent relative lg:pb-8">
        <div class="container relative">
          <div class="flex flex-col max-w-3xl mx-auto items-center justify-center text-center mb-10 md:mb-20 md:mt-12 !mb-16">
            <div class="mb-5 lg:mb-5 overflow-hidden tracking-[3px] text-xs md:px-5 md:py-2 lg:text-xs uppercase bg-dark bg-opacity-5 text-[#D1AAD7] rounded-full px-4 py-2">
              <span style={{color:"rgb(209 170 215)"}}>AI for the Enterprise</span>
            </div>
            <h2 class="font-aeonik text-light leading-snug lg:leading-[1.25] text-3xl md:text-4.5xl lg:text-5xl [text-wrap:balance]">
              Generative AI Architecture
            </h2>
            <p class="mt-4 lg:mt-2 leading-[1.60] text-neutral-100 lg:text-gray-300 lg:text-xl [text-wrap:balance]">
              Whether you’re building your own models or applying foundation
              models to your business, data remains the biggest bottleneck to
              AI.
            </p>
            <a
              style={{webkitTapHighlightColor: "transparent"}}
              class="relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block mt-8"
              href="/demo"
            >
              <div class="new-button_button--primary__EJ4AI font-medium justify-center text-light flex flex-nowrap whitespace-nowrap transition-translate duration-300 cursor-pointer group items-center h-full group leading-[150%] new-button_button--pink__gdR3d text-sm px-[30px] py-[14px]">
                Book a Demo
                <span class="inline-block ml-1 font-normal duration-300 w-fit transition-translate group-hover:translate-x-1 font-unicode">
                  →
                </span>
              </div>
              <span class="after:content-[''] after:inline-block absolute inset-0 after:inset-0 after:absolute select-none pointer-events-none after:rounded-[11px] rounded-[11px] shadow-[inset_0_0_0_1px_rgba(255,255,255,1)] after:shadow-[inset_0_0_0_1px_rgba(200,139,196,0.4)]"></span>
            </a>
          </div>
          <div class="flex justify-center flex-col mb-24 md:mb-40 xl:mb-16 sm:h-[700px] h-[590px] mx-auto xl:flex-row mt-28 xl:mt-0">
            <div class="relative z-10 hidden w-full -mr-9 xl:inline-block xl:w-6/12 xl:min-w-[510px]">
              <div class="absolute w-full -translate-y-1/2 top-1/2">
                <div class="opacity-30 text-light border-b group last:border-transparent border-white/10 group hover:border-white hover:last:border-white hover:opacity-100 transition-all duration-300 cursor-pointer">
                  <p style={{color:"#fff"}} class="w-full text-light pt-6 pb-2 text-2xl leading-10 text-left    font-aeonik">
                    Fine-Tuning and RLHF
                  </p>
                  <p class="pb-6 overflow-hidden text-white transition-colors group-hover:text-light/70">
                    Adapt best-in-class foundation models to your business and
                    your specific data to build sustainable, successful AI
                    programs and data from your enterprise.
                  </p>
                </div>
                <div class="opacity-100 border-b group last:border-transparent border-white/10 group hover:border-white hover:last:border-white hover:opacity-100 transition-all duration-300 cursor-pointer">
                  <p class="w-full pt-6 pb-2 text-2xl leading-10 text-left text-white font-aeonik">
                    Foundation Models
                  </p>
                  <p class="pb-6 overflow-hidden text-white transition-colors group-hover:text-white/70">
                    Scale partners or integrates with all of the leading AI
                    models, from open-source to closed-source, including OpenAI,
                    Google, Meta, Cohere, and more.
                  </p>
                </div>
                <div class="opacity-30 border-b group last:border-transparent border-white/10 group hover:border-white hover:last:border-white hover:opacity-100 transition-all duration-300 cursor-pointer">
                  <p class="w-full pt-6 pb-2 text-2xl leading-10 text-left text-white font-aeonik">
                    Enterprise Data
                  </p>
                  <p class="pb-6 overflow-hidden text-white transition-colors group-hover:text-white/70">
                    Scale's Data Engine enables you to integrate your enterprise
                    data into the fold of these models, providing the base for
                    long-term strategic differentiation.
                  </p>
                </div>
              </div>
            </div>
            <div class="relative inline-block w-full -mb-3 xl:h-full xl:mb-10 xl:mx-auto">
              <div class="keen-slider !overflow-visible xl:absolute pb-6 xl:!hidden">
                <img
                  alt="Data model"
                  loading="lazy"
                  width="334"
                  height="307"
                  decoding="async"
                  data-nimg="1"
                  class="object-contain w-full h-auto keen-slider__slide"
                  style={{
                            color: "transparent",
                            transform:" translate3d(192px, 0px, 0px)",
                            minWidth: "576px",
                            maxWidth: "576px"
                          }}
                  sizes="100vw"
                  // srcset="
                  //           /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhole-model.1daa48ee.png&amp;w=320&amp;q=100   320w,
                  //           /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhole-model.1daa48ee.png&amp;w=384&amp;q=100   384w,
                  //           /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhole-model.1daa48ee.png&amp;w=768&amp;q=100   768w,
                  //           /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhole-model.1daa48ee.png&amp;w=992&amp;q=100   992w,
                  //           /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhole-model.1daa48ee.png&amp;w=1200&amp;q=100 1200w,
                  //           /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhole-model.1daa48ee.png&amp;w=1920&amp;q=100 1920w
                  //         "
                  src="./img/scale1.webp"
                />
                <img
                  alt="RLHF layer from data model"
                  loading="lazy"
                  width="334"
                  height="307"
                  decoding="async"
                  data-nimg="1"
                  class="object-contain w-full h-auto keen-slider__slide"
                  style={{
                            color: "transparent",
                            transform:" translate3d(256px, 0px, 0px)",
                            miWidth: "576px",
                            maxWidth: "576px"
                          }}
                  sizes="100vw"
                
                 src="./img/scale2.webp"
                />
                <img
                  alt="Foundation models layer from data model"
                  loading="lazy"
                  width="334"
                  height="307"
                  decoding="async"
                  data-nimg="1"
                  class="object-contain w-full h-auto keen-slider__slide"
                  style={{
                            color: "transparent",
                            transform: "translate3d(320px, 0px, 0px)",
                            minWidth: "576px",
                            maxWidth: "576px"
                          }}
                  sizes="100vw"
src="./img/scale3.webp"
                />
                <img
                  alt="Enterprise quality layer from data model"
                  loading="lazy"
                  width="334"
                  height="307"
                  decoding="async"
                  data-nimg="1"
                  class="object-contain w-full h-auto keen-slider__slide"
                  style={{
                            color: "transparent",
                            transform: "translate3d(384px, 0px, 0px)",
                            minWidth: "576px",
                            maxWidth:" 576px"
                          }}
                  sizes="100vw"
                  src="./img/scale4.webp"
                />
              </div>
            </div>
            <div class="px-7 w-screen left-1/2 -translate-x-1/2 relative sm:w-auto sm:px-0 xl:mb-6 xl:hidden">
              <div class="keen-slider !overflow-visible pb-24">
                <div
                  class="space-y-4 keen-slider__slide active"
                  style={{
                            transform: "translate3d(192px, 0px, 0px)",
                            minWidth: "576px",
                            maxWidth: '576px'
                          }}
                >
                  <p class="text-2xl leading-10 font-aeonik">
                    Enterprise GenAI Platform
                  </p>
                  <p class="text-white/70">
                    The only full-stack GenAI Platform for your Enterprise,
                    powered by the Scale Data Engine.
                  </p>
                </div>
                <div
                  class="space-y-4 keen-slider__slide"
                  style={{
                            transform: "translate3d(256px, 0px, 0px)",
                            minWidth: "576px",
                            maxWidth: '576px'
                          }}
                >
                  <p class="text-2xl leading-10 font-aeonik">
                    Fine-Tuning and RLHF
                  </p>
                  <p class="text-white/70">
                    Adapt best-in-class foundation models to your business and
                    your specific data to build sustainable, successful AI
                    programs and data from your enterprise.
                  </p>
                </div>
                <div
                  class="space-y-4 keen-slider__slide"
                  style={{
                            transform: "translate3d(320px, 0px, 0px)",
                            minWidth: "576px",
                            maxWidth: "576px"
                          }}
                >
                  <p class="text-2xl leading-10 font-aeonik">
                    Foundation Models
                  </p>
                  <p class="text-white/70">
                    Scale partners or integrates with all of the leading AI
                    models, from open-source to closed-source, including OpenAI,
                    Google, Meta, Cohere, and more.
                  </p>
                </div>
                <div
                  class="space-y-4 keen-slider__slide"
                  style={{
                            transform: "translate3d(384px, 0px, 0px)",
                            minWidth:" 576px",
                            maxWidth: "576px"
                          }}
                >
                  <p class="text-2xl leading-10 font-aeonik">Enterprise Data</p>
                  <p class="text-white/70">
                    Scale's Data Engine enables you to integrate your enterprise
                    data into the fold of these models, providing the base for
                    long-term strategic differentiation.
                  </p>
                </div>
              </div>
            </div>
            <div class="relative z-50 mx-auto -mt-16 lg:-mt-10 xl:hidden">
              <button
                class="px-1 py-2 sm:px-2"
                aria-label="Slide 1"
                type="button"
              >
                <div class="h-1 sm:h-1.5 md:h-2 rounded-full transition-width duration-300 bg-white w-4 sm:w-5 md:w-6"></div>
              </button>
              <button
                class="px-1 py-2 sm:px-2"
                aria-label="Slide 2"
                type="button"
              >
                <div class="h-1 sm:h-1.5 md:h-2 rounded-full transition-width duration-300 bg-white/40 w-1 sm:w-1.5 md:w-2"></div>
              </button>
              <button
                class="px-1 py-2 sm:px-2"
                aria-label="Slide 3"
                type="button"
              >
                <div class="h-1 sm:h-1.5 md:h-2 rounded-full transition-width duration-300 bg-white/40 w-1 sm:w-1.5 md:w-2"></div>
              </button>
              <button
                class="px-1 py-2 sm:px-2"
                aria-label="Slide 4"
                type="button"
              >
                <div class="h-1 sm:h-1.5 md:h-2 rounded-full transition-width duration-300 bg-white/40 w-1 sm:w-1.5 md:w-2"></div>
              </button>
            </div>
          </div>
          <p class="max-w-max mb-10 text-light md:mb-12 text-center mx-auto uppercase leading-[1.70] text-xs px-3 sm:px-0 md:text-sm tracking-[4px]">
            GENERATIVE AI PROVIDERS WE PARTNER&nbsp;WITH:
          </p>
          <div class="hidden md:block">
            <ul class="items-center justify-center flex gap-4">
              <li class="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
                <div class="absolute bg-black/40 inset-px rounded-2xl"></div>
                <div class="absolute inset-0 border border-white/15 rounded-2xl"></div>
                <img
                  alt="openai"
                  loading="lazy"
                  width="108"
                  height="28"
                  decoding="async"
                  data-nimg="1"
                  class="logo-grid_full-white__9DeNP opacity-100 relative"
                  style={{color: "transparent"}}
                 src="./img/hero-bg-mobile.webp"
                />
              </li>
              <li class="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
                <div class="absolute bg-black/40 inset-px rounded-2xl"></div>
                <div class="absolute inset-0 border border-white/15 rounded-2xl"></div>
                <img
                  alt="adept"
                  loading="lazy"
                  width="75"
                  height="36"
                  decoding="async"
                  data-nimg="1"
                  class="logo-grid_full-white__9DeNP opacity-100 relative"
                  style={{color: "transparent"}}
                 src="./img/hero-bg-mobile.webp"
                />
              </li>
              <li class="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
                <div class="absolute bg-black/40 inset-px rounded-2xl"></div>
                <div class="absolute inset-0 border border-white/15 rounded-2xl"></div>
                <img
                  alt="meta"
                  loading="lazy"
                  width="90"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  class="logo-grid_full-white__9DeNP opacity-100 relative"
                  style={{color: "transparent"}}
                  src="./img/hero-bg-mobile.webp"
                />
              </li>
              <li class="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
                <div class="absolute bg-black/40 inset-px rounded-2xl"></div>
                <div class="absolute inset-0 border border-white/15 rounded-2xl"></div>
                <img
                  alt="cohere"
                  loading="lazy"
                  width="140"
                  height="24"
                  decoding="async"
                  data-nimg="1"
                  class="logo-grid_full-white__9DeNP opacity-100 relative"
                  style={{color: "transparent"}}
                  src="./img/hero-bg-mobile.webp"
                />
              </li>
              <li class="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
                <div class="absolute bg-black/40 inset-px rounded-2xl"></div>
                <div class="absolute inset-0 border border-white/15 rounded-2xl"></div>
                <img
                  alt="anthropic"
                  loading="lazy"
                  width="126"
                  height="15"
                  decoding="async"
                  data-nimg="1"
                  class="logo-grid_full-white__9DeNP opacity-100 relative"
                  style={{color: "transparent"}}
                  
                 src="./img/hero-bg-mobile.webp"
                />
              </li>
            </ul>
          </div>
          <div class="relative w-screen -translate-x-1/2 md:hidden left-1/2">
            <div
              class="rfm-marquee-container space-x-6"
              style={{
                        pauseOnHover: "running",
                        pauseOnClick: "running",
                        width:" 100%",
                        transform: "none",
                        position:"relative"
                      }}
            >
              <div
                class="rfm-marquee"
                style={{
                          play:" running",
                          direction: "normal",
                          duration: "0s",
                          delay: '0s',
                          iterationCount:" infinite",
                          minWidth: "100%"
                      }}
              >
                <div class="rfm-initial-child-container">
                  <div class="rfm-child" style={{transform: "none"}}>
                    <ul class="items-center justify-center flex gap-4">
                      <li class="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
                        <div class="absolute bg-black/40 inset-px rounded-2xl"></div>
                        <div class="absolute inset-0 border border-white/15 rounded-2xl"></div>
                        <img
                          alt="openai"
                          loading="lazy"
                          width="108"
                          height="28"
                          decoding="async"
                          data-nimg="1"
                          class="logo-grid_full-white__9DeNP opacity-100 relative"
                          src="./img/partner1.webp"
                        />
                      </li>
                      <li class="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
                        <div class="absolute bg-black/40 inset-px rounded-2xl"></div>
                        <div class="absolute inset-0 border border-white/15 rounded-2xl"></div>
                        <img
                          alt="adept"
                          loading="lazy"
                          width="75"
                          height="36"
                          decoding="async"
                          data-nimg="1"
                          class="logo-grid_full-white__9DeNP opacity-100 relative"
                     src="./img/partner2.webp"
                        />
                      </li>
                      <li class="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
                        <div class="absolute bg-black/40 inset-px rounded-2xl"></div>
                        <div class="absolute inset-0 border border-white/15 rounded-2xl"></div>
                        <img
                          alt="meta"
                          loading="lazy"
                          width="90"
                          height="20"
                          decoding="async"
                          data-nimg="1"
                          class="logo-grid_full-white__9DeNP opacity-100 relative"
                           src="./img/partner3.webp"
                        />
                      </li>
                      <li class="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
                        <div class="absolute bg-black/40 inset-px rounded-2xl"></div>
                        <div class="absolute inset-0 border border-white/15 rounded-2xl"></div>
                        <img
                          alt="cohere"
                          loading="lazy"
                          width="140"
                          height="24"
                          decoding="async"
                          data-nimg="1"
                          class="logo-grid_full-white__9DeNP opacity-100 relative"
                           src="./img/partner4.webp"
                          style={{color: "transparent"}}
                        />
                      </li>
                      <li class="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
                        <div class="absolute bg-black/40 inset-px rounded-2xl"></div>
                        <div class="absolute inset-0 border border-white/15 rounded-2xl"></div>
                        <img
                          alt="anthropic"
                          loading="lazy"
                          width="126"
                          height="15"
                          decoding="async"
                          data-nimg="1"
                          class="logo-grid_full-white__9DeNP opacity-100 relative"
                           src="./img/partner5.webp"
                          style={{color: "transparent"}}
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                class="rfm-marquee"
                style={{
                          play: "running",
                          direction: "normal",
                          duration: "0s",
                          delay: "0s",
                          iterationCount: "infinite",
                          minWidth: "100%",
                          overflow: "hidden"
                          
                        }}
              >
                <div class="rfm-child" style={{transform: "none"}}>
                  <ul class="items-center justify-center flex gap-4">
                  {/* class="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl */}
                    <li className="oveflow-hidden relative flex item-center  justify-center w-[230px] h-28 rounded-2xl">
                      <div class="absolute bg-black/40 inset-px rounded-2xl"></div>
                      <div class="absolute inset-0 border border-white/15 rounded-2xl"></div>
                      <img
                        alt="openai"
                        loading="lazy"
                        width="108"
                        height="28"
                        decoding="async"
                        data-nimg="1"
                        class="logo-grid_full-white__9DeNP opacity-100 relative"
                        src="./img/partner1.webp"
                        style={{color: "transparent"}}
                      />
                    </li>
                    <li class="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
                      <div class="absolute bg-black/40 inset-px rounded-2xl"></div>
                      <div class="absolute inset-0 border border-white/15 rounded-2xl"></div>
                      <img
                        alt="adept"
                        loading="lazy"
                        width="75"
                        height="36"
                        decoding="async"
                        data-nimg="1"
                        class="logo-grid_full-white__9DeNP opacity-100 relative"
                        srcset="
                                  /_next/image?url=%2Fstatic%2Fimages%2Flogos%2Finvestors%2Fadept.png&amp;w=96&amp;q=100  1x,
                                  /_next/image?url=%2Fstatic%2Fimages%2Flogos%2Finvestors%2Fadept.png&amp;w=256&amp;q=100 2x
                                "
                        src="/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Finvestors%2Fadept.png&amp;w=256&amp;q=100"
                        style={{color: "transparent"}}
                      />
                    </li>
                    <li class="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
                      <div class="absolute bg-black/40 inset-px rounded-2xl"></div>
                      <div class="absolute inset-0 border border-white/15 rounded-2xl"></div>
                      <img
                        alt="meta"
                        loading="lazy"
                        width="90"
                        height="20"
                        decoding="async"
                        data-nimg="1"
                        class="logo-grid_full-white__9DeNP opacity-100 relative"
                        srcset="
                                  /_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fmeta.png&amp;w=96&amp;q=100  1x,
                                  /_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fmeta.png&amp;w=256&amp;q=100 2x
                                "
                        src="/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fmeta.png&amp;w=256&amp;q=100"
                        style={{color: "transparent"}}
                      />
                    </li>
                    <li class="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
                      <div class="absolute bg-black/40 inset-px rounded-2xl"></div>
                      <div class="absolute inset-0 border border-white/15 rounded-2xl"></div>
                      <img
                        alt="cohere"
                        loading="lazy"
                        width="140"
                        height="24"
                        decoding="async"
                        data-nimg="1"
                        class="logo-grid_full-white__9DeNP opacity-100 relative"
                        srcset="
                                  /_next/image?url=%2Fstatic%2Fimages%2Flogos%2Finvestors%2Fcohere.png&amp;w=256&amp;q=100 1x,
                                  /_next/image?url=%2Fstatic%2Fimages%2Flogos%2Finvestors%2Fcohere.png&amp;w=320&amp;q=100 2x
                                "
                        src="/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Finvestors%2Fcohere.png&amp;w=320&amp;q=100"
                        style={{color: "transparent"}}
                      />
                    </li>
                    <li class="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
                      <div class="absolute bg-black/40 inset-px rounded-2xl"></div>
                      <div class="absolute inset-0 border border-white/15 rounded-2xl"></div>
                      <img
                        alt="anthropic"
                        loading="lazy"
                        width="126"
                        height="15"
                        decoding="async"
                        data-nimg="1"
                        class="logo-grid_full-white__9DeNP opacity-100 relative"
                        srcset="
                                  /_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fanthropic.png&amp;w=128&amp;q=100 1x,
                                  /_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fanthropic.png&amp;w=256&amp;q=100 2x
                                "
                        src="/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fanthropic.png&amp;w=256&amp;q=100"
                        style={{color: "transparent"}}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
