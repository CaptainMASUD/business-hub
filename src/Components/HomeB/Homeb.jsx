"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu,
  X,
  Search,
  User,
  ChevronLeft,
  ChevronRight,
  Star,
  Users,
  Target,
  TrendingUp,
  Shield,
  Zap,
  Award,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Play,
  Clock,
  ArrowUpRight,
  MapPin,
} from "lucide-react"

const BusinessHubWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [searchHistory, setSearchHistory] = useState([
    "Digital Marketing Services",
    "Strategic Consulting",
    "Team Development Programs",
    "Risk Management Solutions",
  ])
  const searchRef = useRef(null)
  const img1="https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg"
  const img2="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg"
  const img3="https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg"

  const searchRecommendations = [
    { title: "Strategic Consulting", category: "Services", icon: <Target className="w-4 h-4" /> },
    { title: "Digital Marketing", category: "Services", icon: <TrendingUp className="w-4 h-4" /> },
    { title: "Team Development", category: "Services", icon: <Users className="w-4 h-4" /> },
    { title: "Process Optimization", category: "Services", icon: <Zap className="w-4 h-4" /> },
    { title: "About Our Company", category: "Company", icon: <Award className="w-4 h-4" /> },
    { title: "Client Success Stories", category: "Testimonials", icon: <Star className="w-4 h-4" /> },
  ]

  const carouselSlides = [
    {
      image: img1,
      title: "Transform Your Business Today",
      subtitle: "Leading the way in strategic business solutions",
      description: "Unlock your company's potential with our expert consulting services and innovative strategies.",
    },
    {
      image: img2,
      title: "Digital Excellence Delivered",
      subtitle: "Cutting-edge technology solutions",
      description: "Harness the power of digital transformation to stay ahead in today's competitive market.",
    },
    {
      image: img3,
      title: "Your Success, Our Mission",
      subtitle: "Partnership that drives results",
      description: "Join hundreds of successful companies who trust Business Hub for their growth journey.",
    },
  ]

  const services = [
    {
      icon: <Target className="w-10 h-10" />,
      title: "Strategic Consulting",
      description:
        "Expert guidance to help your business reach its full potential with proven strategies and methodologies.",
      features: ["Market Analysis", "Growth Planning", "Risk Assessment"],
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing solutions to boost your online presence and drive measurable growth.",
      features: ["SEO Optimization", "Social Media", "Content Strategy"],
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Team Development",
      description:
        "Professional training and development programs to enhance your team's capabilities and performance.",
      features: ["Leadership Training", "Skill Development", "Team Building"],
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Risk Management",
      description: "Comprehensive risk assessment and management solutions for business security and compliance.",
      features: ["Security Audit", "Compliance", "Crisis Management"],
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Process Optimization",
      description: "Streamline your operations with our efficient process optimization and automation services.",
      features: ["Workflow Analysis", "Automation", "Efficiency Boost"],
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Quality Assurance",
      description: "Ensure excellence in every aspect of your business with our comprehensive QA solutions.",
      features: ["Quality Control", "Standards", "Continuous Improvement"],
    },
  ]

  const collaborations = [
    { name: "TechCorp", logo: "TC", industry: "Technology" },
    { name: "InnovateLab", logo: "IL", industry: "Research" },
    { name: "GlobalSync", logo: "GS", industry: "Logistics" },
    { name: "NextGen Solutions", logo: "NGS", industry: "Software" },
    { name: "ProBusiness", logo: "PB", industry: "Consulting" },
    { name: "FutureWorks", logo: "FW", industry: "Innovation" },
    { name: "DataFlow", logo: "DF", industry: "Analytics" },
    { name: "CloudTech", logo: "CT", industry: "Cloud Services" },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      position: "CEO",
      rating: 5,
      comment:
        "Business Hub transformed our operations completely. Their strategic consulting helped us increase revenue by 150% in just 6 months. The team's expertise is unmatched.",
      image: "/images/client-sarah.jpg",
    },
    {
      name: "Michael Chen",
      company: "GrowthCo",
      position: "Marketing Director",
      rating: 5,
      comment:
        "Outstanding service! The team's expertise in digital marketing brought us 300% more qualified leads. Their innovative approach exceeded all our expectations.",
      image: "/images/client-michael.jpg",
    },
    {
      name: "Emily Rodriguez",
      company: "InnovateTech",
      position: "Operations Manager",
      rating: 5,
      comment:
        "Professional, reliable, and results-driven. Business Hub's process optimization saved us 40% in operational costs while improving our service quality significantly.",
      image: "/images/client-emily.jpg",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length)
  }

  const handleSearch = (query) => {
    if (query.trim() && !searchHistory.includes(query.trim())) {
      setSearchHistory((prev) => [query.trim(), ...prev.slice(0, 4)])
    }
    setSearchQuery(query)
    setIsSearchFocused(false)
  }

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value)
  }

  // Close search dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchFocused(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-white/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center cursor-pointer">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400 bg-clip-text text-transparent">
                Business Hub
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <a
                href="#home"
                className="text-blue-600 hover:text-sky-500 px-4 py-2 text-sm font-semibold transition-all duration-300 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-sky-400 transform scale-x-100 transition-transform group-hover:scale-x-110"></span>
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-semibold transition-all duration-300 relative group"
              >
                Services
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-sky-400 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-semibold transition-all duration-300 relative group"
              >
                About Us
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-sky-400 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-semibold transition-all duration-300 relative group"
              >
                Contact Us
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-sky-400 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </a>
            </div>

            {/* Enhanced Search and Login */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="relative" ref={searchRef}>
                <input
                  type="text"
                  placeholder="Search services, solutions..."
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  onFocus={() => setIsSearchFocused(true)}
                  className="pl-10 pr-4 py-2 w-80 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 transition-all duration-300 focus:w-96"
                />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />

                {/* Search Dropdown */}
                <AnimatePresence>
                  {isSearchFocused && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                    >
                      {/* Recent Searches */}
                      {searchHistory.length > 0 && (
                        <div className="p-4 border-b border-gray-100">
                          <div className="flex items-center text-gray-500 text-sm font-medium mb-3">
                            <Clock className="w-4 h-4 mr-2" />
                            Recent Searches
                          </div>
                          <div className="space-y-2">
                            {searchHistory.map((item, index) => (
                              <button
                                key={index}
                                onClick={() => handleSearch(item)}
                                className="flex items-center w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                              >
                                <Search className="w-4 h-4 text-gray-400 mr-3" />
                                <span className="text-gray-700 group-hover:text-blue-600">{item}</span>
                                <ArrowUpRight className="w-4 h-4 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Recommendations */}
                      <div className="p-4">
                        <div className="text-gray-500 text-sm font-medium mb-3">Recommendations</div>
                        <div className="space-y-2">
                          {searchRecommendations
                            .filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
                            .slice(0, 6)
                            .map((item, index) => (
                              <button
                                key={index}
                                onClick={() => handleSearch(item.title)}
                                className="flex items-center w-full text-left px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors duration-200 group"
                              >
                                <div className="text-blue-600 mr-3">{item.icon}</div>
                                <div className="flex-1">
                                  <div className="text-gray-900 group-hover:text-blue-600 font-medium">
                                    {item.title}
                                  </div>
                                  <div className="text-gray-500 text-sm">{item.category}</div>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </button>
                            ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-sky-500 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-700 hover:to-sky-600 transition-all duration-300 shadow-lg"
              >
                <User className="w-4 h-4" />
                <span>Login</span>
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-blue-600 p-2">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100"
            >
              <div className="px-4 pt-4 pb-6 space-y-4">
                <div className="relative mb-4">
                  <input
                    type="text"
                    placeholder="Search services, solutions..."
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                  />
                  <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                </div>
                <a href="#home" className="block text-blue-600 px-3 py-2 text-base font-semibold">
                  Home
                </a>
                <a
                  href="#services"
                  className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-semibold"
                >
                  Services
                </a>
                <a href="#about" className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-semibold">
                  About Us
                </a>
                <a
                  href="#contact"
                  className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-semibold"
                >
                  Contact Us
                </a>
                <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-sky-500 text-white px-6 py-3 rounded-full font-semibold">
                  <User className="w-4 h-4" />
                  <span>Login</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Premium Carousel */}
      <section id="home" className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${carouselSlides[currentSlide].image})`,
              }}
            >
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-white max-w-4xl px-4">
                  <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                  >
                    {carouselSlides[currentSlide].title}
                  </motion.h1>
                  <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl md:text-2xl mb-4 text-blue-100 font-medium"
                  >
                    {carouselSlides[currentSlide].subtitle}
                  </motion.p>
                  <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto"
                  >
                    {carouselSlides[currentSlide].description}
                  </motion.p>
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-blue-600 to-sky-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:from-blue-700 hover:to-sky-600 transition-all duration-300"
                    >
                      Get Started Today
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm"
                    >
                      <Play className="inline-block w-5 h-5 mr-2" />
                      Watch Demo
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Premium Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive business solutions designed to elevate your company to new heights of success and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group"
              >
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full bg-gradient-to-r from-blue-600 to-sky-500 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-sky-600 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Collaborations */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Trusted Partnerships</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborating with industry leaders to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
            {collaborations.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-sky-400 rounded-2xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {company.logo}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{company.name}</h3>
                <p className="text-sm text-gray-500">{company.industry}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-sky-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Client Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our satisfied clients who have transformed their businesses with our expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 italic text-lg leading-relaxed">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                    <p className="text-blue-600 font-medium">{testimonial.position}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section
        id="about"
        className="py-24 bg-gradient-to-br from-blue-600 via-blue-500 to-sky-400 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6">About Business Hub</h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              We are a premier business consulting firm dedicated to helping companies achieve sustainable growth,
              operational excellence, and market leadership through innovative strategies and proven methodologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Projects Completed", icon: <Target className="w-8 h-8 mx-auto mb-4" /> },
              { number: "200+", label: "Happy Clients", icon: <Users className="w-8 h-8 mx-auto mb-4" /> },
              { number: "10+", label: "Years Experience", icon: <Award className="w-8 h-8 mx-auto mb-4" /> },
              { number: "50+", label: "Expert Team", icon: <TrendingUp className="w-8 h-8 mx-auto mb-4" /> },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20"
              >
                <div className="text-white/80">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <p className="opacity-90 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business? Let's discuss how we can help you achieve your goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl">
                  <Phone className="w-8 h-8 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl">
                  <Mail className="w-8 h-8 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">info@businesshub.com</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl">
                  <MapPin className="w-8 h-8 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">123 Business Street, City, State 12345</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
                <textarea
                  rows="6"
                  placeholder="Your Message"
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                ></textarea>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-sky-400 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-sky-500 transition-all duration-300 shadow-lg"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent mb-6"
              >
                Business Hub
              </motion.div>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed max-w-md">
                Your trusted partner for business growth, innovation, and excellence. Transforming companies worldwide
                with strategic solutions.
              </p>
              <div className="flex space-x-6">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Services</h4>
              <ul className="space-y-3 text-gray-400">
                {[
                  "Strategic Consulting",
                  "Digital Marketing",
                  "Team Development",
                  "Risk Management",
                  "Process Optimization",
                  "Quality Assurance",
                ].map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Company</h4>
              <ul className="space-y-3 text-gray-400">
                {["About Us", "Careers", "News & Updates", "Privacy Policy", "Terms of Service", "Support"].map(
                  (item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                &copy; 2024 Business Hub. All rights reserved. Crafted with excellence.
              </p>
              <div className="flex items-center space-x-6 text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>info@businesshub.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default BusinessHubWebsite