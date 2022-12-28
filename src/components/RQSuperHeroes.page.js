import useHeroes from "../query hooks/useFetchHeroes"

export const RQSuperHeroesPage = () => {

  const heroes = useHeroes()

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      { heroes.isLoading && <p> Loading heroes...</p> }
      { heroes.isError && <p> Could not fetch heroes</p> }
      { heroes.isSuccess && (
      <ul>
        { heroes.data.map(hero => (
          <li>{ hero.name }</li>
        )) }
      </ul>
      ) }
    </>
  )
}
