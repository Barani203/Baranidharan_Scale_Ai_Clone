import React from "react";

export default function Certified() {
  return (
    <>
      <section class="ρd__all ρd__section ρeIyT py-10">
        <div class="ρd__all ρd__div ρ_6HHEw container">
          <div class="">
            <div>
              <p class="w-full mb-12 text-base text-center text-balance text-silver max-w-[698px] px-4 mx-auto">
                <span class="mr-2">
                  Scale is certified compliant with the following industry best
                  practice standards and frameworks
                </span>
              </p>
              
              <div class="md:hidden">
                <div
                  class="rfm-marquee-container"
                  style={{
                            pauseOnHover: "running",
                            pauseOnClick:" running",
                            width: '100%',
                            transform:" none"
                          }}
                >
                  <div
                    class="rfm-marquee"
                    style={{
                              play: "running",
                              direction: "normal",
                              duration: "0s",
                              delay: "0s",
                              iterationCount: "infinite",
                              minWidth: "100%"
                            
                            }}
                  >
                    <div class="rfm-initial-child-container">
                      <div class="rfm-child" style={{transform: "none"}}>
                        <li class="d-flex items-center justify-center ml-12 lg:ml-0">
                          <div class="relative">
                            <img
                              alt="fedramp"
                              fetchpriority="high"
                              width="54"
                              height="54"
                              decoding="async"
                              data-nimg="1"
                              class="invert"
                              src="./img/certified1.svg"
                              style={{color: "transparent"}}
                            />
                          </div>
                        </li>
                      </div>
                      <div class="rfm-child" style={{transform: "none"}}>
                        <li class="flex items-center justify-center ml-12 lg:ml-0">
                          <div class="relative">
                            <img
                              alt="ISO"
                              fetchpriority="high"
                              width="68"
                              height="54"
                              decoding="async"
                              data-nimg="1"
                              class="invert"
                             src="./img/certified2.svg"
                              style={{color: "transparent"}}
                            />
                          </div>
                        </li>
                      </div>
                      <div class="rfm-child" style={{transform: "none"}}>
                        <li class="flex items-center justify-center ml-12 lg:ml-0">
                          <div class="relative">
                            <img
                              alt="aicpa-soc"
                              fetchpriority="high"
                              width="60"
                              height="60"
                              decoding="async"
                              data-nimg="1"
                              class="invert"
                              src="./img/certified3.svg"
                              style={{color: "transparent"}}
                            />
                          </div>
                        </li>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
