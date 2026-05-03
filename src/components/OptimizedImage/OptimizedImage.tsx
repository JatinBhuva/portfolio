import type { ImgHTMLAttributes } from 'react'

type ResponsiveFormat = 'avif' | 'webp'

type OptimizedImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  'srcSet' | 'sizes'
> & {
  src: string
  sizes?: string
  responsiveFormats?: readonly ResponsiveFormat[]
  responsiveWidths?: readonly number[]
}

function buildSrcSet(src: string, ext: ResponsiveFormat, widths: readonly number[]) {
  const dot = src.lastIndexOf('.')
  if (dot === -1) return undefined

  const base = src.slice(0, dot)
  return widths.map((w) => `${base}.${w}.${ext} ${w}w`).join(', ')
}

export function OptimizedImage({
  src,
  alt,
  loading = 'lazy',
  decoding = 'async',
  responsiveFormats = ['avif', 'webp'],
  responsiveWidths = [640, 1024, 1440],
  sizes,
  ...rest
}: OptimizedImageProps) {
  const canBeResponsive =
    (src.endsWith('.png') || src.endsWith('.jpg') || src.endsWith('.jpeg')) &&
    responsiveFormats.length > 0 &&
    responsiveWidths.length > 0

  if (!canBeResponsive) {
    return (
      <img
        alt={alt}
        decoding={decoding}
        loading={loading}
        src={src}
        {...rest}
      />
    )
  }

  return (
    <picture>
      {responsiveFormats.map((format) => {
        const srcSet = buildSrcSet(src, format, responsiveWidths)
        if (!srcSet) return null
        return (
          <source
            key={format}
            sizes={sizes}
            srcSet={srcSet}
            type={`image/${format}`}
          />
        )
      })}
      <img
        alt={alt}
        decoding={decoding}
        loading={loading}
        sizes={sizes}
        src={src}
        {...rest}
      />
    </picture>
  )
}

