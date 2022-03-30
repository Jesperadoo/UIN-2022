import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getActors } from '../lib/services/movieService'

export default function Actor({ actor, setActor }) {
  const getActorData = async () => {
    const actors = await getActors([])
    setActor(actors)
  }

  useEffect(() => {
    getActorData()
  })

  return (
    <div className="mb-56 grid grid-cols-3 gap-5">
      {actor?.map((skuespiller) => (
        <article className="rounded-lg bg-yellow-100 p-5 text-stone-700 shadow-lg">
          <h1 key={skuespiller?._id} className="flex justify-center text-2xl">
            {skuespiller.fullName}
          </h1>
          <p className="flex justify-center">
            <Link to={`${skuespiller.slug}`}>Les mer</Link>
          </p>
        </article>
      ))}
    </div>
  )
}
