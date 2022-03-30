import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getActorInfo } from '../lib/services/movieService'

export default function ActorName({ actor, setActorInfo }) {
  const { slug } = useParams()

  const actors = actor.find((person) => person.slug === slug)

  useEffect(() => {
    const getActorInfoData = async () => {
      const info = await getActorInfo(slug)
      setActorInfo(info)
    }
    getActorInfoData()
  }, [slug])

  return (
    <div className="mb-56 flex justify-center rounded-lg bg-yellow-100 p-5 text-2xl text-stone-700 shadow-lg">
      <h2>{actors.fact}</h2>
    </div>
  )
}
