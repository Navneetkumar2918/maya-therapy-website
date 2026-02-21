export default function Footer() {
  return (
    <footer className="w-full text-[#2F4A2F]">

      {/* ================= TOP FOOTER ================= */}
      <div className="w-full bg-[#FEFDFA]">
        <div className="max-w-[1300px] mx-auto 
                        px-6 md:px-16 
                        py-24 
                        grid grid-cols-1 md:grid-cols-3 
                        gap-16 md:gap-20 
                        items-start">

          {/* LEFT COLUMN */}
          <div className="space-y-8 text-center md:text-left">
            <h3 className="text-[30px] md:text-[34px] font-semibold">
              Dr. Maya Reynolds
            </h3>

            <div className="space-y-3 text-[19px] leading-8">
              <p>123th Street 45 W</p>
              <p>Santa Monica, California, USA</p>
            </div>

            <div className="space-y-3 text-[19px] leading-8">
              <a
                href="mailto:info@mayareynolds.com"
                className="underline cursor-pointer hover:opacity-70 transition"
              >
                info@mayareynolds.com
              </a>
              <br />
              <a
                href="tel:5555555555"
                className="underline cursor-pointer hover:opacity-70 transition"
              >
                (555) 555-5555
              </a>
            </div>
          </div>

          {/* HOURS */}
          <div className="space-y-8 text-center">
            <h4 className="text-[26px] md:text-[28px] font-medium">
              Hours
            </h4>

            <div className="text-[19px] leading-8">
              <p>Monday – Friday</p>
              <p>10am – 6pm</p>
            </div>
          </div>

          {/* FIND */}
          <div className="space-y-8 text-center md:text-right">
            <h4 className="text-[26px] md:text-[28px] font-medium">
              Find
            </h4>

            <ul className="space-y-4 text-[19px] leading-8">
              <li>
                <a href="/" className="underline cursor-pointer hover:opacity-70 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/contact" className="underline cursor-pointer hover:opacity-70 transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="/blog" className="underline cursor-pointer hover:opacity-70 transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ================= LEGAL SECTION ================= */}
      <div className="w-full bg-[#F1F1F1]">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center space-y-8">

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-8 underline text-[17px]">
            <a href="/privacy-policy" className="cursor-pointer hover:opacity-70 transition">
              Privacy & Cookies Policy
            </a>
            <a href="/good-faith-estimate" className="cursor-pointer hover:opacity-70 transition">
              Good Faith Estimate
            </a>
            <a href="/terms" className="cursor-pointer hover:opacity-70 transition">
              Website Terms & Conditions
            </a>
            <a href="/disclaimer" className="cursor-pointer hover:opacity-70 transition">
              Disclaimer
            </a>
          </div>

          {/* Template Credit */}
          <p className="text-[19px]">
            Website Template Credits:{" "}
            <a
              href="#"
              className="underline cursor-pointer hover:opacity-70 transition"
            >
              Go Bloom Creative
            </a>
          </p>

          {/* Copyright */}
          <p className="text-[19px]">
            All Rights Reserved © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD.
          </p>

        </div>
      </div>

    </footer>
  );
}