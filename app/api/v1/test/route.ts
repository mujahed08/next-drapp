import { NextResponse } from 'next/server'
 
export async function GET() {
  const res = await fetch('http://localhost/api/v1/auth/users?apikey=apikeysecret2015', {
    headers: {
      'Content-Type': 'application/json'
    },
  })
  const data = await res.json()
 
  return NextResponse.json({ data })
}