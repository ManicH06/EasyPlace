```mermaid
sequenceDiagram
    actor V as Visitor
    participant P as Product

    %% Visitor Actions
    V->>P: View products
    P-->>V: Display list of products
```