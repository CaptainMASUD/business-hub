"use client"

import { motion } from "framer-motion"
import { useSelector } from "react-redux"
import {
  BarChart3,
  Users,
  ShoppingCart,
  Truck,
  Building2,
  Calculator,
  Database,
  Globe,
  Package,
  Factory,
  UserCheck,
  PieChart,
  ClipboardList,
  Archive,
  CheckCircle,
  Star,
  Award,
  Zap,
  Target,
  Sparkles,
  Shield,
  Clock,
  Phone,
  Mail,
} from "lucide-react"

export default function ServicesComponent() {
  const { isDarkMode } = useSelector((state) => state.theme)

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

  const erpFeatures = [
    {
      icon: BarChart3,
      title: "আর্থিক ব্যবস্থাপনা",
      description: "সম্পূর্ণ আর্থিক নিয়ন্ত্রণ ও পরিকল্পনা",
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    },
    {
      icon: Truck,
      title: "সাপ্লাই চেইন ম্যানেজমেন্ট",
      description: "সরবরাহ শৃঙ্খল দক্ষতা বৃদ্ধি",
      color: "green",
      gradient: "from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
    },
    {
      icon: Users,
      title: "কাস্টমার রিলেশনশিপ ম্যানেজমেন্ট",
      description: "গ্রাহক সম্পর্ক উন্নতি ও রক্ষণাবেক্ষণ",
      color: "purple",
      gradient: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    },
    {
      icon: UserCheck,
      title: "হিউম্যান রিসোর্স",
      description: "কর্মী ব্যবস্থাপনা ও পেরোল সিস্টেম",
      color: "orange",
      gradient: "from-orange-500 to-red-500",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    },
  ]

  const quickbooksFeatures = [
    "User Creation - Unlimited",
    "Remote Access - Online",
    "User Role Setup",
    "Data Security",
    "Voucher Customization",
    "Report Customization",
    "Multiple Store Management",
    "Unlimited Company Creation",
    "Project or Portfolio wise Profit & Loss Account",
    "Product wise Analytical Report",
    "Customer Aging Report",
    "KPI report for Sales Representative",
    "Bill of Material or Set Production Recipe",
  ]

  const businessSectors = [
    {
      name: "Education ERP",
      icon: Building2,
      color: "blue",
      gradient: "from-blue-500 to-indigo-500",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=200&fit=crop",
    },
    {
      name: "Garments ERP",
      icon: Factory,
      color: "green",
      gradient: "from-green-500 to-teal-500",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop",
    },
    {
      name: "Hospital ERP",
      icon: UserCheck,
      color: "red",
      gradient: "from-red-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop",
    },
    {
      name: "Retail Software",
      icon: ShoppingCart,
      color: "purple",
      gradient: "from-purple-500 to-violet-500",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop",
    },
    {
      name: "Wholesale Manufacturing",
      icon: Package,
      color: "orange",
      gradient: "from-orange-500 to-amber-500",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=300&h=200&fit=crop",
    },
    {
      name: "Inventory Software",
      icon: Archive,
      color: "teal",
      gradient: "from-teal-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop",
    },
    {
      name: "Construction Projects",
      icon: Building2,
      color: "gray",
      gradient: "from-gray-500 to-slate-500",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=300&h=200&fit=crop",
    },
  ]

  const detailedFeatures = [
    {
      category: "হিসাব ব্যবস্থাপনা",
      features: [
        "সব ধরণের লেজার তৈরী করার সুবিধা",
        "সকল হিসাবের কোডিং করার সুবিধা",
        "বিভিন্ন টেমপ্লেট সমৃদ্ধ ভাউচার",
        "মাসিক/বাৎসরিক বাজেট তৈরী ও এনালাইসিস",
      ],
      icon: Calculator,
      gradient: "from-blue-500 to-indigo-500",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
    },
    {
      category: "ব্যবসায়িক বিশ্লেষণ",
      features: [
        "প্রতিটি পণ্য ও সেবার লাভ-ক্ষতি নিরুপন",
        "ক্রেতা/বিক্রেতার লেনদেনের বিস্তারিত হিসাব",
        "ব্যাংক সমন্বয় বিবরণী প্রস্তুত",
        "মাল্টি কারেন্সিতে কাজ করার সুবিধা",
      ],
      icon: PieChart,
      gradient: "from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    },
    {
      category: "অর্ডার ব্যবস্থাপনা",
      features: ["ক্রয় ও বিক্রয় অর্ডার ব্যবস্থাপনা", "ডেবিট নোট ও ক্রেডিট নোট ব্যবস্থাপনা", "ভ্যাট ব্যবস্থাপনা", "ক্রয় ও বিক্রয় চালানপত্র"],
      icon: ClipboardList,
      gradient: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    },
    {
      category: "ইনভেন্টরি ও পেরোল",
      features: [
        "মজুদ পণ্যের মূল্য নির্ধারণ পদ্ধতি",
        "মাল্টি ওয়্যার হাউস ব্যবস্থাপনা",
        "কর্মচারী বেতন ও মজুরি ব্যবস্থাপনা",
        "প্রভিডেন্ড ফান্ড ও ইন্স্যুরেন্স",
      ],
      icon: Package,
      gradient: "from-orange-500 to-red-500",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop",
    },
  ]

  const stats = [
    { number: "500+", label: "Happy Clients", icon: Users, gradient: "from-blue-500 to-cyan-500" },
    { number: "20+", label: "Years Experience", icon: Clock, gradient: "from-green-500 to-emerald-500" },
    { number: "1000+", label: "Projects Completed", icon: CheckCircle, gradient: "from-purple-500 to-pink-500" },
    { number: "24/7", label: "Support Available", icon: Shield, gradient: "from-orange-500 to-red-500" },
  ]

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
      } pt-20`}
    >
      {/* Hero Section */}
      <motion.div
        className={`relative overflow-hidden ${
          isDarkMode
            ? "bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900"
            : "bg-gradient-to-r from-indigo-900 via-blue-800 to-purple-900"
        } text-white py-20`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hero Background Image */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-spin-slow"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex justify-center mb-8">
              <motion.div className="relative" whileHover={{ scale: 1.1, rotate: 360 }} transition={{ duration: 0.8 }}>
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-2xl shadow-2xl">
                  <Database className="w-16 h-16 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-ping"></div>
                <Sparkles className="absolute -bottom-2 -left-2 w-6 h-6 text-yellow-400 animate-bounce" />
              </motion.div>
            </div>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              সমন্বিত ERP ও QuickBooks সমাধান
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              আর্থিক ব্যবস্থাপনা, সাপ্লাই চেইন ম্যানেজমেন্ট, কাস্টমার রিলেশনশিপ ম্যানেজমেন্ট, হিউম্যান রিসোর্স এবং আরও অনেক কিছুর মতো মূল
              ব্যবসায়িক ক্রিয়াকলাপগুলিকে একটি ইআরপি সিস্টেমে সংযুক্ত করার মাধ্যমে, কোম্পানিগুলোর প্রক্রিয়াগুলিতে আরও দক্ষতা আনায়ন এবং ব্যবসার
              ফলাফল উন্নত হয়।
            </motion.p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div
                  className={`bg-gradient-to-r ${stat.gradient} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                <p className="text-blue-100">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* ERP Core Features */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {erpFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-500 border border-white/20 group"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${feature.gradient}/80`}></div>
                </div>
                <div className="p-6 text-center">
                  <div
                    className={`bg-gradient-to-r ${feature.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* QuickBooks Desktop Section */}
      <motion.div
        className="max-w-7xl mx-auto px-6 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="flex justify-center mb-6">
            <motion.div className="relative" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <div
                className={`${isDarkMode ? "bg-gradient-to-br from-blue-600 to-indigo-700" : "bg-gradient-to-br from-blue-500 to-indigo-600"} p-6 rounded-2xl shadow-2xl`}
              >
                <Calculator className="w-16 h-16 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
            </motion.div>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            QuickBooks Desktop
          </h2>
          <div
            className={`w-24 h-1 ${isDarkMode ? "bg-gradient-to-r from-blue-400 to-purple-400" : "bg-gradient-to-r from-blue-500 to-purple-500"} mx-auto mb-6 rounded-full`}
          ></div>
          <p
            className={`text-lg md:text-xl max-w-4xl mx-auto leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            ব্যবসায়িক সকল হিসাব রাখার জন্য ব্যবহার করুন QuickBooks-Desktop যা একটি সমন্বিত Accounting, Inventory, Manufacturing এবং
            Payroll সফটওয়্যার। এটি পৃথিবীব্যাপী ব্যবসায়ীদের আস্থা অর্জন করে চলেছে দুই যুগেরও বেশী সময় ধরে।
          </p>
        </motion.div>

        {/* QuickBooks Features Grid */}
        <motion.div className="grid lg:grid-cols-2 gap-12 mb-20" variants={itemVariants}>
          <div
            className={`${isDarkMode ? "bg-gray-800/50" : "bg-white"} rounded-3xl p-8 shadow-2xl border ${isDarkMode ? "border-gray-700" : "border-gray-100"} backdrop-blur-lg`}
          >
            <div className="relative mb-6">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=200&fit=crop"
                alt="QuickBooks Features"
                className="w-full h-32 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/80 to-emerald-500/80 rounded-2xl"></div>
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className={`text-2xl font-bold mb-6 flex items-center ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              QuickBooks Desktop এ পাচ্ছেন
            </h3>
            <div className="space-y-3">
              {quickbooksFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center p-3 rounded-xl transition-all duration-300 ${
                    isDarkMode ? "bg-gray-700/50 hover:bg-gray-600/50" : "bg-gray-50 hover:bg-blue-50"
                  }`}
                  whileHover={{ x: 10, scale: 1.02 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-1.5 rounded-lg mr-3">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <span className={`font-medium text-sm ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

            <div className="relative mb-6">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=200&fit=crop"
                alt="Intuit Company"
                className="w-full h-32 object-cover rounded-2xl opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/60 to-pink-600/60 rounded-2xl"></div>
            </div>

            <h3 className="text-2xl font-bold mb-6 flex items-center relative z-10">
              <Award className="w-6 h-6 mr-3" />
              বিশ্বস্ততার প্রমাণ
            </h3>
            <div className="space-y-6 relative z-10">
              <motion.div
                className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <Globe className="w-8 h-8 text-blue-200 mr-3" />
                  <div>
                    <h4 className="text-xl font-bold">Intuit Inc.</h4>
                    <p className="text-blue-200 text-sm">Mountain View, California, USA</p>
                  </div>
                </div>
                <p className="text-blue-100">১৯৮৩ সালে Scott Cook এবং Tom Proulx দ্বারা প্রতিষ্ঠিত</p>
              </motion.div>

              <motion.div
                className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-3">
                  <Target className="w-6 h-6 text-green-300 mr-3" />
                  <span className="text-lg font-bold">২০+ বছরের অভিজ্ঞতা</span>
                </div>
                <p className="text-blue-100">পৃথিবীব্যাপী ব্যবসায়ীদের আস্থা অর্জনকারী</p>
              </motion.div>

              <motion.div
                className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-3">
                  <Zap className="w-6 h-6 text-yellow-300 mr-3" />
                  <span className="text-lg font-bold">আধুনিক ইউজার ইন্টারফেস</span>
                </div>
                <p className="text-blue-100">ব্যবহারকারীদের জন্য সহজ ও কার্যকর</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Detailed Features */}
        <motion.div variants={itemVariants}>
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-12 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            QuickBooks এর বিস্তারিত সুবিধাসমূহ
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {detailedFeatures.map((category, index) => (
              <motion.div
                key={index}
                className={`${isDarkMode ? "bg-gray-800/50" : "bg-white"} rounded-3xl shadow-2xl border ${isDarkMode ? "border-gray-700" : "border-gray-100"} hover:shadow-3xl transition-all duration-500 backdrop-blur-lg group overflow-hidden`}
                whileHover={{ y: -10, scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.category}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient}/80`}></div>
                  <div
                    className={`absolute top-4 left-4 bg-gradient-to-r ${category.gradient} p-3 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className={`text-xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    {category.category}
                  </h3>
                  <div className="space-y-3">
                    {category.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className={`leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Business Sectors */}
        <motion.div className="mt-20" variants={itemVariants}>
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-12 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            আমাদের সেবা পরিসর
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {businessSectors.map((sector, index) => (
              <motion.div
                key={index}
                className={`${isDarkMode ? "bg-gray-800/50" : "bg-white"} rounded-2xl shadow-xl border ${isDarkMode ? "border-gray-700" : "border-gray-100"} hover:shadow-2xl transition-all duration-500 group backdrop-blur-lg overflow-hidden`}
                whileHover={{ y: -10, scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={sector.image || "/placeholder.svg"}
                    alt={sector.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${sector.gradient}/70`}></div>
                  <div
                    className={`absolute top-3 left-3 bg-gradient-to-r ${sector.gradient} w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                  >
                    <sector.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className={`font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>{sector.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA Section */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-center text-white relative overflow-hidden"
          variants={itemVariants}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, duration: 0.5 }}>
              <Sparkles className="w-12 h-12 mx-auto mb-6 text-yellow-300" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">আপনার ব্যবসার জন্য সঠিক সমাধান খুঁজছেন?</h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              আমাদের বিশেষজ্ঞ দল আপনার ব্যবসার প্রয়োজন অনুযায়ী সর্বোত্তম ERP ও QuickBooks সমাধান প্রদান করতে প্রস্তুত।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-blue-600 px-8 py-3 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-3xl"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5 mr-2" />
                কল করুন: +8801712-244886
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-3 rounded-2xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 mr-2" />
                ইমেইল পাঠান
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  )
}
