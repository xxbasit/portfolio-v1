"use client";

import Footer from "@/layout/footer";
import Navbar from "@/layout/navbar";
import {
  ExternalLink,
  Github,
  Award,
  Briefcase,
  Code2,
  GraduationCap,
  ChevronDown,
  Terminal,
  Cloud,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const skills: Record<string, string[]> = {
  "Cloud Platforms": ["AWS", "GCP", "Azure"],
  "Containers & Kubernetes": ["Docker", "Kubernetes", "EKS", "AKS", "GKE", "Helm", "Helmfile", "Karpenter"],
  "CI/CD & GitOps": ["GitHub Actions", "GitLab CI/CD", "Jenkins", "ArgoCD", "FluxCD"],
  "IaC & Automation": ["Terraform", "Ansible", "Kustomize"],
  "Observability": ["Prometheus", "Grafana", "Loki", "Tempo", "ELK Stack", "CloudWatch", "OpenTelemetry"],
  "DevSecOps": ["Trivy", "SonarQube", "SAST / SCA", "Checkov", "tflint", "Secrets Detection"],
  "Scripting": ["Bash", "Python"],
  "Deployment Strategies": ["Rolling", "Canary", "Blue-Green", "Immutable"],
  "Compliance": ["SOC 2 Type II", "ISO 27001", "HIPAA", "GDPR"],
};

const experience = [
  {
    role: "DevOps & Cloud Engineer",
    company: "NETS International Communications",
    period: "Jul 2023 – Present",
    location: "Islamabad, PK",
    platforms: ["AWS EKS", "GCP Cloud Run", "GCP GKE", "Azure AKS", "AWS EC2", "AWS Elastic Beanstalk"],
    highlights: [
      "Architected and operated a 12-service MERN commerce platform on AWS EKS with modular Terraform IaC stack across all environments.",
      "Owned EKS reliability strategy: Karpenter autoscaling, PodDisruptionBudgets, priority classes, ALB ingress, and WAF integration.",
      "Built GitHub Actions CI/CD for all microservices — Trivy scanning, ECR artifact management, Helmfile deployments, and automated rollback.",
      "Reduced infrastructure costs via Spot workloads, compute right-sizing, storage adjustments, and lifecycle automation.",
      "Migrated MERN + Go to GCP Cloud Run with Workload Identity Federation, Secret Manager, and revision-based release management.",
      "Deployed .NET Core microservices on GKE with blue/green and canary releases; integrated Cloud SQL and Cloud Load Balancing.",
      "Deployed 6-service AKS platform (MERN + Python AI + C++ video) with GPU-enabled node pools, ACR, Azure Key Vault, and App Insights.",
      "Implemented SLO-driven observability (Prometheus, Grafana, Loki, Tempo, CloudWatch) across all platforms.",
    ],
  },
  {
    role: "DevOps Engineer",
    company: "Gubloo Technologies",
    period: "Sep 2022 – Jun 2023",
    location: "Islamabad, PK",
    platforms: ["AWS", "GCP", "GitLab CI"],
    highlights: [
      "Managed AWS and GCP environments for internal and client-facing applications.",
      "Implemented GitLab CI/CD pipelines to automate build, test, and deployment processes.",
      "Deployed and managed Dockerized applications, improving environment consistency and release velocity.",
      "Built monitoring and alerting solutions using Cloud Monitoring and CloudWatch.",
    ],
  },
];

const projects = [
  {
    title: "terraform-aws-blueprints",
    category: "IaC",
    desc: "Production Terraform modules for AWS — VPC, EKS with Fargate + managed node groups, RDS, and S3 remote state. Multi-environment (dev/test/prod) with DynamoDB locking, KMS encryption, and IRSA/OIDC.",
    tags: ["Terraform", "AWS", "EKS", "Fargate", "RDS", "KMS"],
    url: "https://github.com/basitkhan32/terraform-aws-blueprints",
    color: "from-orange-500/20 to-yellow-500/10",
    accent: "text-orange-400",
    border: "border-orange-500/30",
  },
  {
    title: "observability-stack-k8s",
    category: "Observability",
    desc: "Full observability stack on Kubernetes — Prometheus, Grafana, Loki (SingleBinary dev / S3 prod), Tempo distributed tracing, and OpenTelemetry Collector with pre-wired trace-to-log correlation.",
    tags: ["Prometheus", "Grafana", "Loki", "Tempo", "OpenTelemetry", "Helmfile"],
    url: "https://github.com/basitkhan32/observability-stack-k8s",
    color: "from-green-500/20 to-emerald-500/10",
    accent: "text-green-400",
    border: "border-green-500/30",
  },
  {
    title: "chaos-engineering-lab",
    category: "Reliability",
    desc: "Litmus Chaos and Chaos Mesh experiments — pod-kill, network-delay, CPU stress, IO chaos. SLO-gated GitHub Actions workflow that polls availability every 15s and auto-aborts on breach. Weekly Game Day playbook included.",
    tags: ["Chaos Mesh", "Litmus Chaos", "SLO", "GitHub Actions", "Kubernetes"],
    url: "https://github.com/basitkhan32/chaos-engineering-lab",
    color: "from-red-500/20 to-rose-500/10",
    accent: "text-red-400",
    border: "border-red-500/30",
  },
  {
    title: "internal-developer-platform",
    category: "Platform Engineering",
    desc: "Backstage IDP on Kubernetes — software catalog, TechDocs, and a scaffolder template that bootstraps a full microservice repo (multi-language Dockerfile, CI pipeline, Helm chart, ArgoCD app) from a single UI form.",
    tags: ["Backstage", "Kubernetes", "ArgoCD", "Helm", "GitOps", "Scaffolder"],
    url: "https://github.com/basitkhan32/internal-developer-platform",
    color: "from-purple-500/20 to-violet-500/10",
    accent: "text-purple-400",
    border: "border-purple-500/30",
  },
];

const certifications = [
  {
    name: "AWS Certified AI Practitioner",
    code: "AIF-C01",
    issuer: "Amazon Web Services",
    gradient: "from-orange-500 to-amber-400",
    icon: "🤖",
  },
  {
    name: "AWS Certified Solutions Architect",
    code: "SAA-C03",
    issuer: "Amazon Web Services",
    gradient: "from-orange-600 to-yellow-500",
    icon: "🏗️",
  },
  {
    name: "Certified Kubernetes Administrator",
    code: "CKA",
    issuer: "Linux Foundation / CNCF",
    gradient: "from-blue-500 to-cyan-400",
    icon: "⚙️",
  },
];

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "3", label: "Certifications" },
  { value: "3", label: "Cloud Platforms" },
  { value: "6+", label: "Production Platforms" },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

const Tag = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span
    className={`inline-block bg-white/5 border border-white/10 text-gray-300 text-xs px-2.5 py-1 rounded-full ${className}`}
  >
    {children}
  </span>
);

const SectionTitle = ({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="flex items-center gap-3 mb-10">
    <div className="text-cyan-400">{icon}</div>
    <h2 className="text-3xl font-bold text-white">{children}</h2>
    <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/40 to-transparent ml-4" />
  </div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main
      style={{
        background:
          "radial-gradient(ellipse at top, rgba(6, 182, 212, 0.07) 0%, transparent 60%), #0e0e12",
      }}
      className="min-h-screen text-white"
    >
      <div className="max-w-5xl mx-auto px-6 pt-8 pb-16">
        <Navbar page="home" />

        {/* ── Hero ── */}
        <section
          id="hero"
          className="flex flex-col items-center justify-center min-h-[85vh] text-center py-20"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm px-4 py-1.5 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Open to freelance &amp; contract engagements
          </div>

          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight leading-none mb-4">
            Abdul Basit
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Khan
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 font-light mt-4 mb-2 tracking-wide">
            DevOps &amp; Cloud Engineer
          </p>
          <p className="text-gray-500 text-sm tracking-widest uppercase mb-10">
            AWS · Kubernetes · Terraform · GitOps · Observability
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <a
              href="https://github.com/basitkhan32"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/basit-pmp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ExternalLink size={18} /> LinkedIn
            </a>
            <a
              href="mailto:work.basitkhan@gmail.com"
              className="flex items-center gap-2 border border-white/20 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/5 transition-colors"
            >
              Hire Me
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 w-full max-w-2xl">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
              >
                <div className="text-3xl font-bold text-cyan-400">{s.value}</div>
                <div className="text-gray-400 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <a
            href="#skills"
            className="mt-16 text-gray-600 hover:text-gray-400 transition-colors animate-bounce"
          >
            <ChevronDown size={24} />
          </a>
        </section>

        {/* ── Skills ── */}
        <section id="skills" className="py-16">
          <SectionTitle icon={<Code2 size={28} />}>Skills &amp; Technologies</SectionTitle>
          <div className="grid md:grid-cols-2 gap-5">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-white/3 border border-white/8 rounded-xl p-5 hover:border-white/15 transition-colors"
              >
                <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Experience ── */}
        <section id="experience" className="py-16">
          <SectionTitle icon={<Briefcase size={28} />}>Work Experience</SectionTitle>
          <div className="space-y-8">
            {experience.map((job, i) => (
              <div
                key={i}
                className="border border-white/10 rounded-xl p-6 bg-white/3 hover:border-cyan-500/30 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{job.role}</h3>
                    <p className="text-cyan-400 font-medium">{job.company}</p>
                    <p className="text-gray-500 text-sm">{job.location}</p>
                  </div>
                  <span className="text-sm text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full h-fit whitespace-nowrap">
                    {job.period}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.platforms.map((p) => (
                    <span
                      key={p}
                      className="text-xs bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full"
                    >
                      {p}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2">
                  {job.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-300 text-sm">
                      <span className="text-cyan-500 mt-1 shrink-0">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="py-16">
          <SectionTitle icon={<Terminal size={28} />}>Portfolio Projects</SectionTitle>
          <p className="text-gray-400 mb-8 -mt-4">
            Four production-grade open-source projects — each demonstrating real-world DevOps depth.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <div
                key={p.title}
                className={`relative border ${p.border} rounded-xl p-6 bg-gradient-to-br ${p.color} hover:scale-[1.01] transition-transform group`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className={`text-xs font-bold uppercase tracking-widest ${p.accent} mb-1 block`}>
                      {p.category}
                    </span>
                    <h3 className="text-white font-bold text-lg leading-snug">{p.title}</h3>
                  </div>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-white transition-colors ml-3 shrink-0"
                    aria-label="View on GitHub"
                  >
                    <Github size={20} />
                  </a>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-white/5 border border-white/10 text-gray-300 px-2 py-0.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1 text-sm font-medium ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity`}
                >
                  View on GitHub <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── Certifications ── */}
        <section id="certifications" className="py-16">
          <SectionTitle icon={<Award size={28} />}>Certifications</SectionTitle>
          <div className="grid md:grid-cols-3 gap-5">
            {certifications.map((c) => (
              <div
                key={c.code}
                className="border border-white/10 rounded-xl p-5 bg-white/3 hover:border-white/20 transition-colors"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.gradient} flex items-center justify-center text-2xl mb-4`}
                >
                  {c.icon}
                </div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{c.issuer}</p>
                <h3 className="text-white font-bold leading-snug mb-2">{c.name}</h3>
                <span className="text-xs font-mono bg-white/5 border border-white/10 text-gray-400 px-2 py-0.5 rounded">
                  {c.code}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Education ── */}
        <section id="education" className="py-16">
          <SectionTitle icon={<GraduationCap size={28} />}>Education</SectionTitle>
          <div className="border border-white/10 rounded-xl p-6 bg-white/3">
            <h3 className="text-xl font-bold text-white">BS Computer Engineering</h3>
            <p className="text-cyan-400 font-medium">National University of Technology (NUTECH)</p>
            <p className="text-gray-500 text-sm mt-1">Islamabad, Pakistan &nbsp;·&nbsp; 2018 – 2022</p>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="py-16">
          <SectionTitle icon={<Cloud size={28} />}>Let&apos;s Work Together</SectionTitle>
          <div className="border border-cyan-500/30 rounded-2xl p-8 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 text-center">
            <p className="text-gray-300 text-lg mb-6 max-w-xl mx-auto">
              Available for freelance DevOps &amp; cloud engineering engagements — infrastructure
              automation, Kubernetes platform work, CI/CD pipelines, and observability.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:work.basitkhan@gmail.com"
                className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold px-7 py-3 rounded-lg transition-colors"
              >
                work.basitkhan@gmail.com
              </a>
              <a
                href="https://wa.me/923000032320"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-green-500/50 text-green-400 hover:bg-green-500/10 font-semibold px-7 py-3 rounded-lg transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        <Footer page="home" />
      </div>
    </main>
  );
}
