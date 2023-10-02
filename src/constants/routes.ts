export interface Routes {
  path: string
  name: string
}
export const routes: Record<'home' | 'projects' | 'blog', Routes> = {
  home: {
    path: '/',
    name: 'ABOUT',
  },
  projects: {
    path: '/projects',
    name: 'PROJECTS',
  },
  blog: {
    path: '/blog',
    name: 'BLOG',
  },
}