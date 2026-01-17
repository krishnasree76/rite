import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Truck,
  RefreshCw,
  Package,
  Stethoscope,
  Heart,
  ArrowRight,
  X,
  MapPin,
  Phone,
  Check,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const services = [
  {
    icon: Truck,
    title: 'Free Delivery',
    description:
      'Get free, same-day prescription delivery. We service all areas in the Bronx and surrounding neighborhoods.',
    modalContent: {
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=300&fit=crop',
      fullDescription:
        'Enjoy the convenience of free prescription delivery right to your doorstep. Our professional delivery team ensures your medications arrive safely and on time, every time. We understand that getting to the pharmacy isn\'t always easy, which is why we bring your prescriptions directly to you.',
      included: [
        'Same-day delivery available',
        'Free for all prescriptions',
        'Serving Bronx and surrounding areas',
        'Contactless delivery options',
      ],
    },
  },
  {
    icon: RefreshCw,
    title: 'Prescription Transfers',
    description:
      'Hassle-free transfers from any pharmacy. We handle all the paperwork so you don\'t have to.',
    modalContent: {
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=300&fit=crop',
      fullDescription:
        'Switching pharmacies has never been easier. Our team handles the entire transfer process, contacting your previous pharmacy and managing all the necessary paperwork. You simply provide us with your prescription details, and we take care of the rest.',
      included: [
        'We contact your previous pharmacy',
        'Complete paperwork handling',
        'Fast processing time',
        'No hassle for you',
      ],
    },
  },
  {
    icon: Package,
    title: 'Blister Packaging',
    description:
      'Custom multi-dose pill packs organized by day and time. Perfect for managing multiple medications.',
    modalContent: {
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=300&fit=crop',
      fullDescription:
        'Our blister packaging service organizes your medications into convenient, easy-to-use packs sorted by day and time. This system helps ensure you never miss a dose and makes medication management simple for those taking multiple prescriptions.',
      included: [
        'Medications sorted by day and time',
        'Easy-to-open packaging',
        'Reduces medication errors',
        'Perfect for caregivers',
      ],
    },
  },
  {
    icon: Stethoscope,
    title: 'Health Consultations',
    description:
      'Free medication consultations and blood pressure checks by our licensed pharmacists.',
    modalContent: {
      image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&h=300&fit=crop',
      fullDescription:
        'Our licensed pharmacists are available for free health consultations to answer your questions about medications, potential interactions, and general health concerns. We also offer complimentary blood pressure monitoring to help you stay on top of your health.',
      included: [
        'Free blood pressure checks',
        'Medication reviews',
        'Drug interaction consultations',
        'Personalized health advice',
      ],
    },
  },
  {
    icon: Heart,
    title: 'Diabetes Care',
    description:
      'Glucose monitoring, diabetes counseling, and medication management support.',
    modalContent: {
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=300&fit=crop',
      fullDescription:
        'We provide comprehensive diabetes care services including glucose monitoring, personalized counseling, and medication management. Our pharmacists work with you to help manage your diabetes effectively and improve your quality of life.',
      included: [
        'Glucose monitoring services',
        'Diabetes education',
        'Medication management',
        'Lifestyle counseling',
      ],
    },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Services We Offer</span>
          <h2 className="section-title mt-3">
            Customized Care,{' '}
            <span className="text-gradient">Tailored Solutions</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            We provide comprehensive pharmacy services designed to meet your
            unique healthcare needs with care and expertise.
          </p>
        </motion.div>

        {/* Services Grid - 3 columns top, 2 centered bottom */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* First row - 3 cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="service-card group"
              >
                <div className="icon-container mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:gap-2 transition-all duration-300"
                >
                  Click Here
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>

          {/* Second row - 2 centered cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {services.slice(3, 5).map((service, index) => (
              <motion.div
                key={index + 3}
                variants={cardVariants}
                className="service-card group"
              >
                <div className="icon-container mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:gap-2 transition-all duration-300"
                >
                  Click Here
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden">
          {selectedService && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Header Image */}
                <div className="relative h-48 w-full">
                  <img
                    src={selectedService.modalContent.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
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
                    {/* What's Included */}
                    <div className="bg-primary/5 rounded-xl p-5">
                      <div className="flex items-center gap-2 mb-4">
                        <Check className="w-5 h-5 text-primary" />
                        <h4 className="font-semibold text-foreground">What's Included</h4>
                      </div>
                      <ul className="space-y-3">
                        {selectedService.modalContent.included.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="bg-primary/5 rounded-xl p-5">
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
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;
