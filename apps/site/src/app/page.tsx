/* eslint-disable import/order */
import { Metadata } from 'next'

import { Toaster } from '../components/organisms/Toaster'
import { AppContexts } from '../contexts'

import { siteConfig } from '../config/site'
import { Heading } from '../components/atoms/Heading'

export const metadata: Metadata = {
  title: siteConfig.getTitle(siteConfig.title),
  description:
    'Somos uma empresa de Desenvolvimento Web com foco em soluções otimizadas, rápidas e eficientes!',
}

export default function Home() {
  return (
    <>
      <AppContexts>
        <Heading>Template</Heading>
      </AppContexts>
      <Toaster />
    </>
  )
}
