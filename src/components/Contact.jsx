import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend, FiMapPin, FiCheck, FiCopy, FiMessageSquare } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const emailAddress = 'chanukalakshan.sl@gmail.com';
  const phoneNumber = '+94 77 123 4567';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 1200);
  };

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-premium-red/10 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-premium-red uppercase tracking-wider mb-3">
            <FiMessageSquare className="text-sm" /> Connect &amp; Collaborate
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Ready to explore an engineering internship, FinTech collaboration, or software development opportunity? Let's connect.
          </p>
          <div className="w-16 h-1 bg-premium-red mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Social Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Let's create high-impact solutions together.
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-8">
                Whether you need a dedicated software developer, an AI solutions builder, or a financial technology specialist, I am always open to new challenges.
              </p>
            </div>

            {/* Email Card with Click-to-Copy */}
            <div className="glass-card p-5 rounded-2xl border border-white/10 flex items-center justify-between group hover:border-premium-red/40 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-premium-red/10 border border-premium-red/20 flex items-center justify-center text-premium-red text-xl">
                  <FiMail />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 block font-bold">
                    Official Email
                  </span>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-sm font-semibold text-white hover:text-premium-red transition-colors"
                  >
                    {emailAddress}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(emailAddress, 'email')}
                className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-premium-red/20 text-gray-300 hover:text-white text-xs font-mono transition-all flex items-center gap-1.5"
                title="Copy email address"
              >
                {copiedField === 'email' ? (
                  <>
                    <FiCheck className="text-emerald-400" /> <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <FiCopy /> <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Phone / WhatsApp Card */}
            <div className="glass-card p-5 rounded-2xl border border-white/10 flex items-center justify-between group hover:border-premium-red/40 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-premium-red/10 border border-premium-red/20 flex items-center justify-center text-premium-red text-xl">
                  <FiPhone />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 block font-bold">
                    Phone &amp; WhatsApp
                  </span>
                  <span className="text-sm font-semibold text-white font-mono">
                    {phoneNumber}
                  </span>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(phoneNumber, 'phone')}
                className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-premium-red/20 text-gray-300 hover:text-white text-xs font-mono transition-all flex items-center gap-1.5"
                title="Copy phone number"
              >
                {copiedField === 'phone' ? (
                  <>
                    <FiCheck className="text-emerald-400" /> <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <FiCopy /> <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-card p-5 rounded-2xl border border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-300 text-xl">
                <FiMapPin />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 block font-bold">
                  Location &amp; Timezone
                </span>
                <span className="text-sm font-semibold text-white">
                  Sri Lanka (GMT +5:30)
                </span>
              </div>
            </div>

            {/* Socials Connection */}
            <div className="pt-4">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block mb-3 font-bold">
                Professional Profiles:
              </span>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/chanuka-lakshan-153361271/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl glass hover:border-premium-red/40 hover:bg-premium-red/20 text-gray-300 hover:text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all"
                >
                  <FiLinkedin className="text-base text-premium-red" /> LinkedIn
                </a>
                <a
                  href="https://github.com/ChanukaLakshan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl glass hover:border-premium-red/40 hover:bg-premium-red/20 text-gray-300 hover:text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all"
                >
                  <FiGithub className="text-base text-premium-red" /> GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 relative shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6">Send Me a Direct Message</h3>

              <AnimatePresence>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 text-2xl flex items-center justify-center mx-auto">
                      <FiCheck />
                    </div>
                    <h4 className="text-lg font-bold text-white">Message Transmitted!</h4>
                    <p className="text-xs text-gray-300 max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out, Chanuka Lakshan will review your message and reply promptly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold block">
                          Your Name <span className="text-premium-red">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Alex Silva"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-premium-red transition-colors placeholder:text-gray-600"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold block">
                          Your Email <span className="text-premium-red">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="e.g. alex@example.com"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-premium-red transition-colors placeholder:text-gray-600"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold block">
                        Subject / Topic
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="e.g. Software Internship / AI Project Inquiry"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-premium-red transition-colors placeholder:text-gray-600"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold block">
                        Message Content <span className="text-premium-red">*</span>
                      </label>
                      <textarea
                        rows="5"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project, role, or proposal..."
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-premium-red transition-colors resize-none placeholder:text-gray-600"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-premium-red hover:bg-red-600 text-white font-bold text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,0,0,0.35)] hover:shadow-[0_0_30px_rgba(255,0,0,0.6)] transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                          />
                          <span>Transmitting Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Transmit Message</span> <FiSend className="text-sm" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
