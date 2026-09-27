import { ArrowRight } from "lucide-react";
import type { Service } from "../../utils/servicesData";

type ServiceCardProps = {
  service: Service;
  onBook?: () => void;
};

function ServiceCard({ service, onBook }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article
      className="reveal-on-scroll reveal-fade-up service-card group relative overflow-hidden flex min-h-47.5 flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:border-[#4bb1c8] hover:shadow-lg hover:shadow-[#4bb1c8]/20"
      style={{
        transition:
          "box-shadow 300ms ease-out, border-color 300ms ease-out",
      }}
    >
      {/* Soft glow sweep on hover */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-linear-to-b from-[#e0f7fa]/0 via-[#e0f7fa]/0 to-[#e0f7fa]/40 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />

      <div className="flex items-start justify-between gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#b2ebf2] bg-[#e0f7fa] text-[#4bb1c8] transition-all duration-300 ease-out group-hover:bg-[#4bb1c8] group-hover:text-white group-hover:shadow-sm">
          <Icon size={18} strokeWidth={2} />
        </div>

        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-slate-500">
          {service.category}
        </span>
      </div>

      <h3 className="mt-4 text-[15px] font-bold leading-tight text-slate-900 transition-colors duration-300 ease-out group-hover:text-[#0f8fa8]">
        {service.title}
      </h3>

      <p className="mt-1.5 line-clamp-2 text-[12px] leading-relaxed text-slate-500">
        {service.desc}
      </p>

      <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-3">
        <span className="text-[12px] font-bold text-[#4bb1c8]">
          {service.price}
        </span>

        <button
          type="button"
          onClick={onBook}
          className="inline-flex items-center gap-1.5 rounded-lg bg-linear-to-r from-[#0f8fa8] via-[#33b6d3] to-[#4bb1c8] hover:from-[#0d7d93] hover:to-[#389cb3] px-3.5 py-1.5 text-xs font-extrabold text-white shadow-md shadow-[#4bb1c8]/20 hover:shadow-lg hover:shadow-[#4bb1c8]/30 hover:scale-[1.02] active:scale-98 transition-all duration-300 ease-out cursor-pointer"
        >
          Book
          <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </article>
  );
}

export default ServiceCard;