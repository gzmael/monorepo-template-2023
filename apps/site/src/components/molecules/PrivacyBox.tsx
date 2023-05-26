'use client'

import { useContext } from 'react'

import Link from 'next/link'

import { PrivacyContext } from '../../contexts/privacy'
import { Button } from '../atoms/Button'
import { Text } from '../atoms/Text'

const PrivacyBox = () => {
  const { accept } = useContext(PrivacyContext)

  return (
    <div className="ease-[cubic-bezier(0.17, 0.55, 1)] fixed inset-x-auto bottom-0 z-50 w-full p-2 animate-in fade-in duration-1000 delay-1000 fill-mode-backwards repeat-1 xl:p-0">
      <div
        className="mx-auto flex max-w-6xl flex-col items-center gap-4 space-x-1 rounded-lg border border-gray-300 bg-white p-4 shadow-2xl md:flex-row xl:mb-2"
        style={{
          transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 3s',
        }}
      >
        <Text
          type="textBody"
          size="md"
          className="text-center text-sm md:text-left"
        >
          Este site utiliza cookies para permitir uma melhor experiência por
          parte do utilizador. Ao navegar no site estará consentindo a sua
          utilização. Para obter mais informações, consulte nossos{' '}
          <Link
            href="/termos"
            prefetch={false}
            className="font-bold text-indigo-900 hover:text-indigo-800"
          >
            Termos
          </Link>{' '}
          e{' '}
          <Link
            href="/privacidade"
            prefetch={false}
            className="font-bold text-indigo-900 hover:text-indigo-800"
          >
            Política de Privacidade
          </Link>
          .
        </Text>
        <Button
          color="primary"
          size="sm"
          radii="sm"
          onClick={accept}
          title="Concordar com os Termos"
          className="w-full md:w-72"
        >
          Concordo
        </Button>
      </div>
    </div>
  )
}

export { PrivacyBox }
