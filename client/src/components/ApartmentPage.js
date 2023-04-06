import { useEffect, useState } from "react";
import NewApartmentForm from "./NewApartmentForm";
import ApartmentList from "./ApartmentList";
import Search from "./Search";

function ApartmentPage() {
  const [apartments, setApartments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/apartments")
      .then((r) => r.json())
      .then((apartmentsArray) => {
        setApartments(apartmentsArray);
      });
  }, []);

  function handleAddApartment(newApartment) {
    const updatedApartmentsArray = [...apartments, newApartment];
    setApartments(updatedApartmentsArray);
  }

  function handleDeleteApartment(id) {
    const updatedApartmentsArray = apartments.filter((apartment) => apartment.id !== id);
    setApartments(updatedApartmentsArray);
  }

  function handleUpdateApartment(updatedApartment) {
    const updatedApartmentsArray = apartments.map((apartment) => {
      return apartment.id === updatedApartment.id ? updatedApartment : apartment;
    });
    setApartments(updatedApartmentsArray);
  }

  const displayedApartments = apartments.filter((apartment) => {
    return apartment.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <main>
      <NewApartmentForm onAddApartment={handleAddApartment} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ApartmentList
        apartments={displayedApartments}
        onDeleteApartment={handleDeleteApartment}
        onUpdateApartment={handleUpdateApartment}
      />
    </main>
  );
}

export default ApartmentPage;
