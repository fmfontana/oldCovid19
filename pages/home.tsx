import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getToken } from '../services/business'
import Loading from '../components/loading'

export default () => {
  const router = useRouter()
  const [token, setToken] = useState<Token>(null)
  useEffect(() => {
    setToken(getToken())
  }, [])

  if (!token) return <Loading />
  return (
    <div className="bg-gray-200 h-screen">
      <header className="px-4 pt-24 pb-6 bg-blue-400 text-white rounded-b-lg">
        <div className="text-3xl font-bold mb-5 leading-none">{`Hola ${token.traveler.firstName}, `}</div>
        <div className="text-xl font-thin mb-2 leading-snug">Estas pasando tu cuarentena en </div>
        <div className="bg-blue-500 rounded-lg px-3 py-4 flex items-center">
          <div><IconLocator /></div>
          <span className="pl-2 text-gray-100 text-sm">{token && token.traveler.quarantineAddress ? token.traveler.quarantineAddress.ref : 'No has especificado aun'}</span>
        </div>
      </header>
      <article className="bg-gray-200 px-4 pt-8 pb-12">
        <Link href="/symtoms">
          <div className="bg-white shadow  p-4 m-2 rounded-lg flex flex-wrap justify-between">
            <div><IconAdd /></div>
            <div className="mt-8 text-sm font-bold text-blue-400 w-full">Síntomas COVID19</div>
          </div>
        </Link>
        <div className="bg-white shadow rounded-lg m-2">
          <a href="tel:107" className="w-full h-full block p-4 flex flex-wrap justify-between">
            <div><IconPhone /></div>
            <div className="mt-8 text-sm font-bold text-blue-400 w-full">Llamar 107</div>
          </a>
        </div>
        <div className="bg-white shadow p-4 m-2 rounded-lg flex flex-wrap justify-between">
          <div><IconDeclare /></div>
          <div className="mt-8 text-sm font-bold text-blue-400 w-full">Declarar Salida</div>
        </div>
        <div className="bg-white shadow p-4 m-2 rounded-lg flex flex-wrap justify-between">
          <div><IconChat /></div>
          <div className="mt-8 text-sm font-bold text-blue-400 w-full">Chat</div>
        </div>
        <div className="bg-white shadow p-4 m-2 rounded-lg flex flex-wrap justify-between">
          <div><IconFAQ /></div>
          <div className="mt-8 text-sm font-bold text-blue-400 w-full">Preguntas Frecuentes</div>
        </div>
        <div
          className="bg-white shadow p-4 m-2 rounded-lg flex flex-wrap justify-between"
          onClick={() => {
            sessionStorage.removeItem('token')
            router.push('/')
          }}
        >
          <div><IconCloseSession /></div>
          <div
            className="mt-8 text-sm font-bold text-blue-400 w-full"
          >
            Cerrar Sesion

          </div>
        </div>

      </article>

      <style>
        {` article {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }`}
      </style>

    </div>
  )
}

const IconLocator = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.11693 8.6916L7.23039 8.71472C7.3229 8.71472 7.36916 8.76098 7.36916 8.85349L7.38457 14.967C7.38457 15.5374 7.6544 16 8.13238 16C8.58722 16 8.84163 15.5991 9.05749 15.1289L15.0939 2.19267C15.2095 1.94597 15.2635 1.73011 15.2635 1.54509C15.2635 1.15192 14.9628 0.828125 14.5388 0.828125C14.3538 0.828125 14.1379 0.88209 13.8912 0.997729L0.955031 7.02639C0.507892 7.22683 0.0761719 7.49666 0.0761719 7.95151C0.0761719 8.41406 0.515601 8.6916 1.11693 8.6916ZM1.5101 7.82045C1.44842 7.82045 1.44072 7.74335 1.5101 7.71252L14.0685 1.8843C14.1996 1.83033 14.269 1.8843 14.1996 2.02306L8.37136 14.5738C8.34053 14.6509 8.26343 14.6277 8.26343 14.5661L8.29427 8.25217C8.29427 7.97463 8.12467 7.78961 7.8163 7.78961L1.5101 7.82045Z" fill="white" />
  </svg>
)


const IconAdd = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.9287 37.8574C29.2895 37.8574 37.8574 29.2895 37.8574 18.9287C37.8574 8.56793 29.2895 0 18.9098 0C8.54906 0 0 8.56793 0 18.9287C0 29.2895 8.56793 37.8574 18.9287 37.8574ZM18.9287 35.4229C9.79462 35.4229 2.45337 28.0628 2.45337 18.9287C2.45337 9.79462 9.79462 2.45337 18.9098 2.45337C28.0439 2.45337 35.404 9.79462 35.4229 18.9287C35.4229 28.0628 28.0628 35.4229 18.9287 35.4229ZM18.891 27.893C19.6647 27.893 20.1365 27.3645 20.1365 26.553V20.1554H26.7418C27.5344 20.1554 28.0817 19.7025 28.0817 18.9665C28.0817 18.1927 27.5533 17.7209 26.7418 17.7209H20.1365V11.1157C20.1365 10.2853 19.6647 9.75687 18.891 9.75687C18.1361 9.75687 17.702 10.3042 17.702 11.1157V17.7209H11.1157C10.2853 17.7209 9.738 18.1927 9.738 18.9665C9.738 19.7025 10.323 20.1554 11.1157 20.1554H17.702V26.553C17.702 27.3457 18.1361 27.893 18.891 27.893Z" fill="#63B3ED" />
  </svg>
)

const IconPhone = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.9287 37.8574C29.2895 37.8574 37.8574 29.2895 37.8574 18.9287C37.8574 8.56793 29.2895 0 18.9098 0C8.54906 0 0 8.56793 0 18.9287C0 29.2895 8.56793 37.8574 18.9287 37.8574ZM18.9287 35.4229C9.79462 35.4229 2.45337 28.0628 2.45337 18.9287C2.45337 9.79462 9.79462 2.45337 18.9098 2.45337C28.0439 2.45337 35.404 9.79462 35.4229 18.9287C35.4229 28.0628 28.0628 35.4229 18.9287 35.4229ZM14.2673 23.5146C18.6268 27.8552 24.4016 30.7615 27.7986 27.3834C27.893 27.2702 27.9684 27.1758 28.0628 27.0815C29.0442 26.0246 29.2517 24.8168 28.2704 24.0053C27.6287 23.5146 26.8927 23.024 24.7413 21.5331C23.7411 20.8348 22.9862 20.9292 22.0615 21.8161L21.2877 22.5899C21.0613 22.7975 20.7216 22.7786 20.4574 22.6276C19.8157 22.2502 18.6456 21.3821 17.5322 20.2686C16.4187 19.1552 15.5129 17.9662 15.1732 17.3435C15.0411 17.0981 14.9656 16.7962 15.2109 16.5508L15.9847 15.7205C16.8717 14.7769 16.9471 14.022 16.2489 13.0406L13.8521 9.64364C13.0217 8.47357 11.7951 8.9265 10.6816 9.77575C10.5684 9.83236 10.4929 9.92672 10.4174 10.0022C7.02042 13.3803 9.92672 19.1552 14.2673 23.5146Z" fill="#63B3ED" />
  </svg>
)

const IconDeclare = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.9287 37.8574C29.2895 37.8574 37.8574 29.2895 37.8574 18.9287C37.8574 8.56793 29.2895 0 18.9098 0C8.54906 0 0 8.56793 0 18.9287C0 29.2895 8.56793 37.8574 18.9287 37.8574ZM18.9287 35.4229C9.79462 35.4229 2.45337 28.0628 2.45337 18.9287C2.45337 9.79462 9.79462 2.45337 18.9098 2.45337C28.0439 2.45337 35.404 9.79462 35.4229 18.9287C35.4229 28.0628 28.0628 35.4229 18.9287 35.4229Z" fill="#63B3ED" />
    <path d="M20.9389 26.631L20.939 26.6312L20.9443 26.6259L27.6453 20.0424L27.6454 20.0424L27.6474 20.0404C28.0259 19.6538 28.15 19.3239 28.15 19C28.15 18.6778 28.0358 18.3471 27.6462 17.9584L27.645 17.9573L20.944 11.4094L20.9441 11.4093L20.9395 11.4052C20.5774 11.0792 20.2991 10.85 19.877 10.85C19.2659 10.85 18.8755 11.3544 18.8755 11.9354V15.34H18.736C15.8112 15.34 13.5801 16.2813 12.0841 18.1019C10.5923 19.9174 9.85 22.585 9.85 26.0022C9.85 26.6845 10.2367 27.15 10.7408 27.15C10.923 27.15 11.1119 27.1206 11.2917 27.0145C11.4716 26.9083 11.6275 26.7341 11.7603 26.4706L11.7603 26.4706L11.762 26.4671C12.4317 25.0481 13.2984 24.1109 14.4265 23.5251C15.5586 22.9372 16.9681 22.6957 18.736 22.6957H18.8755V26.1002C18.8755 26.3916 18.9719 26.6542 19.1484 26.8456C19.3259 27.038 19.5771 27.15 19.8685 27.15C20.285 27.15 20.5938 26.9378 20.9389 26.631ZM20.2314 25.3998V21.7795C20.2314 21.6673 20.2104 21.5504 20.1281 21.4643C20.0441 21.3765 19.9282 21.3533 19.8174 21.3533H18.8723C14.8564 21.3533 12.2219 22.6714 11.0959 25.1055C11.1899 22.7214 11.7772 20.6529 12.9715 19.1652C14.2114 17.6206 16.1213 16.6823 18.8723 16.6823H19.8174C19.9282 16.6823 20.0441 16.6592 20.1281 16.5713C20.2104 16.4852 20.2314 16.3683 20.2314 16.2561V12.5542C20.2324 12.5548 20.2336 12.5555 20.2348 12.5562C20.2426 12.5607 20.2518 12.5669 20.2642 12.576C20.2722 12.5819 20.2788 12.5869 20.2863 12.5926C20.2899 12.5953 20.2938 12.5983 20.2981 12.6015L26.5647 18.8111C26.6761 18.928 26.6835 18.9713 26.6835 19C26.6835 19.0286 26.6761 19.072 26.5649 19.1887L20.2847 25.3588C20.2595 25.3817 20.2427 25.3935 20.2314 25.3998Z" fill="#63B3ED" stroke="#5F83E1" strokeWidth="0.3" />
  </svg>
)


const IconChat = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.9287 37.8574C29.2895 37.8574 37.8574 29.2895 37.8574 18.9287C37.8574 8.56793 29.2895 0 18.9098 0C8.54906 0 0 8.56793 0 18.9287C0 29.2895 8.56793 37.8574 18.9287 37.8574ZM18.9287 35.4229C9.79462 35.4229 2.45337 28.0628 2.45337 18.9287C2.45337 9.79462 9.79462 2.45337 18.9098 2.45337C28.0439 2.45337 35.404 9.79462 35.4229 18.9287C35.4229 28.0628 28.0628 35.4229 18.9287 35.4229ZM18.9287 9.09635C12.8896 9.09635 8.13387 13.0406 8.13387 17.9096C8.13387 20.9669 10.04 23.6656 12.9463 25.2697C13.1539 25.383 13.1727 25.5717 13.0595 25.7793C12.7198 26.4398 12.1725 27.1003 11.7573 27.5533C11.2478 28.1194 11.4176 28.7422 12.1914 28.7422C13.2293 28.7422 15.2109 27.9684 17.0981 26.8361C17.2868 26.7229 17.4001 26.6663 17.6077 26.6851C18.0229 26.704 18.4569 26.7229 18.9287 26.7229C24.9867 26.7229 29.7235 22.7597 29.7235 17.9096C29.7235 13.0406 24.9867 9.09635 18.9287 9.09635Z" fill="#63B3ED" />
  </svg>
)

const IconFAQ = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.9287 37.8574C29.2895 37.8574 37.8574 29.2895 37.8574 18.9287C37.8574 8.56793 29.2895 0 18.9098 0C8.54906 0 0 8.56793 0 18.9287C0 29.2895 8.56793 37.8574 18.9287 37.8574ZM18.9287 35.4229C9.79462 35.4229 2.45337 28.0628 2.45337 18.9287C2.45337 9.79462 9.79462 2.45337 18.9098 2.45337C28.0439 2.45337 35.404 9.79462 35.4229 18.9287C35.4229 28.0628 28.0628 35.4229 18.9287 35.4229ZM18.5701 22.7786C19.2873 22.7786 19.7402 22.3068 19.7402 21.7029V21.3255C19.7402 20.212 20.3064 19.5137 21.7029 18.589C23.5901 17.3246 24.6847 16.2111 24.6847 14.1541C24.6847 11.3233 22.1747 9.64364 19.0797 9.64364C15.9658 9.64364 13.9276 11.2478 13.5124 13.0784C13.4369 13.3614 13.3992 13.6445 13.3992 13.9276C13.3992 14.5881 13.9087 14.9656 14.4183 14.9656C15.2298 14.9656 15.4185 14.5126 15.8148 13.9465C16.2866 12.6066 17.3623 11.663 18.9853 11.663C20.9292 11.663 22.1747 12.7387 22.1747 14.2862C22.1747 15.5695 21.4387 16.2677 19.7025 17.4756C18.2682 18.4758 17.4001 19.476 17.4001 21.1934V21.6085C17.4001 22.3634 17.8341 22.7786 18.5701 22.7786ZM18.5324 28.1572C19.476 28.1572 20.2875 27.4023 20.2875 26.4587C20.2875 25.5151 19.4949 24.7602 18.5324 24.7602C17.5699 24.7602 16.7773 25.5151 16.7773 26.4587C16.7773 27.3834 17.5888 28.1572 18.5324 28.1572Z" fill="#63B3ED" />
  </svg>
)

const IconCloseSession = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.9287 37.8574C29.2895 37.8574 37.8574 29.2895 37.8574 18.9287C37.8574 8.56793 29.2895 0 18.9098 0C8.54906 0 0 8.56793 0 18.9287C0 29.2895 8.56793 37.8574 18.9287 37.8574ZM18.9287 35.4229C9.79462 35.4229 2.45337 28.0628 2.45337 18.9287C2.45337 9.79462 9.79462 2.45337 18.9098 2.45337C28.0439 2.45337 35.404 9.79462 35.4229 18.9287C35.4229 28.0628 28.0628 35.4229 18.9287 35.4229ZM12.3424 26.7229C12.682 26.7229 12.9651 26.6097 13.2105 26.3454L18.9098 20.6272L24.647 26.3454C24.8923 26.5908 25.1565 26.7229 25.5151 26.7229C26.1756 26.7229 26.704 26.1945 26.704 25.5528C26.704 25.1942 26.5719 24.93 26.3266 24.6847L20.5895 18.9476L26.3454 13.1916C26.5908 12.9463 26.704 12.682 26.704 12.3612C26.704 11.7007 26.1756 11.1912 25.5151 11.1912C25.1942 11.1912 24.9489 11.3044 24.6847 11.5686L18.9098 17.3057L13.1916 11.5686C12.9463 11.3233 12.682 11.21 12.3424 11.21C11.6818 11.21 11.1534 11.7196 11.1534 12.3612C11.1534 12.7009 11.2666 12.984 11.512 13.2105L17.2491 18.9476L11.512 24.7036C11.2666 24.93 11.1534 25.2131 11.1534 25.5528C11.1534 26.1945 11.6818 26.7229 12.3424 26.7229Z" fill="#63B3ED" />
  </svg>
)
