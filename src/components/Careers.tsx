import { motion } from 'framer-motion';
import { Briefcase, Mail, ArrowRight } from 'lucide-react';

const Careers = () => {
  return (
    <section id="careers" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent mb-6">
            <Briefcase className="w-8 h-8 text-primary" />
          </div>

          <span className="section-label block mb-3">Careers</span>
          <h2 className="section-title">
            Join Our{' '}
            <span className="text-gradient">Growing Team</span>
          </h2>

          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            We're always looking for talented, compassionate individuals who share
            our commitment to providing excellent patient care. If you're
            passionate about healthcare and want to make a difference in your
            community, we'd love to hear from you.
          </p>

          <motion.a
            href="mailto:ritecarepharmacy@yahoo.com?subject=Career%20Application%20-%20Rite%20Pharmacy"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-soft-lg hover:scale-105 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            Email Resume
            <ArrowRight className="w-5 h-5" />
          </motion.a>

          <p className="mt-4 text-sm text-muted-foreground">
            Send your resume to{' '}
            <a
              href="mailto:ritecarepharmacy@yahoo.com"
              className="text-primary hover:underline"
            >
              ritecarepharmacy@yahoo.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;
