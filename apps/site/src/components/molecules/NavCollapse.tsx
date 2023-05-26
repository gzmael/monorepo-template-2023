import { cva } from 'class-variance-authority'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from './NavigationMenu'
import { cn } from '../../utils/utils'

const navVariants = cva(
  'absolute w-full h-screen top-14 right-0 lg:hidden overflow-hidden w-full bg-white shadow-xl transition-all duration-500 flex flex-col justify-center items-center invisible opacity-0 translate-x-full',
  {
    variants: {
      show: {
        true: 'visible opacity-100 translate-x-0',
      },
    },
    defaultVariants: {
      show: false,
    },
  },
)

type NavCollapseProps = {
  show?: boolean
  onClickMenu: () => void
}

const NavCollapse = ({ show = false, onClickMenu }: NavCollapseProps) => {
  const pathname = usePathname()
  return (
    <div className={cn(navVariants({ show }))}>
      <NavigationMenu orientation="vertical">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link
              href="/"
              onClick={onClickMenu}
              className={navigationMenuTriggerStyle()}
            >
              Início
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="/termos"
              onClick={onClickMenu}
              className={navigationMenuTriggerStyle({
                className: `w-max ${
                  pathname === '/termos' && 'nav-menu-md-actived'
                }`,
              })}
            >
              Termos de Uso
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="/privacidade"
              onClick={onClickMenu}
              className={navigationMenuTriggerStyle({
                className: `w-max ${
                  pathname === '/privacidade' && 'nav-menu-md-actived'
                }`,
              })}
            >
              Política de Privacidade
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

export { NavCollapse }
