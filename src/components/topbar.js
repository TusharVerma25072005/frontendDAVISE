"use client"
export const Topbar = () =>{
    return <div className="w-full fixed sticky top-0 bg-red-200 p-3">
        <select id="chatModel" onChange={()=>{}} className="px-2 py-1 font-bold text-xl rounded-md">
            <option value={"chatgpt1.0"} >Model 1</option>
            <option value={"chatgpt2.0"} >Model 2</option>
            <option value={"chatgpt3.0"} >Model 3</option>
            <option value={"chatgpt4.0"} >Model 4</option>
        </select>
    </div>
}