"use client"

import { useEffect } from "react"

interface ErrorProps {
  error: string // Tipo da propriedade error
  reset: () => void // Tipo da propriedade reset: uma função que não recebe argumentos e não retorna nada
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <div className="text-center mt-10">
      <h1>Something went wrong. Please try again later.</h1>
      <button className="hover:text-amber-600" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  )
}
