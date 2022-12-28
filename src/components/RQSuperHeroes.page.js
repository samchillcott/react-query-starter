import useHeroes from "../query hooks/useHeroes"

export const RQSuperHeroesPage = () => {
  const heroes = useHeroes()
  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      { heroes.isLoading && <p> Loading heroes...</p> }
      { heroes.isError && <p> Could not fetch heroes</p> }
      { heroes.isSuccess && (
        <ul>
          { heroes?.data.map(hero => (
            <li key={ hero.name }>{ hero.name }</li>
          )) }
        </ul>
      ) }
    </>
  )
}
