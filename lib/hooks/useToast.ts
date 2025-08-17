import { useState, useCallback } from 'react'
import type { ToastOptions } from '../types'

interface Toast extends Required<Omit<ToastOptions, 'action' | 'title'>> {
  id: string
  title?: string
  action?: ToastOptions['action']
}

// Global toast state
let toasts: Toast[] = []
const subscribers = new Set<() => void>()

const notifySubscribers = () => {
  subscribers.forEach(callback => callback())
}

let toastIdCounter = 0

export function useToast() {
  // Local state to trigger re-renders
  const [, forceUpdate] = useState({})

  // Subscribe to toast changes
  useState(() => {
    const callback = () => forceUpdate({})
    subscribers.add(callback)
    return () => subscribers.delete(callback)
  })

  const addToast = useCallback((options: ToastOptions): string => {
    const id = options.id || `toast-${++toastIdCounter}`
    
    const toast: Toast = {
      id,
      title: options.title,
      message: options.message,
      type: options.type || 'info',
      duration: options.duration || 5000,
      persistent: options.persistent || false,
      position: options.position || 'top-right',
      action: options.action
    }

    toasts.push(toast)
    notifySubscribers()

    // Auto remove after duration (if not persistent)
    if (!toast.persistent && toast.duration > 0) {
      setTimeout(() => {
        removeToast(id)
      }, toast.duration)
    }

    return id
  }, [])

  const removeToast = useCallback((id: string) => {
    toasts = toasts.filter(toast => toast.id !== id)
    notifySubscribers()
  }, [])

  const clearToasts = useCallback(() => {
    toasts = []
    notifySubscribers()
  }, [])

  // Convenience methods
  const success = useCallback((message: string, options?: Partial<ToastOptions>) => {
    return addToast({ ...options, message, type: 'success' })
  }, [addToast])

  const error = useCallback((message: string, options?: Partial<ToastOptions>) => {
    return addToast({ ...options, message, type: 'error' })
  }, [addToast])

  const warning = useCallback((message: string, options?: Partial<ToastOptions>) => {
    return addToast({ ...options, message, type: 'warning' })
  }, [addToast])

  const info = useCallback((message: string, options?: Partial<ToastOptions>) => {
    return addToast({ ...options, message, type: 'info' })
  }, [addToast])

  return {
    toasts,
    addToast,
    removeToast,
    clearToasts,
    success,
    error,
    warning,
    info
  }
}
