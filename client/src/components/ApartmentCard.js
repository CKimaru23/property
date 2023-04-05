function ApartmentCard({ apartment, onDeleteApartment, onUpdateApartment }) {
    const { id, name, image, price, is_on_sale: isOnSale } = apartment;
  
    function handleDeleteClick() {
      fetch(`/apartments/${id}`, {
        method: "DELETE",
      }).then((r) => {
        if (r.ok) {
          onDeleteApartment(id);
        }
      });
    }
  
    function handleIsOnSaleClick() {
      fetch(`/apartments/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ is_on_sale: !isOnSale }),
      })
        .then((r) => r.json())
        .then((updatedApartment) => {
          onUpdateApartment(updatedApartment);
        });
    }
  
    return (
      <li className="card">
        <img src={image} alt={name} />
        <h4>{name}</h4>
        <p>Price: {price}</p>
        {isOnSale ? (
          <button className="primary" onClick={handleIsOnSaleClick}>
            On Sale
          </button>
        ) : (
          <button className="danger" onClick={handleIsOnSaleClick}>Sold</button>
        )}
        <button className="secondary" onClick={handleDeleteClick}>Delete</button>
      </li>
    );
  }
  
  export default ApartmentCard;
  