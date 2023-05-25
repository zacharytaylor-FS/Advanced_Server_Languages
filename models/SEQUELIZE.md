# Sequelize

### Topics

1. [Model](#create-models)
2. [Model Association](#model-associations)
3. [Abstraction](#database-abstraction)
4. [Migration](#migration)
5. [Up & Down](#up-and-down)

---

Check Sequelize (Doc's)[https://sequelize.org/docs/v6/]

## Create Models

```
 npx sequelize-cli model:generate --name=modelName --attributes=value:DataType
```

## Model Associations

How data relates to other data. _Association_ is the relationship between two data types.
Object Relational Mapper (ORM) pattern of DBALs are known for how it handles data association.

-   **One-To-One**
    The relationship of One model to another
    Ex. User contains exactly ONE LoginToken
-   **One-To-Many**
    The relationship of One model to Many other models
    Ex. User can only have One Role
-   **Many-To-One**
    Opposite context of One-To-Many,
    Ex. Each Role can have Many Users
-   **Many-To-Many**
    A single model can have and belong to many other models of another type
    Ex. user Role can have many different types of Permissions, and Permissions can belong to many different types of user Roles. MUST be an ASSOCIATION TABLE that contains all of the IDs.

## Database Abstraction

## Migration

### Up and Down
