import { motion, useInView } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useRef } from 'react';

export default function DataCenterWebsiteRevamp() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation navigate={navigate} />

      {/* Hero Section */}
      <HeroSection />

      {/* Footer */}
      <Footer navigate={navigate} />
    </div>
  );
}

/* ==================== NAVIGATION ==================== */
function Navigation({ navigate }: { navigate: any }) {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-6">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 sm:gap-3 text-foreground/70 hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm sm:text-base" style={{ fontWeight: 600 }}>
            Back to Portfolio
          </span>
        </button>
      </div>
    </motion.nav>
  );
}

/* ==================== HERO SECTION ==================== */
function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 text-sm sm:text-base mb-6 sm:mb-8" style={{ fontWeight: 600 }}>
            SaaS Application
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl mb-6 sm:mb-8" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            Data Center Website Revamp
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground/70 max-w-3xl mx-auto mb-12" style={{ lineHeight: 1.6 }}>
            Awaiting case study details...
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm sm:text-base text-foreground/60">
            <div className="flex items-center gap-2">
              <span style={{ fontWeight: 600 }}>Role:</span>
              <span>TBD</span>
            </div>
            <div className="flex items-center gap-2">
              <span style={{ fontWeight: 600 }}>Timeline:</span>
              <span>TBD</span>
            </div>
            <div className="flex items-center gap-2">
              <span style={{ fontWeight: 600 }}>Platform:</span>
              <span>Web / SaaS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== FOOTER ==================== */
function Footer({ navigate }: { navigate: any }) {
  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl mb-2" style={{ fontWeight: 700 }}>Data Center Website Revamp</h3>
            <p className="text-sm sm:text-base text-foreground/60">SaaS Application Case Study</p>
          </div>
          <button
            onClick={() => navigate('/')}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-foreground text-background rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2"
            style={{ fontWeight: 600 }}
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            Back to Portfolio
          </button>
        </div>
      </div>
    </footer>
  );
}
