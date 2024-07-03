"use client"

import supabase from "@/supabase/supabase";
import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  const response = await supabase.from("brands").select("*");
  return response.data;
};

export const useGetData = () => useQuery({
  queryKey: ["data"],
  queryFn: () => fetchData(),
});