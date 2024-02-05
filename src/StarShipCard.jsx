export default function StarShipCard( {starship} ) {
    console.log("Running")
    return (
        <div className="card">
        <h2>Name: {starship.name}</h2>
        <ul>
            <li>Model: {starship.model}</li>
            <li>Manufacturer: {starship.manufacturer}</li>
            <li>Cost in credits: {starship.cost_in_credits}</li>
            <li>Length: {starship.length}</li>
        </ul>
        </div>
    )
}

