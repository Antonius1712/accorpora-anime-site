export const JikanApi = async (module, query) => {
    const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT_JIKAN}/${module}${query != 'undefined' ? `?${query}` : ''}`
    const response = await fetch(`${endpoint}`);
    const Data = await response.json();
    return Data
}

export const NestedApi = async (module, query) => {
    const response = await JikanApi(module, query)
    return response.data.flatMap(item => item.entry).slice(0, 10)
}