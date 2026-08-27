"use client";
import Navbar from "./navbar";
import Logo from "./logo";
import SheetButton from "./sheet-button";
export default function Header() {
  return (
    <div className="fixed top-0 border-b w-full py-3 bg-background text-foreground shadow-md z-10">
      <div className="flex gap-2 justify-between md:justify-around items-center p-4 h-16">
        <div>
          <Logo />
        </div>
        <div>
          <Navbar />
        </div>
        <div className="flex gap-2 items-center justify-center">
          <SheetButton />
        </div>
      </div>
    </div>
  );
}
