import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-offwhite dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-olive-dark dark:text-offwhite-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <motion.div
          className="max-w-2xl mx-auto bg-offwhite-light dark:bg-gray-900 rounded-lg p-8 shadow-md transition-colors"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-4 text-center">
            <p className="text-olive-dark dark:text-offwhite-light">
              <span className="font-semibold text-olive-dark dark:text-olive-accent">Email:</span>{' '}
              your.email@example.com
            </p>
            <p className="text-olive-dark dark:text-offwhite-light">
              <span className="font-semibold text-olive-dark dark:text-olive-accent">LinkedIn:</span>{' '}
              linkedin.com/in/yourprofile
            </p>
            <p className="text-olive-dark dark:text-offwhite-light">
              <span className="font-semibold text-olive-dark dark:text-olive-accent">GitHub:</span>{' '}
              github.com/yourusername
            </p>

            <motion.div
              className="flex justify-center mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.a
                href="mailto:your.email@example.com"
                className="bg-olive text-offwhite-light px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-olive-soft transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                Send Email
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
