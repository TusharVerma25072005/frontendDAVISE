"use client"
import { MessageBox } from "./messageBox"
export const AllMessageBox = ({messageList}) => {
    return <div className="flex flex-col ltr overflow-y">
        {messageList.map((message) => <div key={message.id}><MessageBox item={message} /></div>)}
    </div>
}