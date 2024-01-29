export const cookieStractor = (req, res, next) => {
    const token = (req?.cookies) ? req.cookies["authToken"] : null
    console.log(token);
    return next
}