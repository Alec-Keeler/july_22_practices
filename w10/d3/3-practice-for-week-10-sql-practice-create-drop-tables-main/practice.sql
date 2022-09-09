CREATE TABLE puppies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(50) NOT NULL,
    age_yrs NUMERIC(3,1),
    breed VARCHAR(100),
    weight_lbs INTEGER,
    microchipped BOOLEAN DEFAULT false
);