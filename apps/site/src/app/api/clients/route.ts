import { ZodError, z } from 'zod'
import { fromZodError } from 'zod-validation-error'

const headers = {
  'Content-Type': 'application/json',
}

const bodySchema = z.object({
  name: z
    .string({ required_error: 'Não esqueça seu Nome.' })
    .min(15, { message: 'Mínimo de 15 caracteres' }),
  email: z.string().email('E-mail inválido!'),
  phone: z
    .string({ required_error: 'É preciso informar o Telefone' })
    .regex(new RegExp(/^\(\d{2}\)\s\d{4,5}[-.\s]?\d{4}$/), {
      message: 'Telefone Inválido!',
    }),
  host: z.string({ required_error: 'Invalid host' }),
  companyName: z.string({ required_error: 'Invalid company name' }),
  token: z.string({ required_error: 'É preciso aceitar o Recaptcha' }).min(32),
})

export async function POST(req: Request) {
  const body = await req.json()

  try {
    bodySchema.parse(body)

    return new Response(
      JSON.stringify({ data: 'Client created successfully' }),
      {
        status: 201,
      },
    )
  } catch (error) {
    if (error instanceof ZodError) {
      const validationError = fromZodError(error)
      return new Response(
        JSON.stringify({
          message: validationError.message,
        }),
        {
          status: 400,
          headers,
        },
      )
    }
    return new Response(JSON.stringify(error), {
      status: 400,
      headers,
    })
  }
}
