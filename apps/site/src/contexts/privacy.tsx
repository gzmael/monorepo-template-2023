'use client'

import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'

import { parseCookies, setCookie } from 'nookies'

import { PrivacyBox } from '../components/molecules/PrivacyBox'

interface PrivacyContextData {
  accept: () => void
}

export const PrivacyContext = createContext({} as PrivacyContextData)

interface PrivacyProviderProps {
  children: ReactNode
}

const PrivacyProvider = ({ children }: PrivacyProviderProps) => {
  const [status, setStatus] = useState<undefined | boolean>()

  useEffect(() => {
    const { 'baita-site:privacy@v1.1': accepted } = parseCookies()

    if (accepted) {
      setStatus(true)
    }
  }, [])

  const accept = useCallback(() => {
    setStatus(() => true)
    const payload = {
      status: true,
      timestamp: new Date().getTime(),
    }

    setCookie(undefined, 'baita-site:privacy@v1.1', JSON.stringify(payload), {
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
    })
  }, [])

  return (
    <PrivacyContext.Provider value={{ accept }}>
      {children}
      {status === true ? null : <PrivacyBox />}
    </PrivacyContext.Provider>
  )
}

export { PrivacyProvider }
