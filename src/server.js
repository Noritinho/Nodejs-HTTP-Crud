import http from "node:http"

const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method === "GET" && url === "/tasks") {
    return res.end("task list")
  }

  return res.end("Hello world")
})

server.listen(3333)
