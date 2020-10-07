import { ALL_TOURIST_PLACES } from "../utils/constants";
// const url = process.env.NEXT_PUBLIC_REST_API_ENDPOINT;
export async function getAllPlaces() {
  const places = await fetch(`${ALL_TOURIST_PLACES}`).then((res) => res.json());
  console.log(places, "places-intp");
  return places.data;
}
export async function getTouristPlace(id) {
  const place = await fetch(`${ALL_TOURIST_PLACES}${id}`).then((res) =>
    res.json()
  );
  return place.data;
}
