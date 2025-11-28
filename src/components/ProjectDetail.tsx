import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Figma } from 'lucide-react';
import { projects } from '../data/projects';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="mb-4">Project Not Found</h2>
          <Link to="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const stages = [
    {
      number: '01',
      title: 'Empathize',
      subtitle: project.empathize.title,
      content: project.empathize.content,
      list: project.empathize.insights,
      color: 'from-blue-500/10 to-blue-500/5',
    },
    {
      number: '02',
      title: 'Define',
      subtitle: project.define.title,
      content: project.define.content,
      list: project.define.findings,
      color: 'from-purple-500/10 to-purple-500/5',
    },
    {
      number: '03',
      title: 'Ideate',
      subtitle: project.ideate.title,
      content: project.ideate.content,
      list: project.ideate.concepts,
      color: 'from-pink-500/10 to-pink-500/5',
    },
    {
      number: '04',
      title: 'Prototype',
      subtitle: project.prototype.title,
      content: project.prototype.content,
      list: project.prototype.components,
      color: 'from-orange-500/10 to-orange-500/5',
    },
    {
      number: '05',
      title: 'Test',
      subtitle: project.test.title,
      content: project.test.content,
      list: project.test.improvements,
      color: 'from-green-500/10 to-green-500/5',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 bg-muted rounded-full mb-6">
              <span className="text-muted-foreground">{project.category}</span>
            </div>
            <h1 className="mb-6">{project.title}</h1>
            <p className="text-muted-foreground mb-8">{project.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="max-w-6xl mx-auto">
          <div className="aspect-video rounded-lg overflow-hidden border border-border shadow-xl">
            <ImageWithFallback
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* Project Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="mb-4">Project Brief</h3>
              <p className="text-muted-foreground">{project.brief}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="mb-4">Problem Statement</h3>
              <p className="text-muted-foreground">{project.problem}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="mb-4">Solution</h3>
              <p className="text-muted-foreground">{project.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Thinking Stages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Design Process</h2>
            <p className="text-muted-foreground">
              Following the five stages of design thinking to create user-centered solutions
            </p>
          </motion.div>

          <div className="space-y-12">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative p-8 rounded-lg bg-gradient-to-br ${stage.color} border border-border`}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                      <span>{stage.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2">{stage.title}</h3>
                    <h4 className="mb-4 text-muted-foreground">{stage.subtitle}</h4>
                    <p className="text-muted-foreground mb-6">{stage.content}</p>
                    <ul className="space-y-3">
                      {stage.list.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Screens */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Final Designs</h2>
            <p className="text-muted-foreground">High-fidelity screens and key interfaces</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {project.screens.map((screen, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="aspect-video rounded-lg overflow-hidden border border-border shadow-lg"
              >
                <ImageWithFallback
                  src={screen}
                  alt={`${project.title} screen ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* External Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mb-8">View Project</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {project.figmaLink && (
                <a
                  href={project.figmaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-card border border-border rounded-lg hover:border-primary transition-colors"
                >
                  <Figma className="w-5 h-5" />
                  <span>View in Figma</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                >
                  <span>Visit Live Site</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6">Ready to see more?</h3>
            <Link
              to="/"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              <span>View All Projects</span>
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
