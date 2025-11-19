"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { HeroParallax } from "./ui/hero-parallax";
import LogoLoop from "./LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGithub,
  SiHtml5,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiSharp,
  SiMacos,
  SiVscodium,
  SiCss3,
} from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Plateforme de commerce complète avec gestion de paiements et inventaire en temps réel",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    year: "2024",
    details:
      "Développement d'une plateforme e-commerce complète avec système de paiement sécurisé Stripe, gestion d'inventaire en temps réel, tableau de bord administrateur, et système de recommandations basé sur l'IA.",
    achievements: [
      "Augmentation de 45% du taux de conversion",
      "Temps de chargement < 1.5s",
      "99.9% de disponibilité",
      "Support de 3 devises",
    ],
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    description:
      "Tableau de bord analytique avec visualisations de données interactives",
    tech: ["React", "D3.js", "Node.js", "MongoDB"],
    year: "2024",
    details:
      "Création d'un tableau de bord analytique en temps réel avec visualisations de données complexes utilisant D3.js.",
    achievements: [
      "Traitement de 5M+ data points",
      "Mise à jour en temps réel",
      "Exports PDF/Excel automatisés",
      "Interface responsive complète",
    ],
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description:
      "Application bancaire mobile sécurisée avec authentification biométrique",
    tech: ["React Native", "Node.js", "AWS", "PostgreSQL"],
    year: "2023",
    details:
      "Développement d'une application bancaire mobile hautement sécurisée avec authentification biométrique.",
    achievements: [
      "50,000+ utilisateurs actifs",
      "Certification PCI DSS",
      "Authentification biométrique",
      "Support iOS et Android",
    ],
  },
  {
    id: 4,
    title: "AI Content Tool",
    description:
      "Outil de génération de contenu alimenté par l'IA pour le marketing",
    tech: ["Python", "OpenAI", "FastAPI", "Redis"],
    year: "2023",
    details: "Plateforme de génération de contenu marketing utilisant GPT-4.",
    achievements: [
      "Génération de 1000+ contenus/jour",
      "Réduction de 70% du temps de création",
      "Score SEO moyen de 85/100",
      "API REST documentée",
    ],
  },
];

export const products = [
  {
    title: "Kenomi",
    link: "https://kenomi.eu",
    thumbnail: "/kenomiWebsite.jpg",
  },
  {
    title: "Journify",
    link: "https://kenomi.eu",
    thumbnail:
      "/jounifyWebsite.jpg",
  },
  {
    title: "Kenomi Agency",
    link: "https://kenomi-com.vercel.app",
    thumbnail:
      "/kenomiCom.jpg",
  },
  {
    title: "Kenomi",
    link: "https://kenomi.eu",
    thumbnail: "/kenomiWebsite.jpg",
  },
  {
    title: "Journify",
    link: "https://kenomi.eu",
    thumbnail:
      "/jounifyWebsite.jpg",
  },
  {
    title: "Kenomi Agency",
    link: "https://kenomi-com.vercel.app",
    thumbnail:
      "/kenomiCom.jpg",
  },
  {
    title: "Kenomi",
    link: "https://kenomi.eu",
    thumbnail: "/kenomiWebsite.jpg",
  },
  {
    title: "Journify",
    link: "https://kenomi.eu",
    thumbnail:
      "/jounifyWebsite.jpg",
  },
  {
    title: "Kenomi Agency",
    link: "https://kenomi-com.vercel.app",
    thumbnail:
      "/kenomiCom.jpg",
  },
  {
    title: "Kenomi",
    link: "https://kenomi.eu",
    thumbnail: "/kenomiWebsite.jpg",
  },
  {
    title: "Journify",
    link: "https://kenomi.eu",
    thumbnail:
      "/jounifyWebsite.jpg",
  },
  {
    title: "Kenomi Agency",
    link: "https://kenomi-com.vercel.app",
    thumbnail:
      "/kenomiCom.jpg",
  },
  {
    title: "Kenomi",
    link: "https://kenomi.eu",
    thumbnail: "/kenomiWebsite.jpg",
  },
  {
    title: "Journify",
    link: "https://kenomi.eu",
    thumbnail:
      "/jounifyWebsite.jpg",
  },
  {
    title: "Kenomi Agency",
    link: "https://kenomi-com.vercel.app",
    thumbnail:
      "/kenomiCom.jpg",
  },


];

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  {
    node: <SiHtml5 />,
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  {
    node: <SiSharp />,
    title: "C#",
    href: "https://learn.microsoft.com/en-us/dotnet/csharp/",
  },
  { node: <SiMacos />, title: "macOS", href: "https://www.apple.com/macos/" },
  {
    node: <SiVscodium />,
    title: "VS Code",
    href: "https://code.visualstudio.com",
  },
  {
    node: <SiCss3 />,
    title: "CSS3",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
];

// // Alternative with image sources
// const imageLogos = [
//   {
//     src: "/logos/company1.png",
//     alt: "Company 1",
//     href: "https://company1.com",
//   },
//   {
//     src: "/logos/company2.png",
//     alt: "Company 2",
//     href: "https://company2.com",
//   },
//   {
//     src: "/logos/company3.png",
//     alt: "Company 3",
//     href: "https://company3.com",
//   },
// ];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background 3D avec gradient fabric */}

      <AuroraBackground>
        {/* Navigation fixe - Style Portfolite */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled
              ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
              : "bg-transparent"
          }`}
        >
          <div className="portfolio-container">
            <div className="flex items-center justify-between py-6">
              <motion.a
                href="#"
                className="text-xl text-white font-bold tracking-tight"
                whileHover={{ scale: 1.05 }}
              >
                by Kenji Mobutu
              </motion.a>
              <div className="hidden md:flex gap-8 text-sm text-white font-medium">
                <motion.a
                  href="#about"
                  whileHover={{ color: "#d4af37" }}
                  className="transition-colors"
                >
                  À propos
                </motion.a>
                <motion.a
                  href="#projects"
                  whileHover={{ color: "#d4af37" }}
                  className="transition-colors"
                >
                  Projets
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ color: "#d4af37" }}
                  className="transition-colors"
                >
                  Contact
                </motion.a>
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section - Style Portfolite */}
        <section className="min-h-screen flex items-center relative overflow-hidden pt-24">
          <div className="portfolio-container w-full py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block px-4 py-1.5 border border-white/10 rounded-full text-sm text-white/60"
              >
                Disponible pour des projets
              </motion.div>

              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-[1.1] tracking-tight"
                >
                  Kenji Mobutu
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed"
                >
                  Webpreneur, Développeur Full Stack.
                  <br />
                  Passionné par la conception produit et la création
                  d&apos;expériences web exceptionnelles
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 text-white font-medium  hover:text-white/90 transition-colors"
                >
                  Me contacter
                </motion.a>
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mx-auto py-3 border border-white/40 text-white font-medium rounded-full hover:border-white/40 transition-colors px-6 priority"
                >
                  Voir mes projets
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </AuroraBackground>

      {/* Divider */}
      <div className="divider" />

      {/* About Section - Style Portfolite */}
      <section id="about" className="section-spacing">
        <div className="portfolio-container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm uppercase tracking-wider text-white/40 mb-6">
                Ma vision
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Créer des solutions digitales innovantes
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-lg text-white/60 leading-relaxed"
            >
              <p>
                En tant que Webpreneur, je considère que la maîtrise des
                technologies n’a de valeur que lorsqu’elle contribue à la
                création d’un produit concret ou d’une solution utile. Sans
                finalité, la technique ne reste qu’un bel exercice… dénué
                d’élégance fonctionnelle.
              </p>
              <p>
                Je ne me vois pas comme un simple exécutant du développement,
                mais comme un concepteur capable d’appréhender un écosystème
                dans son ensemble. Diplômé en informatique et communication,
                j’utilise ces deux dimensions pour disposer d’une vision large
                et cohérente. Mon objectif n’est pas uniquement d’écrire du
                code, mais d’employer la technologie pour résoudre des problèmes
                réels, donner forme aux idées et générer de la valeur.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="divider" />
        <div
          style={{
            height: "200px",
            position: "relative",
            overflow: "hidden",
            marginTop: "40px",
          }}
        >
          {/* Basic horizontal loop */}
          <LogoLoop
            logos={techLogos}
            speed={50}
            direction="left"
            logoHeight={48}
            gap={40}
            hoverSpeed={0}
            scaleOnHover
            ariaLabel="Technology partners"
          />
        </div>
        <HeroParallax products={products} />
      </section>

      {/* Contact Section - Style Portfolite */}
      <section id="contact" className="section-spacing">
        <div className="portfolio-container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm uppercase tracking-wider text-white/40 mb-6">
                Contact
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Travaillons ensemble
              </h3>
              <p className="text-lg text-white/60 leading-relaxed">
                Un projet en tête ? N&apos;hésitez pas à me contacter pour en
                discuter.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <motion.a
                href="mailto:kenjimobutu@gmail.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-lg group"
              >
                <span className="text-white/40 group-hover:text-[#d4af37] transition-colors">
                  Email
                </span>
                <span className="flex-1 h-px bg-white/10" />
                <span className="group-hover:text-[#d4af37] transition-colors">
                  kenjimobutu@gmail.com
                </span>
              </motion.a>

              <motion.a
                href="https://github.com/kenjimobutu"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-lg group"
              >
                <span className="text-white/40 group-hover:text-[#d4af37] transition-colors">
                  GitHub
                </span>
                <span className="flex-1 h-px bg-white/10" />
                <span className="group-hover:text-[#d4af37] transition-colors">
                  @kenjimobutu
                </span>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/kenjimobutu"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-lg group"
              >
                <span className="text-white/40 group-hover:text-[#d4af37] transition-colors">
                  LinkedIn
                </span>
                <span className="flex-1 h-px bg-white/10" />
                <span className="group-hover:text-[#d4af37] transition-colors">
                  Kenji Mobutu
                </span>
              </motion.a>
            </motion.div>
          </div>

          <div className="mt-20 pt-12 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
              <p>
                © {new Date().getFullYear()} Kenji Mobutu. Tous droits réservés.
              </p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white/60 transition-colors">
                  Privacy
                </a>
                <a href="#" className="hover:text-white/60 transition-colors">
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal - Style Portfolite */}
      {selectedProject !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4 md:p-8"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-black border border-white/10 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-12"
          >
            {projects
              .filter((p) => p.id === selectedProject)
              .map((project) => (
                <div key={project.id} className="space-y-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <span className="text-sm text-white/40 font-mono">
                        {String(
                          projects.findIndex((p) => p.id === project.id) + 1
                        ).padStart(2, "0")}
                      </span>
                      <h2 className="text-3xl md:text-4xl font-bold">
                        {project.title}
                      </h2>
                    </div>
                    <motion.button
                      type="button"
                      onClick={() => setSelectedProject(null)}
                      whileHover={{ scale: 1.1 }}
                      className="text-white/40 hover:text-white transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </motion.button>
                  </div>

                  <p className="text-lg text-white/60 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="border-t border-white/10 pt-8">
                    <h3 className="text-xl font-bold mb-4">
                      Détails du projet
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {project.details}
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-8">
                    <h3 className="text-xl font-bold mb-6">
                      Réalisations clés
                    </h3>
                    <ul className="space-y-4">
                      {project.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-start gap-3"
                        >
                          <span className="text-[#d4af37] mt-1">✓</span>
                          <span className="text-white/60">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
