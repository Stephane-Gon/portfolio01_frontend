import { useRef } from "react"

function useBounce() {
  const ref = useRef(null)

  const addBounce = () => {

    if (!ref.current.classList.contains("bouncy-letter")) {
      ref.current.classList.add("bouncy-letter");
      setTimeout(
          function () {
            ref.current.classList.remove("bouncy-letter");
          },
          1000
      );
    }
  }

  return [ref, addBounce]
}

export default useBounce

