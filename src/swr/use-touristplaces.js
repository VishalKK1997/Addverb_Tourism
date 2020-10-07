import useSWR from "swr";
import { ALL_TOURIST_PLACES } from "../utils/constants";

// import productFetcher from 'utils/api/product';
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function useTouristPlaces() {
  const { data, mutate, error } = useSWR(ALL_TOURIST_PLACES, fetcher, {
    revalidateOnFocus: false,
  });

  const loading = !data && !error;
  // const categories = data?.filter((current) => current.type === type);
  // const paginatedData = data?.slice(offset, limit);
  // const loggedOut = error && error.status === 403;

  return {
    loading,
    error,
    data,
    // loggedOut,
    // user: data,
    mutate,
  };
}
