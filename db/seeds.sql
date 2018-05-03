USE burger_DB;
INSERT INTO burgers
    (burger_name, devoured)
VALUES
    ("Bacon Burger", false);
INSERT INTO burgers
    (burger_name, devoured)
VALUES
    ("Meat Burger", false);
INSERT INTO burgers
    (burger_name, devoured)
VALUES
    ("Double Meat Burger", false);

SELECT *
FROM burgers;