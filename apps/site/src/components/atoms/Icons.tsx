import {
  Facebook,
  Instagram,
  Laptop,
  LucideProps,
  Moon,
  Phone,
  SunMedium,
  Twitter,
  type Icon as LucideIcon,
  MapPin,
  Navigation,
  Send,
  ShoppingCart,
  Smartphone,
  Server,
  Layout,
} from 'lucide-react'

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  twitter: Twitter,
  facebook: Facebook,
  instagram: Instagram,
  pin: MapPin,
  navigation: Navigation,
  send: Send,
  phone: Phone,
  shop: ShoppingCart,
  app: Smartphone,
  server: Server,
  system: Laptop,
  web: Layout,
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  hosting: (props: LucideProps) => (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 22.936 22.84"
      {...props}
    >
      <path
        fill="currentColor"
        d="M22.936 6.266V1.76c0-.97-.8-1.762-1.762-1.762H1.76A1.78 1.78 0 0 0 0 1.76v4.504a1.75 1.75 0 0 0 .679 1.379c-.4.323-.68.818-.68 1.38v4.504a1.75 1.75 0 0 0 .679 1.379c-.4.323-.68.818-.68 1.38V20.8c0 .97.8 1.762 1.762 1.762h10.656a18.27 18.27 0 0 0 3.256.287c3.315 0 6.8-.86 7.223-2.505a.38.38 0 0 0 .039-.17V9.557c0-.057-.02-.1-.037-.16-.133-.56-.63-1.03-1.362-1.4a1.764 1.764 0 0 0 1.398-1.723zM.764 13.53V9.025a1 1 0 0 1 .997-.997h7.974c-.7.37-1.16.83-1.3 1.37a.39.39 0 0 0-.037.16v4.97H1.76a1 1 0 0 1-.997-.997zm8.65-2.346.053.033.2.124.063.034.278.14.047.02.26.112.078.032.324.12c0 .002.02.004.02.006l.327.105.1.027.336.093c0 .002.02.006.027.008l.377.1.098.02.33.068.066.014.398.068.096.016.336.048.092.012.413.048.084.008.35.03.106.008.422.027.06.002.487.018.427.006.427-.006.113-.004.434-.016.422-.027.106-.008.35-.03.084-.008.413-.048.092-.012.336-.048.096-.016.398-.068.066-.014.43-.088.377-.1c0-.002.02-.006.027-.008l.336-.093.1-.027.327-.105c0-.002.02-.004.02-.006l.324-.12.078-.032.26-.112.047-.02.278-.14.063-.034.253-.157.225-.158c0-.004 0-.006.02-.01v1.907c0 .044-.02.1 0 .135v.084c0 .042-.02.085-.022.127 0 .033-.02.066-.03.1-.02.03-.027.058-.045.086l-.055.086a1.1 1.1 0 0 1-.102.119c-.02.016-.027.03-.043.046-.8.783-3.197 1.5-6.2 1.5s-5.388-.706-6.2-1.5c-.02-.018-.03-.033-.047-.05l-.098-.115-.06-.1c-.02-.027-.03-.054-.043-.082-.02-.035-.025-.07-.033-.104a.27.27 0 0 1-.022-.124v-2.126c0 .004.02.006.02.01l.225.16zm12.703 5.624c-.02.03-.027.058-.045.086l-.055.086a1.1 1.1 0 0 1-.102.119c-.02.016-.027.03-.043.046-.8.783-3.197 1.5-6.2 1.5s-5.388-.706-6.2-1.5c-.02-.018-.03-.033-.047-.05L9.327 17l-.06-.1a.296.296 0 0 1-.04-.082c-.02-.035-.025-.07-.033-.104 0-.036-.02-.072-.02-.108v-.046c.002-.018 0-.034 0-.052v-2.045c.02.012.033.023.05.034l.15.106.13.083.2.124c.8.436 1.896.75 3.108.94 0 .002.02.002.027.004l1.2.143.26.02.256.016.346.018.202.008.557.01.556-.008.204-.008.343-.016.258-.016.256-.02 1.212-.144c1.344-.2 2.53-.565 3.338-1.064l.13-.082.15-.106a.36.36 0 0 0 .053-.038v1.907c0 .044-.02.1 0 .135v.084c0 .042-.02.085-.022.127 0 .033-.02.066-.033.1zM1.76 21.8a1 1 0 0 1-.997-.997v-4.505a1 1 0 0 1 .997-.997H8.4v5.256h.113c0 .014.02.028.022.042.02.03.027.056.043.085.03.057.066.112.106.168s.084.1.13.162l.072.08a3.05 3.05 0 0 0 .525.425c0 .004.02.01.022.014a4.76 4.76 0 0 0 .477.268H1.75zm20.4-1.723v.036c-.156.953-2.802 1.973-6.5 1.973a17.23 17.23 0 0 1-3.164-.277v-.004c-1.9-.36-2.953-.967-3.247-1.48-.02-.025-.024-.05-.034-.072-.02-.048-.04-.095-.047-.143v-2.204c.02.01.03.02.045.03l.15.106.13.083.2.124c.8.436 1.896.75 3.108.94 0 .002.02.002.027.004l1.2.143.26.02.256.016.346.018.202.008.557.01.556-.01.204-.008.343-.016.258-.016.256-.02 1.212-.144c1.344-.2 2.53-.565 3.338-1.064l.13-.082.15-.106a.36.36 0 0 0 .053-.038zm0-10.367c0 .97-2.78 2.055-6.5 2.055S9.16 10.67 9.16 9.7c0-.05.02-.1.025-.148.02-.05.035-.1.066-.152.127-.22.384-.45.78-.67l.05-.028.214-.1.274-.12.06-.023a9.93 9.93 0 0 1 1.582-.463l.578-.1.156-.026a18.66 18.66 0 0 1 5.419 0l.158.027.574.1c1.864.397 3.057 1.078 3.057 1.713zm0-3.434a1 1 0 0 1-.997.997h-1.77c-.022-.006-.047-.008-.068-.014l-.773-.145-.076-.012a18.59 18.59 0 0 0-2.814-.213c-.948 0-1.9.072-2.813.213l-.078.012-.77.144c-.022.006-.047.008-.07.014H1.763a1 1 0 0 1-.997-.997V1.76a1 1 0 0 1 .997-.997h19.413a1 1 0 0 1 .997.997zm-2.663-2.06h.76v.76h-.76zm-.764-1.147h.76v.76h-.76zm-.765 1.147h.76v.76h-.76zm-.764-1.147h.76v.76h-.76zm-.764 1.147h.76v.76h-.76zm-.765-1.147h.76v.76h-.76zM14.9 4.207h.76v.76h-.76zm-.755-1.147h.76v.76h-.76zm-.765 1.147h.76v.76h-.76zm-.764-1.147h.76v.76h-.76z"
      />
      <path
        fill="currentColor"
        d="M4.014 2.294c-.948 0-1.72.772-1.72 1.72s.772 1.72 1.72 1.72 1.72-.772 1.72-1.72-.772-1.72-1.72-1.72zm0 2.676c-.527 0-.956-.43-.956-.956s.43-.956.956-.956.956.43.956.956-.43.956-.956.956z"
      />
    </svg>
  ),
  mobile: (props: LucideProps) => (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 11.42 22.84"
      {...props}
    >
      <path
        fill="currentColor"
        d="M9.517 0H1.903A1.906 1.906 0 0 0 0 1.903v19.034a1.906 1.906 0 0 0 1.903 1.903h7.613a1.906 1.906 0 0 0 1.903-1.903V1.903A1.903 1.903 0 0 0 9.517 0zm1.142 20.937a1.145 1.145 0 0 1-1.142 1.142H1.903a1.145 1.145 0 0 1-1.142-1.142V1.903c.001-.63.512-1.14 1.142-1.142h7.613c.63.001 1.14.512 1.142 1.142zm-5.33-.76h.76v.76h-.76zM6.1 1.903h.76v.76H6.1zm-1.522 0h.76v.76h-.76zM3.925 13.22a.28.28 0 0 1-.18-.067l-1.808-1.54a.28.28 0 0 1-.098-.213c0-.082.035-.16.098-.213l1.808-1.54a.28.28 0 0 1 .394.031.28.28 0 0 1-.031.394L2.55 11.4l1.558 1.327a.28.28 0 0 1-.182.492zm3.57 0a.283.283 0 0 1-.213-.098.28.28 0 0 1 .031-.394L8.87 11.4l-1.558-1.327a.28.28 0 0 1-.031-.394.28.28 0 0 1 .394-.031l1.808 1.54a.28.28 0 0 1 .098.213c0 .082-.035.16-.098.213l-1.808 1.54a.278.278 0 0 1-.18.067zm0 0"
      />
      <path
        fill="currentColor"
        d="M5.07 14.374a.528.528 0 0 1-.058-.004.28.28 0 0 1-.216-.331l1.127-5.35a.28.28 0 0 1 .331-.216.28.28 0 0 1 .216.331l-1.127 5.35a.28.28 0 0 1-.273.222zm0 0"
      />
    </svg>
  ),
  whatsapp: (props: LucideProps) => (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 448 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
      />
    </svg>
  ),
}
