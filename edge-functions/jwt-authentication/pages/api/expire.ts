// eslint-disable-next-line @next/next/no-server-import-in-page
import { type NextRequest } from 'next/server'
import { expireUserCookie } from '@lib/auth'
import { jsonResponse } from '@lib/utils'

export const config = {
  runtime: 'experimental-edge',
}

export default async function expire(req: NextRequest) {
  if (req.method !== 'POST') {
    return jsonResponse(405, { error: { message: 'Method not allowed' } })
  }
  return expireUserCookie(jsonResponse(200, { success: true }))
}
