import { useEffect, useState } from 'react'
import { z, ZodSchema } from 'zod'

/**
 * Custom React hook to read and update URL search params, syncing with state.
 * Returns [searchParams, setSearchParams].
 * - searchParams: an object with current params
 * - setSearchParams: function to update params and sync URL
 */
export function useSearchParams<T extends ZodSchema<any>>(schema: T) {
  const getParams = () => {
    const paramsObj = Object.fromEntries(new URLSearchParams(window.location.search).entries())
    const result = schema.safeParse(paramsObj)
    return result.success ? result.data : {}
  }

  const [searchParams, setSearchParamsState] = useState<Partial<z.infer<T>>>(getParams)

  useEffect(() => {
    const onPopState = () => setSearchParamsState(getParams)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  // Refactor this (?)
  const setSearchParams = (newParams: Partial<z.infer<T>>) => {
    const params = new URLSearchParams({ ...searchParams, ...newParams } as Record<
      string,
      string
    >).toString()

    const newUrl = `${window.location.pathname}${params ? '?' + params : ''}${window.location.hash}`
    window.history.replaceState({}, '', newUrl)
    setSearchParamsState(getParams)
  }

  const replaceSetParams = (newParams: Partial<z.infer<T>>) => {
    const params = new URLSearchParams({ ...newParams } as Record<string, string>).toString()

    const newUrl = `${window.location.pathname}${params ? '?' + params : ''}${window.location.hash}`
    window.history.replaceState({}, '', newUrl)
  }

  return [searchParams, setSearchParams, replaceSetParams] as const
}
