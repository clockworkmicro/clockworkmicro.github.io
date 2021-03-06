function addTileBoundaries(map, opts)
{
	var url = "https://layer.clockworkmicro.com/v1/webtileboundaries?x={x}&y={y}&z={z}"
	if (typeof opts == "undefined")
		opts = {};

	var query = []
	for (var key in opts)
		query.push(key + "=" + opts[key]);

	query = query.join("&");
	if (query.length != 0)
		query = "?" + query

	var layer = L.tileLayer(url + query).addTo(map);
	return layer;
}
