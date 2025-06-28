import { Instagram, Linkedin, Mail, MapPin, PhoneCall, Send, SendIcon, Twitch, Twitter } from "lucide-react";
import { cn } from "../components/lib/utils";
import { useToast } from "../components/hooks/use-toast";
import { useState } from "react";


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
    return <section id="contact" className="py-24 px-4 relative bg-gray-600">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-2xl font-bold mb-4 text-center">
                Get In <span className="text-primary"> Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate ? Feel free to reach out.
                I'm always open to discussing new opportunities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-xl font-semibold mb-6">
                        {" "}
                        Contact Information
                        </h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-3 w-3 text-primary" /> {" "}
                                </div>
                                <div>
                                    <h4 className="text-sm"> Email</h4>
                                    <a href="mailto:baighangbe@gmail.com"
                                    className="text-xs hover:text-primary transition-colors">
                                        baighangbe@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <PhoneCall className="h-3 w-3 text-primary" /> {" "}
                                </div>
                                <div>
                                    <h4 className="text-sm"> Phone</h4>
                                    <a href="tel:+2349030669440"
                                    className="text-muted-foreground hover:text-primary transition-colors">
                                        +234903066940 
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-3 w-3 text-primary" /> {" "}
                                </div>
                                <div>
                                    <h4 className="text-sm"> Location</h4>
                                    <a
                                    className="text-muted-foreground hover:text-primary transition-colors">
                                        Ogudu, Lagos, Nigeria. 
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-normal mb-4"> Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/blessing-aighangbe-83135b24b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                                    <Linkedin size={16}/>
                                </a>
                                <a href="https://x.com/blesingbillion?t=jahhXPZ0rBsFtKIJkGhLFA&s=09" target="_blank">
                                    <Twitter size={16}/>
                                </a>
                                <a href="https://www.instagram.com/tallest_oba?utm_source=qr&igsh=MTBmbjkyNG51NTlicA==" target="_blank">
                                    <Instagram size={16}/>
                                </a>
                                <a href="" target="_blank">
                                    <Twitch size={16}/>
                                </a>
                            </div>
                        </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-sm font-semibold mb-2.5"> Send a Message</h3>

                    <form action="" className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-normal mb-2"> Your Name</label>
                            <input type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 rounded-md text-xs 
                            border border-input bg-background focus-outline-hidden focus:ring-2 focus:ring-primary" 
                            placeholder="John Doe..."/>
                        </div>

                        <div>
                            <label htmlFor="name" className="block text-sm font-normal mb-2"> Your Email</label>
                            <input type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 rounded-md text-xs 
                            border border-input bg-background focus-outline-hidden focus:ring-2 focus:ring-primary" 
                            placeholder="John@gmail.com..."/>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-normal mb-2">
                                {" "}
                                 Your Message</label>
                            <textarea type="text"
                            id="message"
                            name="message"
                            required
                            className="w-full px-4 py-3 rounded-md text-xs resize-none 
                            border border-input bg-background focus-outline-hidden focus:ring-2 focus:ring-primary" 
                            placeholder="Hello, I'd like to talk about..."/>
                        </div>

                         <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full text-xs flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
};
export default Contact;