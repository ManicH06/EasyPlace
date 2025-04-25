```mermaid
sequenceDiagram
    actor V as Visitor
    participant P as Product

    %% Visitor Actions
    V->>P: View details of product
    P-->>V: Display product details
```