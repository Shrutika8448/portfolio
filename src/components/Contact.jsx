const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Get In Touch</h2>
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md transition-colors">
          <div className="text-center space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              <strong className="text-gray-900 dark:text-white">Email:</strong> your.email@example.com
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong className="text-gray-900 dark:text-white">LinkedIn:</strong> linkedin.com/in/yourprofile
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong className="text-gray-900 dark:text-white">GitHub:</strong> github.com/yourusername
            </p>
            <div className="flex justify-center gap-6 mt-6">
              <a href="mailto:your.email@example.com" className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition">
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
