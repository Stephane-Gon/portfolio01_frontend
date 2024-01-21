import { useEffect, useState, useCallback } from "react"

function useFetch(path, ref, title) {
  const [content, setContent] = useState({})
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  
  const fetchData = useCallback(() => {
    fetch(`${process.env.REACT_APP_API_URL}/${path}`)
      .then((res) => {
        if(!res.ok) {
          throw Error('We have a little problem.')
        }
        return res.json()
      })
      .then((data) => {
        setIsLoading(false);
        setContent(data);
        setIsError(null)
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(error.message);


        let errorMsg = `We could not get the "${title}" page data, try again in a few minutes.`
        ref.current.querySelector('h5').innerText = errorMsg
        ref.current.style.display = 'block'
      });
  }, [path, ref, title])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return [content, isLoading]
}

export default useFetch