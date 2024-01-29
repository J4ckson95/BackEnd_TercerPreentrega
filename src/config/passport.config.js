import passport from "passport";
import jwt from "passport-jwt"
import config from "./config.js";

const JWTStrategy = jwt.Strategy
const cookieStractor = (req) => {
    const token = (req?.cookies) ? req.cookies["authToken"] : null
    return token
}
const initializedPassport = () => {
    passport.use("jwt", new JWTStrategy(
        { secretOrKey: config.PRIVATE_KEY, jwtFromRequest: jwt.ExtractJwt.fromExtractors([cookieStractor]) },
        (jwt_payload, done) => { return done(null, jwt_payload) }
    ))
}
export default initializedPassport