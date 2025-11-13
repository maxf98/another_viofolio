import Link from "next/link";
import Image from "next/image";
import RotateOnHover from "../animations/RotateOnHover";
import ScrollNav from "./ScrollNav";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 bottom-0 z-50 flex flex-col items-center px-6 py-10">
      <Link href="/" className="inline-block mb-auto">
        <RotateOnHover rotation={8}>
          <Image src="/logo.png" alt="Logo" width={45} height={45} priority />
        </RotateOnHover>
      </Link>

      <div className="flex-1 flex items-center">
        <ScrollNav />
      </div>
    </header>
  );
}
