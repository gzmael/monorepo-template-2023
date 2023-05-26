'use client'

import { ReactNode } from 'react'

import { PrivacyProvider } from './privacy'

interface AppContextsProps {
  children: ReactNode
}

const AppContexts = ({ children }: AppContextsProps) => (
  <PrivacyProvider>{children}</PrivacyProvider>
)

export { AppContexts }
