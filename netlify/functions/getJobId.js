let jobData = null; // Use the same variable to store job data

exports.handler = async function(event, context) {
    if (jobData) {
        return {
            statusCode: 200,
            body: JSON.stringify(jobData)
        };
    } else {
        return {
            statusCode: 404,
            body: JSON.stringify({ error: "Job ID not found" })
        };
    }
};
