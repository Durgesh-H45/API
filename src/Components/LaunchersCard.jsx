// const LaunchersCard = ({ data }) => {
//   return (
//     <div className="launch-ers">
//       <h2>Launchers</h2>

//       {data && data.length > 0 ? (
//         data.map((item, index) => (
//           <div key={index}>
//             <h3>{item.id}</h3>
//           </div>
//         ))
//       ) : (
//         <p>Loading launchers...</p>
//       )}
//     </div>
//   );
// };

// export default LaunchersCard;

function LaunchersCard({ id }) {
    return (
        <div className="Launchers-card">
            <p>ID: {id}</p>
            <p>------------</p>
            
        </div>
    );
}

export default LaunchersCard;