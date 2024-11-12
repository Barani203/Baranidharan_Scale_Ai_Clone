import React from "react";

export default function Build() {
  return (
    <>
      <div class="ρi ρxujys relative w-full overflow-hidden sm:overflow-visible">
        <hr class="border-0 bg-[linear-gradient(270deg,_rgba(255,_255,_255,_0.00)_0%,_#FFF_52.07%,_rgba(255,_255,_255,_0.00)_100%)] z-[1] opacity-[0.15] relative h-[1px] w-full max-w-[1006px] mx-auto" />
        <div class="absolute z-10 -translate-x-1/2 -top-10 left-1/2">
          <div class="object-cover w-[700px] translate-y-[85px] -translate-x-12 xl:w-[870px] xl:translate-y-14 xl:-translate-x-16 pointer-events-none select-none transform transition-transform duration-1000 aspect-[1400/650] scale-0">
            <video autoplay="" playsinline="" loop="">
              <source
                 src="./img/hero-bg-mobile.webp"
                type="video/mp4;codecs=hvc1"
              />
              <source
                src="./img/hero-bg-mobile.webp"
                type="video/webm"
              />
            </video>
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
            className="opacity-70 top-7 sm:top-0 md:-top-7 top-7 sm:top-0 md:-top-7 select-none duration-1000 pointer-events-none absolute objsect-cover min-w-[155w] sm:min-w[120vw] left-[54%] md:left-1/2 -translate-x-1/2 "
           
            sizes="200vw" 

            src="./img/hero-bg-mobile.webp"
            style={{color: "transparent;"}}
          />
        <section
          id=""
          class="py-18 lg:py-20 bg-transparent !pb-28 !pt-[110px] md:!pb-36 md:!pt-[132px]"
        >
          <div class="container relative z-10 sm:px-0 relative">
            <div class="max-w-[760px] w-fit space-y-6 lg:space-y-10 mx-auto">
              <div class="relative">
                <h1 class="relative text-5xl text-light font-light xl:leading-none leading-tight mx-auto sm:leading-[1.1] sm:text-7xl xl:text-[89px] tracking-[-0.89px] font-aeonik text-center">
                  <span class="inline ">
                    The future of your <br />
                    industry{" "}
                  </span>
                  <span class="highlight text-gradient-2023">
                    starts&nbsp;here.
                  </span>
                </h1>
              </div>
              <div class="justify-center lg:pt-4 flex items-center gap-x-6">
                <a
                  label="Book a Demo"
                  style={{ webkitTapHighlightColor: " transparent" }}
                  class="relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block"
                  href="/demo"
                >
                  <div class="new-button_button--primary__EJ4AI text-light font-medium justify-center flex flex-nowrap whitespace-nowrap transition-translate duration-300 cursor-pointer group items-center h-full group leading-[150%] new-button_button--purple__hhI2y text-sm px-[30px] py-[14px]">
                    Book a Demo
                    <span class="inline-block ml-1 font-normal duration-300 w-fit transition-translate group-hover:translate-x-1 font-unicode">
                      →
                    </span>
                  </div>
                  <span class="after:content-[''] after:inline-block absolute inset-0 after:inset-0 after:absolute select-none pointer-events-none after:rounded-[11px] rounded-[11px] shadow-[inset_0_0_0_1px_rgba(255,255,255,1)] after:shadow-[inset_0_0_0_1px_rgba(105,57,193,0.4)]"></span>
                </a>
                <a
                  label="Build AI"
                  style={{ webkitTapHighlightColor: " transparent" }}
                  class="text-[#F4F0FF] hover:text-light transition-colors duration-300 py-2 font-medium whitespace-nowrap text-sm leading-5 group relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block"
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
        </section>
      </div>
    </>
  );
}
