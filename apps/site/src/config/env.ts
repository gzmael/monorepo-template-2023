import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_VERCEL_URL: z.string().url(),
})

const object = {
  NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
}

export const env = envSchema.parse(object)
