import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: 'PLC Programming for Centre Facing Machine',
      mentor: 'Dr. Prachi Rajarapollu',
      teamSize: 4,
      skills: ['Ladder Logic', 'PLC Automation', 'Real-time Simulation'],
      description:
        'Developed PLC-based automation using Ladder Diagrams with timers, actuators, and switch controls for precise machine functionality.',
    },
    {
      title: 'Sonar Rock vs Mine Prediction using ML',
      mentor: 'Prof. Nutan Bansode',
      teamSize: 2,
      skills: ['Python', 'Streamlit', 'Data Preprocessing', 'Logistic Regression'],
      description:
        'Built ML classifier achieving 97% accuracy for underwater object classification using Streamlit deployment.',
    },
    {
      title: 'Mini Piano using Arduino',
      mentor: 'Dr. Vishal Puranik',
      teamSize: 4,
      skills: ['Arduino Programming', 'Circuit Design', 'Hardware Prototyping'],
      description:
        'Designed electronic piano prototype with accurate tone frequency control for clear sound output.',
    },
  ]

  const containerVariants = {
