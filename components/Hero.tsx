import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-[#FAF9F6] flex items-center py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-16 md:gap-24 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-start">
          <div className="w-[320px] h-[320px] md:w-[580px] md:h-[580px] rounded-full overflow-hidden">
            <Image
              src="/office1.jpeg"
              alt="Therapy office in Santa Monica"
              width={800}
              height={800}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="max-w-[650px] text-center md:text-left">

          {/* MAIN HEADING */}
          <h1>
            Anxiety & Trauma Therapy in <br />
            Santa Monica, California, USA.
          </h1>

          {/* SUBTEXT */}
          <p className="mt-8">
            In-person therapy in Santa Monica and secure telehealth across
            California, USA. I help adults navigating anxiety, trauma, and burnout
            feel grounded, emotionally steady, and more connected to themselves.
          </p>

          {/* BUTTON */}
          <button className="mt-10 border border-[#2F4A2F] px-10 py-3 md:px-12 md:py-4 hover:bg-[#2F4A2F] hover:text-white transition duration-300">
            CONNECT WITH ME →
          </button>

        </div>
      </div>
    </section>
  );
}