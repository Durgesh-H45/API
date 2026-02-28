function CustomerCard({ id, country, launch_date, mass, launcher }) {
    return (
        <div className="Customer-card">
            <p>ID: {id}</p>
            <p>Country: {country}</p>
            <p>Launch Date: {launch_date}</p>
            <p>Mass: {mass}</p>
            <p>Launcher: {launcher}</p>
            <p>------------</p>
        </div>
    );
}

export default CustomerCard;