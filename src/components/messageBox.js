"use client"
export const MessageBox = ({item}) => {

    return <div id={item.id} className="w-full "  > 
        <div className={`bg-gray-200 p-4 text-md rounded-lg w-3/5 m-2 ${item.type == "user" ? "ml-20" :"mr-20"} `}>
            {item.message}
        </div>
    </div>
}