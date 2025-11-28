import { motion } from 'motion/react';
import { Briefcase, Award, GraduationCap, Mail, Phone, User } from 'lucide-react';

export function About() {
  const certifications = [
    'CPUX-F – Foundation Level Certification',
    'CPUX-M – UX & HCD Management Essentials',
    'UI Design Certification',
    'Adobe Illustrator Certified',
    'Adobe Photoshop Certified',
    'Instructional Design Certification',
    'Microsoft PowerPoint Certified',
    'Additional UX/UI Professional Training',
  ];

  const skillCategories = [
    {
      title: 'UX Skills',
      skills: [
        'User Experience Design',
        'User Research',
        'Usability Testing',
        'Human-Centered Design',
        'Information Architecture',
        'Journey Mapping',
      ],
    },
    {
      title: 'UI Skills',
      skills: [
        'Visual Design',
        'User Interface Design',
        'Layout & Composition',
        'Typography',
        'Responsive Design',
        'Design Systems',
      ],
    },
    {
      title: 'UX/UI Process Skills',
      skills: [
        'Wireframing',
        'Prototyping',
        'Interaction Design',
        'User Flow Design',
        'Rapid Iteration',
      ],
    },
    {
      title: 'Tools',
      skills: [
        'Figma',
        'Adobe Illustrator',
        'Adobe Photoshop',
        'Microsoft PowerPoint',
        'UX Documentation Tools',
      ],
    },
  ];

  const learningJourney = [
    {
      year: 'Year 3',
      achievements: [
        'CPUX-M: Human-Centered Design Management',
        'Instructional Design: Blending Understanding & Design',
      ],
    },
    {
      year: 'Year 2',
      achievements: [
        'GreenHub App — Capstone Project',
        'CPUX-F: Foundation Level UX Certification',
        'Microsoft PowerPoint Certification',
      ],
    },
    {
      year: 'Year 1',
      achievements: [
        'Adobe Photoshop Certification',
        'Adobe Illustrator Certification',
        'UI Design Certification',
      ],
    },
  ];

  const stats = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Completed Projects', value: '4+' },
    { label: 'Certifications', value: '8+' },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="mb-6">About Me</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-muted-foreground leading-relaxed mb-12"
          >
            <p>
              I'm a UI/UX Designer who blends creativity with technology to create meaningful digital
              experiences. One day I'm sketching ideas, the next I'm turning them into fully
              functional designs. My work sits at the intersection of visual design, problem-solving,
              and human-centered thinking.
            </p>
            <p>
              With strong foundations in design, user research, and usability, I create intuitive,
              user-focused solutions that look beautiful and solve real problems. My approach is
              data-informed, structured, and grounded in modern UX practices.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-3 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-muted/50 rounded-lg border border-border">
                <div className="mb-2">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Briefcase className="w-6 h-6 text-primary" />
              <h2>Professional Summary</h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 text-muted-foreground leading-relaxed"
          >
            <p>
              I am a multi-disciplinary UI/UX Designer with <strong>3+ years of experience</strong> creating
              digital products, interfaces, and user-centered solutions. I specialize in transforming
              complex problems into clean, simple, and functional user experiences.
            </p>
            <p>
              I hold <strong>8+ professional certifications</strong>, including CPUX-F and CPUX-M from UXQB,
              which highlight my dedication to usability, human-centered design, and industry-standard
              UX methodologies.
            </p>
            <p>
              My expertise includes end-to-end design workflows—from user research and wireframing to
              prototyping, testing, and high-fidelity UI design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Award className="w-6 h-6 text-primary" />
              <h2>Skills & Expertise</h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-lg p-6 border border-border"
              >
                <h3 className="mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-muted rounded-full border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h2>Certifications</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start space-x-3 p-4 bg-card rounded-lg border border-border"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learning Journey */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="mb-6">Learning Journey</h2>
            <p className="text-muted-foreground">
              My continuous growth as a designer through professional development and hands-on projects
            </p>
          </motion.div>

          <div className="space-y-8">
            {learningJourney.map((period, index) => (
              <motion.div
                key={period.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-l-2 border-primary pl-6 pb-8 last:pb-0"
              >
                <div className="relative">
                  <div className="absolute -left-[29px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <h3 className="mb-4">{period.year}</h3>
                  <ul className="space-y-2">
                    {period.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8 text-center">Get In Touch</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border border-border">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                  <User className="w-6 h-6" />
                </div>
                <h4 className="mb-2">Name</h4>
                <p className="text-muted-foreground">Mutshidzi Hellman Tshavhungwe</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border border-border">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h4 className="mb-2">Email</h4>
                <a
                  href="mailto:mh.tshavhu@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  mh.tshavhu@gmail.com
                </a>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border border-border">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h4 className="mb-2">Phone</h4>
                <a
                  href="tel:0818018780"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  081 801 8780
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
