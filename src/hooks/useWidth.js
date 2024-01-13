import { useState } from "react"

function useWidth() {
  const [windowWidth] = useState(window.innerWidth)

  return windowWidth
}

export default useWidth

