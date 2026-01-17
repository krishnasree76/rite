import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

import {
  Briefcase,
  Mail,
  ArrowRight,
  DollarSign,
  HeartPulse,
  CalendarCheck,
  TrendingUp,
  Clock,
  BadgeCheck,
  Gift,
  Check,
  X,
} from "lucide-react";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const perks = [
  { icon: DollarSign, title: "Competitive Salary" },
  { icon: HeartPulse, title: "Health Benefits" },
  { icon: CalendarCheck, title: "Paid Time Off" },
  { icon: TrendingUp, title: "Professional Growth" },
  { icon: Clock, title: "Flexible Scheduling" },
  { icon: BadgeCheck, title: "Employee Discounts" },
];

const values = [
  { title: "Community First", variant: "soft" },
  { title: "Excellence in Care", variant: "soft" },
  { title: "Team Collaboration", variant: "soft" },
  { title: "Continuous Learning", variant: "soft" },
] as const;

const openings = [
  {
    title: "Pharmacist",
    type: "Full-Time",
    description:
      "Licensed pharmacist responsible for dispensing medications, providing patient counseling, and ensuring quality pharmaceutical care.",
    requirements: [
      "Active Pharmacist license in NY",
      "Strong knowledge of medications & interactions",
      "Excellent communication & patient counseling",
      "Ability to work in a fast-paced environment",
    ],
  },
  {
    title: "Pharmacy Technician",
    type: "Full-Time / Part-Time",
    description:
      "Assist pharmacists in preparing and dispensing medications, managing inventory, and providing excellent customer service.",
    requirements: [
      "Previous pharmacy experience preferred",
      "Strong attention to detail",
      "Customer-friendly communication",
      "Inventory and packaging knowledge a plus",
    ],
  },
  {
    title: "Customer Service Representative",
    type: "Part-Time",
    description:
      "Front desk position handling customer inquiries, prescription drop-offs, and providing friendly service to our patients.",
    requirements: [
      "Great communication skills",
      "Organized and punctual",
      "Basic computer skills",
      "Customer service experience preferred",
    ],
  },
  {
    title: "Delivery Driver",
    type: "Part-Time",
    description:
      "Responsible for timely and safe delivery of prescriptions and medical supplies to our community members.",
    requirements: [
      "Valid Driver’s License",
      "Knowledge of Bronx routes is a plus",
      "Responsible and punctual",
      "Comfortable handling deliveries safely",
    ],
  },
] as const;

type OpeningType = (typeof openings)[number];

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 16 },
  },
};

const Careers = () => {
  const [selectedOpening, setSelectedOpening] = useState<OpeningType | null>(
    null
  );

  const applyMailLink = (role: string) =>
    `mailto:ritecarepharmacy@yahoo.com?subject=${encodeURIComponent(
      `Career Application - ${role} - Rite Pharmacy`
    )}`;

  return (
    <section id="careers" className="relative py-24 bg-background overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-36 -right-36 w-[420px] h-[420px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-36 -left-36 w-[420px] h-[420px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Top */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent mb-6 shadow-soft">
              <Briefcase className="w-8 h-8 text-primary" />
            </div>

            <span className="section-label block mb-3">Careers</span>

            <h2 className="section-title">
              Join Our <span className="text-gradient">Growing Team</span>
            </h2>

            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              We're always looking for talented, compassionate individuals who share
              our commitment to excellent patient care. If you’re passionate about
              healthcare and want to make an impact in Bronx, we’d love to hear
              from you.
            </p>
          </motion.div>

          {/* Email Resume CTA */}
          <motion.a
            variants={fadeUp}
            href="mailto:ritecarepharmacy@yahoo.com?subject=Career%20Application%20-%20Rite%20Pharmacy"
            className="group inline-flex items-center gap-2 mt-10 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-soft-lg hover:scale-[1.03] transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            Email Resume
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>

          <motion.p variants={fadeUp} className="mt-4 text-sm text-muted-foreground">
            Send your resume to{" "}
            <a
              href="mailto:ritecarepharmacy@yahoo.com"
              className="text-primary font-semibold hover:underline"
            >
              ritecarepharmacy@yahoo.com
            </a>
          </motion.p>
        </motion.div>

        {/* ✅ Current Openings */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24"
        >
          <motion.h3
            variants={fadeUp}
            className="text-3xl md:text-4xl font-display font-bold text-foreground text-center"
          >
            Current Openings
          </motion.h3>

          <motion.div
            variants={fadeUp}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {openings.map((job, idx) => (
              <motion.div
                key={idx}
                variants={card}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 240, damping: 18 }}
                className="bg-card border border-border rounded-3xl shadow-soft overflow-hidden"
              >
                {/* Header */}
                <div className="p-6 bg-secondary/40 border-b border-border flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-display text-2xl font-bold text-foreground">
                      {job.title}
                    </h4>
                    <span className="inline-flex mt-3 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      {job.type}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-soft">
                    <Gift className="w-6 h-6" />
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => setSelectedOpening(job)}
                    className="mt-5 text-primary font-semibold hover:underline"
                  >
                    View Requirements
                  </button>

                  {/* Apply */}
                  <a
                    href={applyMailLink(job.title)}
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-soft-lg hover:scale-[1.02] transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    Apply Now
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Benefits & Perks */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24"
        >
          <motion.h3
            variants={fadeUp}
            className="text-3xl md:text-4xl font-display font-bold text-foreground text-center"
          >
            Benefits & Perks
          </motion.h3>

          <motion.div
            variants={fadeUp}
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6"
          >
            {perks.map((item, index) => (
              <motion.div
                key={index}
                variants={card}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 240, damping: 18 }}
                className="group bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 text-center"
              >
                <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>

                <p className="mt-4 font-semibold text-foreground text-sm leading-snug">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-center mt-8 text-sm text-muted-foreground"
          >
            *Benefits may vary by role and experience.
          </motion.p>
        </motion.div>

        {/* Core Values */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24"
        >
          <motion.h3
            variants={fadeUp}
            className="text-3xl md:text-4xl font-display font-bold text-foreground text-center"
          >
            Our Core Values
          </motion.h3>

          <motion.div
            variants={fadeUp}
            className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {values.map((v, idx) => {
              const base =
                "rounded-2xl py-5 text-center font-display font-bold text-lg shadow-soft border transition-all duration-300";
              const style =
                v.variant === "soft"
                  ? "bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 hover:scale-[1.02]"
                  : "bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 hover:scale-[1.02]";

              return (
                <motion.div
                  key={idx}
                  variants={card}
                  whileHover={{ y: -6 }}
                  className={`${base} ${style}`}
                >
                  {v.title}
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* ✅ Requirements Modal */}
      <Dialog
        open={!!selectedOpening}
        onOpenChange={(open) => {
          if (!open) setSelectedOpening(null);
        }}
      >
        <DialogContent className="max-w-2xl p-0 overflow-hidden">
          <AnimatePresence mode="wait">
            {selectedOpening && (
              <motion.div
                key={selectedOpening.title}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 140, damping: 18 }}
              >
                {/* Header */}
                <div className="p-6 border-b border-border bg-secondary/40 flex items-start justify-between">
                  <div>
                    <DialogTitle className="text-2xl font-display font-bold text-foreground">
                      {selectedOpening.title}
                    </DialogTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      Requirements & Role Details
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedOpening(null)}
                    className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center hover:bg-accent transition"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5 text-foreground" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedOpening.description}
                  </p>

                  <div className="mt-6 bg-primary/5 border border-primary/10 rounded-2xl p-5">
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      Requirements
                    </h4>

                    <ul className="space-y-3">
                      {selectedOpening.requirements.map((req, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Apply button */}
                  <a
                    href={applyMailLink(selectedOpening.title)}
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-soft-lg hover:scale-[1.02] transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    Apply for this Role
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Careers;
