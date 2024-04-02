"use client";


export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  document.getElementById("scrolltop")?.addEventListener("click", scrollToTop);

  return (
    <div className="bg-slate-950 text-white min-h-[400px] pl-[20%]">
          <h2 className="font-semibold text-4xl pb-8">
            Available for freelance opportunities
          </h2>
          <p className="text-lg font-medium">
            Have an exciting project you need <br /> help with? <br /> Send me
            an email or contact me via
          </p>
          <a
            id="scrolltop"
            className="cursor-pointer transition duration-300 group"
          >
            <div className="inline-flex font-medium text-lg pb-16 gap-3 group-hover:text-sky-500">
              <span>social networks</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5 group-hover:animate-ping"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </a>
          <a href="mailto:jeanmaximegilbert@gmail.com">
            <h2 className="text-2xl relative w-fit chunky">
              jeanmaximegilbert@gmail.com
            </h2>
          </a>
        </div>
  );
}
