DROP DATABASE IF EXISTS burger_DB;
CREATE database burger_DB;

USE burger_DB;

CREATE TABLE burgers
(
    id INTEGER NOT NULL
    AUTO_INCREMENT,
    PRIMARY KEY
    (id),
    burger_name varchar
    (255) NOT NULL,
    devoured BOOLEAN DEFAULT false
)
