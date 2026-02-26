"use client"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [open])

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full bg-[#FAF9F6] sticky top-0 z-40 border-b border-[#e6e2dc]">
        
        {/* Mobile → more padding | Desktop → less padding (border upar) */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-7 md:py-3 relative flex items-center justify-between">

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col gap-2 z-50"
          >
            <span className="w-8 h-[2px] bg-[var(--green-main)]"></span>
            <span className="w-8 h-[2px] bg-[var(--green-main)]"></span>
          </button>

          {/* Logo */}
          <div
            className="
              absolute left-1/2 -translate-x-1/2 text-center
              md:static md:translate-x-0 md:text-left
              pointer-events-none
            "
          >
            {/* Mobile View (2 lines) */}
            <div className="text-3xl font-medium text-[var(--green-main)] leading-tight md:hidden">
              Dr. Maya
            </div>
            <div className="text-3xl font-medium text-[var(--green-main)] leading-tight md:hidden">
              Reynolds
            </div>

            {/* Desktop View (Single Line Bigger) */}
            <div className="hidden md:block md:text-7xl font-medium text-[var(--green-main)] whitespace-nowrap">
              Dr. Maya Reynolds
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 text-sm text-[var(--green-main)]">
            <a href="#" className="hover:opacity-70 transition">
              Blog
            </a>
            <a href="#" className="hover:opacity-70 transition">
              Contact
            </a>
          </div>

        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 bg-[#FAF9F6] flex flex-col items-center justify-center text-4xl space-y-12 z-50">

          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 left-6 text-4xl text-[var(--green-main)]"
          >
            ✕
          </button>

          <a
            href="#"
            onClick={() => setOpen(false)}
            className="text-[var(--green-main)]"
          >
            Blog
          </a>

          <a
            href="#"
            onClick={() => setOpen(false)}
            className="text-[var(--green-main)]"
          >
            Contact
          </a>

        </div>
      )}
    </>
  )
}








