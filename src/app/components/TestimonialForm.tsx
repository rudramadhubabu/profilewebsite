import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Star, Send, CheckCircle } from 'lucide-react';

interface TestimonialFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TestimonialForm({ isOpen, onClose }: TestimonialFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    testimonial: '',
    rating: 5,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Web3Forms endpoint - Replace 'YOUR_ACCESS_KEY_HERE' with actual key from https://web3forms.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY_HERE', // Get free key from web3forms.com
          subject: 'New Testimonial Submission',
          from_name: formData.name,
          name: formData.name,
          role: formData.role,
          company: formData.company,
          rating: formData.rating,
          message: formData.testimonial,
          testimonial: formData.testimonial,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        setFormData({
          name: '',
          role: '',
          company: '',
          testimonial: '',
          rating: 5,
        });
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 3000);
      } else {
        setError('Failed to submit testimonial. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="w-full max-w-2xl bg-background rounded-3xl shadow-2xl pointer-events-auto overflow-hidden">
              {/* Header */}
              <div className="relative bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 p-6 sm:p-8 border-b border-white/10">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full bg-surface hover:bg-accent transition-all duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
                <h2 className="text-2xl sm:text-3xl" style={{ fontWeight: 700 }}>
                  Submit a Testimonial
                </h2>
                <p className="mt-2 text-foreground/70">
                  Share your experience working with me
                </p>
              </div>

              {/* Form */}
              <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring' }}
                    >
                      <CheckCircle className="w-16 h-16 mx-auto text-green-500 mb-4" />
                    </motion.div>
                    <h3 className="text-2xl mb-2" style={{ fontWeight: 600 }}>
                      Thank You!
                    </h3>
                    <p className="text-foreground/70">
                      Your testimonial has been submitted and will be reviewed shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm mb-2" style={{ fontWeight: 500 }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-surface rounded-xl border border-white/10 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Role */}
                    <div>
                      <label htmlFor="role" className="block text-sm mb-2" style={{ fontWeight: 500 }}>
                        Your Role *
                      </label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-surface rounded-xl border border-white/10 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                        placeholder="CEO, Product Manager, etc."
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-sm mb-2" style={{ fontWeight: 500 }}>
                        Company *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-surface rounded-xl border border-white/10 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                        placeholder="Your Company Name"
                      />
                    </div>

                    {/* Rating */}
                    <div>
                      <label className="block text-sm mb-3" style={{ fontWeight: 500 }}>
                        Rating *
                      </label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <button
                            key={rating}
                            type="button"
                            onClick={() => setFormData({ ...formData, rating })}
                            className="transition-transform hover:scale-110"
                          >
                            <Star
                              className={`w-8 h-8 ${
                                rating <= formData.rating
                                  ? 'fill-yellow-500 text-yellow-500'
                                  : 'text-foreground/20'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div>
                      <label htmlFor="testimonial" className="block text-sm mb-2" style={{ fontWeight: 500 }}>
                        Your Testimonial *
                      </label>
                      <textarea
                        id="testimonial"
                        name="testimonial"
                        value={formData.testimonial}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-surface rounded-xl border border-white/10 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                        placeholder="Share your experience working with me..."
                      />
                    </div>

                    {error && (
                      <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm">
                        {error}
                      </div>
                    )}

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                      style={{ fontWeight: 600 }}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Testimonial
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>

                    <p className="text-xs text-foreground/50 text-center">
                      Your testimonial will be reviewed before being published on the site.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
