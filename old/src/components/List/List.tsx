export function List({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc list-outside ml-5 text-text-light space-y-1 mt-1 print:text-sm print:space-y-0.5">
      {children}
    </ul>
  )
}

export function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li>{children}</li>
  )
}

