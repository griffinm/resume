export function MainContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-neutral-100 text-text-main font-sans antialiased pt-8">
      <div className="resume-container max-w-4xl mx-auto p-8 bg-white shadow-xl print:shadow-none print:my-0 print:mx-0 print:p-10">
        {children}
      </div>
    </div>
  )
}