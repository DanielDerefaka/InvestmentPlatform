// pages/api/login.ts
import { NextApiRequest, NextApiResponse } from 'next'
import { findAdminByEmail, validateAdminPassword } from '@/lib/queries'
import jwt from 'jsonwebtoken'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      return handlePostRequest(req, res)
    case 'GET':
      return res.status(200).json({ message: 'Login endpoint is working. Please use POST method to login.' })
    default:
      return res.status(405).json({ message: `Method ${req.method} Not Allowed` })
  }
}

async function handlePostRequest(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' })
  }

  try {
    const admin = await findAdminByEmail(email)

    if (!admin) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    const isPasswordValid = await validateAdminPassword(admin, password)

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: admin.id, email: admin.email },
      process.env.JWT_SECRET!,
      { expiresIn: '1h' }
    )

    // Set HTTP-only cookie with the token
    res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/; Max-Age=3600; SameSite=Strict`)

    return res.status(200).json({ message: 'Login successful', user: { id: admin.id, email: admin.email } })
  } catch (error) {
    console.error('Login error:', error)
    return res.status(500).json({ message: 'An error occurred during login' })
  }
}