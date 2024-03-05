import { NextResponse } from "next/server";

export async function GET(requst, content) {
  let StudentDetail = content.params.student;
  console.log(StudentDetail);
  return NextResponse.json({ StudentDetail }, { status: 200 });
}
