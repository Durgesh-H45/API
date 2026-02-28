function SpacecraftsCard({ name, id }) {
    return (
        <div className="spacecraft-card">
            <p>ID: {id}</p>
            <h3>{name}</h3>
            <p>/////////--------/////////----------/////////</p>
        </div>
    );
}

export default SpacecraftsCard;