'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Heading } from '../atoms/Heading'
import { Text } from '../atoms/Text'

const NotFoundSection = () => {
  const { back } = useRouter()
  return (
    <section className="bg-dark-700 relative flex h-screen w-screen flex-col items-center justify-center gap-8">
      <header className="z-10 flex flex-col items-center gap-2">
        <Heading size="2xl" type="info" asChild>
          <h2>404</h2>
        </Heading>
        <Text weight="bold" size="xl" type="white">
          Página não encontrada!
        </Text>
      </header>
      <footer className="z-10 text-center">
        <Text type="neutral">Houston, nós temos um baita problema aqui...</Text>
        <Link
          href="/"
          onClick={() => back()}
          className="text-indigo-300 hover:text-indigo-600"
        >
          Tente voltar para o início do site.
        </Link>
      </footer>
    </section>
  )
}

export { NotFoundSection }
