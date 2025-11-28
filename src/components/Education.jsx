import { motion } from 'framer-motion'

const Education = () => {
  const education = [
    {
      year: '2023 - 2027',
      institution: 'MIT Academy of Engineering, Pune',
      degree: 'B.Tech. - Electronics and Telecommunication Engineering',
      grade: 'CGPA: 7.79 / 10'
    },
    {
      year: '2023',
      institution: 'Kendriya Vidyalaya No.2 AFS Pune 32, Pune',
      degree: '12th | CBSE',
      grade: 'Percentage: 70 / 100'
    },
    {
      year: '2021',
      institution: 'Kendriya Vidyalaya No.2 AFS Pune 32, Pune',
      degree: '10th | CBSE',
      grade: 'Percentage: 85.80 / 100'
    }
  ]

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors hover:shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 10 }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div className="flex-1">
                  <motion.h3 
                    className="text-xl font-semibold text-blue-600 dark:text-blue-400"
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    {edu.institution}
                  </motion.h3>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">{edu.degree}</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">{edu.grade}</p>
                </div>
                <motion.span 
                  className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0 font-semibold"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {edu.year}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
