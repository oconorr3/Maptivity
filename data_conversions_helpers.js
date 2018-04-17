const fs = require('fs');
const csv = require('csv');

//gets the csv module to access the required functionality
var phoneDataCSV = csv();

exports.phoneData = []; //{ {timestamp, area code}... }
var areaCodeDictionary = {}; //area code : lat, long
var monthDictionary = {}; //month : month number

monthDictionary['JAN'] = 0; monthDictionary['FEB'] = 1;
monthDictionary['MAR'] = 2; monthDictionary['APR'] = 3;
monthDictionary['MAY'] = 4; monthDictionary['JUN'] = 5;
monthDictionary['JUL'] = 6; monthDictionary['AUG'] = 7;
monthDictionary['SEP'] = 9; monthDictionary['OCT'] = 9;
monthDictionary['NOV'] = 10; monthDictionary['DEC'] = 11;

//US
areaCodeDictionary['201'] = new geoLocation(40.66871, -74.11431);
areaCodeDictionary['202'] = new geoLocation(38.89511, -77.03637);
areaCodeDictionary['203'] = new geoLocation(41.16704, -73.20483);
areaCodeDictionary['205'] = new geoLocation(33.24428, -86.81638);
areaCodeDictionary['206'] = new geoLocation(47.62621, -122.52124);
areaCodeDictionary['207'] = new geoLocation(44.09785, -70.23117);
areaCodeDictionary['208'] = new geoLocation(43.6135, -116.20345);
areaCodeDictionary['209'] = new geoLocation(37.34772, -120.60908);
areaCodeDictionary['210'] = new geoLocation(29.42412, -98.49363);
areaCodeDictionary['212'] = new geoLocation(40.71427, -74.00597);
areaCodeDictionary['213'] = new geoLocation(34.05223, -118.24368);
areaCodeDictionary['214'] = new geoLocation(33.10317, -96.67055);
areaCodeDictionary['215'] = new geoLocation(40.15511, -74.82877);
areaCodeDictionary['216'] = new geoLocation(41.39838, -81.80458);
areaCodeDictionary['217'] = new geoLocation(40.11642, -88.24338);
areaCodeDictionary['218'] = new geoLocation(45.2333, -93.29134);
areaCodeDictionary['219'] = new geoLocation(41.6392, -87.45476);
areaCodeDictionary['220'] = new geoLocation(39.32924, -82.10126);
areaCodeDictionary['224'] = new geoLocation(42.16558, -88.29425);
areaCodeDictionary['225'] = new geoLocation(30.45075, -91.15455);
areaCodeDictionary['228'] = new geoLocation(30.39603, -88.88531);
areaCodeDictionary['229'] = new geoLocation(31.57851, -84.15574);
areaCodeDictionary['231'] = new geoLocation(43.23418, -86.24839);
areaCodeDictionary['234'] = new geoLocation(41.08144, -81.51901);
areaCodeDictionary['239'] = new geoLocation(26.33981, -81.7787);
areaCodeDictionary['240'] = new geoLocation(39.07955, -77.07303);
areaCodeDictionary['248'] = new geoLocation(42.56891, -83.38356);
areaCodeDictionary['251'] = new geoLocation(30.69436, -88.04305);
areaCodeDictionary['252'] = new geoLocation(35.61266, -77.36635);
areaCodeDictionary['253'] = new geoLocation(47.30732, -122.22845);
areaCodeDictionary['254'] = new geoLocation(31.12406, -97.90308);
areaCodeDictionary['256'] = new geoLocation(33.65983, -85.83163);
areaCodeDictionary['260'] = new geoLocation(41.1306, -85.12886);
areaCodeDictionary['262'] = new geoLocation(43.06057, -88.10648);
areaCodeDictionary['267'] = new geoLocation(40.15511, -74.82877);
areaCodeDictionary['269'] = new geoLocation(42.3173, -85.17816);
areaCodeDictionary['270'] = new geoLocation(36.99032, -86.4436);
areaCodeDictionary['272'] = new geoLocation(41.33591, -75.99631);
areaCodeDictionary['276'] = new geoLocation(37.55376, -77.46026);
areaCodeDictionary['281'] = new geoLocation(29.42385, -95.2441);
areaCodeDictionary['301'] = new geoLocation(39.07955, -77.07303);
areaCodeDictionary['302'] = new geoLocation(39.15817, -75.52437);
areaCodeDictionary['303'] = new geoLocation(39.80276, -105.08748);
areaCodeDictionary['304'] = new geoLocation(38.36843, -81.69957);
areaCodeDictionary['305'] = new geoLocation(25.95648, -80.13921);
areaCodeDictionary['307'] = new geoLocation(42.86663, -106.31308);
areaCodeDictionary['308'] = new geoLocation(40.92501, -98.34201);
areaCodeDictionary['309'] = new geoLocation(40.4842, -88.99369);
areaCodeDictionary['310'] = new geoLocation(34.07362, -118.40036);
areaCodeDictionary['312'] = new geoLocation(41.88475, -88.20396);
areaCodeDictionary['313'] = new geoLocation(42.25754, -83.21104);
areaCodeDictionary['314'] = new geoLocation(38.58339, -90.40678);
areaCodeDictionary['315'] = new geoLocation(42.93173, -76.56605);
areaCodeDictionary['316'] = new geoLocation(37.69224, -97.33754);
areaCodeDictionary['317'] = new geoLocation(39.97837, -86.11804);
areaCodeDictionary['318'] = new geoLocation(31.31129, -92.44514);
areaCodeDictionary['319'] = new geoLocation(40.80754, -91.11292);
areaCodeDictionary['320'] = new geoLocation(45.5608, -94.16249);
areaCodeDictionary['321'] = new geoLocation(28.66111, -81.36562);
areaCodeDictionary['323'] = new geoLocation(33.97751, -118.18702);
areaCodeDictionary['325'] = new geoLocation(32.44874, -99.73314);
areaCodeDictionary['330'] = new geoLocation(41.08144, -81.51901);
areaCodeDictionary['331'] = new geoLocation(41.9317, -87.98896);
areaCodeDictionary['334'] = new geoLocation(32.60986, -85.48078);
areaCodeDictionary['336'] = new geoLocation(35.70791, -79.81364);
areaCodeDictionary['337'] = new geoLocation(30.22409, -92.01984);
areaCodeDictionary['339'] = new geoLocation(42.41537, -71.15644);
areaCodeDictionary['346'] = new geoLocation(29.42385, -95.2441);
areaCodeDictionary['347'] = new geoLocation(40.84985, -73.86641);
areaCodeDictionary['351'] = new geoLocation(42.55843, -70.88005);
areaCodeDictionary['352'] = new geoLocation(29.65163, -82.32483);
areaCodeDictionary['360'] = new geoLocation(48.75955, -122.48822);
areaCodeDictionary['361'] = new geoLocation(27.80058, -97.39638);
areaCodeDictionary['364'] = new geoLocation(36.99032, -86.4436);
areaCodeDictionary['385'] = new geoLocation(40.3769, -111.79576);
areaCodeDictionary['386'] = new geoLocation(29.21081, -81.02283);
areaCodeDictionary['401'] = new geoLocation(41.67705, -71.26616);
areaCodeDictionary['402'] = new geoLocation(41.13667, -95.89084);
areaCodeDictionary['404'] = new geoLocation(33.749, -84.38798);
areaCodeDictionary['405'] = new geoLocation(35.51867, -97.63226);
areaCodeDictionary['406'] = new geoLocation(45.78329, -108.50069);
areaCodeDictionary['407'] = new geoLocation(28.66111, -81.36562);
areaCodeDictionary['408'] = new geoLocation(37.28717, -121.94996);
areaCodeDictionary['409'] = new geoLocation(30.08605, -94.10185);
areaCodeDictionary['410'] = new geoLocation(38.97845, -76.49218);
areaCodeDictionary['412'] = new geoLocation(40.32757, -80.0395);
areaCodeDictionary['413'] = new geoLocation(42.06954, -72.61481);
areaCodeDictionary['414'] = new geoLocation(42.88863, -88.03842);
areaCodeDictionary['415'] = new geoLocation(38.10742, -122.5697);
areaCodeDictionary['417'] = new geoLocation(37.08423, -94.51328);
areaCodeDictionary['419'] = new geoLocation(40.86867, -82.31822);
areaCodeDictionary['423'] = new geoLocation(36.59511, -82.18874);
areaCodeDictionary['424'] = new geoLocation(34.07362, -118.40036);
areaCodeDictionary['425'] = new geoLocation(47.61038, -122.20068);
areaCodeDictionary['432'] = new geoLocation(32.2504, -101.47874);
areaCodeDictionary['434'] = new geoLocation(38.02931, -78.47668);
areaCodeDictionary['435'] = new geoLocation(37.67748, -113.06189);
areaCodeDictionary['440'] = new geoLocation(41.86505, -80.78981);
areaCodeDictionary['442'] = new geoLocation(33.66336, -116.31001);
areaCodeDictionary['443'] = new geoLocation(38.97845, -76.49218);
areaCodeDictionary['458'] = new geoLocation(44.63651, -123.10593);
areaCodeDictionary['469'] = new geoLocation(33.10317, -96.67055);
areaCodeDictionary['478'] = new geoLocation(32.84069, -83.6324);
areaCodeDictionary['479'] = new geoLocation(36.06258, -94.15743);
areaCodeDictionary['480'] = new geoLocation(33.41505, -111.54958);
areaCodeDictionary['484'] = new geoLocation(40.60843, -75.49018);
areaCodeDictionary['501'] = new geoLocation(34.56454, -92.58683);
areaCodeDictionary['502'] = new geoLocation(38.20091, -84.87328);
areaCodeDictionary['503'] = new geoLocation(45.49428, -122.86705);
areaCodeDictionary['504'] = new geoLocation(29.94296, -89.96537);
areaCodeDictionary['505'] = new geoLocation(35.08449, -106.65114);
areaCodeDictionary['507'] = new geoLocation(43.66663, -92.97464);
areaCodeDictionary['508'] = new geoLocation(41.94454, -71.28561);
areaCodeDictionary['509'] = new geoLocation(46.21125, -119.13723);
areaCodeDictionary['510'] = new geoLocation(37.76521, -122.24164);
areaCodeDictionary['512'] = new geoLocation(30.26715, -97.74306);
areaCodeDictionary['513'] = new geoLocation(39.162, -84.45689);
areaCodeDictionary['515'] = new geoLocation(42.03471, -93.61994);
areaCodeDictionary['516'] = new geoLocation(40.65649, -73.6093);
areaCodeDictionary['517'] = new geoLocation(41.89755, -84.03717);
areaCodeDictionary['518'] = new geoLocation(42.68313, -73.77845);
areaCodeDictionary['520'] = new geoLocation(32.8795, -111.75735);
areaCodeDictionary['530'] = new geoLocation(39.72849, -121.83748);
areaCodeDictionary['531'] = new geoLocation(41.13667, -95.89084);
areaCodeDictionary['539'] = new geoLocation(36.74731, -95.98082);
areaCodeDictionary['540'] = new geoLocation(37.22957, -80.41394);
areaCodeDictionary['541'] = new geoLocation(44.63651, -123.10593);
areaCodeDictionary['551'] = new geoLocation(40.66871, -74.11431);
areaCodeDictionary['559'] = new geoLocation(36.82523, -119.70292);
areaCodeDictionary['561'] = new geoLocation(26.34508, -80.14671);
areaCodeDictionary['562'] = new geoLocation(33.88168, -118.11701);
areaCodeDictionary['563'] = new geoLocation(41.52448, -90.51569);
areaCodeDictionary['567'] = new geoLocation(40.86867, -82.31822);
areaCodeDictionary['570'] = new geoLocation(41.33591, -75.99631);
areaCodeDictionary['571'] = new geoLocation(38.80484, -77.04692);
areaCodeDictionary['573'] = new geoLocation(37.30588, -89.51815);
areaCodeDictionary['574'] = new geoLocation(41.68199, -85.97667);
areaCodeDictionary['575'] = new geoLocation(32.89953, -105.96027);
areaCodeDictionary['580'] = new geoLocation(34.63813, -99.33398);
areaCodeDictionary['585'] = new geoLocation(43.14756, -77.55055);
areaCodeDictionary['586'] = new geoLocation(42.58698, -82.91992);
areaCodeDictionary['601'] = new geoLocation(32.34153, -90.32176);
areaCodeDictionary['602'] = new geoLocation(33.44838, -112.07404);
areaCodeDictionary['603'] = new geoLocation(43.24202, -71.53813);
areaCodeDictionary['605'] = new geoLocation(45.4647, -98.48648);
areaCodeDictionary['606'] = new geoLocation(38.47841, -82.63794);
areaCodeDictionary['607'] = new geoLocation(42.09869, -75.91797);
areaCodeDictionary['608'] = new geoLocation(42.50835, -89.03178);
areaCodeDictionary['609'] = new geoLocation(39.36428, -74.42293);
areaCodeDictionary['610'] = new geoLocation(40.60843, -75.49018);
areaCodeDictionary['612'] = new geoLocation(45.03274, -93.36023);
areaCodeDictionary['614'] = new geoLocation(39.96118, -82.99879);
areaCodeDictionary['615'] = new geoLocation(36.03312, -86.78278);
areaCodeDictionary['616'] = new geoLocation(42.95947, -85.48975);
areaCodeDictionary['617'] = new geoLocation(42.39593, -71.17867);
areaCodeDictionary['618'] = new geoLocation(38.88033, -90.11122);
areaCodeDictionary['619'] = new geoLocation(32.64005, -117.0842);
areaCodeDictionary['620'] = new geoLocation(37.7528, -100.01708);
areaCodeDictionary['623'] = new geoLocation(33.4356, -112.3496);
areaCodeDictionary['626'] = new geoLocation(34.09529, -118.12701);
areaCodeDictionary['628'] = new geoLocation(38.10742, -122.5697);
areaCodeDictionary['629'] = new geoLocation(36.03312, -86.78278);
areaCodeDictionary['630'] = new geoLocation(41.9317, -87.98896);
areaCodeDictionary['631'] = new geoLocation(40.73621, -73.26262);
areaCodeDictionary['636'] = new geoLocation(38.59505, -90.54623);
areaCodeDictionary['641'] = new geoLocation(42.04943, -92.90798);
areaCodeDictionary['646'] = new geoLocation(40.71427, -74.00597);
areaCodeDictionary['650'] = new geoLocation(37.52021, -122.2758);
areaCodeDictionary['651'] = new geoLocation(44.73191, -93.21772);
areaCodeDictionary['657'] = new geoLocation(33.83529, -117.9145);
areaCodeDictionary['660'] = new geoLocation(38.70446, -93.22826);
areaCodeDictionary['661'] = new geoLocation(35.37329, -119.01871);
areaCodeDictionary['662'] = new geoLocation(34.20011, -90.57093);
areaCodeDictionary['667'] = new geoLocation(38.97845, -76.49218);
areaCodeDictionary['669'] = new geoLocation(37.28717, -121.94996);
areaCodeDictionary['678'] = new geoLocation(34.07538, -84.29409);
areaCodeDictionary['681'] = new geoLocation(38.36843, -81.69957);
areaCodeDictionary['682'] = new geoLocation(32.73569, -97.10807);
areaCodeDictionary['701'] = new geoLocation(46.80833, -100.78374);
areaCodeDictionary['702'] = new geoLocation(36.0397, -114.98194);
areaCodeDictionary['703'] = new geoLocation(38.80484, -77.04692);
areaCodeDictionary['704'] = new geoLocation(35.22709, -80.84313);
areaCodeDictionary['706'] = new geoLocation(33.96095, -83.37794);
areaCodeDictionary['707'] = new geoLocation(38.04937, -122.15858);
areaCodeDictionary['708'] = new geoLocation(41.88142, -87.88312);
areaCodeDictionary['712'] = new geoLocation(41.26194, -95.86083);
areaCodeDictionary['713'] = new geoLocation(29.42385, -95.2441);
areaCodeDictionary['714'] = new geoLocation(33.83529, -117.9145);
areaCodeDictionary['715'] = new geoLocation(44.81135, -91.49849);
areaCodeDictionary['716'] = new geoLocation(42.88645, -78.87837);
areaCodeDictionary['717'] = new geoLocation(40.2737, -76.88442);
areaCodeDictionary['718'] = new geoLocation(40.84985, -73.86641);
areaCodeDictionary['719'] = new geoLocation(38.83388, -104.82136);
areaCodeDictionary['720'] = new geoLocation(39.80276, -105.08748);
areaCodeDictionary['724'] = new geoLocation(40.42118, -79.7881);
areaCodeDictionary['725'] = new geoLocation(36.0397, -114.98194);
areaCodeDictionary['727'] = new geoLocation(28.32667, -82.68343);
areaCodeDictionary['731'] = new geoLocation(35.61452, -88.81395);
areaCodeDictionary['732'] = new geoLocation(40.57733, -74.2282);
areaCodeDictionary['734'] = new geoLocation(42.27756, -83.74088);
areaCodeDictionary['737'] = new geoLocation(30.26715, -97.74306);
areaCodeDictionary['740'] = new geoLocation(39.32924, -82.10126);
areaCodeDictionary['743'] = new geoLocation(35.70791, -79.81364);
areaCodeDictionary['747'] = new geoLocation(34.13639, -118.77453);
areaCodeDictionary['754'] = new geoLocation(26.25175, -80.17894);
areaCodeDictionary['757'] = new geoLocation(36.81904, -76.27494);
areaCodeDictionary['760'] = new geoLocation(34.50083, -117.18588);
areaCodeDictionary['762'] = new geoLocation(33.96095, -83.37794);
areaCodeDictionary['763'] = new geoLocation(45.1608, -93.23495);
areaCodeDictionary['765'] = new geoLocation(40.10532, -85.68025);
areaCodeDictionary['769'] = new geoLocation(32.34153, -90.32176);
areaCodeDictionary['770'] = new geoLocation(34.07538, -84.29409);
areaCodeDictionary['772'] = new geoLocation(27.40962, -80.35483);
areaCodeDictionary['773'] = new geoLocation(41.88475, -88.20396);
areaCodeDictionary['774'] = new geoLocation(41.94454, -71.28561);
areaCodeDictionary['775'] = new geoLocation(39.1638, -119.7674);
areaCodeDictionary['779'] = new geoLocation(42.26391, -88.84427);
areaCodeDictionary['781'] = new geoLocation(42.41537, -71.15644);
areaCodeDictionary['785'] = new geoLocation(38.87918, -99.32677);
areaCodeDictionary['786'] = new geoLocation(25.95648, -80.13921);
areaCodeDictionary['801'] = new geoLocation(40.3769, -111.79576);
areaCodeDictionary['802'] = new geoLocation(44.46699, -73.17096);
areaCodeDictionary['803'] = new geoLocation(33.56042, -81.71955);
areaCodeDictionary['804'] = new geoLocation(37.30432, -77.2872);
areaCodeDictionary['805'] = new geoLocation(35.48942, -120.67073);
areaCodeDictionary['806'] = new geoLocation(35.222, -101.8313);
areaCodeDictionary['808'] = new geoLocation(19.72991, -155.09073);
areaCodeDictionary['810'] = new geoLocation(42.99947, -83.61634);
areaCodeDictionary['812'] = new geoLocation(39.16533, -86.52639);
areaCodeDictionary['813'] = new geoLocation(27.9378, -82.28592);
areaCodeDictionary['814'] = new geoLocation(40.51868, -78.39474);
areaCodeDictionary['815'] = new geoLocation(42.26391, -88.84427);
areaCodeDictionary['816'] = new geoLocation(38.81195, -94.5319);
areaCodeDictionary['817'] = new geoLocation(32.73569, -97.10807);
areaCodeDictionary['818'] = new geoLocation(34.13639, -118.77453);
areaCodeDictionary['828'] = new geoLocation(35.60095, -82.55402);
areaCodeDictionary['830'] = new geoLocation(29.36273, -100.89676);
areaCodeDictionary['831'] = new geoLocation(36.85245, -121.4016);
areaCodeDictionary['832'] = new geoLocation(29.42385, -95.2441);
areaCodeDictionary['843'] = new geoLocation(32.85462, -79.97481);
areaCodeDictionary['845'] = new geoLocation(41.92704, -73.99736);
areaCodeDictionary['847'] = new geoLocation(42.16558, -88.29425);
areaCodeDictionary['848'] = new geoLocation(40.57733, -74.2282);
areaCodeDictionary['850'] = new geoLocation(30.46159, -87.31497);
areaCodeDictionary['856'] = new geoLocation(39.42734, -75.23408);
areaCodeDictionary['857'] = new geoLocation(42.39593, -71.17867);
areaCodeDictionary['858'] = new geoLocation(32.96282, -117.03586);
areaCodeDictionary['859'] = new geoLocation(39.08367, -84.50855);
areaCodeDictionary['860'] = new geoLocation(41.67176, -72.94927);
areaCodeDictionary['862'] = new geoLocation(40.79371, -74.15014);
areaCodeDictionary['863'] = new geoLocation(28.03947, -81.9498);
areaCodeDictionary['864'] = new geoLocation(34.50344, -82.65013);
areaCodeDictionary['865'] = new geoLocation(35.96064, -83.92074);
areaCodeDictionary['870'] = new geoLocation(33.20763, -92.66627);
areaCodeDictionary['878'] = new geoLocation(40.32757, -80.0395);
areaCodeDictionary['901'] = new geoLocation(35.20453, -89.87398);
areaCodeDictionary['903'] = new geoLocation(32.09543, -96.46887);
areaCodeDictionary['904'] = new geoLocation(30.33218, -81.65565);
areaCodeDictionary['907'] = new geoLocation(61.21806, -149.90028);
areaCodeDictionary['908'] = new geoLocation(40.65844, -74.29959);
areaCodeDictionary['909'] = new geoLocation(34.01223, -117.68894);
areaCodeDictionary['910'] = new geoLocation(35.05266, -78.87836);
areaCodeDictionary['912'] = new geoLocation(31.84688, -81.59595);
areaCodeDictionary['913'] = new geoLocation(39.11417, -94.62746);
areaCodeDictionary['914'] = new geoLocation(40.96899, -73.71263);
areaCodeDictionary['915'] = new geoLocation(31.75872, -106.48693);
areaCodeDictionary['916'] = new geoLocation(38.6025, -121.37854);
areaCodeDictionary['917'] = new geoLocation(40.84985, -73.86641);
areaCodeDictionary['918'] = new geoLocation(36.74731, -95.98082);
areaCodeDictionary['919'] = new geoLocation(35.73265, -78.85029);
areaCodeDictionary['920'] = new geoLocation(44.26193, -88.41538);
areaCodeDictionary['925'] = new geoLocation(38.00492, -121.80579);
areaCodeDictionary['928'] = new geoLocation(35.14778, -114.5683);
areaCodeDictionary['929'] = new geoLocation(40.84985, -73.86641);
areaCodeDictionary['930'] = new geoLocation(39.16533, -86.52639);
areaCodeDictionary['931'] = new geoLocation(36.52977, -87.35945);
areaCodeDictionary['936'] = new geoLocation(30.31188, -95.45605);
areaCodeDictionary['937'] = new geoLocation(39.70923, -84.06327);
areaCodeDictionary['940'] = new geoLocation(33.21484, -97.13307);
areaCodeDictionary['941'] = new geoLocation(27.4631, -82.58176);
areaCodeDictionary['947'] = new geoLocation(42.56891, -83.38356);
areaCodeDictionary['949'] = new geoLocation(33.56504, -117.72712);
areaCodeDictionary['951'] = new geoLocation(33.92557, -116.87641);
areaCodeDictionary['952'] = new geoLocation(44.8408, -93.29828);
areaCodeDictionary['954'] = new geoLocation(26.25175, -80.17894);
areaCodeDictionary['956'] = new geoLocation(25.90175, -97.49748);
areaCodeDictionary['959'] = new geoLocation(41.67176, -72.94927);
areaCodeDictionary['970'] = new geoLocation(40.58526, -105.08442);
areaCodeDictionary['971'] = new geoLocation(45.49428, -122.86705);
areaCodeDictionary['972'] = new geoLocation(33.10317, -96.67055);
areaCodeDictionary['973'] = new geoLocation(40.79371, -74.15014);
areaCodeDictionary['978'] = new geoLocation(42.55843, -70.88005);
areaCodeDictionary['979'] = new geoLocation(30.67436, -96.36996);
areaCodeDictionary['980'] = new geoLocation(35.22709, -80.84313);
areaCodeDictionary['984'] = new geoLocation(35.73265, -78.85029);
areaCodeDictionary['985'] = new geoLocation(29.59577, -90.71953);
areaCodeDictionary['989'] = new geoLocation(43.59447, -83.88886);
areaCodeDictionary['854'] = new geoLocation(32.85462, -79.97481);

//Canada
areaCodeDictionary['204'] = new geoLocation(51.203033636364, -98.729934545455);
areaCodeDictionary['226'] = new geoLocation(43.233831176471, -81.230922352941);
areaCodeDictionary['236'] = new geoLocation(50.432725294118, -121.51536941176);
areaCodeDictionary['249'] = new geoLocation(46.041822857143, -80.003286428571);
areaCodeDictionary['250'] = new geoLocation(50.837259090909, -121.84152);
areaCodeDictionary['289'] = new geoLocation(43.5654075, -79.333166);
areaCodeDictionary['306'] = new geoLocation(51.399736363636, -105.68861454545);
areaCodeDictionary['343'] = new geoLocation(44.955182142857, -76.08718);
areaCodeDictionary['365'] = new geoLocation(43.575115, -79.3496);
areaCodeDictionary['403'] = new geoLocation(51.2093535, -113.591395);
areaCodeDictionary['416'] = new geoLocation(43.459085, -79.70173);
areaCodeDictionary['418'] = new geoLocation(47.215538085106, -71.384436170213);
areaCodeDictionary['431'] = new geoLocation(51.203033636364, -98.729934545455);
areaCodeDictionary['437'] = new geoLocation(43.70011, -79.4163);
areaCodeDictionary['438'] = new geoLocation(45.5546, -73.88272);
areaCodeDictionary['450'] = new geoLocation(45.789232765957, -73.216014255319);
areaCodeDictionary['506'] = new geoLocation(46.566092222222, -66.060475555556);
areaCodeDictionary['514'] = new geoLocation(46.126976, -73.355944);
areaCodeDictionary['519'] = new geoLocation(43.2104985, -81.1431145);
areaCodeDictionary['579'] = new geoLocation(45.756958648649, -73.27781027027);
areaCodeDictionary['581'] = new geoLocation(47.26140744186, -71.35332372093);
areaCodeDictionary['587'] = new geoLocation(52.688353636364, -113.70208954545);
areaCodeDictionary['604'] = new geoLocation(49.30576625, -122.98475625);
areaCodeDictionary['613'] = new geoLocation(44.936384705882, -76.402184705882);
areaCodeDictionary['639'] = new geoLocation(51.636756, -106.001166);
areaCodeDictionary['647'] = new geoLocation(43.70011, -79.4163);
areaCodeDictionary['705'] = new geoLocation(45.7227065, -80.313261);
areaCodeDictionary['709'] = new geoLocation(48.949732857143, -55.959877142857);
areaCodeDictionary['778'] = new geoLocation(50.337179795918, -122.21482163265);
areaCodeDictionary['780'] = new geoLocation(53.9300256, -113.8699808);
areaCodeDictionary['782'] = new geoLocation(45.0743675, -63.865825);
areaCodeDictionary['807'] = new geoLocation(47.495825, -88.84699);
areaCodeDictionary['819'] = new geoLocation(46.339735, -73.465640277778);
areaCodeDictionary['825'] = new geoLocation(53.548798, -113.321158);
areaCodeDictionary['867'] = new geoLocation(62.30636, -105.97452333333);
areaCodeDictionary['873'] = new geoLocation(46.469091363636, -74.104794090909);
areaCodeDictionary['902'] = new geoLocation(45.441521666667, -63.155714166667);
areaCodeDictionary['905'] = new geoLocation(43.5654075, -79.333166);

//data object will represent a single row from the phone data csv
function dataObject(Timestamp, lat, long) {
  this.timestamp = Timestamp;
  this.latitude = lat;
  this.longitude = long;
}

function geoLocation(lat, long) {
  this.latitude = lat;
  this.longitude = long;
}

function convertMonthToNum(month) {
  return (monthDictionary[month.toUpperCase()]);
}

function convertAreaCodeToGeoObject(areaCode) {
  return areaCodeDictionary[areaCode];
}

//2017 data
//TODO wire server to work with endpoint
phoneDataCSV.from.path('./Data/2016CombinedData.csv').to.array(function (data) {
  for (var i = 0; i < data.length; i++) {
    var data_inner = data[i];
    for (var index = 0; index < data_inner.length; index += 2) {
      var time = data_inner[index];
      var caller = data_inner[index + 1];
      if (!time.trim() || !caller.trim()) continue;
      var geo_location = convertAreaCodeToGeoObject(caller.substring(0, 3)); //only want the first three digits
      if (typeof geo_location === 'undefined') continue;
      var year = parseInt("20" + time.substring(7, 9));
      var month = convertMonthToNum(time.substring(3, 6));
      var day = parseInt(time.substring(0, 2));
      var hours = parseInt(time.substring(10, 12)) - 5; //don't know why the date object is adding 5 to hours
      var minutes = parseInt(time.substring(13, 15));
      var seconds = parseInt(time.substring(16));
      exports.phoneData.push(new dataObject(new Date(year, month, day, hours, minutes, seconds, 0), geo_location.latitude, geo_location.longitude));
    }
  }
  exports.phoneData.sort(sort_by_date);
  fs.writeFile("./Data/2016Data.json", JSON.stringify(exports.phoneData, null, 4)), function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("File was successfully saved.");
  }
});

function sort_by_date(a, b) {
  return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
}
