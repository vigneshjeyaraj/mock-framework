
var generateResponse = function(req, res, next) {
    console.log("The req body is "+ req.body);
    const username = req.body.username;
    if (username.indexOf("@") > 0) {
        res.json({
            "username": username,
            "message": `Username ${username} created successfully` 
        }) 
    } else {
        res.json({
            "username": username,
            "message": `Username ${username} creation was failed.` 
        }) 
    }
};

module.exports = {
    path: '/users',
    callback: generateResponse
};

/**
 * Ensure the content-type header is application/json.
 * API Contract IS:
 * {
 *  "firstName": "Vignesh",
 *  "lastName": "Jeyaraj",
 *  "Email": "vicky.008@gmail.com",
 *  "username": vicky.008@gmail.com
 * }
 */