import React from 'react'
import layout from '../layout'
import { ClerkProvider } from '@clerk/nextjs'

function AppLayout({children} : {children: React.ReactNode}){
  return <ClerkProvider>{children}</ClerkProvider>
}

export default AppLayout