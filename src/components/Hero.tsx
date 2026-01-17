import { motion } from 'framer-motion';
import { Phone, MapPin, Heart, Shield, Truck } from 'lucide-react';
import pharmacyHero from '@/assets/pharmacy-hero.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 hero-bg overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-primary/8 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Your Trusted Community Pharmacy
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
              Your Health,{' '}
              <span className="text-gradient">Our Priority</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Trusted community pharmacy serving Bronx with personalized care,
              prescriptions, and free delivery. Experience healthcare that puts
              you first.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+17183280000"
                className="btn-hero-primary"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="https://maps.google.com/?q=805+Soundview+Ave,+Bronx,+NY+10473"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-secondary"
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="icon-container w-10 h-10">
                  <Truck className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">Free Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="icon-container w-10 h-10">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">Fast Service</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Pharmacy Image */}
          {/* Right Content - Pharmacy Image */}
<motion.div
  initial={{ opacity: 0, x: 30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="relative block"
>
  <div className="relative">
    {/* Main image */}
    <div className="w-full aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-soft-lg">
      <img
        src={pharmacyHero}
        alt="Rite Pharmacy interior"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Floating cards - show only on desktop */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-soft-lg hidden lg:block"
    >
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
          <Truck className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <p className="font-semibold text-foreground">Free Delivery</p>
          <p className="text-sm text-muted-foreground">Same day service</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="absolute -top-4 -right-4 bg-card rounded-2xl p-4 shadow-soft-lg hidden lg:block"
    >
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
          <Shield className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <p className="font-semibold text-foreground">100% Safe</p>
          <p className="text-sm text-muted-foreground">Certified pharmacy</p>
        </div>
      </div>
    </motion.div>
  </div>
</motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
