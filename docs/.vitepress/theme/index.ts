// https://vitepress.dev/guide/custom-theme
import { h, onMounted, watch } from 'vue'
import { useRouter, type Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {

    const router = useRouter()

    const checkAuth = () => {
      const isAuthenticated = localStorage.getItem('auth')
      const publicPaths = ['/login']
      const currentPath = window.location.pathname

      if (!isAuthenticated && !publicPaths.includes(currentPath)) {
        window.location.href = '/login'
      } else if (isAuthenticated && currentPath === '/login') {
        window.location.href = '/'
      }
    }

    // Check auth on mount
    onMounted(() => {
      checkAuth()
    })

    watch(() => window.location.pathname, () => {
      checkAuth()
    })

    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    router.onBeforeRouteChange = (to) => {
      if(typeof window !== 'undefined') {
        const isAuthenticated = localStorage.getItem('auth')
        if (!isAuthenticated && to !== '/login.html') {
          window.location.href = '/login'
          return false
        }
        if (isAuthenticated && to === '/logout.html') {
          localStorage.removeItem('auth')
          window.location.href = '/login'
          return false
        }
      }
      return true
    },
    router.onAfterPageLoad = async (to) => {
      if (typeof window !== 'undefined') {
        if (to === '/login.html') {
          toggleNavVisibility();
          return
        }
      }
    }
  }
} satisfies Theme

function toggleNavVisibility() {
  const isLoginPage = window.location.pathname === '/login'
  setTimeout(() => {
    const sidebar:HTMLElement | null = document.querySelector('.VPSidebar')
    const navbar:HTMLElement | null = document.querySelector('.VPNav')
    if (sidebar && navbar) {
      sidebar.style.display = isLoginPage ? 'none' : 'block'
      navbar.style.display = isLoginPage ? 'none' : 'flex'
    }
  }, 10);
}

