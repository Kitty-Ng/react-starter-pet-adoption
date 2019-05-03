import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';
import Results from './Results';

const searchParams = () => {
  // const location = 'Seattle, WA';
  const [location, setLocation] = useState('Seattle, WA'); // this is a hook! All hooks begin with 'use'
  // useState hook is an array where it has old/ current state and new state as params
  // do not put hooks in forloops or if statements
  // in this example, Seattle,WA is the default location

  const [breeds, setBreeds] = useState([]); //this will come from the api and will change based on what animal they select
  // so we don't get a tabby dog

  //   const [animal, setAnimal] = useState('dog');
  //   const [breed, setBreed] = useState('');
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);

  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });

    setPets(animals || []);
  }

  // async functions always returns a promise and will resolve when the function completes
  // await

  useEffect(() => {
    setBreeds([]); // if you already have breeds, clear all breeds
    setBreed('');

    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedStrings = apiBreeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
    //this function will call the api everytime the animal selection changes
  }, [animal, setBreed, setBreeds]); //this is an array of this effect's dependencies

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form
        onSubmit={e => {
          e.preventDefault(); //prevents from sending html default form
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={event => setLocation(event.target.value)}
          />
        </label>

        {/* <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={event => setAnimal(event.target.value)}
            onBlur={event => setAnimal(event.target.value)}
          >
            <option>All</option>
            {ANIMALS.map(a => (
              <option key={a} value={a}>
                {a}
              </option>
              // keys must be unique for each calue
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={event => setBreed(event.target.value)}
            onBlur={event => setBreed(event.target.value)}
            disabled={!breeds.length}
          >
            <option>All</option>
            {breeds.map(a => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </label> */}

        <AnimalDropdown />
        <BreedDropdown />

        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default searchParams;
