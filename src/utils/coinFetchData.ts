export async function getCoinData() {
    const res = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_aYhNYZZR7UlkVzQLvrVZqJdpiLNh1tQlXhN3gqN0&currencies=EUR%2CUSD&base_currency=BRL`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}