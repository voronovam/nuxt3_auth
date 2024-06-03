import { User, Customer, Login } from 'types';

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

            setToken(res.token);
            await fetchCustomer();
        } catch (error) {
            setToken();
            setUser();

            console.error(error)
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

    return { user, token, signIn, fetchCustomer, setToken, setUser, logout }
})