'use client'

import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react'

import * as LabelPrimitive from '@radix-ui/react-label'

import { cn } from '../../utils/utils'

const Label = forwardRef<
  ElementRef<typeof LabelPrimitive.Root>,
  ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      '[user-select: none] label-input flex w-full flex-col text-xs text-gray-50',
      className,
    )}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
