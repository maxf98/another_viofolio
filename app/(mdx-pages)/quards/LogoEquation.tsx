import Image from "next/image";

interface LogoEquationProps {
  size?: number;
  logoSize?: number;
}

export default function LogoEquation({
  size = 64,
  logoSize,
}: LogoEquationProps) {
  const circleSize = size;
  const rectWidth = size * 0.75;
  const rectHeight = size;
  const borderWidth = size > 80 ? 3 : 2;
  const fontSize = size * 0.4;
  const finalLogoSize = logoSize ?? size;

  return (
    <div className="flex items-center justify-center gap-4">
      <div
        className="rounded-full border-white"
        style={{
          width: circleSize,
          height: circleSize,
          borderWidth: borderWidth,
        }}
      />
      <span style={{ fontSize }}>+</span>
      <div
        className="rounded-xl border-white"
        style={{
          width: rectWidth,
          height: rectHeight,
          borderWidth: borderWidth,
        }}
      />
      <span style={{ fontSize }}>=</span>
      <Image
        src="/projects/quards/quards-logo.png"
        alt="Quards logo"
        width={finalLogoSize}
        height={finalLogoSize}
      />
    </div>
  );
}
