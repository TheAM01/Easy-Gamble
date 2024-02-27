export default async function createRoutes(app, dir) {

    const __public = `${dir}/Public`;

    app.get('/', (req, res) => {
        res.sendFile(__public+"/index.html");
    });

    app.get('/dashboard', (req, res) => {
        res.sendFile(__public+"/Static/dashboard.html");
    });

    app.get('/room', (req, res) => {
        res.sendFile(__public+"/Dynamic/room.html");
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

}