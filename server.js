let express = require('express');

let app = express();

app.use(express.static(__dirname + '/dist/personal-website-angular'));

app.get('/*', (req, resp) => {
    resp.sendFile(__dirname + '/dist/personal-website-angular/index.html');
});

app.listen(process.env.PORT || 8080);