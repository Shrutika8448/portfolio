import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: 'PLC Programming for Centre Facing Machine',
      mentor: 'Dr. Prachi Rajarapollu',
      teamSize: 4,
      skills: ['Ladder Logic', 'PLC Automation', 'Real-time Simulation'],
      description:
        'Developed PLC-based automation using Ladder Diagrams with timers, actuators, and switch controls for precise machine functionality.',
    },
    {
      title: 'Sonar Rock vs Mine Prediction using ML',
      mentor: 'Prof. Nutan Bansode',
      teamSize: 2,
      skills: ['Python', 'Streamlit', 'Data Preprocessing', 'Logistic Regression'],
      description:
        'Built ML classifier achieving 97% accuracy for underwater object classification using Streamlit deployment.',
    },
    {
      title: 'Mini Piano using Arduino',
      mentor: 'Dr. Vishal Puranik',
      teamSize: 4,
      skills: ['Arduino Programming', 'Circuit Design', 'Hardware Prototyping'],
      description:
        'Designed electronic piano prototype with accurate tone frequency control for clear sound output.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-20 bg-offwhite-light dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-olive-dark dark:text-offwhite-light"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-offwhite dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl cursor-pointer transition-colors"
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-xl font-semibold text-olive-dark dark:text-olive-accent mb-2">
                {project.title}
              </h3>
              <p className="text-xs font-medium text-olive-soft dark:text-offwhite-light/70 mb-2">
                Mentor: {project.mentor} • Team: {project.teamSize}
              </p>
              <p className="text-olive-dark/80 dark:text-offwhite-light/80 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full bg-olive-soft/10 text-olive-dark dark:bg-olive-soft/20 dark:text-offwhite-light"
                    whileHover={{ scale: 1.08 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
