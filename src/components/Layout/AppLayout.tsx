import MatrixBackground from '../Background/MatrixBackground'

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="relative min-h-screen bg-black">
      <MatrixBackground />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}