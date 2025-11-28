import { motion } from 'motion/react';
import { GraduationCap, Award, Briefcase, Star } from 'lucide-react';

export function Certifications() {
  const featured = [
    {
      title: 'CPUX-F — Foundation Level',
      organization: 'UXQB / iSQI',
      year: '2024',
      description:
        'Certified by the International Usability and UX Qualification Board (UXQB). Shows strong competence in usability fundamentals and User-Centered Design principles.',
    },
    {
      title: 'CPUX-M — Management Level',
      organization: 'UXQB / iSQI',
      year: '2024',
      description:
        'Advanced qualification in managing UX processes and design strategy. Demonstrates leadership in Human-Centered Design and structured UX workflows.',
    },
  ];

  const uxqbCerts = [
    {
      title: 'CPUX-F — Foundation Level',
      subtitle: 'Certified Professional for Usability & User Experience',
      organization: 'UXQB / iSQI',
      year: '2024',
      description:
        'Demonstrates solid understanding of usability principles, user-centered design practices, and UX fundamentals.',
    },
    {
      title: 'CPUX-M — Management Level',
      subtitle: 'Essentials in UX & Human-Centered Design Management',
      organization: 'UXQB / iSQI',
      year: '2024',
      description:
        'Advanced capability in managing UX initiatives, leading design teams, and applying structured HCD processes across product lifecycles.',
    },
  ];

  const designCerts = [
    {
      title: 'Adobe Photoshop Certified',
      organization: 'Adobe',
      year: 'Year One',
      description: 'Mastery of image editing, visual design techniques, and compositional tools.',
    },
    {
      title: 'Adobe Illustrator Certified',
      organization: 'Adobe',
      year: 'Year One',
      description: 'Proficiency in vector design, branding, iconography, and digital illustration.',
    },
    {
      title: 'Microsoft PowerPoint Certified',
      organization: 'Microsoft',
      year: 'Year Two',
      description: 'Expert-level visual presentation skills and information design systems.',
    },
    {
      title: 'UI Design Professional Certification',
      organization: 'Professional Certificate',
      year: 'Year One',
      description:
        'Covers UI foundations, layouts, responsiveness, visual systems, and component design.',
    },
  ];

  const professionalDev = [
    {
      title: 'Instructional Design: Blending Understanding & Design',
      year: 'Year Three',
      description:
        'Training in content design, learning theory, and structuring digital learning experiences. Enhances UX storytelling, education design, and clarity.',
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
            <h1 className="mb-6">Certificates & Qualifications</h1>
            <h2 className="mb-6">Professional Certifications Demonstrating Excellence in UX/UI Design</h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              My certifications reflect my commitment to continuous learning, usability excellence,
              and mastery of industry-standard design tools and methodologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Academic Qualification */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h2>Academic Qualification</h2>
            </div>

            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="mb-2">Bachelor of Arts in Business</h3>
              <p className="text-muted-foreground mb-4">Complete University</p>
              <p className="text-muted-foreground leading-relaxed">
                A strong foundation in business principles, strategy, and communication—supporting my
                UX approach with analytical thinking and problem-solving frameworks.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Certifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <Star className="w-6 h-6 text-primary" />
              <h2>Featured Certifications</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {featured.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 border border-primary/20"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="mb-2">{cert.title}</h3>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-muted-foreground">{cert.organization}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{cert.year}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* UXQB / iSQI Certifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <Award className="w-6 h-6 text-primary" />
              <h2>UXQB / iSQI Certifications (2024)</h2>
            </div>

            <div className="space-y-6">
              {uxqbCerts.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card rounded-xl p-8 border border-border"
                >
                  <h3 className="mb-2">{cert.title}</h3>
                  <h4 className="text-muted-foreground mb-3">{cert.subtitle}</h4>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-muted-foreground">{cert.organization}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{cert.year}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Design & Software Certifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <Briefcase className="w-6 h-6 text-primary" />
              <h2>Design & Software Certifications</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {designCerts.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 border border-border"
                >
                  <h3 className="mb-2">{cert.title}</h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-muted-foreground">{cert.organization}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{cert.year}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Development */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h2>Professional Development</h2>
            </div>

            {professionalDev.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-xl p-8 border border-border"
              >
                <h3 className="mb-2">{course.title}</h3>
                <p className="text-muted-foreground mb-4">{course.year}</p>
                <p className="text-muted-foreground leading-relaxed">{course.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Summary Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-card rounded-xl p-12 border border-border"
          >
            <h2 className="mb-4">Commitment to Excellence</h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              With 8+ professional certifications spanning UX methodology, design tools, and
              instructional design, I bring a comprehensive skill set backed by industry-recognized
              credentials.
            </p>
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="mb-2">8+</div>
                <p className="text-muted-foreground">Certifications</p>
              </div>
              <div className="text-center">
                <div className="mb-2">2</div>
                <p className="text-muted-foreground">UXQB Credentials</p>
              </div>
              <div className="text-center">
                <div className="mb-2">3+</div>
                <p className="text-muted-foreground">Years Learning</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
