type MonogramProps = {
  size?: number;
  className?: string;
};

export function Monogram({ size = 40, className = "" }: MonogramProps) {
  return (
    <img
      src="/neztlogo.png"
      width={size}
      height={size}
      alt="NEZT"
      className={`object-contain ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

type LogoProps = {
  size?: number;
  showWordmark?: boolean;
  className?: string;
  wordmarkClassName?: string;
};

export default function Logo({
  size = 30,
  showWordmark = true,
  className = "",
  wordmarkClassName = "",
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Monogram size={size} />
      {showWordmark && (
        <span
          className={`font-display text-[1.05rem] font-bold leading-none text-fg ${wordmarkClassName}`}
          style={{ letterSpacing: "0.22em" }}
        >
          NEZT
        </span>
      )}
    </span>
  );
}
