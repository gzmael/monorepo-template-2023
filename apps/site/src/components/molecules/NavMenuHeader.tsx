'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuMdTriggerStyle,
} from './NavigationMenu'

const NavMenuHeader = () => {
  const pathname = usePathname()

  return (
    <NavigationMenu orientation="horizontal" className="h-full items-end">
      <NavigationMenuList className="h-full flex-row">
        <NavigationMenuItem className="flex h-full w-full">
          <Link
            href="/termos"
            className={navigationMenuMdTriggerStyle({
              className: `w-max ${
                pathname === '/termos' && 'nav-menu-md-actived'
              }`,
            })}
          >
            Termos de Uso
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="flex h-full w-full">
          <Link
            href="/privacidade"
            className={navigationMenuMdTriggerStyle({
              className: `w-max ${
                pathname === '/privacidade' && 'nav-menu-md-actived'
              }`,
            })}
          >
            Privacidade
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export { NavMenuHeader }
