function CentersCard({ id,name, Place, State }) {
    return (
        <div className="Centers-card">
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>Place: {Place}</p>
            <p>State: {State}</p>
            <p>----------------------------------</p>

        </div>
    );
}

export default CentersCard;