// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextRequest } from 'next/server'
import cors from '../../lib/cors'

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req: NextRequest) {
  // `cors` also takes care of handling OPTIONS requests
  return cors(
    req,
    new Response(JSON.stringify({ message: 'Hello World!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  )
}
