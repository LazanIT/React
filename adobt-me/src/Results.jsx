import Pet from "./Pet";

const Results = ({pets}) => {
    return (
        <div className="search">
            {!pets.length ? (
                <h1>No pets found</h1>
            ) : (
                pets.map(pet => {
                    <Pet 
                         // {...pet} // Spread Operator ( Bad idea )
                        animal = {pet.animal}
                        name = {pet.name}
                        breed = {pet.breed}
                        images = {pet.iamges}
                        location = {`${pet.city}, ${pet.state}`}
                        key= {pet.id}
                    />
                })
            )
        }
        </div>
    )

}

export default Results;
