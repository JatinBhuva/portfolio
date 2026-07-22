import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(() => {
  const env = (globalThis as unknown as { process?: { env?: Record<string, string | undefined> } })
    .process?.env
  const repoName = env?.GITHUB_REPOSITORY?.split('/')[1]
  const isGitHubActions = env?.GITHUB_ACTIONS === 'true'

  // If the repository name is your main user page, force the root base path '/'
  const isUserPage = repoName?.toLowerCase() === `${env?.GITHUB_REPOSITORY?.split('/')[0]?.toLowerCase()}.github.io`

  return {
    plugins: [react()],
    // If it's your main user page, it must serve from root '/'. 
    // Otherwise, fallback to the repository name subdirectory for project pages.
    base: isGitHubActions && repoName && !isUserPage ? `/${repoName}/` : '/',
  }
})
