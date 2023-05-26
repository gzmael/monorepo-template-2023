import { TextareaHTMLAttributes, forwardRef } from 'react'

import { VariantProps, cva } from 'class-variance-authority'

import { Radii, TextAreaBase } from '../../styles/tokens'
import { cn } from '../../utils/utils'

const textareaVariants = cva(TextAreaBase, {
  variants: {
    radii: Radii,
  },
  defaultVariants: {
    radii: 'sm',
  },
})

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  VariantProps<typeof textareaVariants>

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, radii, ...props }, ref) => {
    return (
      <textarea
        className={cn(textareaVariants({ radii, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Textarea.displayName = 'Textarea'

export { Textarea }
