import { motion } from 'framer-motion';
import {
  Check,
  Search,
  Pill,
  ArrowRight,
  FileText,
} from 'lucide-react';

const benefits = [
  'Fast, friendly & reliable service',
  'Free home delivery',
  'Accept most insurances',
  'Expert medication counseling',
  'Competitive prices & savings',
  'Community focused pharmacy',
];

const resources = [
  {
    icon: Search,
    title: 'Search Drugs',
    link: 'https://www.epocrates.com/online/drugs',
  },
  {
    icon: FileText,
    title: 'Search Diseases',
    link: 'https://www.epocrates.com/online/diseases',
  },
  {
    icon: Pill,
    title: 'Pill Identification',
    link: 'https://www.drugs.com/imprints.php',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="section-label">Why Choose Us</span>
              <h2 className="section-title mt-3">
                Trusted by{' '}
                <span className="text-gradient">Our Community</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                We go above and beyond to ensure you receive the best pharmacy
                experience possible.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="check-item"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Quick Resources */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card rounded-3xl p-8 shadow-soft">
              <h3 className="text-xl font-display font-bold text-foreground mb-6">
                Quick Resources
              </h3>
              <div className="space-y-4">
                {resources.map((resource, index) => (
                  <motion.a
                    key={index}
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="resource-card group"
                  >
                    <div className="icon-container group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <resource.icon className="w-5 h-5" />
                    </div>
                    <span className="flex-1 font-medium text-foreground">
                      {resource.title}
                    </span>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                  </motion.a>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-xl bg-accent/50 border border-primary/10">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Need help?</strong> Our
                  pharmacists are available to answer your questions during store
                  hours.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
