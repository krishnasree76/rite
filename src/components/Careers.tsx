import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
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
} from "lucide-react";

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
];

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
  return (
    <section id="careers" className="relative py-24 bg-background overflow-hidden">
      {/* Background glow (same theme) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-36 -right-36 w-[420px] h-[420px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-36 -left-36 w-[420px] h-[420px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Top Heading */}
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

          {/* CTA */}
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

        {/* Benefits & Perks */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
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
          className="mt-20"
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
                v.variant === "solid"
                  ? "bg-primary text-primary-foreground border-primary/30 hover:shadow-soft-lg hover:scale-[1.02]"
                  : v.variant === "outline"
                  ? "bg-background text-primary border-primary/30 hover:bg-primary/10 hover:scale-[1.02]"
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
    </section>
  );
};

export default Careers;
