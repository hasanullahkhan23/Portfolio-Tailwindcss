export default function contact(){
    return(
        <div className="bg-slate-800">
            <div className="border-4 mx-96">
                
            <div className="text-white flex justify-center mt-10 font-bold text-2xl mb-2">
                <h1>Contact</h1>
            </div>
        <div className="text-white flex justify-center mb-24">
            <ul>
        <label>Enter your first name :</label> <br />
        <input type="text" className="text-black rounded-md"/><br/><br />

        <label>Enter your last name :</label> <br />
        <input type="text" className="text-black rounded-md"/><br /><br />

        <label>Enter your email:</label> <br />
        <input type="text" className="text-black rounded-md"/><br /><br />

        <label>Type your message:</label> <br />
        <input type="text" className="text-black rounded-md"/><br /><br />

        <label>Date:</label> <br />
        <input type="date" className="text-black rounded-md"/><br /><br />
        <button className="rounded-xl text-black bg-cyan-600 font-bold w-28 h-10 hover:bg-white" >Send</button>
        </ul>
        </div>
        </div>
        </div>
    )
}