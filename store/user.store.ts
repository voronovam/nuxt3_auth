import { User, Customer, Login, SignUp } from 'types';

export const useUserStore = defineStore('user', () => {
    const user = ref();

    const token = useCookie('COOKIE_NAME', {
        maxAge: 60 * 60,
    });

    const setToken = (data?: string) => (token.value = data);
    const setUser = (data?: any) => (user.value = data);

    const signIn = async (data: Login) => {
        try {
            const res = await $fetch<User>('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })

            setToken(res.token)
            await fetchCustomer()
            return { success: true, error: null }

        } catch (error: any) {
            setToken()
            setUser()
            console.error(error)

            return { success: false, error: error.data.message || 'An error occurred' }
        }
    }

    const signUp = async (data: SignUp) => {
        try {
            const res = await $fetch<User>('http://dummyjson.com/users/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })

            setToken(res.token)
            await fetchCustomer()
            return { success: true, error: null }

        } catch (error: any) {
            setToken()
            setUser()
            console.error(error)

            return { success: false, error: error.data.message || 'An error occurred' }
        }
    }

    const fetchCustomer = async () => {
        if (token.value) {
            try {
                const res = await $fetch<Customer>('https://dummyjson.com/users/1');
                setUser(res);
            } catch (error) {
                setUser();
                console.error(error)
            }
        }
    }

    const logout = async () => {
        setToken();
        setUser();
    }

    return { user, token, signIn, signUp, fetchCustomer, setToken, setUser, logout }
})