# Jira Story Creation API

A Node.js API that creates Jira stories from natural language prompts.

## Setup

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Configure your environment variables by editing the `.env` file:
   ```
   PORT=3000
   JIRA_API_BASE_URL=https://your-domain.atlassian.net/rest/api/3
   ATLASSIAN_API_TOKEN=your_api_token
   ATLASSIAN_EMAIL=your_email@example.com
   JIRA_PROJECT_KEY=YOUR_PROJECT
   ENABLE_PRIORITY_FIELD=false
   ```
   
   > **Note:** Set `ENABLE_PRIORITY_FIELD=true` only if your Jira project supports setting priority directly via the API. Some Jira instances restrict setting this field through screen configurations.

## Getting an Atlassian API Token

1. Go to https://id.atlassian.com/manage-profile/security/api-tokens
2. Click "Create API token"
3. Give your token a name and click "Create"
4. Copy the token value and add it to your `.env` file

## Running the Application

Start the server:
```
npm start
```

For development with automatic restarts:
```
npm run dev
```

## API Endpoints

### Create a Story
```
POST /api/stories
```

Headers:
```
Authorization: your_atlassian_api_token
X-Atlassian-Email: your_email@example.com (optional if set in .env)
Content-Type: application/json
```

Request body:
```json
{
  "prompt": "Create a feature to allow users to export data as CSV",
  "projectKey": "PROJECT", 
  "issueType": "Story",
  "priority": "Medium"
}
```

Response:
```json
{
  "status": "success",
  "message": "Story created successfully",
  "data": {
    "id": "12345",
    "key": "PROJECT-123",
    "self": "https://your-domain.atlassian.net/rest/api/3/issue/12345",
    "title": "Create a feature to allow users to export data as CSV",
    "generatedFrom": "Create a feature to allow users to export data as CSV"
  }
}
```

### Get Issue Types
```
GET /api/stories/types?projectKey=PROJECT
```

Headers:
```
Authorization: your_atlassian_api_token
X-Atlassian-Email: your_email@example.com
```

Response:
```json
{
  "status": "success",
  "data": [
    {
      "id": "10001",
      "name": "Story",
      "description": "A user story",
      "iconUrl": "..."
    },
    {
      "id": "10002",
      "name": "Bug",
      "description": "A bug",
      "iconUrl": "..."
    }
  ]
}
```

## Health Check

```
GET /health
```

Response:
```json
{
  "status": "OK",
  "message": "Service is running"
}
```
