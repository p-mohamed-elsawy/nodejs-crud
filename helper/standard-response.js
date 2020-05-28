module.exports = function getStandardResponse(response,err,data) {
    if(err){
        return {
            response: 404,
            message : err,
         }
    }
 
    return {
        response: response.statusCode,
        message : 'Request Complete successfully ...',
        data : data,
     }
 }