import Image from "next/image";

export default function About() {
  return (
    <section className="w-full py-32 bg-[var(--light)]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* Text Side */}
        <div>
          <h2 className="text-4xl font-semibold text-[var(--primary)] mb-8">
            Meet Dr. Maya Reynolds, PsyD
          </h2>

          <p className="mb-6">
            I’m a licensed clinical psychologist based in Santa Monica with
            over 10 years of experience supporting adults navigating anxiety,
            trauma, and burnout.
          </p>

          <p className="mb-6">
            I work especially well with high-functioning professionals who
            appear composed on the outside but feel overwhelmed internally.
          </p>

          <p>
            My approach integrates CBT, EMDR, mindfulness, and body-based
            techniques to help clients feel emotionally steady, safe, and more
            connected to their lives.
          </p>

          {/* LET'S CHAT BUTTON (MATCH HERO STYLE) */}
          <button className="mt-10 border border-[#2F4A2F] px-10 py-3 hover:bg-[#2F4A2F] hover:text-white transition duration-300">
            CONNECT WITH ME →
          </button>


        </div>

        {/* Image Side */}
        <div className="w-full">
          <Image
            src="/maya.png"
            alt="Dr. Maya Reynolds"
            width={600}
            height={700}
            className="rounded-2xl object-cover object-top w-full h-[550px]"
          />
        </div>

      </div>
    </section>
  );
}