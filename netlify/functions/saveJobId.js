let jobData = null; // Variable to store job data in memory

exports.handler = async function(event, context) {
    try {
        const data = JSON.parse(event.body);
        const jobId = data.jobId;
        const name = data.name;
        const userId = data.userId;

        // Store job data in memory
        jobData = { jobId, name, userId };

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Job ID saved successfully!" })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to save Job ID", details: error.message })
        };
    }
};
