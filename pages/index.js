/*********************************************************************************
*  WEB422 – Assignment 3
*
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
* 
*  Name: Bruno Felipi de Souza Student ID: 132021239 Date: 2025-06-24
*
********************************************************************************/ 


import useSWR from 'swr';
import { useState, useEffect } from 'react';
import { Pagination, Accordion } from 'react-bootstrap';
import ListingDetails from '@/components/ListingDetails';
import PageHeader from '@/components/PageHeader';

export default function Home() {
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);

  const { data, error } = useSWR(`https://assignment1-tau-woad.vercel.app/api/listings?page=${page}&perPage=10`);

  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);

  function previous() {
    if (page > 1) setPage(page - 1);
  }

  function next() {
    setPage(page + 1);
  }

  return (
    <>
      <PageHeader text="Browse Listings : Sorted by Number of Ratings" />
      <Accordion>
        {pageData && pageData.length > 0 ? (
          pageData.map(listing => (
            <Accordion.Item eventKey={listing._id} key={listing._id}>
              <Accordion.Header>
                <b>{listing.name}</b> &nbsp; {`${listing.address?.market || ''}${listing.address?.government_area ? ', ' + listing.address.government_area : ''}${listing.address?.country ? ', ' + listing.address.country : ''}`}
              </Accordion.Header>
              <Accordion.Body>
                <ListingDetails listing={listing} />
              </Accordion.Body>
            </Accordion.Item>
          ))
        ) : (
          <Accordion.Item eventKey="0">
            <Accordion.Header>No Listings Found</Accordion.Header>
            <Accordion.Body>
              No data available for this page.
            </Accordion.Body>
          </Accordion.Item>
        )}
      </Accordion>
      <br />
      <Pagination>
        <Pagination.Prev onClick={previous} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next} />
      </Pagination>
    </>
  );
}