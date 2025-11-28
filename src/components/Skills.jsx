import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming',
      skills: ['Python', 'C++', 'Ladder Logic', 'Arduino']
    },
    {
      category: 'Technologies',
      skills: ['Machine Learning', 'PLC Automation', 'Embedded Systems', 'IoT']
    },
    {
      category: 'Tools & Libraries',
      skills: ['Streamlit', 'NumPy', 'Pandas', 'Matplotlib']
    },
    {
      category: 'Cloud & DevOps',
      skills: ['AWS Cloud Foundations', 'Circuit Design']
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <motion.span 
                    key={idx} 
                    className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.1, backgroundColor: '#3b82f6', color: '#fff' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
