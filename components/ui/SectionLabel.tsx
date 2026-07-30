interface SectionLabelProps {
  children: React.ReactNode;
  /** On dark backgrounds the flat brand blue goes muddy, so switch to the light accent. */
  light?: boolean;
  center?: boolean;
}

export default function SectionLabel({
  children,
  light = false,
  center = false,
}: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-2 mb-4 ${center ? "justify-center" : ""}`}>
      <span
        className={`inline-block w-6 h-0.5 ${light ? "bg-[#8b93ff]" : "bg-gradient-brand-static"}`}
      />
      <span
        className={`text-xs font-semibold tracking-widest uppercase ${
          light ? "text-[#8b93ff]" : "text-[#3d4cf5]"
        }`}
      >
        {children}
      </span>
    </div>
  );
}
