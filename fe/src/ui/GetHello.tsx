"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const GetHello: React.FC = () => {
  const { data } = useQuery({
    queryKey: ["hello"],
    queryFn: () => {
      return axios.get("/api/v1/hello");
    },
  });
  return <div>{JSON.stringify(data, null, 2)}</div>;
};
