//Writing backend for todo app 

import { serve } from "bun"
import { json } from "express"
const Users = [
    {
        id: 1,
        name: "Deepak",
        password: 123
    },
    {
        id: 2,
        name: "Ashish",
        password: 125
    },
    {
        id: 3,
        name: "Ankit",
        password: 124
    },
    {
        id: 4,
        name: "Ayush",
        password: 121
    },
]

Bun.serve({
    port: 3000,
    fetch(req) {
        const url = new URL(req.url)
        if (req.method === "GET" && url.pathname === '/api/') {
          try {
            
              return new Response(JSON.stringify({ Users }), {
                  headers: { "Content-Type": "application/json" },
                  status: 200,
              }) 
          } catch (error) {
            return new Response(JSON.stringify({msg:"Internal Problem Fuck this slow internet",error:error.msg}),
                {status:500}
            );
          }
        
        }
    }

})
console.log(`serve.port`)

