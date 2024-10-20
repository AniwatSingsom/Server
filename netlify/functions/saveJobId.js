const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "jobIds.json");

exports.handler = async function(event, context) {
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: "Method Not Allowed"
        };
    }

    const data = JSON.parse(event.body);

    try {
        let jobIds = {};

        // Check if the file exists, read the current job data if it exists
        if (fs.existsSync(filePath)) {
            const fileData = fs.readFileSync(filePath);
            jobIds = JSON.parse(fileData);
        }

        // Update or add the job ID for the specific user
        jobIds[data.userId] = {
            name: data.name,
            jobId: data.jobId
        };

        // Write updated data back to file
        fs.writeFileSync(filePath, JSON.stringify(jobIds, null, 2));

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Job ID saved successfully!" })
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to save Job ID", details: err })
        };
    }
};
