import { motion } from 'framer-motion'

const Education = () => {
  const education = [
    {
      year: '2023 - 2027',
      institution: 'MIT Academy of Engineering, Pune',
      degree: 'B.Tech. - Electronics and Telecommunication Engineering',
      grade: 'CGPA: 7.79 / 10',
    },
    {
      year: '2023',
      institution: 'Kendriya Vidyalaya No.2 AFS Pune 32, Pune',
      degree: '12th | CBSE',
      grade: 'Percentage: 70 / 100',
    },
    {
      year: '2021',
      institution: 'Kendriya Vidyalaya No.2 AFS Pune 32, Pune',
      degree: '10th | CBSE',
      grade: 'Percentage: 85.80 / 100',
    },
  ]

  return (
    <section id="education" className="py-20 bg-offwhite-light dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-olive-dark dark:text-offwhite-light">
          Education
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-offwhite DEFAULT dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-olive-dark dark:text-olive-accent">
                    {edu.institution}
                  </h3>
                  <p className="text-olive-dark/80 dark:text-offwhite-light mt-2">
                    {edu.degree}
                  </p>
                  <p className="text-olive-dark/70 dark:text-offwhite-light/80 mt-1">
                    {edu.grade}
                  </p>
                </div>
                <span className="text-olive-soft dark:text-offwhite-light mt-2 md:mt-0 font-semibold">
                  {edu.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
