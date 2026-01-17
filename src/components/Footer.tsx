import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Heart } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
  { name: 'Careers', href: '#careers' },
];

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-display font-bold">Rite Pharmacy</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Your trusted community pharmacy in Bronx, NY. Providing personalized
              care and quality service since 2010.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-display font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+17183280000"
                  className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +1 (718) 328-0000
                </a>
              </li>
              <li>
                <a
                  href="mailto:ritecarepharmacy@yahoo.com"
                  className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  ritecarepharmacy@yahoo.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=805+Soundview+Ave,+Bronx,+NY+10473"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-background/70 hover:text-primary transition-colors text-sm"
                >
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  805 Soundview Ave, Bronx, NY 10473
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-display font-bold text-lg mb-4">Store Hours</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span>9am - 7pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>10am - 4pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-destructive">Closed</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-background/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} Rite Pharmacy. All rights reserved.
            </p>
            <p className="text-sm text-background/60 flex items-center gap-1">
  Made with <Heart className="w-4 h-4 text-primary" /> by{" "}
  <a
    href="https://www.staffarc.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary font-semibold hover:underline"
  >
    StaffArc
  </a>
</p>

          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
