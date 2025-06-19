import React, { useState, useEffect, useRef } from "react"
import axios from "axios"
import { motion, AnimatePresence } from "framer-motion"
import { formatDistanceToNow } from "date-fns"
import { FaRegFileAlt, FaArrowLeft, FaClock, FaLink, FaImage } from "react-icons/fa"
import { FiRefreshCw } from "react-icons/fi"
import NAJNewsLoader from "./NAJNewsLoader"

const News = () => {
  const [newsItems, setNewsItems] = useState([])
  const [selectedNews, setSelectedNews] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchNews = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await axios.get("https://najint-api.vercel.app/api/news")
      setNewsItems(response.data)
    } catch (err) {
      console.error("Error fetching news:", err)
      setError("Failed to fetch news. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchNews()
  }, [])

  const handleNewsClick = (news) => {
    setSelectedNews(news)
  }

  const handleBack = () => {
    setSelectedNews(null)
  }

  return (
    <div className="container mx-auto py-8 bg-gray-50 min-h-screen">
      {isLoading && (
        <div className="flex items-center justify-center h-screen">
          <NAJNewsLoader />
        </div>
      )}
      {!isLoading && error && (
        <div className="flex items-center justify-center h-screen">
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
            <p className="font-bold">Error</p>
            <p>{error}</p>
          </div>
        </div>
      )}
      {!isLoading && !error && (
        <>
          <AnimatePresence mode="wait">
            {selectedNews ? (
              <NewsDetail news={selectedNews} onBack={handleBack} key="detail" />
            ) : (
              <NewsList newsItems={newsItems} onNewsClick={handleNewsClick} fetchNews={fetchNews} key="list" />
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  )
}

const NewsList = ({ newsItems, onNewsClick, fetchNews }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="space-y-6"
  >
    <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">Latest News</h2>
    {/* Refresh Button */}
    <div className="flex justify-center mb-8">
      <button
        onClick={fetchNews}
        className="flex items-center px-4 py-2 rounded-lg text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600  hover:to-purple-800 transition-all duration-300 shadow-md hover:shadow-lg backdrop-blur-sm"
      >
        <FiRefreshCw className="mr-2" />
        Refresh
      </button>
    </div>
    <div className="max-h-[calc(100vh-100px)] overflow-y-auto">
      <ul className="space-y-4">
        {newsItems.map((news, index) => (
          <NewsListItem key={news._id} news={news} index={index} onClick={() => onNewsClick(news)} />
        ))}
      </ul>
    </div>
  </motion.div>
)

const NewsListItem = ({ news, index, onClick }) => {
  const isTopNews = index < 3
  const timeAgo = formatDistanceToNow(new Date(news.createdAt), { addSuffix: true })

  return (
    <motion.li
      className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl ${isTopNews ? "border-l-4 border-purple-500" : ""}`}
      whileHover={{ scale: 1.02, x: 10 }}
      onClick={onClick}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="p-2 flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isTopNews ? "bg-purple-100" : "bg-gray-100"}`}>
            <FaRegFileAlt className={`text-2xl ${isTopNews ? "text-purple-600" : "text-gray-500"}`} />
          </div>
        </div>
        <div className="flex-grow">
          <h3 className={`text-lg font-semibold mb-2 ${isTopNews ? "text-purple-700" : "text-gray-800"}`}>
            {news.header}
          </h3>
          <p className="text-gray-600 mb-2 line-clamp-2">{news.paragraphs[0]}</p>
          <div className="flex items-center text-sm text-gray-500">
            <FaClock className="mr-1" />
            <span>{timeAgo}</span>
          </div>
        </div>
        {news.images && news.images.length > 0 && (
          <div className="flex-shrink-0 ml-4">
            <img
              src={news.images[0] || "/placeholder.svg"}
              alt="News thumbnail"
              className="w-20 h-20 object-cover rounded-md"
            />
          </div>
        )}
      </div>
    </motion.li>
  )
}

const NewsDetail = ({ news, onBack }) => {
  const newsDetailRef = useRef(null)

  useEffect(() => {
    if (newsDetailRef.current) {
      newsDetailRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [news])

  return (
    <motion.div
      ref={newsDetailRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-8"
    >
      <motion.button
        onClick={onBack}
        className="mb-6 flex items-center text-purple-600 hover:text-purple-800 transition-colors duration-300"
        whileHover={{ x: -5 }}
      >
        <FaArrowLeft className="mr-2" />
        Back to News
      </motion.button>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{news.header}</h2>
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <FaClock className="mr-2" />
        <span>{formatDistanceToNow(new Date(news.createdAt), { addSuffix: true })}</span>
      </div>
      <div className="space-y-4 mb-8">
        {news.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-gray-700 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
      {news.links && news.links.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
            <FaLink className="mr-2 text-purple-600" />
            Related Links
          </h3>
          <ul className="list-disc list-inside space-y-2">
            {news.links.map((link, index) => (
              <li key={index}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-800 transition-colors duration-300 truncate"
                  style={{ maxWidth: "300px", display: "inline-block" }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      {news.images && news.images.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <FaImage className="mr-2 text-purple-600" />
            Images
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {news.images.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`News image ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default News
