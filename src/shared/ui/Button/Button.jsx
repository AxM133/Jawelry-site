import { cn } from '@/shared/lib'

const base =
    'group inline-flex items-center justify-center gap-3.5 whitespace-nowrap border border-transparent font-semibold uppercase tracking-wide transition-colors duration-200'

const variants = {
    primary: 'bg-ink text-white hover:bg-espresso',
    outline: 'border-ink text-ink hover:bg-ink hover:text-white',
    light: 'bg-white text-ink hover:bg-surface',
}

const sizes = {
    md: 'h-13 px-8 text-small',
    sm: 'h-11 px-4 text-caption font-medium',
}

export function Button({
    variant = 'primary',
    size = 'md',
    icon,
    href,
    className,
    children,
    ...props
}) {
    const Tag = href ? 'a' : 'button'

    return (
        <Tag
            href={href}
            className={cn(base, variants[variant], sizes[size], className)}
            {...(!href && { type: 'button' })}
            {...props}
        >
            {children}
            {icon && (
                <span
                    aria-hidden="true"
                    className="inline-flex transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                    {icon}
                </span>
            )}
        </Tag>
    )
}
