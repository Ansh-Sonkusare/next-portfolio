
import { NextResponse } from 'next/server'
 
export async function POST(request:Request) {

    console.log(1);
    
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
      
      fetch(process.env.API_KEY, {
          method: "POST",
          headers: {
              'Content-type': 'application/json'
          },
          body: JSON.stringify(params)
      })
      return NextResponse.json({ "status":"sucess" })

  }


