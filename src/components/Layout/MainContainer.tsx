export function MainContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background text-text-main font-sans antialiased">
      <div className="resume-container max-w-4xl mx-auto my-8 p-8 bg-white shadow-lg print:shadow-none print:my-0 print:mx-0 print:p-10">
        {children}
      </div>
    </div>
  )
}