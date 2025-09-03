interface Props {
  children: React.ReactNode
  number?: number
  label?: string
}

export default function TextIcon({ children, number, label }: Props) {
  return (
    <div className="flex items-center gap-1">
      {children}
      {number && (
        <span className="text-sm text-oxford-blue dark:text-mischka">
          {number}
        </span>
      )}
      {!number && (
        <span className="text-sm text-oxford-blue dark:text-mischka">
          {label}
        </span>
      )}
    </div>
  )
}
