```mermaid
sequenceDiagram
    actor V as Visitor
    participant Frontend
    participant Backend
    participant Database

    %% Visitor Actions
    V ->> Frontend: Request profile edit
    Frontend ->> V: Send edit form
    V -->> Frontend: Submit new data
    Frontend -->> Backend: Forward data
    Backend  -->> Database: Update profile data
    Database -->> Frontend: Send updated data
    Frontend -->> V: Display confirmation message
```
