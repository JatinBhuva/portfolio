import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(() => {
  const env = (globalThis as unknown as { process?: { env?: Record<string, string | undefined> } })
    .process?.env
  
  const repoName = env?.GITHUB_REPOSITORY?.split('/')[1]
  const isGitHubActions = env?.GITHUB_ACTIONS === 'true'

  // Safely check if the repository name matches the format 'yourusername.github.io'
  const isUserPage = repoName?.toLowerCase()?.endsWith('.github.io') === true

  return {
    plugins: [react()],
    // If it's your main user page, force root '/'. Otherwise fallback to project subfolders.
    base: isGitHubActions && repoName && !isUserPage ? `/${repoName}/` : '/',
  }
})
