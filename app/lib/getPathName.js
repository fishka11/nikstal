'use client'
 
import { usePathname } from 'next/navigation'

export default function GetPathName() {
    const pathname = usePathname();
    return pathname;
}