import { getPagenatedProductsWithSupabase } from '@/services/products.service';
import { NextResponse, type NextRequest } from 'next/server';

// query is "hello" for /api/search?query=hello

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = Number(searchParams.get('page'));
  const limit = Number(searchParams.get('limit')); 

  if(!page || !limit) return NextResponse.json({title: "query is empty"});

  const data = await getPagenatedProductsWithSupabase(page, limit);

  if(data === null || data.length < 1) return  NextResponse.json({title: "data is empty"});
  
  if(data.length > limit) {
    // 다음 페이지가 있다는 뜻.
    const response = data.slice(0, limit);
    const nextPage = page + 1;
    return NextResponse.json({result: response, nextPage: nextPage});    
  } else {
    // 다음 페이지가 없다는 뜻.
    const nextPage = null;
    return NextResponse.json({result: data, nextPage: nextPage});
  }
}