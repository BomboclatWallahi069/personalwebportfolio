/** Pill tag in the site's blue */
export default function Tag({ label, size = "sm" }: { label: string; size?: "xs" | "sm" }) {
  return (
    <span
      className={`inline-block rounded-full border border-brand/20 bg-tint-blue text-brand ${
        size === "xs" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-sm"
      }`}
    >
      {label}
    </span>
  );
}
