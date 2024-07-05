import supabase from "@/supabase/supabase";
import axios from "axios";

const LIMIT = 10;

export const getPagenatedProductsWithSupabase = async (page:number, limit:number = LIMIT) => {
  const { data: products, error } = await supabase
  .from('products')
  .select('*')
  .range((page-1)*limit, page*limit);
  return products;
}

export const getPagenatedProducts = async(page:number, limit:number) => {
  const response = await axios.get(`http://localhost:3000/api/products?page=${page}&limit=${limit}`)
  return response.data;
}