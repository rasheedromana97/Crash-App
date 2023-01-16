var http = require("http");

const instanceId = Math.random();
const chance = 20;
let crashed = false;
function isCrashed(chanceOfCrashing) {
    return 1 === Math.floor(Math.random() * Math.floor(chanceOfCrashing));
}
  
setInterval(() => {
    if(isCrashed(chance)) {
        crashed = true;
    }
}, 5000)
http.createServer(function (request, response) {
    
    if(crashed) {
        response.writeHead(500, {'Content-Type': 'text/html'});
        response.end('<img src="https://media.giphy.com/media/Urc6CzW703XFajktll/giphy-downsized.gif"> <br> I\m dead \n' + instanceId);
    }
    else {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end('<img src="https://media.giphy.com/media/xT5LMHxhOfscxPfIfm/source.gif"> <br> Everything is going great on instance \n' + instanceId);
    }
   
 }).listen(8081);
 
 console.log('Server running at http://127.0.0.1:8081/');