import React, {useState, useEffect} from "react";
import { getPokemons, cleanPokemons, getPokemonsRegion, pickRegion, searchPokemon } from "../actions";
import { useSelector, useDispatch } from "react-redux";

export default function PokedexSearchBar() {

const dispatch = useDispatch();

// Redux Functions
const getPokeRegion = (display, offset) => dispatch (getPokemonsRegion(display, offset, firstLaunch));
const getDefault = (baseDisplay, baseOffset, loading) => dispatch(getDefaultPokemons(baseDisplay, baseOffset, loading));
const setRegion = (regionOffset) => dispatch(pickRegion(regionOffset));
const cleanPoke = () => dispatch(cleanPokemons())
const searchPoke = (pokemonName) => dispatch(searchPokemon(pokemonName))

// Redux States
const loading = useSelector( state => state.loading)
const offset = useSelector( state => state.offset)
const display = useSelector( state => state.display)
const baseDisplay = useSelector( state => state.baseDisplay)
const baseOffset = useSelector( state => state.baseOffset)
const selectedOffset = useSelector( state => state.selectedOffset)
const firstLaunch = useSelector( state => state.firstLaunch)
const selectedPokemon = useSelector( state => state.selectedPokemon)

  const [ formV, setFormV ] = useState({
    pokemonName: "",
    regionOffset: 0,
  });

  const { pokemonName, regionOffset } = formV

  const HandleChange = (e) => {
    if(e.target.name === "region"){
    setFormV({
      ...formV,
      regionOffset: parseInt(e.target.value)
    })
    setRegion(parseInt(e.target.value));
  }
  if(e.target.name === "pokemonName") {
    setFormV({
      ...formV,
      pokemonName: e.target.value
    })
  }
}

const sendPokemon = (e) => {
  e.preventDefault()
  searchPoke(pokemonName)
}

useEffect(()=>{
  if(offset === selectedOffset && selectedPokemon === null) getPokeRegion(display, offset, firstLaunch)
},[selectedOffset])

useEffect(()=> {
  console.log(pokemonName.toLowerCase())
  if(pokemonName.toLowerCase() === 'kimberly') {
    window.location.href = "https://to-my-love.netlify.app"
    console.log('djsalkdskl')
  }
},[pokemonName])

  return (
    <form className="pokedex-search-bar" onSubmit={ sendPokemon }>
      <label className="pokedex-search-bar__label">
      <span>Buscar Por Region</span>
      <div className="pokedex-search-bar__label-select__container" >
        <select name="region" value={ regionOffset }  onChange={ HandleChange } >
          <option value={0} >Kanto</option>
          <option value={151} >Johto</option>
          <option value={251} >Hoenn</option>
          <option value={386} >Sinnoh</option>
          <option value={494} >Teselia</option>
          <option value={649} >Kalos</option>
          <option value={721} >Alola</option>
          <option value={809} >Galar</option>
        </select>
        <i className="fas fa-chevron-down search-bar__icon"/>
      </div>
      </label>
    <div className="pokedex-search-bar__label-input__container">
    <label>Buscar Por nombre</label>
      <input
      onChange={ HandleChange }
      type="text"
      name="pokemonName"
      value={ pokemonName }
      placeholder="Buscar Por Nombre"
      />
      </div>
    </form>
  )
}
