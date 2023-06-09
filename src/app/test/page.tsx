'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
export default function RePage() {
    const router  = useRouter();
    router.push('https://testsafebrowsing.appspot.com/s/malware.html')
  return (
    <div>
      
    </div>
  )
}
