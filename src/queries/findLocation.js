module.exports = (
  lat,
  lng
) => `with b as (select ('SRID=4326;POINT(${lng} ${lat})')::geometry as point)
select name|| ', ' ||
(select name from osm.planet_osm_polygon WHERE admin_level = '8' AND st_contains(way, b.point) limit 1) || ' - '||
(select ref from osm.planet_osm_polygon as e WHERE admin_level = '4' and st_contains(way, b.point) limit 1) as state
from osm.planet_osm_line, b
     WHERE st_dwithin(way, b.point, 1) AND upper(name) <> upper('rua') AND upper(name) <> upper('avenida') AND upper(name) <> upper('retorno') 
    ORDER BY st_distance(way, b.point), z_order desc
     limit 1
        `;
