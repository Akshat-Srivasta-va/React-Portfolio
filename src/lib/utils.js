import { clsx } from "clsx"; //   Primarily for handling conditional rendering of classes, making your className attributes much cleaner and more readable than using complex ternary operators or string concatenations directly in your JSX/HTML.
import { twMerge } from "tailwind-merge"; //  tailwind-merge is a utility function specifically designed to intelligently merge Tailwind CSS class names

export const cn = (...inputs) => {
    return twMerge(clsx(inputs))
}