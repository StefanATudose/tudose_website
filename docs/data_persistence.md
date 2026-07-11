# Data Persistence Documentation

This document describes how data is managed in the application and outlines future considerations for database integration.

## Current State
The application operates entirely on the client side with no database or external storage connections:

*   **Static Data (`app/data/index.ts`)**: Holds project metadata, mockup data, and predefined chatbot responses.
*   **In-Memory Chat State (`app/hooks/useChat.ts`)**: Message logs are stored in standard React state. Conversations are reset whenever the browser page is refreshed.

## Future Considerations
As the website scales, the following persistence layers can be introduced:
1.  **Chat History**: Storing messages in a database (e.g., PostgreSQL or Redis) to maintain conversation history across sessions.
2.  **Dynamic Projects CMS**: Connecting the projects grid to a database or headless CMS to allow updates without redeploying code.
3.  **Real AI Integration**: Replacing the mock chatbot responses with a live AI endpoint (using a vector database for semantic search).
