import ApartmentCard from "./ApartmentCard";

function ApartmentList({ apartments, onDeleteApartment, onUpdateApartment }) {
  return (
    <>
        <h1>My Properties</h1>
            <ul className="cards">
            {apartments.map((apartment) => {
                return (
                <ApartmentCard
                    key={apartment.id}
                    apartment={apartment}
                    onDeleteApartment={onDeleteApartment}
                    onUpdateApartment={onUpdateApartment}
                />
                );
            })}
            
            </ul>
    </>
  );
}

export default ApartmentList;