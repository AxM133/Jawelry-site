import { cn } from '@/shared/lib'

export function Container({ as: Tag = 'div', className, children }) {
    return (
        <Tag className={cn('mx-auto w-full max-w-360 px-4 md:px-10 xl:px-18', className)}>
            {children}
        </Tag>
    )
}
