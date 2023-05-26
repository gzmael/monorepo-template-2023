import { NotFoundSection } from '../components/organisms/NotFoundSection'
import { siteConfig } from '../config/site'

const { getTitle } = siteConfig

export default function NotFound() {
  return (
    <>
      <title>{getTitle('Página não encontrada!')}</title>
      <meta
        name="description"
        content="Essa página não foi encontrada, tente voltar para página inicial."
      />
      <NotFoundSection />
    </>
  )
}
