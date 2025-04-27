import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  console.log("API_URL:", process.env.API_URL);
  console.log("API_KEY exists:", !!process.env.API_KEY);
  try {
    const response = await axios.get(`${process.env.API_URL}/products`, {
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
