import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  
  try {
    const response = await axios.get(`${process.env.API_URL}/products/${id}`, {
      headers: {
        'x-api-key': process.env.API_KEY
      }
    });
    
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 });
  }
}