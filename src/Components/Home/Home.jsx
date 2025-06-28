"use client"

import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Calculator, TrendingUp, Users, Shield, CheckCircle, Star, ArrowRight, Phone, Play, Building2, Settings, Package, BarChart3, Sparkles, Award, Clock, Zap, Globe, Target } from 'lucide-react'

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { isDarkMode } = useSelector((state) => state.theme)
  const navigate = useNavigate()

  const carouselSlides = [
    {
      title: "Transform Your Business with QuickBooks",
      subtitle: "Professional Accounting Solutions for Modern Businesses",
      description:
        "Streamline your financial management with our expert QuickBooks implementation and support services.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop",
      cta: "Get Started Today",
      features: ["Expert Setup", "24/7 Support", "Training Included"],
      gradient: "from-blue-600 via-indigo-700 to-purple-800",
    },
    {
      title: "Complete ERP Solutions",
      subtitle: "Integrate All Your Business Operations",
      description: "From inventory to payroll, manage everything in one powerful system designed for growth.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
      cta: "Explore ERP",
      features: ["Full Integration", "Custom Reports", "Scalable Solutions"],
      gradient: "from-green-600 via-teal-700 to-cyan-800",
    },
    {
      title: "Expert Training & Support",
      subtitle: "Master Your Business Software",
      description: "Comprehensive training programs and ongoing support to maximize your software investment.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
      cta: "Book Training",
      features: ["Certified Trainers", "Hands-on Learning", "Ongoing Support"],
      gradient: "from-purple-600 via-pink-700 to-red-800",
    },
  ]

  const features = [
    {
      icon: Calculator,
      title: "QuickBooks Expertise",
      description: "Certified professionals with 20+ years of QuickBooks implementation experience",
      gradient: "from-blue-500 to-indigo-500",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Solutions designed to scale with your business and drive sustainable growth",
      gradient: "from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise-grade security measures to protect your sensitive business data",
      gradient: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated support team available 24/7 to assist with any questions or issues",
      gradient: "from-orange-500 to-red-500",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    },
  ]

  const services = [
    {
      icon: Calculator,
      title: "QuickBooks Setup & Migration",
      description: "Complete setup and data migration from existing systems to QuickBooks with expert guidance",
      gradient: "from-blue-500 to-indigo-500",
      route: "/services",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
    },
    {
      icon: BarChart3,
      title: "Financial Reporting",
      description: "Custom financial reports and analysis to track your business performance effectively",
      gradient: "from-green-500 to-emerald-500",
      route: "/services",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    },
    {
      icon: Users,
      title: "Training & Support",
      description: "Comprehensive training for your team and ongoing technical support when you need it",
      gradient: "from-purple-500 to-pink-500",
      route: "/services",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    },
    {
      icon: Settings,
      title: "ERP Implementation",
      description: "Full ERP system implementation to integrate all your business operations seamlessly",
      gradient: "from-orange-500 to-red-500",
      route: "/services",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Advanced inventory tracking and management solutions for better stock control",
      gradient: "from-teal-500 to-cyan-500",
      route: "/services",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop",
    },
    {
      icon: Building2,
      title: "Business Consultation",
      description: "Expert business consultation to optimize your processes and improve efficiency",
      gradient: "from-indigo-500 to-purple-500",
      route: "/contact",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Ahmed",
      company: "Ahmed Textiles Ltd.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Business Hub transformed our accounting processes completely. The QuickBooks implementation was seamless and their support is outstanding.",
      companyLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=60&h=60&fit=crop",
    },
    {
      name: "Mohammad Rahman",
      company: "Rahman Electronics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The ERP solution has streamlined our entire operation. We can now track inventory, manage payroll, and generate reports effortlessly.",
      companyLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=60&h=60&fit=crop",
    },
    {
      name: "Fatima Khan",
      company: "Khan Pharmaceuticals",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Excellent training and ongoing support. The team is knowledgeable, professional, and always ready to help when needed.",
      companyLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=60&h=60&fit=crop",
    },
  ]

  const stats = [
    { number: "500+", label: "Happy Clients", icon: Users, gradient: "from-blue-500 to-cyan-500" },
    { number: "20+", label: "Years Experience", icon: Clock, gradient: "from-green-500 to-emerald-500" },
    { number: "1000+", label: "Projects Completed", icon: CheckCircle, gradient: "from-purple-500 to-pink-500" },
    { number: "24/7", label: "Support Available", icon: Shield, gradient: "from-orange-500 to-red-500" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [carouselSlides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length)
  }

  const handleServiceClick = (route) => {
    navigate(route)
  }

  return (
    <div className={`min-h-screen transition-all duration-500 pt-16 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
      {/* Hero Carousel */}
      <div className="relative h-[450px] sm:h-[550px] lg:h-[650px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${carouselSlides[currentSlide].image})` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${carouselSlides[currentSlide].gradient}/90`}></div>
            </div>
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 text-white">
                <div className="max-w-2xl lg:max-w-3xl">
                  <motion.h1
                    className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-3 lg:mb-4"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {carouselSlides[currentSlide].title}
                  </motion.h1>
                  <motion.h2
                    className="text-base sm:text-lg lg:text-2xl text-blue-200 mb-3 lg:mb-4"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {carouselSlides[currentSlide].subtitle}
                  </motion.h2>
                  <motion.p
                    className="text-sm sm:text-base lg:text-lg mb-4 lg:mb-6 text-blue-100"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {carouselSlides[currentSlide].description}
                  </motion.p>
                  <motion.div
                    className="flex flex-wrap items-center gap-3 lg:gap-4 mb-4 lg:mb-6"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {carouselSlides[currentSlide].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-green-400" />
                        <span className="text-xs lg:text-sm text-blue-100">{feature}</span>
                      </div>
                    ))}
                  </motion.div>
                  <motion.div
                    className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 lg:px-6 py-2.5 lg:py-3 rounded-full font-semibold text-sm lg:text-base hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                      <span>{carouselSlides[currentSlide].cta}</span>
                      <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4" />
                    </button>
                    <button className="border-2 border-white text-white px-5 lg:px-6 py-2.5 lg:py-3 rounded-full font-semibold text-sm lg:text-base hover:bg-white hover:text-blue-900 transition-all duration-200 flex items-center justify-center space-x-2">
                      <Play className="w-3 h-3 lg:w-4 lg:h-4" />
                      <span>Watch Demo</span>
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 lg:left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 lg:p-3 rounded-full hover:bg-white/30 transition-all duration-200"
        >
          <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 lg:right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 lg:p-3 rounded-full hover:bg-white/30 transition-all duration-200"
        >
          <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 lg:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <motion.div
        className={`py-10 lg:py-12 ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className={`text-center p-4 lg:p-6 rounded-2xl ${isDarkMode ? "bg-gray-700/50" : "bg-white"} shadow-lg hover:shadow-xl transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div
                  className={`bg-gradient-to-r ${stat.gradient} w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center mx-auto mb-2 lg:mb-3 shadow-lg`}
                >
                  <stat.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <h3
                  className={`text-xl lg:text-3xl font-bold mb-1 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}
                >
                  {stat.number}
                </h3>
                <p className={`text-xs lg:text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="py-12 lg:py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 lg:mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex justify-center mb-4"
            >
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-2xl shadow-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-bounce" />
              </div>
            </motion.div>
            <h2
              className={`text-2xl lg:text-3xl font-bold mb-3 lg:mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
            >
              Why Choose Business Hub?
            </h2>
            <p className={`text-base lg:text-lg max-w-3xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              We provide comprehensive business solutions backed by expertise, innovation, and unwavering commitment to
              your success.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${feature.gradient}/80`}></div>
                  <div
                    className={`absolute top-3 left-3 bg-gradient-to-r ${feature.gradient} w-10 h-10 rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h3
                    className={`text-base lg:text-lg font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}
                  >
                    {feature.title}
                  </h3>
                  <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Services Section */}
      <motion.div
        className={`py-12 lg:py-16 ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 lg:mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex justify-center mb-4"
            >
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-2xl shadow-lg">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <Zap className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-pulse" />
              </div>
            </motion.div>
            <h2
              className={`text-2xl lg:text-3xl font-bold mb-3 lg:mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
            >
              Our Premium Services
            </h2>
            <p className={`text-base lg:text-lg max-w-3xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              Comprehensive business solutions designed to transform your operations and drive growth
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`${isDarkMode ? "bg-gray-700" : "bg-white"} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => handleServiceClick(service.route)}
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient}/70`}></div>
                  <div
                    className={`absolute top-4 left-4 bg-gradient-to-r ${service.gradient} w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-5">
                  <h3
                    className={`text-lg font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}
                  >
                    {service.title}
                  </h3>
                  <p className={`text-sm mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    {service.description}
                  </p>
                  <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-sm">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        className="py-12 lg:py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 lg:mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex justify-center mb-4"
            >
              <div className="relative">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-2xl shadow-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <Globe className="absolute -top-1 -right-1 w-4 h-4 text-blue-400 animate-spin" />
              </div>
            </motion.div>
            <h2
              className={`text-2xl lg:text-3xl font-bold mb-3 lg:mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
            >
              What Our Clients Say
            </h2>
            <p className={`text-base lg:text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              Don't just take our word for it - hear from businesses that have transformed with our solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={`${isDarkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${isDarkMode ? "border-gray-700" : "border-gray-100"}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <img
                    src={testimonial.companyLogo || "/placeholder.svg"}
                    alt="Company"
                    className="w-8 h-8 rounded-full object-cover opacity-60"
                  />
                </div>
                <p
                  className={`text-sm mb-4 italic leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-blue-200 dark:border-blue-800"
                  />
                  <div>
                    <h4 className={`font-semibold text-sm ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="py-12 lg:py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mb-4 lg:mb-6"
          >
            <Award className="w-10 h-10 lg:w-12 lg:h-12 mx-auto text-yellow-300" />
          </motion.div>
          <h2 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-4">Ready to Transform Your Business?</h2>
          <p className="text-base lg:text-lg text-blue-100 mb-6 lg:mb-8">
            Join hundreds of successful businesses that have revolutionized their operations with our QuickBooks and ERP
            solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.button
              className="bg-white text-blue-600 px-5 lg:px-6 py-2.5 lg:py-3 rounded-full font-semibold text-sm lg:text-base hover:bg-gray-100 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
            >
              <Phone className="w-4 h-4" />
              <span>Call Now: +8801712-244886</span>
            </motion.button>
            <motion.button
              className="border-2 border-white text-white px-5 lg:px-6 py-2.5 lg:py-3 rounded-full font-semibold text-sm lg:text-base hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
            >
              <ArrowRight className="w-4 h-4" />
              <span>Get Free Consultation</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
