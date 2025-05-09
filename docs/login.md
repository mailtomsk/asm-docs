---
layout: doc
---

<script setup>
import { ref, onMounted } from 'vue'

const username = ref('')
const password = ref('')
const error = ref('')

onMounted(() => {
  // Check if already authenticated
  const isAuthenticated = localStorage.getItem('auth')
  if (isAuthenticated) {
    window.location.href = '/'
  }
})

const login = () => {
  if (username.value === 'admin' && password.value === 'Admin!@#$%') {
    localStorage.setItem('auth', 'authenticated')
    window.location.href = '/'
    error.value = ''
  } else {
    error.value = 'Invalid credentials'
  }
}
</script>

<div class="login-container">
  <div class="login-box">
    <img src="/logo.svg" alt="Logo" class="login-logo">
    <div class="login-form">
      <input 
        type="text" 
        v-model="username" 
        placeholder="Username"
        class="login-input"
      >
      <input 
        type="password" 
        v-model="password" 
        placeholder="Password"
        class="login-input"
      >
      <button @click="login" class="login-button">Login</button>
      <p v-if="error" class="login-error">{{ error }}</p>
    </div>
  </div>
</div>

<style>

aside, .VPLink.link.VPNavBarMenuLink:nth-child(3) {
    display: none;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 20px;
}

.login-box {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.login-logo {
  width: 150px;
  margin-bottom: 30px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.login-input {
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.2s;
  color: #000;
}

.login-input:focus {
  border-color: #4F6BF6;
  outline: none;
}

.login-button {
  background: #4F6BF6;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.login-button:hover {
  background: #4058D1;
}

.login-error {
  color: #dc2626;
  margin: 0;
  font-size: 14px;
}
</style>