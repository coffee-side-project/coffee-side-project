import supabase from "@/supabase/supabase";

const LIMIT = 10;

export const getPagenatedProducts = async (page:number, limit:number = LIMIT) => {

  if(!page || !limit) return ({error: "query is empty", data:null, nextPage:null});

  const { data, error } = await supabase
  .from('products')
  .select('*')
  .range((page-1)*limit, page*limit);

  if(error) ({error, data: null, nextPage: null})

  if(data === null || data.length < 1) return ({error: "data is empty", data: null, nextPage: null});
  
  if(data.length > limit) {
    // 다음 페이지가 있다는 뜻.
    const response = data.slice(0, limit);
    const nextPage = page + 1;
    return ({error:null, data: response, nextPage});    
  } else {
    // 다음 페이지가 없다는 뜻.
    return ({error: null, data, nextPage:null});
  }
}