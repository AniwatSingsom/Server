exports.handler = async function(event, context) {
    if (global.jobData) {
        return {
            statusCode: 200,
            body: JSON.stringify(global.jobData)
        };
    } else {
        return {
            statusCode: 404,
            body: JSON.stringify({ error: "Job ID not found" })
        };
    }
};
