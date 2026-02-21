import Image from "next/image";

export default function Services() {
  return (
    <section className="py-32 bg-[#EDE7DF]">
      <div className="max-w-[1350px] mx-auto px-12">

        {/* Heading */}
        <div className="text-center mb-24">
          <h2 className="text-[52px] font-medium text-[#2F4A2F]">
            Therapy Services in Santa Monica
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-14">

          {/* CARD 1 */}
          <div className="border border-[#2F4A2F] bg-[#F5F1EA] p-12 flex flex-col justify-between w-full min-h-[520px]">
            <div>
              <h3 className="text-[24px] mb-6">
                Anxiety & Panic Therapy
              </h3>
              <p className="text-[18px] leading-8 text-[#4C6A4C]">
                If your mind feels constantly on edge or your body carries
                persistent tension, therapy can help you regulate your nervous
                system, quiet racing thoughts, and build practical coping tools
                for daily life.
              </p>
            </div>

            <div className="flex justify-center mt-10">
              <div className="w-[220px] h-[220px] rounded-full overflow-hidden">
                <Image
                  src="/office1.jpeg"
                  alt="Anxiety Therapy"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="border border-[#2F4A2F] bg-[#F5F1EA] p-12 flex flex-col justify-between w-full min-h-[520px]">
            <div>
              <h3 className="text-[24px] mb-6">
                Trauma & EMDR Therapy
              </h3>
              <p className="text-[18px] leading-8 text-[#4C6A4C]">
                Using EMDR and evidence-based trauma approaches, I help clients
                safely process past experiences so they no longer feel emotionally
                overwhelming or intrusive in daily life.
              </p>
            </div>

            <div className="flex justify-center mt-10">
              <div className="w-[220px] h-[220px] rounded-full overflow-hidden">
                <Image
                  src="/office2.jpeg"
                  alt="Trauma Therapy"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="border border-[#2F4A2F] bg-[#F5F1EA] p-12 flex flex-col justify-between w-full min-h-[520px]">
            <div>
              <h3 className="text-[24px] mb-6">
                Burnout & High-Achiever Support
              </h3>
              <p className="text-[18px] leading-8 text-[#4C6A4C]">
                For professionals who feel successful externally but exhausted
                internally, therapy provides space to restore balance, redefine
                boundaries, and create sustainable growth.
              </p>
            </div>

            <div className="flex justify-center mt-10">
              <div className="w-[220px] h-[220px] rounded-full overflow-hidden">
                <Image
                  src="/office1.jpeg"
                  alt="Burnout Therapy"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}






