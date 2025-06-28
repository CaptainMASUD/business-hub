"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useSelector } from "react-redux"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Building2,
  Calculator,
  TrendingUp,
  Users,
  MessageSquare,
  Globe,
  Star,
  Award,
  Shield,
  Zap,
  Target,
  ArrowRight,
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { isDarkMode } = useSelector((state) => state.theme)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  const services = [
    {
      icon: Calculator,
      title: "QuickBooks Setup & Migration",
      description: "Complete setup and data migration from existing systems to QuickBooks",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      icon: TrendingUp,
      title: "Financial Reporting",
      description: "Custom financial reports and analysis to track your business performance",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      title: "Training & Support",
      description: "Comprehensive training for your team and ongoing technical support",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  const whyChooseUs = [
    {
      icon: Award,
      title: "20+ Years Experience",
      description: "Two decades of expertise in business management solutions",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      icon: Shield,
      title: "Certified Professionals",
      description: "QuickBooks ProAdvisor certified team members",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your business needs",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Target,
      title: "Custom Solutions",
      description: "Tailored solutions designed specifically for your business",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${isDarkMode ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" : "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"}`}
    >
      {/* Header Section */}
      <motion.div
        className={`relative overflow-hidden ${isDarkMode ? "bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900" : "bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900"} text-white py-20`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm">
              <Calculator className="w-12 h-12 text-blue-200" />
            </div>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Business Hub
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-blue-100 mb-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Professional QuickBooks Services & Business Solutions in Dhaka
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-6 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <div className="flex items-center">
              <TrendingUp className="w-4 h-4 mr-2" />
              Financial Management
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              Business Consulting
            </div>
            <div className="flex items-center">
              <Building2 className="w-4 h-4 mr-2" />
              Corporate Solutions
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="max-w-7xl mx-auto px-6 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <div className="relative mb-8">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=300&fit=crop"
                alt="Business Office"
                className="w-full h-48 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-2xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <Building2 className="w-12 h-12 mx-auto mb-3" />
                  <h2 className="text-2xl font-bold">Get in Touch</h2>
                </div>
              </div>
            </div>

            <p className={`mb-8 text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              Ready to streamline your business finances? Our expert team is here to help you with professional
              QuickBooks setup, training, and ongoing support. Contact us today for a consultation.
            </p>

            <div className="space-y-6">
              {/* Office Address */}
              <motion.div
                className={`${isDarkMode ? "bg-gray-800/50" : "bg-white"} rounded-2xl p-6 shadow-lg border ${isDarkMode ? "border-gray-700" : "border-gray-100"} hover:shadow-xl transition-all duration-300`}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      Office Location
                    </h3>
                    <p className={`leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                      House# 72/B, Malibagh Chowdhurypara
                      <br />
                      Dhaka-1219, Bangladesh
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                className={`${isDarkMode ? "bg-gray-800/50" : "bg-white"} rounded-2xl p-6 shadow-lg border ${isDarkMode ? "border-gray-700" : "border-gray-100"} hover:shadow-xl transition-all duration-300`}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full mr-4">
                    <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      Hotline
                    </h3>
                    <p className={`mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>+8801712-244886</p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      WhatsApp Available
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                className={`${isDarkMode ? "bg-gray-800/50" : "bg-white"} rounded-2xl p-6 shadow-lg border ${isDarkMode ? "border-gray-700" : "border-gray-100"} hover:shadow-xl transition-all duration-300`}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start">
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full mr-4">
                    <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      Email Address
                    </h3>
                    <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>businesshubok@gmail.com</p>
                  </div>
                </div>
              </motion.div>

              {/* Business Hours */}
              <motion.div
                className={`${isDarkMode ? "bg-gray-800/50" : "bg-white"} rounded-2xl p-6 shadow-lg border ${isDarkMode ? "border-gray-700" : "border-gray-100"} hover:shadow-xl transition-all duration-300`}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start">
                  <div className="bg-orange-100 dark:bg-orange-900 p-3 rounded-full mr-4">
                    <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      Business Hours
                    </h3>
                    <div className={`space-y-1 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                      <p>Saturday - Thursday: 9:00 AM - 6:00 PM</p>
                      <p>Friday: Closed</p>
                      <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">
                        Emergency support available via WhatsApp
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div
              className={`${isDarkMode ? "bg-gray-800/50" : "bg-white"} rounded-3xl p-8 shadow-2xl border ${isDarkMode ? "border-gray-700" : "border-gray-100"} relative overflow-hidden`}
            >
              {/* Form Background Image */}
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-10"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&h=200&fit=crop')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              <div className="relative z-10">
                <h2 className={`text-2xl md:text-3xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  Send us a Message
                </h2>
                <p className={`mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {isSubmitted && (
                  <motion.div
                    className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl p-4 mb-6 flex items-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" />
                    <span className="text-green-800 dark:text-green-300">
                      Thank you! Your message has been sent successfully.
                    </span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        className={`block text-sm font-semibold mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${isDarkMode ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" : "border-gray-300 placeholder-gray-500"}`}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label
                        className={`block text-sm font-semibold mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${isDarkMode ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" : "border-gray-300 placeholder-gray-500"}`}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        className={`block text-sm font-semibold mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${isDarkMode ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" : "border-gray-300 placeholder-gray-500"}`}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label
                        className={`block text-sm font-semibold mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                      >
                        Service Needed
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "border-gray-300"}`}
                      >
                        <option value="">Select a service</option>
                        <option value="quickbooks-setup">QuickBooks Setup</option>
                        <option value="bookkeeping">Bookkeeping Services</option>
                        <option value="training">QuickBooks Training</option>
                        <option value="consultation">Business Consultation</option>
                        <option value="support">Technical Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-semibold mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                    >
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none ${isDarkMode ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" : "border-gray-300 placeholder-gray-500"}`}
                      placeholder="Tell us about your business needs and how we can help..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Why Choose Us Section */}
        <motion.div className="mt-20" variants={itemVariants}>
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex justify-center mb-6"
            >
              <div className="relative">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-2xl shadow-lg">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <Globe className="absolute -top-1 -right-1 w-5 h-5 text-blue-400 animate-spin" />
              </div>
            </motion.div>
            <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Why Choose Business Hub?
            </h2>
            <p className={`max-w-2xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              We provide comprehensive QuickBooks and business solutions to help your company thrive
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                className={`${isDarkMode ? "bg-gray-800/50" : "bg-white"} rounded-2xl p-6 shadow-lg border ${isDarkMode ? "border-gray-700" : "border-gray-100"} text-center hover:shadow-xl transition-all duration-300`}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className={`bg-gradient-to-r ${item.gradient} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  {item.title}
                </h3>
                <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div className="mt-20" variants={itemVariants}>
          <div className="text-center mb-12">
            <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Our Services
            </h2>
            <p className={`max-w-2xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              We provide comprehensive QuickBooks and business solutions to help your company thrive
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`${isDarkMode ? "bg-gray-800/50" : "bg-white"} rounded-2xl shadow-lg border ${isDarkMode ? "border-gray-700" : "border-gray-100"} hover:shadow-xl transition-all duration-300 overflow-hidden group`}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient}/70`}></div>
                  <div
                    className={`absolute top-4 left-4 bg-gradient-to-r ${service.gradient} w-12 h-12 rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    {service.title}
                  </h3>
                  <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-center text-white relative overflow-hidden"
          variants={itemVariants}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, duration: 0.5 }}>
              <Award className="w-12 h-12 mx-auto mb-6 text-yellow-300" />
            </motion.div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and discover how we can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight className="w-5 h-5" />
                <span>Get Quote</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.div
        className={`${isDarkMode ? "bg-gray-800" : "bg-gray-900"} text-white py-12`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-4">
            <Calculator className="w-8 h-8 text-blue-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Business Hub</h3>
          <p className="text-gray-400 mb-4">Your Trusted QuickBooks Partner in Dhaka</p>
          <div className="flex justify-center items-center space-x-2 text-sm text-gray-400">
            <Globe className="w-4 h-4" />
            <span>Serving businesses across Bangladesh</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
