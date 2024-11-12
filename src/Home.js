import React from "react";

export default function Home() {
  return (
    <>
      <section
        id=""
        class="py-18 lg:py-20 bg-transparent pt-0 lg:pt-0 pb-5 lg:pb-5"
      >
        <div class="container relative">
          <div class="absolute ">
            <div class="w-full ">
              <div class="hidden md:block">
                <div style={{width: "1400px", height: "650px"}}>
                  <div
                    class="[&amp;>canvas]:!w-full [&amp;>canvas]:!h-full"
                    style={{width: "100%",height: "100%"}}
                  >
                    <canvas
                      width="2100"
                      height="975"
                      style={{
                                display: "block",
                                width: "2800px",
                                height: "200%"
                              }}
                    ></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            alt=""
            loading="lazy"
            width="1170"
            height="511"
            decoding="async"
            type="video/webp"
            data-nimg="3"
            className="opacity-100 top-7 sm:top-0 md:-top-7 top-7 sm:top-0 md:-top-7 select-none duration-1000 pointer-events-none absolute objsect-cover min-w-[155w] sm:min-w[120vw] left-[54%] md:left-1/2 -translate-x-1/2 "
           
            sizes="200vw" 

            src="./img/hero-bg-mobile.webp"
            style={{color: "transparent;"}}
          />
          <div class="pt-24 xl:pt-44 ">
            <div class="relative z-10">
            {/* class="text-5xl pt-24 text-light sm:leading-none leading-[1.1] sm:text-7xl xl:text-[89px] tracking-[-0.89px] font-aeonik text-center" */}
              <h1
                className=" text-5xl pt-24 text-light sm:leading-none leading-[1.1]  sm:text-7xl xl:text-[89px] tracking-[-0.89px] font-aeonik text-aling-center d-flex justify-content-center "
                style={{
                  textShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.35)",
                }}
              >
                Power <br class="lg:hidden" />
                <span class="relative">
                  <span class="invisible">Government&nbsp;AI</span>
                  <div class="hero_cubespinner__5nU4O">
                    <div class="hero_face1____5ZN">Enterprise&nbsp;AI</div>
                    <div class="hero_face2__hWvJM">Government&nbsp;AI</div>
                    <div class="hero_face3__qUXn4">Generative&nbsp;AI</div>
                  </div>
                </span>
                <br />
                With Your&nbsp;Data
              </h1>
              <h2 class="my-6  font-sans text-base text-[#F5F5F5] sm:px-0 font-medium leading-normal lg:my-[22px] lg:text-lg md:w-11/12 lg:w-full text-center lg:max-w-[860px] mx-auto">
                Make the best models with the best data. Scale Data Engine
                powers nearly every major foundation<br/> model, and with Scale GenAI
                Platform, leverages your enterprise data to unlock the value of
                AI.
              </h2>
              <div class="items-center w-full mx-auto space-x-6 md:mb-0 xl:mb-9 max-w-max">
                <a
                  style={{ webkitTapHighlightColor: "transparent" }}
                  class="relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block"
                  href="/demo"
                >
                  <div class=" pt-24 pb-24 text-[#F4F0FF] new-button_button--primary__EJ4AI font-medium justify-center flex flex-nowrap whitespace-nowrap transition-translate duration-300 cursor-pointer group items-center h-full group leading-[150%] new-button_button--purple__hhI2y text-sm px-[30px] py-[14px]">
                    Book a Demo
                    <span class="inline-block ml-1 font-normal duration-300 w-fit transition-translate group-hover:translate-x-1 font-unicode">
                      →
                    </span>
                  </div>
                  <span class="after:content-[''] after:inline-block absolute inset-0 after:inset-0 after:absolute select-none pointer-events-none after:rounded-[11px] rounded-[11px] shadow-[inset_0_0_0_1px_rgba(255,255,255,1)] after:shadow-[inset_0_0_0_1px_rgba(105,57,193,0.4)]"></span>
                </a>
                <a
                  style={{ webkitTapHighlightColor: "transparent" }}
                  class="text-[#F4F0FF] hover:text-white transition-colors duration-300 py-2 font-medium whitespace-nowrap text-sm leading-5 group relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block"
                  href="/data-engine"
                >
                  Build AI
                  <span class="inline-block ml-1 font-normal duration-300 w-fit transition-translate group-hover:translate-x-1 font-unicode">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

 <section
              id=""
              class="py-18 lg:py-20 bg-transparent pt-0 lg:pt-0 pb-0 lg:pb-0 relative"
            >
              <div class="relative">
                <div
                  class="pt-6 pb-12 sm:pb-16 sm:pt-20 xl:pb-16 xl:pt-24"
                  style={{opacity: 1, visibility: "inherit"}}
                >
                  <div class="hidden mb-12 text-sm leading-6 text-center text-neutral-400 lg:block">
                    Scale works with
                    <button
                      class="section-title inline-block relative cursor-pointer transition-colors duration-300 hover:text-neutral-200"
                      type="button"
                    >
                      Generative AI Companies
                      <div class="transition-opacity duration-300 absolute bottom-0 h-[1px] w-full bg-silver opacity-0"></div>
                      <div
                        class="line opacity-0 scale-x-0 absolute bottom-0 h-[1px] w-full bg-white origin-left"
                        style={{
                                  opacity:' 0',
                                  translate: 'none',
                                  rotate: 'none',
                                  scale: 'none',
                                  transform: 'scale(0, 1)'
                                }}
                      ></div>
                    </button>
                    ,
                    <button
                      class="section-title inline-block relative cursor-pointer transition-colors duration-300 hover:text-neutral-200"
                      type="button"
                    >
                      U.S. Government Agencies
                      <div class="transition-opacity duration-300 absolute bottom-0 h-[1px] w-full bg-silver opacity-0"></div>
                      <div
                        class="line opacity-0 scale-x-0 absolute bottom-0 h-[1px] w-full bg-white origin-left"
                        style={{
                                  opacity: "0",
                                  translate: "none",
                                  rotate: "none",
                                  scale: 'none',
                                  transform: 'scale(0, 1)'
                                }}
                      ></div>
                    </button>
                    &amp;
                    <button
                      class="section-title inline-block relative cursor-pointer transition-colors duration-300 text-white"
                      type="button"
                    >
                      Enterprises
                      <div class="transition-opacity duration-300 absolute bottom-0 h-[1px] w-full bg-silver opacity-100"></div>
                      <div
                        class="line opacity-0 scale-x-0 absolute bottom-0 h-[1px] w-full bg-white origin-left"
                        style={{
                                  opacity: "100",
                                  translate: "none",
                                  rotate: "none",
                                  scale:" none",
                                  transform: "translate3d(0px, 0px, 0px)",
                                    scale:"(0.9878, 1)"
                                }}
                      ></div>
                    </button>
                  </div>
                  
                  <div class="lg:hidden">
                    <p class="mb-10 text-sm leading-6 text-center text-gray-400">
                      Scale works with Generative AI Companies, U.S. Government
                      Agencies &amp;&nbsp;Enterprises
                    </p>
                    
                  </div>
                </div>
              </div>


              <div class="wrapper">
          <div class="slider">
            <div class="slide">
              <img src="./img/img.png" />
              <img src="./img/img2.webp" />
              <img src="./img/img3.webp" />
              <img src="l./img/img4.webp" />
              <img src="./img/img5.webp" />
              <img src="./img/img6.webp" />
              <img src="./img/img7.webp" />
            </div>
            <div class="slide">
              {/* <img src="./img/img8.webp" />
              <img src="./img/img9.webp" />
              <img src="./img/img2.webp" /> */}
              {/* <img src="./img/img4.webp" />
              <img src="./img/img6.webp" />
              <img src="./img/img7.webp" />
              <img src="./img/img8.webp" /> */}
            </div>
          </div>
      </div>



      <section class="ρd__all ρd__section ρll3DQ py-10">
                            <div class="ρd__all ρd__div ρ_3V1C7 container gap-16">
                                <div
                                    class="flex flex-col max-w-3xl mx-auto items-center justify-center text-center mb-10 md:mb-20 md:mt-12 ρi ρoDvz">
                                    <h2
                                        class="font-aeonik text-light leading-snug lg:leading-[1.25] text-3xl md:text-4.5xl lg:text-5xl [text-wrap:balance]">
                                        Frontier AI Research
                                    </h2>
                                    <p
                                        class="mt-4 lg:mt-2 leading-[1.60] text-neutral-100 lg:text-gray-300 lg:text-xl [text-wrap:balance]">
                                        SEAL (Safety, Evaluations, and Alignment Lab) is our
                                        research initiative to improve model capabilities through
                                        challenging private evaluations and novel research.
                                    </p>
                                </div>
                            </div>
                        </section>
            
            </section>



    </>
  );
}

