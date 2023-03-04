import { useQuery } from "react-query";

type Options = {
  consultation: Array<string>;
  therapy: Array<string>;
};

const getOptions = async () => {
  const response = await fetch(
    "https://moshhero.free.beeceptor.com/my/api/options"
  );
  const data = await response.json();
  return data as Options;
};

export const useGetOptions = () => {
  return useQuery("options", () => getOptions());
};
