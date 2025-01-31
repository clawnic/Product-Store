import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useAuthStore = create(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,
            setError: (error) => set({ error }),
            login: async (credentials) => {
                set({ isLoading: true, error: null });
                try {
                    const res = await fetch('/api/auth/login', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(credentials)
                    });
                    const data = await res.json();
                    if (data.success) {
                        set({ user: data.data, isAuthenticated: true, isLoading: false });
                        return { success: true };
                    }
                    set({ error: data.message, isLoading: false });
                    return { success: false, message: data.message };
                } catch (error) {
                    set({ error: error.message, isLoading: false });
                    return { success: false, message: error.message };
                }
            },
            logout: () => {
                set({ user: null, isAuthenticated: false, error: null });
            }
        }),
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => localStorage)
        }
    )
);