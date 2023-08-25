export default function Card(props) {
   const {name,status,species,origin,gender,image,onClose} = props;
   return (
      <div>
          <button onClick={onClose}>X</button>
         <h2>Name: {name}</h2>
         {/* <h2>Status: {status}</h2> */}
         <h2>Species: {species}</h2>
         {/* <h2>Origin: {origin}</h2> */}
         <h2>Gender: {gender}</h2>
         <img src={image} alt={name} />
      </div>
   );
}
