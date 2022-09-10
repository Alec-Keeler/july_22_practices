-- Q1
SELECT *
FROM albums
JOIN bands ON (band_id = bands.id);

-- Q2
SELECT bands.name, albums.year, num_sold
FROM albums
JOIN bands ON (albums.band_id = bands.id)
WHERE num_sold < 20000;