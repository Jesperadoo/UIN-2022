import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getMovieByActor, getMovies } from '../lib/services/movieService'

export default function Movie({ actor }) {
  const [loading, setLoading] = useState(false)
  const [movie, setMovie] = useState()

  useEffect(() => {
    const getMovieData = async () => {
      setLoading(true)
      const movies = await getMovies()

      setMovie(movies)
      setLoading(false)
    }
    getMovieData()
  }, [])

  const handleFilter = async (event) => {
    const chooseActor = event.target.value.toLowerCase()
    let data
    if (chooseActor === 'alle') {
      data = await getMovies()
    } else {
      data = await getMovieByActor(chooseActor)
    }
    setMovie(data)
  }

  return (
    <div>
      <select
        id="chooseActor"
        defaultValue="Alle"
        className="m-auto mb-8 flex w-52 rounded-md border-0 bg-yellow-100 py-2 pl-3 pr-8 text-base text-stone-700 shadow-lg focus:border-indigo-500 sm:text-sm"
        onChange={handleFilter}
      >
        <option value="Alle">Alle</option>
        {actor?.map((chooseActor) => (
          <option key={chooseActor} value={chooseActor}>
            {chooseActor}
          </option>
        ))}
      </select>
      <div className="mb-60 grid grid-cols-3 gap-5 text-2xl">
        {movie?.map((film) => (
          <div className="rounded-lg bg-yellow-100 p-5 text-stone-700 shadow-lg">
            <h1 key={film.slug} className="flex justify-center">
              <Link to={`${film.slug}`}>{film.title}</Link>
            </h1>
            <img
              src={film.poster?.asset.url}
              alt="img"
              className="m-auto mt-4 flex max-h-40 rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
