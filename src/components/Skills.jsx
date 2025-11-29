import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming',
      skills: ['Python', 'C++', 'Ladder Logic', 'Arduino'],
    },
    {
      category: 'Technologies',
      skills: ['Machine Learning', 'PLC Automation', 'Embedded Systems', 'IoT'],
    },
    {
      category: 'Tools & Libraries',
      skills: ['Streamlit', 'NumPy', 'Pandas', 'Matplotlib'],
    },
    {
      category: 'Cloud & Hardware',
      skills: ['AWS Cloud Foundations', 'Circuit Design'],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-offwhite dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-olive-dark dark:text-offwhite-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-offwhite-light dark:bg-gray-900 rounded-lg p-6 shadow-md transition-colors"
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold text-olive-dark dark:text-olive-accent mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    className="px-4 py-2 rounded-full text-sm bg-offwhite-deep text-olive-dark dark:bg-gray-800 dark:text-offwhite-light"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: 'rgb(107,122,47)', // olive
                      color: '#F7F4EB', // offwhite-light
                    }}
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
