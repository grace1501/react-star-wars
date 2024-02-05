export default function StarShipCard( {starship} ) {
    console.log("Running")
    return (
        <>
        <h2>{starship.name}</h2>
        <ul>
            <li>{starship.model}</li>
            <li>{starship.manufacturer}</li>
        </ul>
        </>
    )
}