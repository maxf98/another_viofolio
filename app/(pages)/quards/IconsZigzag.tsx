import Image from "next/image";

import ar from "@/public/projects/quards/icons/AR.png";
import chunking from "@/public/projects/quards/icons/Chunking.png";
import dp from "@/public/projects/quards/icons/DP.png";
import sr from "@/public/projects/quards/icons/SR.png";

const icons = [ar, chunking, dp, sr];

export default function IconsZigzag() {
  return (
    <div className="flex gap-8 justify-center items-center mt-8">
      {icons.map((icon, index) => (
        <div
          key={index}
          className={index % 2 === 0 ? "-translate-y-4" : "translate-y-4"}
        >
          <Image
            src={icon}
            alt={`Icon ${index + 1}`}
            height={80}
            className="h-28 w-auto object-contain"
          />
        </div>
      ))}
    </div>
  );
}
