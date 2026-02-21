import Image from "next/image";

export default function FAQ() {
  return (
    <section className="w-full py-32 bg-[var(--light)]">
      <div className="max-w-[1300px] mx-auto px-12 grid md:grid-cols-2 gap-24 items-center">

        {/* Left Image */}
        <div className="flex justify-center md:justify-start">
          <div className="w-[520px] h-[520px] rounded-full overflow-hidden">
            <Image
              src="/office1.jpeg"
              alt="FAQ Image"
              width={700}
              height={700}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right FAQ Content */}
        <div>

          <h2 className="text-[42px] font-medium text-[#2F4A2F] mb-12">
            FAQs
          </h2>

          <div className="space-y-8">

            <div className="border-t border-[#2F4A2F] pt-6">
              <div className="flex items-center justify-between">
                <h3 className="text-[28px] text-[#2F4A2F]">
                  Do you offer in-person therapy?
                </h3>
                <span className="text-[28px] text-[#2F4A2F]">+</span>
              </div>
            </div>

            <div className="border-t border-[#2F4A2F] pt-6">
              <div className="flex items-center justify-between">
                <h3 className="text-[28px] text-[#2F4A2F]">
                  What therapy approaches do you use?
                </h3>
                <span className="text-[28px] text-[#2F4A2F]">+</span>
              </div>
            </div>

            <div className="border-t border-b border-[#2F4A2F] pt-6 pb-6">
              <div className="flex items-center justify-between">
                <h3 className="text-[28px] text-[#2F4A2F]">
                  Do you have availability for new clients?
                </h3>
                <span className="text-[28px] text-[#2F4A2F]">+</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}