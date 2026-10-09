import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

type ClassValue =
    | string
    | number
    | null
    | undefined
    | boolean
    | ClassValue[]
    | Record<string, unknown>

export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs))
}
