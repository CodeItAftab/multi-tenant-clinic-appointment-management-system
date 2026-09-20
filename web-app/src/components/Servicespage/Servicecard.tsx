import { ArrowRight } from "lucide-react";
import type { Service } from "../../utils/servicesData";

type ServiceCardProps = {
  service: Service;
};

function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article className="group flex min-h-[235px] flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b2ebf2] hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#b2ebf2] bg-[#e0f7fa] text-[#4bb1c8]">
          <Icon size={21} strokeWidth={2} />
        </div>

        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-500">
          {service.category}
        </span>
      </div>

      <h3 className="mt-5 text-[18px] font-bold text-slate-900">
        {service.title}
      </h3>

      <p className="mt-2 line-clamp-2 text-[14px] leading-relaxed text-slate-500">
        {service.desc}
      </p>

      <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="text-[13px] font-bold text-[#4bb1c8]">
          {service.price}
        </span>

        <button
          type="button"
          className="inline-flex items-center gap-1 text-[13px] font-bold text-slate-700 transition-colors group-hover:text-[#4bb1c8]"
        >
          Book
          <ArrowRight size={15} />
        </button>
      </div>
    </article>
  );
}

export default ServiceCard;