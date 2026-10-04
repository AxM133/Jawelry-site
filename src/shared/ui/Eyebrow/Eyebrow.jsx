import { cn } from '@/shared/lib'

const tones = {
    default: 'text-gold',
    onDark: 'text-gold-light',
}

export function Eyebrow({ tone = 'default', className, children }) {
    return (
        <p
            className={cn(
                "flex items-center gap-3 text-caption font-semibold uppercase tracking-wider before:h-px before:w-7 before:bg-current before:content-['']",
                tones[tone],
                className,
            )}
        >
            {children}
        </p>
    )
}
