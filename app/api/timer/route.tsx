import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(new Date().toISOString());
}
