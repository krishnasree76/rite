import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const storeHours = [
  { day: "Monday – Friday", hours: "9:00 AM – 7:00 PM" },
  { day: "Saturday", hours: "10:00 AM – 4:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

// ✅ Animations
const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardAnim: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 16 },
  },
};


const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // ✅ Basic Email regex validation
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const validateForm = () => {
    const newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Fix required fields",
        description: "Please check the form fields and try again.",
        variant: "destructive",
      });
      return;
    }

    const phoneNumber = "17183280000";

    const text = `Hello Rite Pharmacy 👋

I would like to contact you.

🧑 Name: ${formData.name}
📧 Email: ${formData.email}
💬 Message: ${formData.message}

Thank you.`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;

    toast({
      title: "Redirecting to WhatsApp…",
      description: "Your message is being prepared.",
    });

    setTimeout(() => {
      window.open(whatsappURL, "_blank");
    }, 600);

    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
      setErrors({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <section id="contact" className="relative py-24 bg-secondary/30 overflow-hidden">
      {/* ✅ Premium background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Title */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title mt-3">
            We're Here to <span className="text-gradient">Help You</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Need support with prescriptions, delivery, or health questions? Reach out
            anytime — we’re happy to help.
          </p>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* ✅ Contact Form */}
          <motion.div variants={cardAnim}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="relative bg-card rounded-3xl p-8 shadow-soft border border-border overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute -top-28 -right-28 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-60" />

              <h3 className="text-xl font-display font-bold text-foreground mb-6 relative">
                Send Us a Message
              </h3>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 relative"
                  >
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 180, damping: 12 }}
                    >
                      <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                    </motion.div>

                    <p className="text-lg font-semibold text-foreground">
                      Opening WhatsApp...
                    </p>
                    <p className="text-muted-foreground mt-2">
                      Your message is ready to send.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5 relative"
                  >
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-foreground mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className={`form-input transition-all duration-300 focus:ring-2 focus:ring-primary/30 ${
                          errors.name ? "border border-destructive" : ""
                        }`}
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-sm text-destructive mt-2"
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-foreground mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className={`form-input transition-all duration-300 focus:ring-2 focus:ring-primary/30 ${
                          errors.email ? "border border-destructive" : ""
                        }`}
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-sm text-destructive mt-2"
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-foreground mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className={`form-input resize-none transition-all duration-300 focus:ring-2 focus:ring-primary/30 ${
                          errors.message ? "border border-destructive" : ""
                        }`}
                        placeholder="How can we help you?"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      />
                      {errors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-sm text-destructive mt-2"
                        >
                          {errors.message}
                        </motion.p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full relative inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-soft-lg transition-all duration-300 overflow-hidden group"
                    >
                      {/* Shine sweep */}
                      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                        <span className="absolute -left-10 top-0 h-full w-10 bg-white/25 skew-x-[-20deg] animate-none group-hover:animate-[shine_1s_ease-in-out]" />
                      </span>

                      <Send className="w-5 h-5" />
                      Send on WhatsApp
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        className="inline-flex"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.span>
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* ✅ Contact Info */}
          <motion.div variants={fadeUp} className="space-y-6">
            {/* Contact details card */}
            <motion.div
              variants={cardAnim}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="bg-card rounded-3xl p-8 shadow-soft border border-border"
            >
              <h3 className="text-xl font-display font-bold text-foreground mb-6">
                Contact Information
              </h3>

              <div className="space-y-5">
                {/* Email */}
                <motion.a
                  whileHover={{ x: 4 }}
                  href="mailto:ritecarepharmacy@yahoo.com"
                  className="contact-item group hover:text-primary transition-colors"
                >
                  <div className="icon-container w-10 h-10 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold text-foreground">
                      ritecarepharmacy@yahoo.com
                    </p>
                  </div>
                </motion.a>

                {/* Phone */}
                <motion.a
                  whileHover={{ x: 4 }}
                  href="tel:+17183280000"
                  className="contact-item group hover:text-primary transition-colors"
                >
                  <div className="icon-container w-10 h-10 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-semibold text-foreground">
                      +1 (718) 328-0000
                    </p>
                  </div>
                </motion.a>

                {/* Address */}
                <motion.a
                  whileHover={{ x: 4 }}
                  href="https://maps.google.com/?q=805+Soundview+Ave,+Bronx,+NY+10473"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item group hover:text-primary transition-colors"
                >
                  <div className="icon-container w-10 h-10 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="font-semibold text-foreground">
                      805 Soundview Ave, Bronx, NY 10473
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Plus Code: R4CM+M8 Bronx, New York
                    </p>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Store hours card */}
            <motion.div
              variants={cardAnim}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="bg-card rounded-3xl p-8 shadow-soft border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="icon-container w-10 h-10">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground">
                  Store Hours
                </h3>
              </div>

              <div className="space-y-3">
                {storeHours.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-center justify-between py-2 border-b border-border last:border-0"
                  >
                    <span className="text-foreground font-semibold">
                      {item.day}
                    </span>

                    <span
                      className={
                        item.hours === "Closed"
                          ? "text-destructive font-semibold"
                          : "text-muted-foreground font-medium"
                      }
                    >
                      {item.hours}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* ✅ tiny keyframes for shine animation */}
      <style>
        {`
          @keyframes shine {
            0% { transform: translateX(0) skewX(-20deg); opacity: 0; }
            10% { opacity: 1; }
            100% { transform: translateX(520px) skewX(-20deg); opacity: 0; }
          }
        `}
      </style>
    </section>
  );
};

export default Contact;
