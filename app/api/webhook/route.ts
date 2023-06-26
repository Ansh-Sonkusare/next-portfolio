import { NextResponse } from 'next/server'
 
// export async function GET() {
 

//   // export async function addItem(data:FormData) {
//   //   console.log(1);
    
    
//   //   const user = {
//   //       name:data.get("name") as string,
//   //       email:data.get("email")as string ,
//   //       message:data.get("message")as string
//   //   } 
//   //   const params = {
//   //       username: "Email From Website",
//   //       content:"<@651365234459541514>",
//   //       "embeds": [{
//   //           "title": "Message!",
//   //           "description": `**Sent by**: ${user.name}\n**Email**: ${user.email}\n**Message**: ${user.message}`
//   //         }]
//   //     }
  
//   //     fetch(process.env.hookUrl, {
//   //         method: "POST",
//   //         headers: {
//   //             'Content-type': 'application/json'
//   //         },
//   //         body: JSON.stringify(params)
//   //     })
    
//   // }

// }
export async function POST(request: Request) {
  
  const data = await request.formData()
    const user = {
      name:data.get("name") as string,
      email:data.get("email")as string ,
      message:data.get("message")as string
  } 
  const params = {
      username: "Email From Website",
      content:"<@651365234459541514>",
      "embeds": [{
          "title": "Message!",
          "description": `**Sent by**: ${user.name}\n**Email**: ${user.email}\n**Message**: ${user.message}`
        }]
    }
    fetch(process.env.hookUrl, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(params)
    })
      .then(x => console.log(x) )
      .catch(c => console.log(c))
  
  return NextResponse.json({ "status":200 })
}