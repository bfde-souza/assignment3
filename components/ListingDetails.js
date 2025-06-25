import { Container, Row, Col } from "react-bootstrap";

export default function ListingDetails({ listing }) {
  if (!listing) return null;

  // Fallbacks for missing data
  const pictureUrl = listing.images?.picture_url || "";
  const neighborhood = listing.interaction || "No neighborhood overview available.";
  const price = listing.price ? Number(listing.price).toFixed(2) : "N/A";
  const roomType = listing.room_type || "N/A";
  const bedType = listing.bed_type || "N/A";
  const beds = listing.beds || "N/A";
  const rating = listing.review_scores?.review_scores_rating || "N/A";
  const reviews = listing.number_of_reviews || "N/A";

  return (
    <Container>
      <Row>
        <Col lg>
          <img
            onError={(event) => {
              event.target.onerror = null;
              event.target.src = "https://placehold.co/600x400?text=Photo+Not+Available";
            }}
            className="img-fluid w-100"
            src={pictureUrl}
            alt="Listing Image"
          />
          <br />
          <br />
        </Col>
        <Col lg>
          {neighborhood}
          <br />
          <br />
          <strong>Price:</strong> ${price}
          <br />
          <strong>Room:</strong> {roomType}
          <br />
          <strong>Bed:</strong> {bedType} ({beds})
          <br />
          <br />
          <strong>Rating:</strong> {rating}/100 ({reviews} Reviews)
          <br />
          <br />
          <br />
        </Col>
      </Row>
    </Container>
  );
}