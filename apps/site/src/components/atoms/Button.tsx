import { ButtonHTMLAttributes, forwardRef } from 'react'

import { VariantProps, cva } from 'class-variance-authority'

import {
  ButtonBase,
  ButtonColors,
  ButtonSizes,
  Radii,
} from '../../styles/tokens'
import { cn } from '../../utils/utils'

const buttonVariants = cva(ButtonBase, {
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

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, color, size, w, radii, type = 'button', ...props }, ref) => {
    return (
      <button
        type={type}
        className={cn(buttonVariants({ color, size, w, radii, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'

export { Button, buttonVariants }
