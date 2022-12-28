import axios from "axios";
import { useQuery } from 'react-query'

const fetchHeroes = () => axios.get('http://localhost:4000/superheroes').then(response => response.data)

export default function useHeroes() {
  return useQuery("heroes", fetchHeroes)
}
