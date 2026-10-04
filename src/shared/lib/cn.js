import { clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
    extend: {
        theme: {
            text: ['display', 'h2', 'h3', 'quote', 'body', 'small', 'caption'],
        },
    },
})

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}