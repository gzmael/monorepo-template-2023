import { HTMLAttributes } from 'react'

import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '../../utils/utils'

const gridVariants = cva('grid', {
  variants: {
    cols: {
      2: 'grid-cols-1 sm:grid-cols-2 gap-2',
      4: 'grid-cols-1 sm:grid-cols-4 gap-2',
    },
  },
  defaultVariants: {
    cols: 2,
  },
})

export type GridProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof gridVariants>

const Grid = ({ cols, className, ...props }: GridProps) => {
  return <div className={cn(gridVariants({ cols, className }))} {...props} />
}

export { Grid }
