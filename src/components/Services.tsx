import { motion } from 'motion/react';
import { Search, Palette, CheckCircle } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Search,
      title: 'UX Research & User Testing',
      subtitle: 'Understand your users. Improve your product. Make confident design decisions.',
      description:
        'I conduct comprehensive UX research to uncover user needs, motivations, and pain points. Using usability testing and data-driven insights, I help validate design decisions and optimize the user experience.',
      includes: [
        'User Interviews',
        'Surveys & Data Collection',
        'Usability Testing',
        'User Journey Mapping',
        'Heuristic Evaluation',
        'UX Documentation & Insights',
      ],
      outcome:
        'Clear, actionable findings that guide design improvements and support strategic product decisions.',
    },
    {
      icon: Palette,
      title: 'UI Design & Prototyping',
      subtitle: 'Beautiful, functional, high-impact digital interfaces.',
      description:
        'I design visually appealing and intuitive interfaces aligned with brand identity and modern design systems. Prototypes bring concepts to life, allowing clients to interact with the experience before development begins.',
      includes: [
        'High-fidelity UI Design',
        'Responsive Web & Mobile Interfaces',
        'Design Systems & Components',
        'Wireframing (Low → Mid → High fidelity)',
        'Clickable Prototypes',
        'Interaction Design',
      ],
      outcome:
        'Developer-ready designs that elevate the product experience and maintain consistency across platforms.',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6">Services</h1>
            <h2 className="mb-6">Delivering User-First Digital Design Solutions</h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              I provide end-to-end UX/UI services built around clarity, functionality, and real user
              needs. Every project is approached through human-centered design principles to ensure
              the final product is not only visually appealing but also purposeful, intuitive, and
              effective.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-card rounded-2xl p-8 lg:p-12 border border-border"
              >
                <div className="grid lg:grid-cols-[auto,1fr] gap-8 lg:gap-12">
                  {/* Icon */}
                  <div className="flex justify-center lg:justify-start">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <h2 className="mb-3">{service.title}</h2>
                      <p className="text-muted-foreground">{service.subtitle}</p>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                    {/* Includes */}
                    <div>
                      <h4 className="mb-4">Includes:</h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {service.includes.map((item) => (
                          <div key={item} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Outcome */}
                    <div className="pt-4 border-t border-border">
                      <h4 className="mb-2">Outcome:</h4>
                      <p className="text-muted-foreground leading-relaxed">{service.outcome}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Let's work together to create meaningful digital experiences that your users will love.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              <span>Get in Touch</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
