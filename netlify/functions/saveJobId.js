exports.handler = async function(event, context) {
    const data = JSON.parse(event.body);
    const jobId = data.jobId;
    const name = data.name;
    const userId = data.userId;

    // Save data in your preferred storage (for example, in-memory or a database)
    global.jobData = { jobId, name, userId };

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Job ID saved successfully!" })
    };
};
