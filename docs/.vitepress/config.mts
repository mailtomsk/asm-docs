import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ASM",
  description: "rfid detailed document",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/introduction/welcome' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Welcome', link: '/introduction/welcome' },
          { text: 'What is RFID-Based Asset Management?', link: '/introduction/what-is-rfid-based-asset-management' },
          { text: 'System Components', link: '/introduction/system-components' }
        ]
      },
      {
        text: 'Admin Control Panel',
        items: [
          { text: '🔐 Admin Login', link: '/admin-control-panel/admin-login' },
          { text: '📊 Dashboard Overview', link: '/admin-control-panel/dashboard-overview' },
          { text: '📍 Manage Locations', link: '/admin-control-panel/manage-locations' },
          { text: '🗂️ Manage Categories', link: '/admin-control-panel/manage-categories' },
          { text: '🏭 Manage Manufacturers', link: '/admin-control-panel/manage-manufacturers' },
          { text: '🛍 Manage Vendors', link: '/admin-control-panel/manage-vendors' },
          { text: '📦 Manage Assets', link: '/admin-control-panel/manage-assets' },
          { text: '📘 Manage General Ledgers', link: '/admin-control-panel/manage-general-ledgers' },
          { text: '👤 Manage Users', link: '/admin-control-panel/manage-users' },
          { text: '📁 Reports', link: '/admin-control-panel/reports' },
          { text: '🏢 Company Settings', link: '/admin-control-panel/company-settings' }
        ]
      },
      {
        text: 'Mobile Application',
        items: [
          { text: '🔐 User Authentication', link: '/mobile-application/user-authentication' },
          { text: '📊 Dashboard', link: '/mobile-application/dashboard' },
          { text: '🔃 Data Synchronization', link: '/mobile-application/data-synchronization' },
          { text: '📦 Inventory Management', link: '/mobile-application/inventory-management' },
          { text: '🏷️ Asset Audit Workflow', link: '/mobile-application/asset-audit-workflow' }
        ]
      }
    ],
  }
})