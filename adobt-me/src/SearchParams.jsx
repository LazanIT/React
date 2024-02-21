import { useState } from 'react';

const Animals = ["Bird", "Cat","Dog", "Rabbit", "Reptile"];

const SearchParams = () => {
   const [location, setLocation] = useState(""); 
   const [animal, setAnimal] =useState("");
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    location
                    <input onChange={e => setLocation(e.target.value)} id="location" value={location} placeholder="location" />
                </label>
                <label htmlFor="animal">
                    animal
                    <select id="animal" value={animal} onChange={e => {
                        setAnimal(e.target.value)
                    }}>
                        <option />
                        {Animals.map((animal) => (
                            <option key={animal}>{animal}</option>
                        ))}
                    </select>
                </label>
                <button type="button">Submit</button>
            </form>
        </div>
    )
}


export default SearchParams;