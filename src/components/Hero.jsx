import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-olive text-offwhite-light dark:bg-gray-900 transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Name</h1>
            <p className="text-xl md:text-2xl mb-3">
              B.Tech - Electronics &amp; Telecommunication Engineering
            </p>
            <p className="text-lg mb-8 opacity-90">
              MIT Academy of Engineering, Pune
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <motion.a
                href="#contact"
                className="bg-offwhite-light text-olive-dark px-6 py-3 rounded-lg font-semibold hover:bg-offwhite-deep transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                className="border-2 border-offwhite-light text-offwhite-light px-6 py-3 rounded-lg font-semibold hover:bg-offwhite-light hover:text-olive-dark transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                View Projects
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-offwhite-light dark:border-offwhite-deep shadow-2xl bg-offwhite-light"
                whileHover={{ scale: 1.05, rotate: 3 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/Profile.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4 w-28 h-28 bg-olive-accent rounded-full opacity-30"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero
