import Image from "next/image";

export default function LanyardCard({
  imageSrc,
  alt,
  name,
  role,
}) {
  return (
    <div className="relative mx-auto w-full max-w-sm pt-16">
      <div className="absolute left-1/2 top-0 h-16 w-1 -translate-x-1/2 bg-gradient-to-b from-white/80 to-white/10" />
      <div className="absolute left-1/2 top-12 h-4 w-4 -translate-x-1/2 rounded-full border border-white/50 bg-black/60" />

      <div className="overflow-hidden rounded-3xl border border-white/35 bg-black/30 p-4 shadow-2xl backdrop-blur-md">
        <div className="overflow-hidden rounded-2xl">
          <Image
            src={imageSrc}
            alt={alt}
            width={800}
            height={1000}
            className="h-[440px] w-full object-cover object-top"
          />
        </div>
        <div className="px-1 pb-1 pt-4 text-white">
          <p className="text-base font-semibold tracking-wide">{name}</p>
          <p className="text-xs uppercase tracking-[0.08em] text-white/75">{role}</p>
        </div>
      </div>
    </div>
  );
}
