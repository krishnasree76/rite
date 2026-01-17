import { motion } from 'framer-motion';
import { Users, Award, Clock, Heart } from 'lucide-react';
import pharmacyAbout from '@/assets/pharmacy-about.jpg';

const stats = [
  { icon: Users, label: 'Happy Customers' },
  { icon: Award, label: 'Experienced' },
  { icon: Clock, label: 'Our Support Available' },
  { icon: Heart, label: 'Care Focused' },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="section-label">About Us</span>
            <h2 className="section-title">
              Your Neighborhood{' '}
              <span className="text-gradient">Health Partner</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Rite Pharmacy is a community-based pharmacy committed to providing
              fast service, fair pricing, and expert consultation. Located in the
              heart of Bronx, we've been serving our neighbors with dedication and
              care for over a decade.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our team of experienced pharmacists takes the time to understand
              your unique health needs. We believe in building lasting
              relationships with our customers, ensuring you receive personalized
              attention every time you visit.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="icon-container">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div>
                   
                    <p className="text-sm font-medium text-foreground">{stat.label}</p>

                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-soft-lg">
                <img
                  src={pharmacyAbout}
                  alt="Rite Pharmacy store interior"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/5 rounded-xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
