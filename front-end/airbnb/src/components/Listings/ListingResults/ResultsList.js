import React from "react";
import { Link } from 'react-router-dom';
import './ListingResults.css';

const ResultsList = ({listings, guests, loading}) => {
    if(loading){
      return <h2>Loading...</h2>
    }

    if(listings.length === 0){
      return <h2 style={{textAlign: 'center'}}>No listings found!</h2>
    }
  
    return (
      <main>
        <ul
        style={{display: 'flex', flexDirection: 'column'}}>
        {listings.map(listing => (
          <li key={listing.id}>
            <div className="list-wrapper">
              <Link to={{
                pathname: `/listings/${listing.id}`,
                state: {
                  listingId: listing.id
                }
              }} style={{textDecoration: 'none', color: 'brown'}} query={listing.id}>
                  <div className='listing-results-container'>
                    <div className='image-container'>
                      {/* <img src='../.profile-photo.jpg' alt='listing photo' /> */}
                    </div>
                    <div className="listing-title">
                    {listing.title}
                    </div>
                    <div className="listing-cost">
                      {listing.minCost+(guests-1)*listing.costPerExtraGuest}€/day
                    </div>
                    <div className="listing-info">
                      <div className="listing-type">
                        Type: {((listing.type).replace('_', ' ')).toLowerCase()}
                      </div>
                      <div className="listing-beds">
                        Beds: {listing.numOfBeds}
                      </div>
                      <div className="listing-rating">
                        {listing.averageRating}/5 stars, {listing.numOfReviews} total reviews
                      </div>
                    </div>
                  </div>
              </Link>
            </div>
          </li>
        ))}
        </ul>
      </main>
    )
  }

export default ResultsList;