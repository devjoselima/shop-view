import { Home, Pizza, UtensilsCrossed } from 'lucide-react'

import { Separator } from '@/components/ui'

import { NavLink } from './nav-link'

export const Header = () => {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza className="h-6 w-6" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <Home size={20} />
            Início
          </NavLink>

          <NavLink to="/orders">
            <UtensilsCrossed size={20} />
            Pedidos
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
