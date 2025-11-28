import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: 'PLC Programming for Centre Facing Machine',
      mentor: 'Dr. Prachi Rajarapollu',
      teamSize: 4,
      skills: ['Ladder Logic', 'PLC Automation', 'Real-time Simulation'],
      description: 'Developed PLC-based automation using Ladder Diagrams with timers, actuators, and switch controls for precise machine functionality.'
    },
    {
      title: 'Sonar Rock vs Mine Prediction using ML',
      mentor: 'Prof. Nutan Bansode',
      teamSize: 2,
      skills: ['Python', 'Streamlit', 'Data Preprocessing', 'Logistic Regression'],
      description: 'Built ML classifier achieving 97% accuracy for underwater object classification using Streamlit deployment.'
    },
    {
      title: 'Mini Piano using Arduino',
      mentor: 'Dr. Vishal Puranik',
      teamSize: 4,
      skills: ['Arduino Programming', 'Circuit Design', 'Hardware Prototyping'],
      description: 'Designed electronic piano prototype with accurate tone frequency control for clear sound output.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
              className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow cursor-pointer"
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Mentor: {project.mentor} | Team: {project.teamSize}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, idx) => (
                  <motion.span 
                    key={idx} 
                    className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                    whileHover={{ scale: 1.1 }}
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
