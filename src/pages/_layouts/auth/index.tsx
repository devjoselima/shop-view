import { Pizza } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export const AuthLayout = () => {
  return (
    <div className="grid min-h-screen grid-cols-2 antialiased">
      <div className="flex h-full flex-col justify-between border-r border-[#24242A] bg-muted p-10 text-muted-foreground dark:bg-card">
        <div className="flex items-center gap-3 text-lg font-medium text-foreground">
          <Pizza size={20} />
          <span className="font-semibold">shop view</span>
        </div>
        <footer className="text-sm">
          Painel do parceiro &copy; pizza.shop - {new Date().getFullYear()}
        </footer>
      </div>

      <div className="relative flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
