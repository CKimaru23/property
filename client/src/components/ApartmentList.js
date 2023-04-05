import ApartmentCard from "./ApartmentCard";

function ApartmentList({ apartments, onDeleteApartment, onUpdateApartment }) {
  return (
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
  );
}

export default ApartmentList;