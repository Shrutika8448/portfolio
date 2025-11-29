import { motion } from 'framer-motion'

const Certifications = () => {
  const certs = [
    {
      title: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
      description:
        'Covered compute, storage, networking, security, architecture, and pricing models on AWS.',
    },
    {
      title: 'PCAP - Programming Essentials in Python',
      description:
        'Learned core Python concepts including control structures, functions, modules, and OOP basics.',
    },
  ]

  return (
    <section id="certifications" className="py-20 bg-offwhite-light dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-olive-dark dark:text-offwhite-light"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certifications
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-offwhite dark:bg-gray-800 rounded-lg p-6 shadow-md transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold text-olive-dark dark:text-olive-accent mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-olive-dark/80 dark:text-offwhite-light/80">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
