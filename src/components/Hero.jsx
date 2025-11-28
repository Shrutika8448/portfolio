import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-gray-900 text-white transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Animated Text Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Shrutika Newaskar
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              B.Tech - Electronics & Telecommunication Engineering
            </motion.p>
            <motion.p 
              className="text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              MIT Academy of Engineering, Pune
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.a 
                href="#contact" 
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-200 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              <motion.a 
                href="#projects" 
                className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Animated Profile Image */}
          <motion.div 
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div 
                className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white dark:border-gray-700 shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/Profile.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div 
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-400 dark:bg-yellow-600 rounded-full opacity-20"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero
