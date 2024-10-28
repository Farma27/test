const http = require('http')

const port = 5000
const host = 'localhost'

/**
 * Logika untuk menangani dan menanggapi request dituliskan pada fungsi ini
 * 
 * @param request: objek yang berisikan informasi terkait permintaan
 * @param response: objek yang digunakan untuk menanggapi permintaan
 */
const requestListener = (request, response) => {
    const { method } = request

    response.setHeader('Content-Type', 'text/html')
    response.statusCode = 200

    if (method === 'GET') {
        response.end('<h1>Hello!</h1>')
    }

    if (method === 'POST') {
        let body = []

        request.on('data', (chunk) => {
            body.push(chunk)
        })

        request.on('end', () => {
            body = Buffer.concat(body).toString()
            const { name } = JSON.parse(body)
            response.end(`<h1>Hai, ${name}!</h1>`)
        })
    }

    /* 
    if (method === 'PUT') {
        response.end('<h1>Bonjour!</h1>')
    }

    if (method === 'DELETE') {
        response.end('<h1>Salam</h1>')
    } */
};
 
const server = http.createServer(requestListener)

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`)
})