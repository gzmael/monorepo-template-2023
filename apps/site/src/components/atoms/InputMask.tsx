import { forwardRef } from 'react'

import { VariantProps, cva } from 'class-variance-authority'
import Mask, { Props } from 'react-input-mask'

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

export type InputMaskProps = Props & VariantProps<typeof inputVariants>

const InputMask = forwardRef<HTMLInputElement, InputMaskProps>(
  ({ className, radii, ...props }, ref) => {
    return (
      <Mask
        className={cn(inputVariants({ radii, className }))}
        inputRef={ref}
        {...props}
      />
    )
  },
)
InputMask.displayName = 'InputMask'

export { InputMask, inputVariants }
