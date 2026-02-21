import Image from "next/image";

export default function OurOffice() {
  return (
    <section className="w-full py-32 bg-[#EDE7DF] text-center">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-[48px] md:text-[54px] font-medium text-[#2F4A2F] mb-12">
          A Calm & Private Space for Healing
        </h2>

        {/* Highlighted Address Box */}
        <div className="inline-block border border-[#2F4A2F] px-10 py-6 mb-16 bg-white shadow-sm">

          <p className="uppercase tracking-[2px] text-[14px] font-semibold text-[#1E331E] mb-3">
            Office Location
          </p>

          <p className="text-[20px] md:text-[22px] text-[#4C6A4C] leading-8">
            123th Street 45 W, Santa Monica, CA 90401, USA
          </p>

        </div>

        {/* Supporting Text */}
        <p className="max-w-3xl mx-auto text-[#4C6A4C] mb-20 text-[20px] md:text-[22px] leading-9">
          A quiet, grounding therapy space designed with natural light,
          privacy, and comfort in mind. In-person sessions are available
          alongside secure telehealth throughout California.
        </p>

        {/* Office Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Image
            src="/office1.jpeg"
            alt="Therapy office interior"
            width={800}
            height={600}
            className="rounded-2xl object-cover w-full h-[420px]"
          />
          <Image
            src="/office2.jpeg"
            alt="Therapy seating area"
            width={800}
            height={600}
            className="rounded-2xl object-cover w-full h-[420px]"
          />
        </div>

      </div>
    </section>
  );
}