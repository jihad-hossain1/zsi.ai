'use server';

export const createLogin = async (formData: {email: string, password: string}) => {
   try {
    const response = await fetch(`https://api.zsimarketing.com/api/auth/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({...formData})
    })

    const data = await response.json()

    return data;
   } catch (error) {
    console.error(error)
   }
}