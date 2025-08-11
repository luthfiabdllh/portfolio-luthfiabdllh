import { ShimmerButton } from "../magicui/shimmer-button";

export default function CtaSection() {
  return (
    <section className="justify-center items-center flex flex-col w-full mx-auto bg-background py-40 text-center space-y-12">
      <h6>HAVE A PROJECT IN MIND?</h6>
      <h3 className=" text-9xl font-thin">LET&apos;S MAKE <br /><span className="font-carl-brown">g</span>REAT THIN<span className="font-carl-brown">g</span>S <span className="font-dancing-script">Together</span></h3>
    <ShimmerButton
      className="w-full max-w-xl sm:w-auto shadow-2xl bg-background hover:bg-background/80 transition-all duration-300 hover:scale-105 active:scale-95 min-h-[56px] sm:min-h-[64px] lg:min-h-[72px] px-12 sm:px-16 lg:px-20 py-3 sm:py-4 lg:py-5 text-base sm:text-lg font-medium leading-none tracking-tight flex items-center justify-center gap-2"
      shimmerDuration="5s"
      shimmerSize="0.1em"
      background="var(--background)"
    >
      GET IN TOUCH 
    </ShimmerButton>
    </section>
  );
}
