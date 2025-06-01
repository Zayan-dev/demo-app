import { fetchData } from "./fetcher";

export const fetchUsers = () =>
  fetchData("https://jsonplaceholder.typicode.com/users");
