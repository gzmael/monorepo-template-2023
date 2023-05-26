import { HTMLAttributes } from 'react'

import { Slot } from '@radix-ui/react-slot'
import { VariantProps, cva } from 'class-variance-authority'

import { TextColors, TextSizes, TextWeight } from '../../styles/tokens'
import { cn } from '../../utils/utils'

const textVariants = cva('leading-6 font-sans tracking-wider font-bold ', {
  variants: {
    display: {
      flex: 'flex items-center',
    },
    size: TextSizes,
    type: TextColors,
    weight: TextWeight,
  },
  defaultVariants: {
    type: 'neutral',
    size: 'md',
    weight: 'medium',
  },
})

export type TextProps = HTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof textVariants> & {
    asChild?: boolean
  }

const Text = ({
  type,
  size,
  className,
  asChild,
  weight,
  display,
  ...props
}: TextProps) => {
  const Comp = asChild ? Slot : 'p'
  return (
    <Comp
      className={cn(textVariants({ type, size, weight, display, className }))}
      {...props}
    />
  )
}

Text.displayName = 'Text'

export { Text, textVariants }
