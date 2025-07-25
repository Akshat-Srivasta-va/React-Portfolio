import { Facebook, Instagram, Linkedin, Mail, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const ContactSection = () => {
  const accessKey = import.meta.env.VITE_PORTFOLIO_ACCESS_KEY; // if using vite .env will be accesses like this if react app using then
  // like const accessKey = process.env.REACT_APP_PORTFOLIO_ACCESS_KEY;

  return (
    <section id="contact">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Contact <span className="text-primary">Me</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Need to get in touch? Whether you have a question, a project in mind,
          or just want to say hello, I'd love to hear from you. Feel free to
          reach out through the options below!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+917607260350"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 7607260350
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:srivastavaakshat52@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    srivastavaakshat52@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/akshat-srivastava-667772257/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a href="https://www.instagram.com/me_akshat_s/" target="_blank">
                  <Instagram />
                </a>
                <a href="https://www.facebook.com/akshat.srivastava.948494" target="_blank">
                  <Facebook />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form
              action="https://api.web3forms.com/submit"
              method="post"
              className="space-y-6"
            >
              {/* using access key */}
              <input type="hidden" name="access_key" value={accessKey} />
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name{" "}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Enter Your Name"
                ></input>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email{" "}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Enter Your Email"
                ></input>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message{" "}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Type you message here"
                ></textarea>
              </div>
              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
