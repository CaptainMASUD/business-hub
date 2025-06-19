import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FiEdit, FiTrash, FiClock, FiChevronDown, FiChevronUp } from "react-icons/fi"
import axios from "axios"
import { formatDistanceToNow } from "date-fns"

const ShowNews = () => {
  const [news, setNews] = useState([])
  const [editNews, setEditNews] = useState(null)
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false)
  const [deletingId, setDeletingId] = useState(null)
  const [isEditModalOpen, setEditModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedLinks, setExpandedLinks] = useState({})

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("https://najint-api.vercel.app/api/news")
        setNews(response.data)
      } catch (error) {
        console.error("Error fetching news:", error)
      }
    }

    fetchNews()
  }, [])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://najint-api.vercel.app/api/news/${id}`)
      setNews(news.filter((item) => item._id !== id))
      setDeleteModalOpen(false)
    } catch (error) {
      console.error("Error deleting news:", error)
    }
  }

  const handleEdit = (item) => {
    setEditNews(item)
    setEditModalOpen(true)
  }

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`https://najint-api.vercel.app/api/news/${editNews._id}`, editNews)
      setNews(news.map((item) => (item._id === editNews._id ? response.data.news : item)))
      setEditModalOpen(false)
    } catch (error) {
      console.error("Error updating news:", error)
    }
  }

  const formatRelativeTime = (date) => {
    return formatDistanceToNow(new Date(date), { addSuffix: true })
  }

  const filteredNews = news.filter((item) => {
    const searchTerm = searchQuery.toLowerCase()
    return (
      item.header.toLowerCase().includes(searchTerm) ||
      item.paragraphs.some((paragraph) => paragraph.toLowerCase().includes(searchTerm))
    )
  })

  const getHighlightColor = (index) => {
    const colors = ["bg-blue-100", "bg-green-100", "bg-yellow-100"]
    return index < 3 ? colors[index] : ""
  }

  const toggleLinks = (id) => {
    setExpandedLinks((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <motion.div
      className="max-w-4xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-md"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold mb-6 text-center md:text-left">Latest News</h1>

      <input
        type="text"
        placeholder="Search news..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-3 mb-6 border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#BE3144]"
      />

      {filteredNews.length === 0 ? (
        <p className="text-center text-gray-500">No news found matching your search.</p>
      ) : (
        filteredNews.map((item, index) => (
          <motion.div
            key={item._id}
            className={`relative mb-8 p-6 border rounded-lg shadow-sm ${getHighlightColor(index)}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <h2 className="text-xl font-semibold mb-3">{item.header}</h2>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <FiClock className="mr-2" />
              <span>{formatRelativeTime(item.createdAt)}</span>
            </div>

            {item.paragraphs.map((paragraph, index) => (
              <p key={index} className="mb-4 text-sm md:text-base">
                {paragraph}
              </p>
            ))}

            {item.links.length > 0 && (
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Related Links:</h3>
                <div className="bg-gray-100 p-2 rounded">
                  {item.links.slice(0, expandedLinks[item._id] ? undefined : 3).map((link, index) => (
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#BE3144] hover:underline block mb-1 text-sm md:text-base truncate"
                    >
                      {link}
                    </a>
                  ))}
                  {item.links.length > 3 && (
                    <button
                      onClick={() => toggleLinks(item._id)}
                      className="text-[#BE3144] hover:underline text-sm flex items-center mt-2"
                    >
                      {expandedLinks[item._id] ? (
                        <>
                          <FiChevronUp className="mr-1" /> Show less
                        </>
                      ) : (
                        <>
                          <FiChevronDown className="mr-1" /> Show more ({item.links.length - 3} more)
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            )}

            {item.images.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
                {item.images.map((img, index) => (
                  <img
                    key={index}
                    src={img || "/placeholder.svg"}
                    alt={`news-image-${index}`}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-4 mt-6">
              <motion.button
                onClick={() => handleEdit(item)}
                className="flex items-center gap-2 py-2 px-4 bg-[#BE3144] text-white rounded-lg text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiEdit /> Edit
              </motion.button>
              <motion.button
                onClick={() => {
                  setDeletingId(item._id)
                  setDeleteModalOpen(true)
                }}
                className="flex items-center gap-2 py-2 px-4 bg-[#BE3144] text-white rounded-lg text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiTrash /> Delete
              </motion.button>
            </div>
          </motion.div>
        ))
      )}

      {/* Edit Modal */}
      {isEditModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full m-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Edit News</h2>
            <div className="mb-4">
              <label className="block font-medium text-sm sm:text-base mb-2">Header</label>
              <input
                type="text"
                value={editNews.header}
                onChange={(e) => setEditNews({ ...editNews, header: e.target.value })}
                className="w-full p-3 border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#BE3144]"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium text-sm sm:text-base mb-2">Paragraphs</label>
              <textarea
                value={editNews.paragraphs.join("\n")}
                onChange={(e) => setEditNews({ ...editNews, paragraphs: e.target.value.split("\n") })}
                className="w-full p-3 border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#BE3144]"
                rows="5"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium text-sm sm:text-base mb-2">Links</label>
              <textarea
                value={editNews.links.join("\n")}
                onChange={(e) => setEditNews({ ...editNews, links: e.target.value.split("\n") })}
                className="w-full p-3 border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#BE3144]"
                rows="3"
              />
            </div>
            <div className="flex gap-4 justify-end mt-6">
              <motion.button
                onClick={handleUpdate}
                className="py-2 px-6 bg-[#BE3144] text-white rounded-lg text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Update News
              </motion.button>
              <motion.button
                onClick={() => setEditModalOpen(false)}
                className="py-2 px-6 border border-gray-300 text-gray-700 rounded-lg text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Cancel
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full m-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <h2 className="text-xl font-semibold mb-6">Are you sure you want to delete this news?</h2>
            <div className="flex gap-4 justify-end">
              <motion.button
                onClick={() => handleDelete(deletingId)}
                className="py-2 px-6 bg-[#BE3144] text-white rounded-lg text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Yes, Delete
              </motion.button>
              <motion.button
                onClick={() => setDeleteModalOpen(false)}
                className="py-2 px-6 border border-gray-300 text-gray-700 rounded-lg text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Cancel
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default ShowNews

