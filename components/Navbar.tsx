export default function Navbar() {
  return (
    <nav className="w-full py-4">
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">

        <h1 className="text-2xl font-medium text-[var(--green-main)]">
          Dr. Maya Reynolds
        </h1>

        <div className="flex gap-8 text-[var(--green-main)] text-sm">
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>

      </div>
    </nav>
  );
}