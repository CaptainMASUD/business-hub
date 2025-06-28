"use client"

import { motion } from "framer-motion"
import { Users, Target, Award, Globe, Calculator, TrendingUp, Shield, Clock, CheckCircle, Star, Building2, Heart } from 'lucide-react'

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  const stats = [
    { number: "500+", label: "Happy Clients", icon: Users },
    { number: "20+", label: "Years Experience", icon: Clock },
    { number: "1000+", label: "Projects Completed", icon: CheckCircle },
    { number: "24/7", label: "Support Available", icon: Shield },
  ]

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower businesses across Bangladesh with cutting-edge QuickBooks and ERP solutions that drive growth and efficiency.",
      color: "blue",
    },
    {
      icon: Heart,
      title: "Our Vision",
      description: "To be the leading provider of business management solutions in South Asia, transforming how companies operate.",
      color: "red",
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Excellence, integrity, innovation, and customer-centricity guide everything we do in serving our clients.",
      color: "green",
    },
  ]

  const team = [
    {
      name: "Ahmed Rahman",
      position: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "20+ years in business management and QuickBooks implementation",
    },
    {
      name: "Fatima Khan",
      position: "CTO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      description: "Expert in ERP systems and software development",
    },
    {
      name: "Mohammad Ali",
      position: "Lead Consultant",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "Specialized in financial reporting and business analysis",
    },
    {
      name: "Rashida Begum",
      position: "Training Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      description: "Certified QuickBooks trainer with 15+ years experience",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16">
      {/* Hero Section */}
      <motion.div
        className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white py-20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Business Hub</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Transforming businesses across Bangladesh with innovative QuickBooks and ERP solutions since 2003
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        className="py-16 bg-white dark:bg-gray-800"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 hover:shadow-lg transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</h3>
                <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Company Story */}
      <motion.div className="py-20" variants={containerVariants} initial="hidden" animate="visible">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Founded in 2003 by visionary entrepreneurs Scott Cook and Tom Proulx in Mountain View, California, Intuit has been
                  revolutionizing business management software for over two decades. In Bangladesh, Business Hub has been the trusted
                  partner bringing these world-class solutions to local businesses.
                </p>
                <p>
                  Our journey began with a simple mission: to make complex business processes simple and accessible for everyone. From
                  small startups to large enterprises, we've helped thousands of businesses streamline their operations with QuickBooks
                  and comprehensive ERP solutions.
                </p>
                <p>
                  Today, we stand as Bangladesh's leading provider of business management software, with a team of certified experts
                  dedicated to your success. Our commitment to excellence and innovation continues to drive us forward.
                </p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                  alt="Business Team"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Globe className="w-8 h-8 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Global Reach</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Serving clients worldwide</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Values Section */}
      <motion.div
        className="py-20 bg-white dark:bg-gray-800"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to excellence
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div
                  className={`bg-${value.color}-100 dark:bg-${value.color}-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  <value.icon className={`w-10 h-10 text-${value.color}-600 dark:text-${value.color}-400`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div className="py-20" variants={containerVariants} initial="hidden" animate="visible">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Dedicated professionals with decades of combined experience in business management solutions
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="relative mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-100 dark:border-blue-900"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">{member.position}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Certifications & Awards */}
      <motion.div
        className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-6">Certifications & Recognition</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our commitment to excellence is recognized by industry leaders and certification bodies
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "QuickBooks ProAdvisor",
                description: "Certified QuickBooks implementation and support specialists",
                icon: Calculator,
              },
              {
                title: "Intuit Partner",
                description: "Official partner with access to latest tools and training",
                icon: Award,
              },
              {
                title: "ISO 9001:2015",
                description: "Quality management system certification for service excellence",
                icon: Shield,
              },
            ].map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <cert.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{cert.title}</h3>
                <p className="text-blue-100">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div className="py-20 bg-white dark:bg-gray-800" variants={containerVariants} initial="hidden" animate="visible">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join hundreds of satisfied clients who have revolutionized their business operations with our solutions.
            </p>
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center mx-auto space-x-2 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Building2 className="w-5 h-5" />
              <span>Start Your Journey Today</span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
