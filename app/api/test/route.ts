import { NextResponse } from "next/server";
import fetch from "node-fetch";

export async function POST(request: Request) {
  const data = await request.formData();
  const user = {
    name: data.get("name") as string,
    email: data.get("email") as string,
    message: data.get("message") as string,
  };

  const params = {
    username: "Email From Website",
    content: "<@651365234459541514>",
    embeds: [
      {
        title: "Message!",
        description: `**Sent by**: ${user.name}\n**Email**: ${user.email}\n**Message**: ${user.message}`,
      },
    ],
  };

  return NextResponse.json(
    await fetch(process.env.API_KEY, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(params),
    })
  );
}
