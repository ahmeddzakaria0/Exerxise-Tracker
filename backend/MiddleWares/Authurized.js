const JWT = require("jsonwebtoken");
module.exports = (request, response , next) => {
	let token, decode;
	try {
		token = request.get("token")
		decode = JWT.verify(token, process.env.SecretKey);
	} catch (err) {
		err.message = "Not Authorized";
		next(err);
	}
	if (decode !== undefined) {
		request.role = decode.role;
		request.email = decode.email;
        request.id = decode.id;
		next();
	}
};
