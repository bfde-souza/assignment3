import Link from "next/link";
import { Card } from "react-bootstrap";
import ListingDetails from "@/components/ListingDetails";
import PageHeader from "@/components/PageHeader";

export async function getStaticProps() {
  const res = await fetch("https://assignment1-tau-woad.vercel.app/api/listings/00005");
  const data = await res.json();

  return {
    props: {
      listing: data,
    },
  };
}

export default function About({ listing }) {
  return (
    <>
      <PageHeader text="About the Developer: Bruno Felipi de Souza" />
      <Card>
        <Card.Body>
          <p>
            Hello! I'm Bruno Felipi de Souza, a passionate web developer interested in building modern, user-friendly applications using React and Next.js.
          </p>
          <p>
            Check out one of my favorite listings from our API:{" "}
            <Link href={`/listing/${listing._id}`}>{listing.name}</Link>
          </p>
        </Card.Body>
        <ListingDetails listing={listing} />
      </Card>
    </>
  );
}