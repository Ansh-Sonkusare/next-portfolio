import { User } from "@/app";
import { cache } from "react";

export  const getData = cache(async(user: string) => {
    let res = await fetch(`https://api.github.com/users/${user}`);
    res = await res.json();
    return res as unknown as User;
  }
)

