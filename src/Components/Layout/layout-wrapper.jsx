"use client"

import { useEffect } from "react"
import { useSelector } from "react-redux"

export default function LayoutWrapper({ children }) {
  const { isDarkMode } = useSelector((state) => state.theme)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return <div className={isDarkMode ? "dark" : ""}>{children}</div>
}
