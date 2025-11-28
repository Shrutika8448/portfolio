const Certifications = () => {
  const certs = [
    {
      title: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
      description: 'Covered compute, storage, networking, security, architecture, and pricing models.'
    },
    {
      title: 'PCAP - Programming Essentials in Python',
      description: 'Python fundamentals covering data types, control structures, functions, modules, and OOP principles.'
    }
  ]

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Certifications</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {certs.map((cert, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md transition-colors">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">{cert.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
