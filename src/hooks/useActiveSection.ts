import { useEffect, useState } from 'react'

type UseActiveSectionOptions = {
  rootMargin?: string
}

export function useActiveSection(
  sectionIds: readonly string[],
  options: UseActiveSectionOptions = {},
) {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null)

  useEffect(() => {
    if (sectionIds.length === 0) return

    const observedElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element))

    if (observedElements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
          )

        if (visible.length > 0) {
          const id = (visible[0]?.target as HTMLElement).id
          setActiveSectionId(id)
        }
      },
      {
        root: null,
        threshold: [0.15, 0.25, 0.35, 0.5, 0.7],
        rootMargin: options.rootMargin ?? '-40% 0px -55% 0px',
      },
    )

    observedElements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [options.rootMargin, sectionIds])

  return activeSectionId
}

