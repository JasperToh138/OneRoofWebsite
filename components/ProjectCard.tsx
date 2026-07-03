import Image from "next/image";

type ProjectCardProps = {
  title: string;
  serviceType: string;
  image: string;
  alt: string;
  description: string;
};

export function ProjectCard({ title, serviceType, image, alt, description }: ProjectCardProps) {
  return (
    <article
      data-scroll-reveal="up"
      className="lift-card flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft"
    >
      <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/3]">
        <Image
          alt={alt}
          className="object-cover transition duration-500 hover:scale-105"
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          src={image}
        />
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-md bg-ocean/10 px-2.5 py-1 text-xs font-bold uppercase tracking-[0.08em] text-ocean">
            {serviceType}
          </span>
        </div>
        <h3 className="mt-2 text-base font-bold leading-6 text-ink sm:text-lg">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      </div>
    </article>
  );
}
