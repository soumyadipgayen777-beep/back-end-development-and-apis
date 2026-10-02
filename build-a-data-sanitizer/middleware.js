export function inputCleaner(req, res, next){
    if(req.body.username){
        req.body.username = req.body.username.toLowerCase();
    }
    if(req.body.comment){
        req.body.comment = req.body.comment.replace(/<[^>]*>/g, "");
    }
}

export function inputValidator(req, res, next){

}