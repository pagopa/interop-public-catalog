import { useCallback, useEffect, useState } from 'react'
import type { z, ZodSchema } from 'zod'
import { parseQueryString, serializeQueryString } from '../utils/qs.utils'

/**
 * Custom React hook to read and update URL search params, syncing with state.
 * Returns [searchParams, setSearchParams].
 * - searchParams: an object with current params
 * - setSearchParams: function to update params and sync URL
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useSearchParams<T extends ZodSchema<any>>(schema: T) {
  const getParams = useCallback(() => {
    const paramsObj = typeof window !== 'undefined' ? parseQueryString(window.location.search) : {}
    const result = schema.safeParse(paramsObj)
    return result.success ? result.data : {}
  }, [schema])

  const [searchParams, setSearchParamsState] = useState<Partial<z.infer<T>>>(getParams)

  useEffect(() => {
    const onPopState = () => setSearchParamsState(getParams)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [getParams])

  const setSearchParams = (newParams: Partial<z.infer<T>>) => {
    setSearchParamsState((prev) => {
      const params = serializeQueryString({ ...prev, ...newParams })
      const newUrl = `${window.location.pathname}${params ? '?' + params : ''}${window.location.hash}`
      window.history.replaceState({}, '', newUrl)

      return { ...prev, ...newParams }
    })
  }

  const replaceSetParams = (newParams: Partial<z.infer<T>>) => {
    setSearchParamsState(() => {
      const params = serializeQueryString(newParams)
      const newUrl = `${window.location.pathname}${params ? '?' + params : ''}${window.location.hash}`
      window.history.replaceState({}, '', newUrl)
      return newParams
    })
  }

  return [searchParams, setSearchParams, replaceSetParams] as const
}
