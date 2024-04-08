import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export function Skeleton({
  className,
  children,
  ...props
}: ComponentProps<'div'> & { children?: ReactNode }) {
  return (
    <div
      className={twMerge('bg-zinc-50/10 animate-pulse rounded-md', className)}
      {...props}
    >
      {children}
    </div>
  )
}
