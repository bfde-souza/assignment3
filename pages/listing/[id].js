import { useRouter } from 'next/router';
import useSWR from 'swr';
import ListingDetails from '@/components/ListingDetails';
import Error from 'next/error';
import PageHeader from '@/components/PageHeader';

export default function Listing() {
  const router = useRouter();
  const { id } = router.query;

  // Only fetch if id is defined
  const { data, error, isLoading } = useSWR(
    id ? `https://assignment1-tau-woad.vercel.app/api/listings/${id}` : null
  );

  if (isLoading) return null;

  if (error || !data || Object.keys(data).length === 0) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      <PageHeader text={data.name} />
      <ListingDetails listing={data} />
    </>
  );
}