import fs from "fs";

export default function login(req, res, dir) {

    if (!req.body.username || !req.body.password) return res.redirect("/home?missing-credentials=true");

    const username = req.body.username.toLowerCase();
    const password = req.body.password;

    const users = JSON.parse(fs.readFileSync(dir+"/Public/Data/Users/ALL.json"));
    const user = users.find(u => u.username.toLowerCase() === username);
    
    if (password !== user.password) return res.redirect("/login?wrong-credentials=true");

    res.cookie("authenticated", "true", {maxAge: 24*60*60*1000});
    res.cookie("user_data", JSON.stringify(user.userData), {maxAge: 24*60*60*1000});

    res.redirect("/?authenticated=true");

}