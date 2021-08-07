

export const request = async (method, path, data) => {
    const url = 'http://127.0.0.1:8000' + path;
    switch (method) {
        case 'get':
            const result = await fetch(url);
            debugger
            
            const objects = [
                { name: 'police', center: [13.7218137, 100.5546136], icon: 'police', des: 'test1'},
                { name: 'gno', center: [13.7218137, 100.5556136], icon: 'police', des: 'test2' },
              ]
            return await result.json()
        case 'post':
            break;
        default:
            break;
    }
}