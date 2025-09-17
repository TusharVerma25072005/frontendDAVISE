"use client"

import { useState } from "react"
export const SendBox = ({ messageList, setMessageList }) => {

    const addMessage = (mssg) => {
        const newMessage = {
            id: Math.random(),
            type: "user",
            message: mssg
        }
        const newList = [...messageList, newMessage]
        setMessageList(newList)
        window.localStorage.setItem('chatHistory' , JSON.stringify(newList))

    }
    const [msg , setMsg] = useState("");
    return <div className="w-full absolute bottom-0 flex justify-center py-4 ">
        <div className="w-3/4 rounded-full  p-3  flex  bg-gray-100">
            <input type="text" placeholder="Ask anything ... " className=" w-full outline-none px-3" onChange={(e)=>{setMsg(e.target.value)}} onKeyDown={e => e.key === "Enter" && (e.preventDefault(),addMessage(msg))}></input>
            <button className="outline-none hover:bg-gray-200 p-3 rounded-full" onClick={()=>{
                // console.log(msg)
                addMessage(msg)
            }}  ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
            </button>
        </div>

    </div>
}
