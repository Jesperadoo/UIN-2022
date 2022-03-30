import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Movies from '../components/Movies'
import Navigation from './Navigation'
import Actor from '../components/Actor'
import ActorName from '../components/ActorName'
import Layout from '../layout/Layout'

export default function PageRoutes() {
  const [actor, setActor] = useState([])
  const [actorInfo, setActorInfo] = useState(null)

  return (
    <main>
      <Navigation />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Movies />} />
          <Route path="movies" element={<Movies />} />
          <Route path="actors">
            <Route
              index
              element={<Actor actor={actor} setActor={setActor} />}
            />
            <Route
              path=":slug"
              element={
                <ActorName
                  actor={actor}
                  actorInfo={actorInfo}
                  setActorInfo={setActorInfo}
                />
              }
            />
          </Route>
        </Route>
      </Routes>
    </main>
  )
}
