import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(() => {
  const env = (globalThis as unknown as { process?: { env?: Record<string, string | undefined> } })
    .process?.env
  const repoName = env?.GITHUB_REPOSITORY?.split('/')[1]
  const isGitHubActions = env?.GITHUB_ACTIONS === 'true'

  return {
    plugins: [react()],
    // GitHub project pages are served from `/<repoName>/`.
    // In Actions, set base automatically so asset URLs resolve correctly.
    base: isGitHubActions && repoName ? `/${repoName}/` : '/',
  }
})
