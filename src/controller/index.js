const homePage = (req,res)=>{
    res.status(200).send(`
    <h1>Welcome To Express </h1>`)
}

export default{
    homePage
}