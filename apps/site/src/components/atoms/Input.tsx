import { InputHTMLAttributes, forwardRef } from 'react'

import { VariantProps, cva } from 'class-variance-authority'

import { InputBase, Radii } from '../../styles/tokens'
import { cn } from '../../utils/utils'

const inputVariants = cva(InputBase, {
  variants: {
    radii: Radii,
  },
  defaultVariants: {
    radii: 'sm',
  },
})

export type InputProps = InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants>

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, radii, ...props }, ref) => {
    return (
      <input
        className={cn(inputVariants({ radii, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input, inputVariants }
