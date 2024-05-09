import React, { useEffect, useState } from 'react'

const useMedia = (media) => {
  const [match, setMatch] = useState(null)

  useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media)
      setMatch(matches)
    }
    //Garente que o changeMatch seja chamado pelo menos 1 vez, ou seja: não necessita mais de dar resize ao atualizar
    changeMatch()

    window.addEventListener('resize', changeMatch)

    return () => window.removeEventListener('resize', changeMatch)
  }, [media])

  return match
}

export default useMedia
