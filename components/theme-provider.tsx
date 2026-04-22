"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      {...props}
      enableColorScheme={false}
      scriptProps={{
        suppressHydrationWarning: true,
        id: 'next-themes-script'
      }}
    >
      {children}
    </NextThemesProvider>
  )
}
