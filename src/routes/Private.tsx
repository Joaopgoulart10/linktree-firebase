import { ReactNode } from 'react'
import { auth } from '../services/firebaseConnection'
import { onAuthStateChanged } from 'firebase/auth'

interface PrivateProps{
    children: ReactNode
}

export function Private( { children }: PrivateProps):any {
    return children;
}
