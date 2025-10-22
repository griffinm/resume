export function MainContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 print:grid-cols-3 print:gap-6">
      {children}
    </div>
  )
}