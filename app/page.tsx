
import Image from 'next/image'
import Hero from './Hero'
import Button from "@/components/Button";
import {useContext , createContext} from 'react'
import Gh_Card from '@/components/GitHubCard'
import About from './about';
import {User} from './index'
async function getData(): Promise<User> {

   let res = await fetch("https://api.github.com/users/Ansh-Sonkusare" , {})
   
    res = await res.json()
    const user = res as unknown as User
   return user 
    
}

export default async  function Home() {
 
  const user = await getData()
  
  
 return (
    <>
{/* <Hero/>*/}
   <About prop={user}/>
{/* <Gh_Card></Gh_Card> */}
    </>
  )
}
