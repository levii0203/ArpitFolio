const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// nodemailer 
const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user:"ddecf13202403f",
        pass:"bb807b75f39dd9"
    }
});


async function Sendmail(email,message,name,profession){
    const info = await transporter.sendMail({
        from:"ddecf13202403f",
        to: email,
        subject: name +" - "+ profession,
        text:message
    })
    .then(
        console.log("nodemailer recipient: ", email)
    )
    .catch(err => {
        console.error(err);
    })
}

//Routing
app.get("/",(req,res)=>{
    const {message,visitorname,visitorprof} = req.body;
    Sendmail("wolfrexparth@gmail.com",message,visitorname,visitorprof);
    res.send("Email receieved successfully");
})
const PORT = 5000;
app.listen(PORT,()=>{
    console.log("Server is running")
});