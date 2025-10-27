import { cn } from '@/shared/lib/utils'
import * as React from 'react'

function Rated({text, className}: React.ComponentProps<"div"> & {text : string}) {
  return (
    <div className={cn("bg-popover/50 rounded-xl px-2 uppercase", className)}>
      <p>{text}</p>
    </div>
  )
}

export default Rated
