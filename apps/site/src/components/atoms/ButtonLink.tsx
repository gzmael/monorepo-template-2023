import { AnchorHTMLAttributes, forwardRef } from 'react'

import { VariantProps, cva } from 'class-variance-authority'

import {
  ButtonBase,
  ButtonColors,
  ButtonSizes,
  Radii,
} from '../../styles/tokens'
import { cn } from '../../utils/utils'

const buttonLinkVariants = cva(ButtonBase, {
  variants: {
    color: ButtonColors,
    size: ButtonSizes,
    radii: Radii,
    w: {
      full: 'w-full',
      half: 'w-3/4',
      auto: 'w-auto',
    },
  },
  defaultVariants: {
    color: 'transparent',
    size: 'md',
    w: 'auto',
    radii: 'sm',
  },
  compoundVariants: [
    {
      color: 'icon',
      size: 'sm',
      class: 'p-1.5',
    },
    {
      color: 'icon',
      size: 'md',
      class: 'p-2',
    },
    {
      color: 'icon',
      size: 'lg',
      class: 'p-3.5',
    },
  ],
})

export type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonLinkVariants>

const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, color, size, w, radii, children, href, ...props }, ref) => {
    return (
      <a
        className={cn(buttonLinkVariants({ color, size, w, radii, className }))}
        ref={ref}
        href={href}
        {...props}
      >
        {children}
      </a>
    )
  },
)

ButtonLink.displayName = 'ButtonLink'

export { ButtonLink, buttonLinkVariants }
