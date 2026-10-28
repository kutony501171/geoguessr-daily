/* GeoGuessr Daily Challenge 資料（由 Copilot 維護）*/
const DAYS = [
  {date:"2026-08-02", rounds:[
    {"round": 1, "lat": 33.612274, "lng": -78.982123, "country": "United States", "region": "South Carolina", "clues": ["[雜項] 美國東部使用 Hardee's 品牌（黃色星星標誌）"], "images": ["images/2026-08-02/r1.png"]},
    {"round": 2, "lat": 65.613987, "lng": -37.635476, "country": "Greenland", "region": "Sermersooq Municipality", "clues": ["[車輛] Tasiilaq 街景車為四輪越野車，有大型灰色護手"], "images": ["images/2026-08-02/r2.png"]},
    {"round": 3, "lat": 50.394776, "lng": 16.043137, "country": "Czechia", "region": "Královéhradecký kraj", "clues": ["[路牌] 捷克方向指示牌尾端為實心箭頭"], "images": ["images/2026-08-02/r3.png"]},
    {"round": 4, "lat": 51.126903, "lng": 71.282644, "country": "Kazakhstan", "region": "Astana", "clues": ["[車輛] 哈薩克街景全由白色皮卡車拍攝（可能被模糊）"], "images": ["images/2026-08-02/r4.png"]},
    {"round": 5, "lat": -34.107303, "lng": 18.826687, "country": "South Africa", "region": "Western Cape", "clues": ["[建築] 南非都會區郊區住宅普遍有高牆、圍欄與大門"], "images": ["images/2026-08-02/r5.png"]}
  ]},
  {date:"2026-08-03", rounds:[
    {"round": 1, "lat": -17.399335, "lng": 15.896407, "country": "Namibia", "region": "Ohangwena Region", "clues": [], "images": []},
    {"round": 2, "lat": 55.850118, "lng": 25.729767, "country": "Lithuania", "region": "Panevėžio apskritis", "clues": [], "images": []},
    {"round": 3, "lat": -44.995658, "lng": 169.74613, "country": "New Zealand", "region": "Otago Region", "clues": [], "images": []},
    {"round": 4, "lat": 30.028675, "lng": 31.262985, "country": "Egypt", "region": "Cairo Governorate", "clues": [], "images": []},
    {"round": 5, "lat": 43.066302, "lng": 20.618707, "country": "Serbia", "region": "Raška District", "clues": [], "images": []}
  ]},
  {date:"2026-08-04", rounds:[
    {"round": 1, "lat": -14.513987, "lng": -73.269429, "country": "Peru", "region": "Apurímac", "clues": [], "images": []},
    {"round": 2, "lat": 46.878618, "lng": 22.941648, "country": "Romania", "region": "Județul Cluj", "clues": [], "images": []},
    {"round": 3, "lat": -26.598688, "lng": 31.388184, "country": "Eswatini", "region": "Manzini", "clues": [], "images": []},
    {"round": 4, "lat": 64.94148, "lng": -22.903938, "country": "Iceland", "region": "Sveitarfélagið Stykkishólmur", "clues": [], "images": []},
    {"round": 5, "lat": 42.154046, "lng": 77.526697, "country": "Kyrgyzstan", "region": "Issyk-Kul Region", "clues": [], "images": []}
  ]},
  {date:"2026-08-05", rounds:[
    {"round": 1, "lat": -2.446984, "lng": -79.367533, "country": "Ecuador", "region": "Cañar", "clues": [], "images": []},
    {"round": 2, "lat": 9.978001, "lng": -84.734073, "country": "Costa Rica", "region": "Puntarenas Province", "clues": [], "images": []},
    {"round": 3, "lat": 52.731085, "lng": 15.223467, "country": "Poland", "region": "Województwo lubuskie", "clues": [], "images": []},
    {"round": 4, "lat": 1.402868, "lng": 103.749267, "country": "Singapore", "region": "Singapore", "clues": [], "images": []},
    {"round": 5, "lat": 46.148416, "lng": 15.042974, "country": "Slovenia", "region": "Trbovlje", "clues": [], "images": []}
  ]},
  {date:"2026-08-06", rounds:[
    {"round": 1, "lat": 46.894135, "lng": 19.662303, "country": "Hungary", "region": "Bács-Kiskun", "clues": [], "images": []},
    {"round": 2, "lat": 55.187776, "lng": -7.048095, "country": "Ireland", "region": "County Donegal", "clues": [], "images": []},
    {"round": 3, "lat": -24.521703, "lng": 23.928141, "country": "Botswana", "region": "Southern District", "clues": [], "images": []},
    {"round": 4, "lat": 2.884837, "lng": 102.358502, "country": "Malaysia", "region": "Negeri Sembilan", "clues": [], "images": []},
    {"round": 5, "lat": 13.952291, "lng": 108.661697, "country": "Vietnam", "region": "Gia Lai", "clues": [], "images": []}
  ]},
  {date:"2026-08-07", rounds:[
    {"round": 1, "lat": 42.658231, "lng": 13.691427, "country": "Italy", "region": "Abruzzo", "clues": [], "images": []},
    {"round": 2, "lat": 54.447567, "lng": 9.412216, "country": "Germany", "region": "Schleswig-Holstein", "clues": [], "images": []},
    {"round": 3, "lat": -31.190044, "lng": 115.802238, "country": "Australia", "region": "Western Australia", "clues": [], "images": []},
    {"round": 4, "lat": 33.930869, "lng": -84.379603, "country": "United States", "region": "Georgia", "clues": [], "images": []},
    {"round": 5, "lat": 58.817505, "lng": 23.788655, "country": "Estonia", "region": "Lääne maakond", "clues": [], "images": []}
  ]},
  {date:"2026-08-08", rounds:[
    {"round": 1, "lat": 67.148508, "lng": 24.996097, "country": "Finland", "region": "Lappi", "clues": [], "images": []},
    {"round": 2, "lat": 12.140984, "lng": 9.144441, "country": "Nigeria", "region": "Jigawa", "clues": [], "images": []},
    {"round": 3, "lat": -16.442247, "lng": -51.810588, "country": "Brazil", "region": "Goiás", "clues": [], "images": []},
    {"round": 4, "lat": 19.512648, "lng": -101.617604, "country": "Mexico", "region": "Michoacán", "clues": [], "images": []},
    {"round": 5, "lat": -5.360668, "lng": -80.723282, "country": "Peru", "region": "Piura", "clues": [], "images": []}
  ]},
  {date:"2026-08-09", rounds:[
    {"round": 1, "lat": 5.711836, "lng": -0.304992, "country": "Ghana", "region": "Greater Accra Region", "clues": [], "images": []},
    {"round": 2, "lat": 41.539919, "lng": 32.462675, "country": "Türkiye", "region": "Bartın", "clues": [], "images": []},
    {"round": 3, "lat": 46.325365, "lng": 48.043412, "country": "Russia", "region": "Astrakhanskaya oblast'", "clues": [], "images": []},
    {"round": 4, "lat": 16.22105, "lng": 99.885974, "country": "Thailand", "region": "Chang Wat Kamphaeng Phet", "clues": [], "images": []},
    {"round": 5, "lat": 10.594612, "lng": 123.481355, "country": "Philippines", "region": "Negros Occidental", "clues": [], "images": []}
  ]},
  {date:"2026-08-10", rounds:[
    {"round": 1, "lat": -0.205195, "lng": 35.785494, "country": "Kenya", "region": "Nakuru County", "clues": [], "images": []},
    {"round": 2, "lat": 42.620321, "lng": 9.435321, "country": "France", "region": "Corse", "clues": [], "images": []},
    {"round": 3, "lat": -36.884817, "lng": 174.593341, "country": "New Zealand", "region": "Auckland", "clues": [], "images": []},
    {"round": 4, "lat": 57.881216, "lng": -4.018948, "country": "United Kingdom", "region": "Highland Council", "clues": [], "images": []},
    {"round": 5, "lat": 40.7164, "lng": 19.550828, "country": "Albania", "region": "Qarku i Fierit", "clues": [], "images": []}
  ]},
  {date:"2026-08-11", rounds:[
    {"round": 1, "lat": 56.633019, "lng": 9.790863, "country": "Denmark", "region": "North Denmark Region", "clues": [], "images": []},
    {"round": 2, "lat": 26.496731, "lng": -100.190534, "country": "Mexico", "region": "Nuevo León", "clues": [], "images": []},
    {"round": 3, "lat": 41.486574, "lng": -7.17496, "country": "Portugal", "region": "Bragança", "clues": [], "images": []},
    {"round": 4, "lat": 4.499832, "lng": -75.002279, "country": "Colombia", "region": "Tolima", "clues": [], "images": []},
    {"round": 5, "lat": 21.228376, "lng": 105.375373, "country": "Vietnam", "region": "Ha Noi", "clues": [], "images": []}
  ]},
  {date:"2026-08-12", rounds:[
    {"round": 1, "lat": 25.33165, "lng": 51.365341, "country": "Qatar", "region": "Al Rayyan Municipality", "clues": [], "images": []},
    {"round": 2, "lat": -9.805375, "lng": -77.43343, "country": "Peru", "region": "Áncash", "clues": [], "images": []},
    {"round": 3, "lat": 5.404546, "lng": 101.122793, "country": "Malaysia", "region": "Perak", "clues": [], "images": []},
    {"round": 4, "lat": 55.508239, "lng": 13.234362, "country": "Sweden", "region": "Skåne län", "clues": [], "images": []},
    {"round": 5, "lat": -30.036452, "lng": -52.900882, "country": "Brazil", "region": "Rio Grande do Sul", "clues": [], "images": []}
  ]},
  {date:"2026-08-13", rounds:[
    {"round": 1, "lat": -33.77394, "lng": -56.312011, "country": "Uruguay", "region": "Departamento de Florida", "clues": [], "images": []},
    {"round": 2, "lat": 42.873809, "lng": 25.318947, "country": "Bulgaria", "region": "Gabrovo", "clues": [], "images": []},
    {"round": 3, "lat": 46.523454, "lng": 18.168902, "country": "Hungary", "region": "Tolna County", "clues": [], "images": []},
    {"round": 4, "lat": 11.455776, "lng": 104.521081, "country": "Cambodia", "region": "Kampong Speu Province", "clues": [], "images": []},
    {"round": 5, "lat": 14.754353, "lng": -16.432739, "country": "Senegal", "region": "Région de Diourbel", "clues": [], "images": []}
  ]},
  {date:"2026-08-14", rounds:[
    {"round": 1, "lat": -25.888677, "lng": 139.35217, "country": "Australia", "region": "Queensland", "clues": [], "images": []},
    {"round": 2, "lat": 61.868087, "lng": 29.131686, "country": "Finland", "region": "Etelä-Savo", "clues": [], "images": []},
    {"round": 3, "lat": -33.187621, "lng": 20.822878, "country": "South Africa", "region": "Western Cape", "clues": [], "images": []},
    {"round": 4, "lat": 50.967924, "lng": 29.916166, "country": "Ukraine", "region": "Kyiv Oblast", "clues": [], "images": []},
    {"round": 5, "lat": 25.348008, "lng": 55.444617, "country": "United Arab Emirates", "region": "Sharjah", "clues": [], "images": []}
  ]},
  {date:"2026-08-15", rounds:[
    {"round": 1, "lat": 35.823643, "lng": 10.630015, "country": "Tunisia", "region": "Gouvernorat de Sousse", "clues": [], "images": []},
    {"round": 2, "lat": -40.217918, "lng": -72.16328, "country": "Chile", "region": "Los Ríos", "clues": [], "images": []},
    {"round": 3, "lat": 38.81584, "lng": -78.312338, "country": "United States", "region": "Virginia", "clues": [], "images": []},
    {"round": 4, "lat": 22.786411, "lng": 120.299539, "country": "Taiwan", "region": "Kaohsiung City", "clues": [], "images": []},
    {"round": 5, "lat": 51.932391, "lng": -7.999666, "country": "Ireland", "region": "County Cork", "clues": [], "images": []}
  ]},
  {date:"2026-08-16", rounds:[
    {"round": 1, "lat": 47.165834, "lng": 8.114011, "country": "Switzerland", "region": "Luzern", "clues": [], "images": []},
    {"round": 2, "lat": 42.303956, "lng": 18.932996, "country": "Montenegro", "region": "Prijestonica Cetinje", "clues": [], "images": []},
    {"round": 3, "lat": 8.105765, "lng": 77.468334, "country": "India", "region": "Tamil Nadu", "clues": [], "images": []},
    {"round": 4, "lat": -29.166362, "lng": -59.269801, "country": "Argentina", "region": "Corrientes", "clues": [], "images": []},
    {"round": 5, "lat": 49.876719, "lng": 6.216932, "country": "Luxembourg", "region": "Diekirch", "clues": [], "images": []}
  ]},
  {date:"2026-08-17", rounds:[
    {"round": 1, "lat": 51.025679, "lng": 4.475592, "country": "Belgium", "region": "Vlaanderen", "clues": [], "images": []},
    {"round": 2, "lat": 42.206469, "lng": 20.73572, "country": "Kosovo", "region": "Kosovo", "clues": [], "images": []},
    {"round": 3, "lat": 64.183955, "lng": -21.685399, "country": "Iceland", "region": "Mosfellsbær", "clues": [], "images": []},
    {"round": 4, "lat": 7.971557, "lng": 79.938468, "country": "Sri Lanka", "region": "North Western Province", "clues": [], "images": []},
    {"round": 5, "lat": -17.673819, "lng": 18.232299, "country": "Namibia", "region": "Kavango West Region", "clues": [], "images": []}
  ]},
  {date:"2026-08-18", rounds:[
    {"round": 1, "lat": 64.742723, "lng": 28.335469, "country": "Finland", "region": "Kainuu", "clues": [], "images": []},
    {"round": 2, "lat": -16.540672, "lng": -68.063571, "country": "Bolivia", "region": "Departamento de La Paz", "clues": [], "images": []},
    {"round": 3, "lat": 25.627726, "lng": 88.633519, "country": "Bangladesh", "region": "Rangpur Division", "clues": [], "images": []},
    {"round": 4, "lat": 50.257689, "lng": 52.629311, "country": "Kazakhstan", "region": "West Kazakhstan Region", "clues": [], "images": []},
    {"round": 5, "lat": 61.94875, "lng": 6.46422, "country": "Norway", "region": "Møre og Romsdal", "clues": [], "images": []}
  ]},
  {date:"2026-08-19", rounds:[
    {"round": 1, "lat": 32.267134, "lng": 34.880466, "country": "Israel", "region": "Center District", "clues": [], "images": []},
    {"round": 2, "lat": 43.733134, "lng": 7.416183, "country": "Monaco", "region": "Monaco", "clues": [], "images": []},
    {"round": 3, "lat": 56.042494, "lng": 21.815544, "country": "Lithuania", "region": "Telšių apskritis", "clues": [], "images": []},
    {"round": 4, "lat": 9.835228, "lng": -83.950949, "country": "Costa Rica", "region": "Cartago Province", "clues": [], "images": []},
    {"round": 5, "lat": 46.315955, "lng": -70.868369, "country": "Canada", "region": "Québec", "clues": [], "images": []}
  ]},
  {date:"2026-08-20", rounds:[
    {"round": 1, "lat": 51.379243, "lng": 128.132504, "country": "Russia", "region": "Amurskaya oblast'", "clues": [], "images": []},
    {"round": 2, "lat": 48.217245, "lng": 16.362199, "country": "Austria", "region": "Wien", "clues": [], "images": []},
    {"round": 3, "lat": 22.003249, "lng": 120.776961, "country": "Taiwan", "region": "Pingtung County", "clues": [], "images": []},
    {"round": 4, "lat": 45.126386, "lng": 19.229228, "country": "Serbia", "region": "Srem District", "clues": [], "images": []},
    {"round": 5, "lat": 36.786902, "lng": 10.108018, "country": "Tunisia", "region": "Tunis Governorate", "clues": [], "images": []}
  ]},
  {date:"2026-08-21", rounds:[
    {"round": 1, "lat": 38.981868, "lng": -3.932657, "country": "Spain", "region": "Castilla-La Mancha", "clues": [], "images": []},
    {"round": 2, "lat": 63.393416, "lng": 12.91771, "country": "Sweden", "region": "Jämtlands län", "clues": [], "images": []},
    {"round": 3, "lat": 0.286835, "lng": 32.607435, "country": "Uganda", "region": "Central Region", "clues": [], "images": []},
    {"round": 4, "lat": 21.564577, "lng": -88.233808, "country": "Mexico", "region": "Yucatán", "clues": [], "images": []},
    {"round": 5, "lat": -45.782631, "lng": 168.559265, "country": "New Zealand", "region": "Southland Region", "clues": [], "images": []}
  ]},
  {date:"2026-08-22", rounds:[
    {"round": 1, "lat": 52.604051, "lng": 17.458675, "country": "Poland", "region": "Województwo wielkopolskie", "clues": [], "images": []},
    {"round": 2, "lat": -32.768623, "lng": 25.698053, "country": "South Africa", "region": "Eastern Cape", "clues": [], "images": []},
    {"round": 3, "lat": 54.131365, "lng": -8.444609, "country": "Ireland", "region": "County Sligo", "clues": [], "images": []},
    {"round": 4, "lat": 0.78891, "lng": 102.059114, "country": "Indonesia", "region": "Riau", "clues": [], "images": []},
    {"round": 5, "lat": 41.644263, "lng": -93.514673, "country": "United States", "region": "Iowa", "clues": [], "images": []}
  ]},
  {date:"2026-08-23", rounds:[
    {"round": 1, "lat": -25.115289, "lng": -64.12988, "country": "Argentina", "region": "Salta", "clues": [], "images": []},
    {"round": 2, "lat": 56.743172, "lng": 24.402178, "country": "Latvia", "region": "Ķekavas novads", "clues": [], "images": []},
    {"round": 3, "lat": 21.398061, "lng": 103.030633, "country": "Vietnam", "region": "Dien Bien", "clues": [], "images": []},
    {"round": 4, "lat": 60.870141, "lng": 14.910413, "country": "Sweden", "region": "Dalarnas län", "clues": [], "images": []},
    {"round": 5, "lat": 47.956863, "lng": 33.39688, "country": "Ukraine", "region": "Dnipropetrovsk Oblast", "clues": [], "images": []}
  ]},
  {date:"2026-08-24", rounds:[
    {"round": 1, "lat": 42.830794, "lng": 73.892676, "country": "Kyrgyzstan", "region": "Chuy Province", "clues": [], "images": []},
    {"round": 2, "lat": 5.347479, "lng": 101.981558, "country": "Malaysia", "region": "Kelantan", "clues": [], "images": []},
    {"round": 3, "lat": 41.578537, "lng": -6.215442, "country": "Portugal", "region": "Bragança", "clues": [], "images": []},
    {"round": 4, "lat": -7.726147, "lng": -78.992154, "country": "Peru", "region": "La Libertad", "clues": [], "images": []},
    {"round": 5, "lat": 44.64441, "lng": 142.884272, "country": "Japan", "region": "Hokkaido", "clues": [], "images": []}
  ]},
  {date:"2026-08-25", rounds:[
    {"round": 1, "lat": -7.028809, "lng": -37.280363, "country": "Brazil", "region": "Paraíba", "clues": [], "images": []},
    {"round": 2, "lat": 7.757671, "lng": 80.569704, "country": "Sri Lanka", "region": "Central Province", "clues": [], "images": []},
    {"round": 3, "lat": 18.575668, "lng": 121.153293, "country": "Philippines", "region": "Cagayan", "clues": [], "images": []},
    {"round": 4, "lat": 14.909931, "lng": -90.673232, "country": "Guatemala", "region": "Quiché Department", "clues": [], "images": []},
    {"round": 5, "lat": 59.493056, "lng": 6.519207, "country": "Norway", "region": "Rogaland", "clues": [], "images": []}
  ]},
  {date:"2026-08-26", rounds:[
    {"round": 1, "lat": 63.182718, "lng": 75.277205, "country": "Russia", "region": "Yamalo-Nenetskiy", "clues": [], "images": []},
    {"round": 2, "lat": -18.923325, "lng": 47.530109, "country": "Madagascar", "region": "Analamanga", "clues": [], "images": []},
    {"round": 3, "lat": 48.445522, "lng": 0.247016, "country": "France", "region": "Pays de la Loire", "clues": [], "images": []},
    {"round": 4, "lat": -34.002461, "lng": 115.757206, "country": "Australia", "region": "Western Australia", "clues": [], "images": []},
    {"round": 5, "lat": 39.271284, "lng": 20.929769, "country": "Greece", "region": "Epirus", "clues": [], "images": []}
  ]},
  {date:"2026-08-27", rounds:[
    {"round": 1, "lat": 42.2869, "lng": 25.924338, "country": "Bulgaria", "region": "Stara Zagora", "clues": [], "images": []},
    {"round": 2, "lat": 38.378756, "lng": 128.4733, "country": "Korea, South", "region": "Gangwon-do", "clues": [], "images": []},
    {"round": 3, "lat": 2.19307, "lng": -75.639188, "country": "Colombia", "region": "Huila", "clues": [], "images": []},
    {"round": 4, "lat": 47.191758, "lng": 23.053894, "country": "Romania", "region": "Județul Sălaj", "clues": [], "images": []},
    {"round": 5, "lat": 58.446755, "lng": -3.09294, "country": "United Kingdom", "region": "Highland Council", "clues": [], "images": []}
  ]},
  {date:"2026-08-28", rounds:[
    {"round": 1, "lat": 13.682156, "lng": -16.496496, "country": "Senegal", "region": "Fatick Region", "clues": [], "images": []},
    {"round": 2, "lat": 10.101823, "lng": -85.373207, "country": "Costa Rica", "region": "Provincia de Guanacaste", "clues": [], "images": []},
    {"round": 3, "lat": 56.884192, "lng": 8.587911, "country": "Denmark", "region": "North Denmark Region", "clues": [], "images": []},
    {"round": 4, "lat": 31.138735, "lng": -97.328719, "country": "United States", "region": "Texas", "clues": [], "images": []},
    {"round": 5, "lat": 23.078923, "lng": 57.132313, "country": "Oman", "region": "Oman", "clues": [], "images": []}
  ]},
  {date:"2026-08-29", rounds:[
    {"round": 1, "lat": 13.997002, "lng": 108.114212, "country": "Vietnam", "region": "Gia Lai", "clues": [], "images": []},
    {"round": 2, "lat": 50.945091, "lng": -103.167835, "country": "Canada", "region": "Saskatchewan", "clues": [], "images": []},
    {"round": 3, "lat": 43.718726, "lng": 19.762628, "country": "Serbia", "region": "Zlatiborski okrug", "clues": [], "images": []},
    {"round": 4, "lat": 26.825498, "lng": -109.634987, "country": "Mexico", "region": "Sonora", "clues": [], "images": []},
    {"round": 5, "lat": 42.515141, "lng": 41.834092, "country": "Georgia", "region": "Samegrelo-Zemo Svaneti", "clues": [], "images": []}
  ]},
  {date:"2026-08-30", rounds:[
    {"round": 1, "lat": -44.554616, "lng": 171.17294, "country": "New Zealand", "region": "Canterbury Region", "clues": [], "images": []},
    {"round": 2, "lat": 43.91743, "lng": 12.445168, "country": "San Marino", "region": "San Marino", "clues": [], "images": []},
    {"round": 3, "lat": 5.104309, "lng": -1.278674, "country": "Ghana", "region": "Central Region", "clues": [], "images": []},
    {"round": 4, "lat": -17.497171, "lng": 14.978871, "country": "Namibia", "region": "Omusati Region", "clues": [], "images": []},
    {"round": 5, "lat": 23.252163, "lng": 89.760048, "country": "Bangladesh", "region": "Dhaka Division", "clues": [], "images": []}
  ]},
  {date:"2026-08-31", rounds:[
    {"round": 1, "lat": 11.103694, "lng": 103.775337, "country": "Cambodia", "region": "Koh Kong Province", "clues": [], "images": []},
    {"round": 2, "lat": 33.917628, "lng": 130.94076, "country": "Japan", "region": "Fukuoka", "clues": [], "images": []},
    {"round": 3, "lat": 25.113404, "lng": -104.529237, "country": "Mexico", "region": "Durango", "clues": [], "images": []},
    {"round": 4, "lat": 52.768708, "lng": 23.170444, "country": "Poland", "region": "Województwo podlaskie", "clues": [], "images": []},
    {"round": 5, "lat": -23.583536, "lng": -48.043691, "country": "Brazil", "region": "São Paulo", "clues": [], "images": []}
  ]}
];
