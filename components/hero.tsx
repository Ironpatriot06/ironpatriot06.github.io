import { ArrowRight, FileText, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/portfolio";
import { LinkButton } from "@/components/ui/link-button";
import { SystemVisualization } from "@/components/system-visualization";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.03fr_0.97fr] lg:px-8">
        <div>
          <p className="mb-6 font-mono text-sm tracking-tight">
            <span className="text-accent">Ratish Kapoor</span>
            <span className="mx-2 text-white/20">/</span>
            <span className="text-muted">CS undergrad, VIT Chennai</span>
          </p>

          <h1 className="max-w-[16ch] text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {profile.headline}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            {profile.subline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href="#projects" variant="primary" icon={<ArrowRight className="h-4 w-4" />}>
              View Projects
            </LinkButton>
            <LinkButton href={profile.resume} external disabled={!profile.resume} icon={<FileText className="h-4 w-4" />}>
              Resume
            </LinkButton>
          </div>
        </div>

        <SystemVisualization />
      </div>
    </section>
  );
}
