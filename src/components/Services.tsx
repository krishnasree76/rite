import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowLeft } from "lucide-react";


import {
  Truck,
  RefreshCw,
  Package,
  Stethoscope,
  Heart,
  ArrowRight,
  MapPin,
  Phone,
  Check,
} from "lucide-react";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const services = [
  {
    icon: Truck,
    title: "Free Delivery",
    description:
      "Get free, same-day prescription delivery. We service all areas in the Bronx and surrounding neighborhoods.",
    modalContent: {
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=300&fit=crop",
      fullDescription:
        "Enjoy the convenience of free prescription delivery right to your doorstep. Our professional delivery team ensures your medications arrive safely and on time, every time. We understand that getting to the pharmacy isn't always easy, which is why we bring your prescriptions directly to you.",
      included: [
        "Same-day delivery available",
        "Free for all prescriptions",
        "Serving Bronx and surrounding areas",
        "Contactless delivery options",
      ],
    },
  },
  {
    icon: RefreshCw,
    title: "Prescription Transfers",
    description:
      "Hassle-free transfers from any pharmacy. We handle all the paperwork so you don't have to.",
    modalContent: {
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=300&fit=crop",
      fullDescription:
        "Switching pharmacies has never been easier. Our team handles the entire transfer process, contacting your previous pharmacy and managing all the necessary paperwork. You simply provide us with your prescription details, and we take care of the rest.",
      included: [
        "We contact your previous pharmacy",
        "Complete paperwork handling",
        "Fast processing time",
        "No hassle for you",
      ],
    },
  },
  {
    icon: Package,
    title: "Blister Packaging",
    description:
      "Custom multi-dose pill packs organized by day and time. Perfect for managing multiple medications.",
    modalContent: {
      image:
        "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=300&fit=crop",
      fullDescription:
        "Our blister packaging service organizes your medications into convenient, easy-to-use packs sorted by day and time. This system helps ensure you never miss a dose and makes medication management simple for those taking multiple prescriptions.",
      included: [
        "Medications sorted by day and time",
        "Easy-to-open packaging",
        "Reduces medication errors",
        "Perfect for caregivers",
      ],
    },
  },
  {
    icon: Stethoscope,
    title: "Health Consultations",
    description:
      "Free medication consultations and blood pressure checks by our licensed pharmacists.",
    modalContent: {
      image:
        "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&h=300&fit=crop",
      fullDescription:
        "Our licensed pharmacists are available for free health consultations to answer your questions about medications, potential interactions, and general health concerns. We also offer complimentary blood pressure monitoring to help you stay on top of your health.",
      included: [
        "Free blood pressure checks",
        "Medication reviews",
        "Drug interaction consultations",
        "Personalized health advice",
      ],
    },
  },
  {
    icon: Heart,
    title: "Diabetes Care",
    description:
      "Glucose monitoring, diabetes counseling, and medication management support.",
    modalContent: {
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=300&fit=crop",
      fullDescription:
        "We provide comprehensive diabetes care services including glucose monitoring, personalized counseling, and medication management. Our pharmacists work with you to help manage your diabetes effectively and improve your quality of life.",
      included: [
        "Glucose monitoring services",
        "Diabetes education",
        "Medication management",
        "Lifestyle counseling",
      ],
    },
  },
] as const;

type ServiceType = (typeof services)[number];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 16 },
  },
};

const modalVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 140, damping: 18 },
  },
  exit: { opacity: 0, y: 20, scale: 0.98, transition: { duration: 0.2 } },
};

const Services = () => {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(
    null
  );

  return (
    <section id="services" className="py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Services We Offer</span>
          <h2 className="section-title mt-3">
            Customized Care,{" "}
            <span className="text-gradient">Tailored Solutions</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            We provide comprehensive pharmacy services designed to meet your
            unique healthcare needs with care and expertise.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* First row */}
          <div className="grid md:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
                className="relative overflow-hidden rounded-3xl bg-card border border-border p-6 shadow-soft group"
              >
                {/* Shine */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.12 }}
                  transition={{ type: "spring", stiffness: 250, damping: 14 }}
                  className="icon-container mb-4 group-hover:shadow-soft-lg"
                >
                  <service.icon className="w-6 h-6" />
                </motion.div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* CTA */}
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/cta"
                >
                  <span className="relative">
                    Click Here
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover/cta:w-full" />
                  </span>

                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    className="inline-flex"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Second row */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {services.slice(3, 5).map((service, index) => (
              <motion.div
                key={index + 3}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
                className="relative overflow-hidden rounded-3xl bg-card border border-border p-6 shadow-soft group"
              >
                {/* Shine */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                </div>

                <motion.div
                  whileHover={{ rotate: 8, scale: 1.12 }}
                  transition={{ type: "spring", stiffness: 250, damping: 14 }}
                  className="icon-container mb-4 group-hover:shadow-soft-lg"
                >
                  <service.icon className="w-6 h-6" />
                </motion.div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/cta"
                >
                  <span className="relative">
                    Click Here
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover/cta:w-full" />
                  </span>

                  <motion.span whileHover={{ x: 4 }} className="inline-flex">
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <Dialog
        open={!!selectedService}
        onOpenChange={(open) => {
          if (!open) setSelectedService(null);
        }}
      >
        <DialogContent className="max-w-2xl p-0 overflow-hidden">
          <AnimatePresence mode="wait">
            {selectedService && (
              <motion.div
                key={selectedService.title}
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Header image */}
                {/* Header image */}
<div className="relative h-48 w-full">
  <img
    src={selectedService.modalContent.image}
    alt={selectedService.title}
    className="w-full h-full object-cover"
  />

  {/* Back Arrow - Top Left */}
  <button
    type="button"
    onClick={() => setSelectedService(null)}
    className="absolute top-4 left-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-soft flex items-center justify-center transition"
    aria-label="Back"
  >
    <ArrowLeft className="w-5 h-5 text-primary" />
  </button>

  <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />

  <div className="absolute bottom-4 left-6 flex items-center gap-3">
    <div className="icon-container">
      <selectedService.icon className="w-5 h-5" />
    </div>
    <DialogTitle className="text-2xl font-bold text-white">
      {selectedService.title}
    </DialogTitle>
  </div>
</div>


                {/* Content */}
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {selectedService.modalContent.fullDescription}
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Included */}
                    <motion.div
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="bg-primary/5 rounded-xl p-5"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <Check className="w-5 h-5 text-primary" />
                        <h4 className="font-semibold text-foreground">
                          What's Included
                        </h4>
                      </div>

                      <ul className="space-y-3">
                        {selectedService.modalContent.included.map(
                          (item, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.15 + idx * 0.06 }}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              {item}
                            </motion.li>
                          )
                        )}
                      </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 }}
                      className="bg-primary/5 rounded-xl p-5"
                    >
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-primary mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            805 Soundview Ave, Bronx, NY 10473
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-primary" />
                          <a
                            href="tel:+17183280000"
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            +1 (718) 328-0000
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;
