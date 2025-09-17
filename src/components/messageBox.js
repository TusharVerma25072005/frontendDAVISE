"use client"
export const MessageBox = ({item}) => {
    
    return <div id={item.id} className="w-full "  > 
        <div className={`bg-gray-200 p-4 text-md rounded-lg w-3/5 m-2 ${item.type == "bot" ? "left-0" :"right-0"} `}>
            {item.message}
        </div>
    </div>
}