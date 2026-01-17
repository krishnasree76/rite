import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const storeHours = [
  { day: "Monday – Friday", hours: "9:00 AM – 7:00 PM" },
  { day: "Saturday", hours: "10:00 AM – 4:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

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

    // ✅ WhatsApp Number (no +)
    const phoneNumber = "17183280000";

    // ✅ Professional WhatsApp Message Template
    const text = `Hello Rite Pharmacy 👋

I would like to contact you.

🧑 Name: ${formData.name}
📧 Email: ${formData.email}
💬 Message: ${formData.message}

Thank you.`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;

    // ✅ Toast Before Redirect
    toast({
      title: "Redirecting to WhatsApp…",
      description: "Your message is being prepared.",
    });

    // ✅ Small delay to allow toast to appear
    setTimeout(() => {
      window.open(whatsappURL, "_blank");
    }, 600);

    // ✅ Success animation area
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
      setErrors({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title mt-3">
            We're Here to <span className="text-gradient">Help You</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card rounded-3xl p-8 shadow-soft">
              <h3 className="text-xl font-display font-bold text-foreground mb-6">
                Send Us a Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-lg font-semibold text-foreground">
                    Opening WhatsApp...
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Your message is ready to send.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className={`form-input ${
                        errors.name ? "border border-destructive" : ""
                      }`}
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive mt-2">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`form-input ${
                        errors.email ? "border border-destructive" : ""
                      }`}
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-2">{errors.email}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className={`form-input resize-none ${
                        errors.message ? "border border-destructive" : ""
                      }`}
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive mt-2">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-soft-lg hover:scale-[1.02] transition-all duration-300"
                  >
                    <Send className="w-5 h-5" />
                    Send on WhatsApp
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Details Card */}
            <div className="bg-card rounded-3xl p-8 shadow-soft">
              <h3 className="text-xl font-display font-bold text-foreground mb-6">
                Contact Information
              </h3>

              <div className="space-y-5">
                <a
                  href="mailto:ritecarepharmacy@yahoo.com"
                  className="contact-item hover:text-primary transition-colors"
                >
                  <div className="icon-container w-10 h-10 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">
                      ritecarepharmacy@yahoo.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+17183280000"
                  className="contact-item hover:text-primary transition-colors"
                >
                  <div className="icon-container w-10 h-10 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium text-foreground">
                      +1 (718) 328-0000
                    </p>
                  </div>
                </a>

                <a
                  href="https://maps.google.com/?q=805+Soundview+Ave,+Bronx,+NY+10473"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item hover:text-primary transition-colors"
                >
                  <div className="icon-container w-10 h-10 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="font-medium text-foreground">
                      805 Soundview Ave, Bronx, NY 10473
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Plus Code: R4CM+M8 Bronx, New York
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Store Hours Card */}
            <div className="bg-card rounded-3xl p-8 shadow-soft">
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
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 border-b border-border last:border-0"
                  >
                    <span className="text-foreground font-medium">{item.day}</span>
                    <span
                      className={
                        item.hours === "Closed"
                          ? "text-destructive font-medium"
                          : "text-muted-foreground"
                      }
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
