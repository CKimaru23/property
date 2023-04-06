import React, {useState} from 'react'

function ApartmentCard({ apartment, onDeleteApartment }) {
    const { id, name, image, price, is_on_sale: isOnSale  } = apartment;

    const [saleStatus, setSaleStatus] = useState(isOnSale);
  
    function handleDeleteClick() {
      fetch(`/apartments/${id}`, {
        method: "DELETE",
      }).then((r) => {
        if (r.ok) {
          onDeleteApartment(id);
        }
      });
    }
  
    // 
    
    const handleIsOnSaleClick = async () => {
        try {
          const response = await fetch(`/apartments/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ apartment: { is_on_sale: 'sold' } })
          });
    
          if (response.ok) {
            setSaleStatus('sold');
          } else {
            console.log('Error updating apartment status');
          }
        } catch (error) {
          console.log(error);
        }
      };
  
    return (
        <>
            
            <li className="card">
                <img src={image} alt={name} />
                <h4>{name}</h4>
                <p>Price: {price}</p>
                <button className={saleStatus === 'on sale' ? 'ui green button' : 'ui red button'} onClick={handleIsOnSaleClick}>
                    {saleStatus === 'on sale' ? 'on sale': 'sold' }
                </button>
                <button className="danger" onClick={handleDeleteClick}>Delete</button>
            </li>
      </>
    );
  }
  
  export default ApartmentCard;
  