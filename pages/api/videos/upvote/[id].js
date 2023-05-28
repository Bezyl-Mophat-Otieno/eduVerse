

import Video from "@/models/Video";
export default  async function handler(req, res) {
    const {method,query:{id}} = req;

    if(method==="PUT")
    try {

        await Video.findByIdAndUpdate(id,{
            $inc:{upvotes:1}
        })
        res.status(200).json("The Video was successfully Viewed")
        
    } catch (error) {
        res.status(500).json(error.message)
        
    }

}