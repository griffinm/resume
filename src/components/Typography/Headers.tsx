const commonStyles = "text-primary";

export function H1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className={`${commonStyles} text-4xl font-bold print:text-3xl`}>
      {children}
    </h1>
  )
}

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className={`${commonStyles} text-2xl font-semibold border-b-2 border-secondary pb-1 mb-3 print:text-xl print:mb-2`}>
      {children}
    </h2>
  )
}

export function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className={`${commonStyles} text-xl font-medium text-text-main print:text-lg`}>
      {children}
    </h3>
  )
}

export function H4({ children }: { children: React.ReactNode }) {
  return (
    <h4 className={`font-medium text-text-main mb-1 print:text-base`}>
      {children}
    </h4>
  )
}