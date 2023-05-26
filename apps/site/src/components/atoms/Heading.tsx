import { HTMLAttributes } from 'react'

import { Slot } from '@radix-ui/react-slot'
import { VariantProps, cva } from 'class-variance-authority'

import { TextColors } from '../../styles/tokens'
import { cn } from '../../utils/utils'

const headingVariants = cva(
  'leading-6 font-display tracking-wider font-bold ',
  {
    variants: {
      size: {
        xs: 'text-[1rem]',
        sm: 'text-xl',
        md: 'text-2xl',
        lg: 'text-3xl',
        xl: 'text-4xl',
        '2xl': 'text-7xl',
      },
      type: TextColors,
      hasBorder: {
        true: 'after:block after:w-1/3 after:h-1 after:mt-2 after:bg-indigo-500 after:mx-auto',
        false: '',
      },
      hasUpperCase: {
        true: 'uppercase',
        false: '',
      },
    },
    defaultVariants: {
      type: 'neutral',
      size: 'md',
    },
    compoundVariants: [
      {
        hasBorder: true,
        type: 'white',
        class: 'after:bg-clue-500',
      },
    ],
  },
)

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants> & {
    asChild?: boolean
  }

const Heading = ({
  type,
  size,
  className,
  asChild,
  hasBorder,
  hasUpperCase,
  ...props
}: HeadingProps) => {
  const Comp = asChild ? Slot : 'h2'
  return (
    <Comp
      className={cn(
        headingVariants({ type, size, hasBorder, hasUpperCase, className }),
      )}
      {...props}
    />
  )
}

Heading.displayName = 'Heading'

export { Heading, headingVariants }
