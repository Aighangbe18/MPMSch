import {
    Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  PhoneCall,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "../components/lib/utils";
import { useToast } from "../components/hooks/use-toast";
import { useState } from "react";
import { motion } from "framer-motion";

// Animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="text-white bg-gray-400">
      {/* Header */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative mt-8 bg-[url('../images/gallery12.jpg')] bg-cover bg-center min-h-[50vh] flex items-center justify-center"
      >
        <div className="absolute inset-0 pt-8 bg-opacity-60 z-0" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="text-base mt-2 text-white/80">
            We'd love to hear from you.
          </p>
        </div>
      </motion.div>

      {/* Contact Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-24 px-4 relative"
      >
        <div className="container mx-auto max-w-5xl text-black">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm">Email</h4>
                    <a
                      href="mailto:masterspiecemusichouse@gmail.com"
                      className="text-xs hover:text-primary transition-colors"
                    >
                     masterspiecemusichouse@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <PhoneCall className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm">Phone</h4>
                    <a
                      href="tel:++2347043011514"
                      className="text-xs hover:text-primary transition-colors"
                    >
                      +2347043011514
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm">Location</h4>
                    <p className="text-xs">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="pt-8">
                <h4 className="font-normal mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/company/masterspiecemusichouse/"
                    target="_blank"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="https://x.com/blesingbillion"
                    target="_blank"
                  >
                    <Twitter size={16} />
                  </a>
                  <a
                    href="https://www.instagram.com/tallest_oba"
                    target="_blank"
                  >
                    <Instagram size={16} />
                  </a>
                  <a href="https://www.facebook.com/share/1Ak7nab7jC/" target="_blank">
                    <Facebook size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-300 text-black p-8 rounded-lg shadow-md">
              <h3 className="text-sm font-semibold mb-4">Send a Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-black text-sm font-medium mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-gray-500 rounded-md border text-xs border-gray-300 focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-black text-sm font-medium mb-1"
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3  bg-gray-500 rounded-md border text-xs border-gray-300 focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-black text-sm font-medium mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    placeholder="Hello, I'd like to talk about..."
                    className="w-full bg-gray-500 px-4 py-3 rounded-md text-xs border border-gray-300 resize-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "cosmic-button w-full text-xs flex items-center justify-center gap-2"
                  )}
                >
                  {isSubmitting ? "Sending..." : "Send Message"} <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
