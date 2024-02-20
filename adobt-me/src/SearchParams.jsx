import { useState } from 'react';

const SearchParams = () => {
   const [location, setLocation] = useState(""); 
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    location
                    <input onChange={e => setLocation(e.target.value)} id="location" value={location} placeholder="location" />
                </label>
                <button type="button">Submit</button>
            </form>
        </div>
    )
}


export default SearchParams;