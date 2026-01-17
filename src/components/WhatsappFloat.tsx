import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappFloat = () => {
  return (
    <>
      {/* WhatsApp Button - Bottom Right */}
      <motion.a
        href="https://wa.me/17183280000"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        className="floating-action bottom-6 right-6 bg-[#25D366] text-white group"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7" />

        {/* Tooltip */}
        <span className="absolute right-16 bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat on WhatsApp
        </span>
      </motion.a>

      {/* Call Button - Bottom Left */}
      <motion.a
        href="tel:+17183280000"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        className="floating-action bottom-6 left-6 bg-primary text-primary-foreground group"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />

        {/* Tooltip */}
        <span className="absolute left-16 bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Call Now
        </span>
      </motion.a>
    </>
  );
};

export default WhatsappFloat;
