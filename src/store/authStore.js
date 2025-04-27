import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import axios from 'axios'

const useAuthStore = create(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,
            loading: false,
            error: null,

            register: async (userData) => {
                set({ loading: true, error: null })
                try {
                    const response = await axios.post('https://680b2a88d5075a76d98a0d7a.mockapi.io/users', userData)
                    set({
                        user: response.data,
                        isAuthenticated: true,
                        loading: false
                    })
                    return response.data
                } catch (error) {
                    set({
                        error: error.response?.data?.message || 'Registration failed',
                        loading: false
                    })
                    throw error
                }
            },

            login: async (credentials) => {
                set({ loading: true, error: null })
                try {
                    const response = await axios.get('https://680b2a88d5075a76d98a0d7a.mockapi.io/users')
                    const user = response.data.find(
                        u => u.email === credentials.email && u.password === credentials.password
                    )

                    if (user) {
                        set({
                            user,
                            isAuthenticated: true,
                            loading: false
                        })
                        return user
                    }
                    throw new Error('Invalid credentials')
                } catch (error) {
                    set({
                        error: error.message || 'Login failed',
                        loading: false
                    })
                    throw error
                }
            },

            logout: () => set({
                user: null,
                isAuthenticated: false
            }),

            clearError: () => set({ error: null })
        }), {
        name: 'auth-store',
        getStorage: () => localStorage
    }))

export default useAuthStore