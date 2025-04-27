import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    const response = await axios.get(`${process.env.API_URL}/products`, {
      headers: {
        'x-api-key': process.env.API_KEY
      }
    });
    
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}