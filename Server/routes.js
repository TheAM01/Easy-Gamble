import login from "./Middleware/login.js";

export default async function createRoutes(app, dir) {

    const __public = `${dir}/Public`;

    app.get('/', (req, res) => {
        res.sendFile(__public+"/index.html");
        console.log(decodeURI(req.cookies.user_data));
    });

    app.get('/home', (req, res) => {
        res.sendFile(__public+"/index.html");
    });

    app.get('/dashboard', (req, res) => {
        res.sendFile(__public+"/Static/dashboard.html");
    });

    app.get('/room', (req, res) => {
        res.sendFile(__public+"/Dynamic/room.html");
    });

    app.get('/login', (req, res) => {
        res.sendFile(__public+"/User/login.html");
    });

    app.get('/logout', (req, res) => {
        res.clearCookie("authenticated");
        res.clearCookie("user_data");
        res.redirect("/?deauthenticated=true");
    })


    // static files

    app.get('/scripts/:file', (req, res) => {
        res.sendFile(`${__public}/Scripts/${req.params.file}`);
    });

    app.get('/styles/:file', (req, res) => {
        res.sendFile(`${__public}/Styles/${req.params.file}`);
    });

    app.get('/cdn/:file', (req, res) => {
        res.sendFile(`${__public}/Assets/${req.params.file}`);
    });

    // POST routes

    app.post('/login', (req, res) => {
        return login(req, res, dir);
    })

}