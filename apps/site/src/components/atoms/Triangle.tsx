import { HTMLAttributes } from 'react'

import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '../../utils/utils'

const triangleVariants = cva(
  'w-0 h-0 border-solid border-t-0 border-r-0 border-transparent absolute border-b-[40px] md:border-b-[30px] bottom-0 left-0',
  {
    variants: {
      color: {
        blue: '!border-b-indigo-500',
        gray: '!border-b-gray-100',
        white: '!border-b-white',
        dark: '!border-b-dark-500',
      },
    },
    defaultVariants: {
      color: 'white',
    },
  },
)

export type TriangleProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof triangleVariants>

const Triangle = ({ color, className, ...props }: TriangleProps) => {
  return (
    <div
      className={cn(triangleVariants({ color, className }))}
      {...props}
      style={{ borderLeftWidth: '100vw', borderColor: 'transparent' }}
    />
  )
}

export { Triangle }
