-- Q1
-- SELECT title, num_sold FROM albums
-- WHERE num_sold >= 100000;

-- Q2
-- SELECT * FROM albums
-- WHERE year BETWEEN 2018 AND 2020;

-- Q3
-- SELECT title, band_id FROM albums
-- WHERE band_id IN (1, 3, 4);
-- or
-- WHERE band_id = 1 OR band_id = 3 OR band_id = 4;

-- IQ1
-- SELECT * FROM albums
-- WHERE title LIKE "Wasn't";

-- IQ2
-- SELECT * FROM albums
-- ORDER BY num_sold DESC
-- LIMIT 2;

-- AQ
-- SELECT * FROM albums
-- ORDER BY num_sold DESC
-- LIMIT 2
-- OFFSET 2;