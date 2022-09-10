SELECT *
FROM musician_instruments
JOIN instruments ON (musician_instruments.instrument_id = instruments.id)
JOIN musicians ON (musician_instruments.musician_id = musicians.id)

-- Q2
SELECT musicians.last_name, bands.name
FROM musician_instruments
JOIN musicians ON (musician_instruments.musician_id = musicians.id)
JOIN instruments ON (musician_instruments.instrument_id = instruments.id)
JOIN bands ON (musicians.band_id = bands.id)
WHERE instruments.type = 'piano';