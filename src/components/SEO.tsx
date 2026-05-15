import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
}

const BASE_URL = 'https://www.marcoinvestimentos.com.br'
const DEFAULT_IMAGE = `${BASE_URL}/images/marco-1.webp`

export function SEO({ title, description, canonical, ogImage = DEFAULT_IMAGE }: SEOProps) {
  const fullTitle = `${title} | Marco Investimentos`
  const url = canonical ? `${BASE_URL}${canonical}` : BASE_URL

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Marco Investimentos" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}
