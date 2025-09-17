"use client"

import { Topbar } from "@/components/topbar";
import { SendBox } from "@/components/sendbox";
import { SideNav } from "@/components/sidenav";
import { AllMessageBox } from "@/components/chats";
import { useState , useEffect} from "react";



const List = [
  {
    id:1,
    type:"bot",
    message:"Hello"
  },{
    id:2,
    type:"user",
    message:"Hello bot"
  },{
    id:3,
    type:"bot",
    message:"Hello"
  },{
    id:4,
    type:"user",
    message:"Hello bot"
  },{
    id:5,
    type:"bot",
    message:"Hello"
  },
  {
    id:6,
    type:"user",
    message:"Hello bott"
  },{
    id:7,
    type:"bot",
    message:"Hello"
  },{
    id:8,
    type:"user",
    message:"Hello last"
  },

]

function dummy(){
  window.localStorage.setItem('chatHistory' , JSON.stringify(List))
}

export default function Home() {
  
  const [messageList , setMessageList] = useState([])

  useEffect(()=>{
    // dummy()
    const lst = JSON.parse(window.localStorage.getItem('chatHistory'))
    console.log(lst)
    setMessageList(lst)
    return 
  }, [])


  

  return (
    <main className="grid grid-cols-4 min-h-screen">
      <div className="col-span-1 bg-green-200">
        <SideNav />
      </div>
      <div className="col-span-3 bg-blue-200  relative h-screen">
        <Topbar />
        {messageList ? 
        <AllMessageBox messageList={messageList} />
        :
        <div>loading...</div>
        }
        <SendBox messageList={messageList} setMessageList={setMessageList}/>
      </div>
    </main>
  );
}
