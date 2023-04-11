import { ToastContainer, toast, ToastPosition } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface ToastifyProps {
  message: string
  type?: 'success' | 'error' | 'warning' | 'info'
}

export function Toastify({ message, type = 'info' }: ToastifyProps) {
  const options = {
    position: 'top-right' as ToastPosition,
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    type,
  }

  return (
    <>
      <ToastContainer />
      {toast[type](message, options)}
    </>
  )
}
