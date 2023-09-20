const express = require('express')
const app = express()
const cors = require('cors')
const Octokit = require("octokit").Octokit;

const octokit = new Octokit({auth: "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"});
//
const port = process.env.PORT || 3030
app.use(cors())

app.get('/github', (req, res) => {
    const repos = [];
    octokit.request("GET /users/:owner/repos", {
        owner: "danilojezernik",
    }).then(response => {
        for(let repo of response.data){
            repos.push({
                id: repo.id,
                name: repo.name,
                avatar: repo.owner.avatar_url,
                url: repo.html_url,
                description: repo.description,
                created: repo.created_at,
                updated: repo.updated_at,
                size: repo.size,
                language: repo.language,
                topics: repo.topics
            })
        }
        res.json(repos);
    }).catch(error => {
        console.error("Error retrieving repositories:", error);
        res.status(500).json({ error: "Failed to retrieve repositories" });
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
