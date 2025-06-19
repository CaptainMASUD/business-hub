import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiUpload, FiFileText, FiPlus, FiX, FiCheck } from "react-icons/fi"
import axios from "axios"

const PostNews = () => {
  const [header, setHeader] = useState("")
  const [paragraphs, setParagraphs] = useState([""])
  const [links, setLinks] = useState([""])
  const [files, setFiles] = useState([])
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleAddParagraph = () => {
    setParagraphs([...paragraphs, ""])
  }

  const handleParagraphChange = (index, value) => {
    const updatedParagraphs = [...paragraphs]
    updatedParagraphs[index] = value
    setParagraphs(updatedParagraphs)
  }

  const handleAddLink = () => {
    setLinks([...links, ""])
  }

  const handleLinkChange = (index, value) => {
    const updatedLinks = [...links]
    updatedLinks[index] = value
    setLinks(updatedLinks)
  }

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles])
  }

  const handleRemoveFile = (index) => {
    const updatedFiles = [...files]
    updatedFiles.splice(index, 1)
    setFiles(updatedFiles)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData()
    formData.append("header", header)
    paragraphs.forEach((paragraph) => formData.append("paragraphs", paragraph))
    links.forEach((link) => formData.append("links", link))
    Array.from(files).forEach((file) => formData.append("files", file))

    try {
      const response = await axios.post("https://najint-api.vercel.app/api/news", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      setMessage(response.data.message)
      setShowModal(true)
      // Reset form
      setHeader("")
      setParagraphs([""])
      setLinks([""])
      setFiles([])
    } catch (error) {
      console.error("Error posting news:", error)
      setMessage("Failed to post news.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div
      className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-xl font-bold mb-4">Post News</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Header</label>
          <input
            type="text"
            value={header}
            onChange={(e) => setHeader(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Paragraphs</label>
          {paragraphs.map((paragraph, index) => (
            <div key={index} className="mb-2 flex gap-2">
              <textarea
                value={paragraph}
                onChange={(e) => handleParagraphChange(index, e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          ))}
          <button type="button" onClick={handleAddParagraph} className="text-[#BE3144]">
            <FiPlus className="inline mr-1" /> Add Paragraph
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Links</label>
          {links.map((link, index) => (
            <div key={index} className="mb-2 flex gap-2">
              <input
                type="text"
                value={link}
                onChange={(e) => handleLinkChange(index, e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
          ))}
          <button type="button" onClick={handleAddLink} className="text-[#BE3144]">
            <FiPlus className="inline mr-1" /> Add Link
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Upload Files</label>
          <input type="file" multiple onChange={handleFileChange} className="block w-full text-sm text-gray-600" />
        </div>

        {files.length > 0 && (
          <div className="mt-4">
            <h3 className="text-sm font-medium mb-2">Image Previews</h3>
            <div className="grid grid-cols-3 gap-4">
              {Array.from(files).map((file, index) => (
                <div key={index} className="relative">
                  <img
                    src={URL.createObjectURL(file) || "/placeholder.svg"}
                    alt={`preview-${index}`}
                    className="w-full h-32 object-cover rounded"
                  />
                  <div
                    onClick={() => handleRemoveFile(index)}
                    className="absolute top-2 right-2 bg-white rounded-full p-2 cursor-pointer hover:bg-gray-200"
                  >
                    <FiX size={20} className="text-[#BE3144]" />
                  </div>
                </div>
              ))}
              <div className="flex justify-center items-center">
                <label
                  htmlFor="image-upload"
                  className="w-full h-32 flex justify-center items-center bg-gray-200 rounded cursor-pointer"
                >
                  <FiPlus size={30} className="text-[#BE3144]" />
                  <span className="ml-2 text-[#BE3144]">Add more images</span>
                </label>
                <input id="image-upload" type="file" multiple onChange={handleFileChange} className="hidden" />
              </div>
            </div>
          </div>
        )}

        <motion.button
          type="submit"
          className="px-4 py-2 bg-[#BE3144] text-white rounded hover:bg-[#BE3144] flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <motion.div
                className="w-5 h-5 border-t-2 border-white rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <span className="ml-2">Posting...</span>
            </>
          ) : (
            <>
              <FiUpload className="mr-2" />
              Post News
            </>
          )}
        </motion.button>
      </form>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
            >
              <div className="flex items-center justify-center mb-4">
                <FiCheck className="text-green-500 text-4xl" />
              </div>
              <h2 className="text-xl font-bold mb-2 text-center">Success!</h2>
              <p className="text-center">{message}</p>
              <motion.button
                className="mt-4 px-4 py-2 bg-[#BE3144] text-white rounded hover:bg-[#BE3144] w-full"
                onClick={() => setShowModal(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default PostNews

