export const ButtonBase =
  'flex items-center justify-center font-medium disabled:opacity-50 disabled:cursor-not-allowed leading-none cursor-pointer active:scale-95 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none data-[state=open]:bg-slate-100'

export const InputBase =
  'bg-gray-50 p-4 flex flex-col items-start placeholder-gray-500 text-sm text-gray-900 h-11 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 invalid:border-red-500 invalid:text-red-500 focus:invalid:border-red-500 focus:invalid:ring-red-500'

export const TextAreaBase =
  'bg-gray-50 p-4 w-full flex flex-col items-start placeholder-gray-500 text-sm text-gray-900 min-h-[2.75rem] focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 invalid:border-red-500 invalid:text-red-500 focus:invalid:border-red-500 focus:invalid:ring-red-500'

export const ButtonColors = {
  success: 'bg-green-500 hover:bg-green-400 text-white',
  error: 'bg-red-500 hover:bg-red-300 text-white',
  neutral: 'bg-gray-400 hover:bg-gray-300 text-white',
  info: 'bg-blue-500 hover:bg-blue-600 text-white hover:text-white',
  transparent: 'bg-transparent text-gray-500 hover:text-gray-400',
  icon: 'bg-transparent hover:bg-transparent',
  primary: 'bg-indigo-500 hover:bg-indigo-600 text-white hover:text-white',
  dark: 'bg-dark-600 hover:bg-dark-800 hover:text-gray-100 text-white',
  navlink:
    'items-center justify-start bg-transparent hover:bg-gray-500 hover:text-gray-200',
}

export const Radii = {
  none: 'rounded-none',
  xs: 'rounded',
  sm: 'rounded-md',
  md: 'rounded-xl',
  lg: 'rounded-2xl',
  full: 'rounded-full',
} as const

export const TextColors = {
  white: 'text-white',
  neutral: 'text-gray-400',
  heading: 'text-gray-100',
  textBody: 'text-dark-400',
  success: 'text-green-500',
  list: 'text-gray-300',
  title: 'text-dark-500',
  warning: 'text-orange-500',
  error: 'text-red-500',
  info: 'text-indigo-500',
  privacy: 'text-blue-600',
  header: 'text-blue-400',
}

export const TextSizes = {
  xl: 'text-2xl',
  lg: 'text-xl',
  md: 'text-base leading-6',
  sm: 'text-sm leading-6',
  xs: 'text-xs leading-6',
}

export const TextWeight = {
  regular: 'font-extralight',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
}

export const ButtonSizes = {
  sm: 'h-8 pl-2 pr-3 gap-1 text-sm btn-sm',
  md: 'h-10 pl-3 pr-4 gap-2 text-base btn-md',
  lg: 'h-[52px] pl-5 pr-6 gap-2 text-lg btn-md',
}

export const HeadingSizes = {
  xs: 'text-[1rem]',
  sm: 'text-xl',
  md: 'text-2xl',
  lg: 'text-3xl',
  xl: 'text-4xl',
  '2xl': 'text-7xl',
}
