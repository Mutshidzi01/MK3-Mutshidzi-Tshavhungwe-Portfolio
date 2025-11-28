import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mh.tshavhu@gmail.com',
      link: 'mailto:mh.tshavhu@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/mutshidzi-tshavhungwe',
      link: 'https://linkedin.com/in/mutshidzi-tshavhungwe',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/mutshidzi',
      link: 'https://github.com/mutshidzi',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      value: '@mutshidzi',
      link: 'https://twitter.com/mutshidzi',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="mb-6">Let's Work Together</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Whether you have
              a question or just want to say hi, feel free to reach out!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.link}
                target={method.label !== 'Email' ? '_blank' : undefined}
                rel={method.label !== 'Email' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-4 p-6 bg-card rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-lg group"
              >
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <method.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="mb-1">{method.label}</h4>
                  <p className="text-muted-foreground">{method.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="inline-block p-8 bg-muted/50 rounded-lg border border-border">
              <h3 className="mb-4">Available for Freelance</h3>
              <p className="text-muted-foreground mb-6">
                Currently accepting new projects for Q2 2025
              </p>
              <a
                href="mailto:mh.tshavhu@gmail.com"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}