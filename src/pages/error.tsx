import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">
        Whoops, algo inesperado aconteceu...
      </h1>
      <p className="text-accent-foreground">
        Voltar para o{' '}
        <Link to="/" className="dark:sky-400 text-sky-600">
          Dashboard
        </Link>
      </p>
    </div>
  )
}
