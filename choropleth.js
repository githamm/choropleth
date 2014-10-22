<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
 	<title>U.S. Water Fluoridation Rates</title>
 	<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.5/leaflet.css" />
	<!--[if lte IE 8]>
    <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.5/leaflet.ie.css" />
	<![endif]-->
	<script type="text/javascript" src="http://cdn.leafletjs.com/leaflet-0.5/leaflet.js"></script>
	<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
	<script type="text/javascript" src="/fluoride.js"></script>

	<style type="text/css">

	.info {
	  padding: 6px 8px;
	  font: 14px/16px Arial, Helvetica, sans-serif;
	  background: white;
	  background: rgba(255,255,255,0.8);
	  box-shadow: 0 0 15px rgba(0,0,0,0.2);
	  border-radius: 5px;
	}
	.info h4 {
	  margin: 0 0 5px;
	  color: #777;
	}
	.legend-i {
	  clear: both;
	  width: 18px;
	  height: 18px;
	  float: left;
	  margin-right: 8px;
	  opacity: 0.7;
	}
	.legend-label {
  	  line-height: 18px;
	}
	#source {
	  font: 14px Arial, Helvetica, sans-serif;
	  font-style: italic;
	  float: right;
	  margin-top: -25px;
	}

	</style>
</head>

<body>

	<!-- You must set the height of the div for the map, yes this should be in an external file -->
	<div id="map_test_1" style="height: 400px; margin: 3em 0;">	</div>

	<div id="source">Source: <a  href="http://www.cdc.gov/fluoridation/statistics/2012stats.htm">cdc.gov</a></div>

		<select id="selectLink">
			<option value=''>Choose a county</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Adams&StartPG=1&EndPG=20">Adams</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Alamosa&StartPG=1&EndPG=20">Alamosa</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Arapahoe&StartPG=1&EndPG=20">Arapahoe</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Archuleta&StartPG=1&EndPG=20">Archuleta</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Baca&StartPG=1&EndPG=20">Baca</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Bent&StartPG=1&EndPG=20">Bent</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Boulder&StartPG=1&EndPG=20">Boulder</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Broomfield&StartPG=1&EndPG=20">Broomfield</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Chaffee&StartPG=1&EndPG=20">Chaffee</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Cheyenne&StartPG=1&EndPG=20">Cheyenne</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Clear+Creek&StartPG=1&EndPG=20">Clear Creek</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Conejos&StartPG=1&EndPG=20">Conejos</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Costilla&StartPG=1&EndPG=20">Costilla</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Crowley&StartPG=1&EndPG=20">Crowley</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Custer&StartPG=1&EndPG=20">Custer</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Delta&StartPG=1&EndPG=20">Delta</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Denver&StartPG=1&EndPG=20">Denver</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Dolores&StartPG=1&EndPG=20">Dolores</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Douglas&StartPG=1&EndPG=20">Douglas</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Eagle&StartPG=1&EndPG=20">Eagle</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=El+Paso&StartPG=1&EndPG=20">El Paso</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Elbert&StartPG=1&EndPG=20">Elbert</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Fremont&StartPG=1&EndPG=20">Fremont</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Garfield&StartPG=1&EndPG=20">Garfield</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Gilpin&StartPG=1&EndPG=20">Gilpin</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Grand&StartPG=1&EndPG=20">Grand</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Gunnison&StartPG=1&EndPG=20">Gunnison</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Hinsdale&StartPG=1&EndPG=20">Hinsdale</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Huerfano&StartPG=1&EndPG=20">Huerfano</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Jackson&StartPG=1&EndPG=20">Jackson</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Jefferson&StartPG=1&EndPG=20">Jefferson</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Kiowa&StartPG=1&EndPG=20">Kiowa</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Kit+Carson&StartPG=1&EndPG=20">Kit Carson</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=La+Plata&StartPG=1&EndPG=20">La Plata</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Lake&StartPG=1&EndPG=20">Lake</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Larimer&StartPG=1&EndPG=20">Larimer</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Las+Animas&StartPG=1&EndPG=20">Las Animas</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Lincoln&StartPG=1&EndPG=20">Lincoln</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Logan&StartPG=1&EndPG=20">Logan</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Mesa&StartPG=1&EndPG=20">Mesa</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Mineral&StartPG=1&EndPG=20">Mineral</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Moffat&StartPG=1&EndPG=20">Moffat</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Montezuma&StartPG=1&EndPG=20">Montezuma</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Montrose&StartPG=1&EndPG=20">Montrose</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Morgan&StartPG=1&EndPG=20">Morgan</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Otero&StartPG=1&EndPG=20">Otero</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Ouray&StartPG=1&EndPG=20">Ouray</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Park&StartPG=1&EndPG=20">Park</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Phillips&StartPG=1&EndPG=20">Phillips</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Pitkin&StartPG=1&EndPG=20">Pitkin</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Prowers&StartPG=1&EndPG=20">Prowers</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Pueblo&StartPG=1&EndPG=20">Pueblo</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Rio+Blanco&StartPG=1&EndPG=20">Rio Blanco</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Rio+Grande&StartPG=1&EndPG=20">Rio Grande</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Routt&StartPG=1&EndPG=20">Routt</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Saguache&StartPG=1&EndPG=20">Saguache</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=San+Juan&StartPG=1&EndPG=20">San Juan</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=San+Miguel&StartPG=1&EndPG=20">San Miguel</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Sedgwick&StartPG=1&EndPG=20">Sedgwick</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Summit&StartPG=1&EndPG=20">Summit</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Teller&StartPG=1&EndPG=20">Teller</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Washington&StartPG=1&EndPG=20">Washington</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Weld&StartPG=1&EndPG=20">Weld</option>
			<option value="http://apps.nccd.cdc.gov/MWF/SearchResultsV.asp?State=CO&StateName=Colorado&County=Yuma&StartPG=1&EndPG=20">Yuma</option>
    	</select>
    
    <div style="padding-top:15px">
      	<iframe id="iframe1" width="100%"; height="400px";></iframe>
    </div>

</body>

	<script type="text/javascript">

	  // Setup the map to center where you would like it to.  You can always to go maps.google.com and right click anywhere on the map and "Drop LatLng Marker" copy and paste that into the function call below.
	  var map = L.map('map_test_1').setView([37.8, -92], 4);
	      
	  var Thunderforest_Transport = L.tileLayer('http://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://www.opencyclemap.org">OpenCycleMap</a>, &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
	});

	  function getColor(d) {
	    return d > 90  ? '#C6E2FF' :
	           d > 80  ? '#62b6fc' :
	           d > 70  ? '#4682b4' :
	           d > 60  ? '#386890' :
	           d > 50  ? '#2a4e6c' :
	                      '#152736';
	  }

	  function style(feature) {
	    return {
	      fillColor: getColor(feature.properties.percentage),
	      weight: 1,
	      opacity: 1,
	      color: 'white',
	      //dashArray: '1',
	      fillOpacity: 0.7
	    };
	  }

	  var info = L.control();

	  info.onAdd = function (map) {
	    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
	    this.update();
	    return this._div;
	  };

	  // method that we will use to update the control based on feature properties passed
	  info.update = function (props) {
	    var grades = [0, 50, 60, 70, 80, 90];
	    this._div.innerHTML = '<h4>U.S. Water<br/>Fluoridation Rates</h4>' + (props ?
	      '<b>' + props.name + '</b><br />' + props.percentage + '%'
	      <!-- use below for tooltip description if want static text
	      //'<b>' + props.name + '</b><br />' + props.percentage + ' people / mi<sup>2</sup>' -->
	      : 'Hover over a state<br /><br />');
	    if (!props) {
	      for (var i = 0; i < grades.length; i++) {
	        this._div.innerHTML +=
	          '<i class="legend-i" style="background:' + getColor(grades[i] + 1) + '"></i> <span class="legend-label"> ' +
	          grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '</span><br>' : '+'  );
	      }
	    }
	  };

	  info.addTo(map);

	  var geojson;

	  function highlightFeature(e) {
	    var layer = e.target;

	    layer.setStyle({
	      <!-- fillColor: '#78A700', -->
	      weight: 3.0,
	      <!-- color: '#666', -->
	      dashArray: '',
	      fillOpacity: 0.7
	    });

	    if (!L.Browser.ie && !L.Browser.opera) {
	      layer.bringToFront();
	    }
	    info.update(layer.feature.properties);
	  }

	  function resetHighlight(e) {
	    geojson.resetStyle(e.target);
	    info.update();
	  }

	  function onEachFeature(feature, layer) {
	    layer.on({
	      click: highlightFeature,  <!-- test this on mobile -->
	      mouseover: highlightFeature,
	      mouseout: resetHighlight,
	    });
	  }

	  geojson = L.geoJson(statesData, {
	    style: style,
	    onEachFeature: onEachFeature
	  }).addTo(map);

	  console.log(statesData);

	  // Creates iframe action //
	  $(document).ready(function(){
	    $("#selectLink").on("change", function(){
	        var link = $(this).find("option:selected").val();
	       
	        
	        $("#iframe1").attr("src", link);
	    });                        
	                            
	});

	</script>
</html>

<!-- 

Above data from 2012: http://www.cdc.gov/fluoridation/statistics/2012stats.htm

CDC recommends 0.7 mg/liter (double check)

To check whether your water district treats water: http://apps.nccd.cdc.gov/MWF/CountydataV.asp?State=CO

Colorado cities and towns that have stopped adding fluoride to water:
From http://fluoridealert.org/content/communities_2010/

Palisade (May 2012)
Pagosa Springs (March 2005)
Telluride (September 2004)
Colorado Springs (January 2002)
Erie (November 2001 check-sounds like it's adding it again)


-->
