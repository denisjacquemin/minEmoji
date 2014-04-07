var imgs = '705,704,701,711,50,710,714,725,727,724,726,729,730,728,752,702,721,713,719,731,736,735,703,746,743,738,749,706,720,742,744,741,750,733,734,737,723,707,712,756,715,753,754,751,732,739,740,709,485,747,745,717,722,748,755,708,716,718,472,473,468,477,488,476,460,461,462,463,474,475,471,482,478,759,757,760,762,761,765,764,758,763,479,480,769,770,771,486,483,527,647,98,203,529,523,520,524,525,522,526,424,423,425,427,426,435,436,434,432,91,93,433,92,438,428,429,431,430,773,776,49,437,528,831,336,489,465,464,466,467,501,503,469,767,766,487,772,492,493,491,470,775,774,768,310,439,440,453,452,455,454,456,443,442,448,445,330,444,446,447,546,450,451,449,441,281,174,490,513,511,514,512,109,506,509,505,507,508,516,510,498,497,499,500,458,459,530,457,531,414,418,409,405,417,408,416,407,400,419,415,421,406,383,413,378,412,377,384,420,399,398,396,397,395,380,373,394,387,389,388,390,372,385,386,392,391,404,411,371,364,375,360,363,365,367,369,374,376,379,381,382,361,362,410,393,370,403,402,366,368,401,422,502,212,211,220,213,215,214,221,223,222,219,218,224,210,209,207,208,205,206,216,188,202,201,198,189,190,191,192,193,194,195,196,200,199,197,185,186,187,183,184,204,123,43,78,44,72,47,101,77,172,173,180,182,294,515,295,299,300,296,287,288,297,298,284,481,286,285,282,292,290,291,289,293,656,306,605,606,609,549,550,547,548,545,599,45,580,581,582,583,607,608,620,619,618,617,630,631,584,585,33,27,32,26,629,628,625,626,627,624,519,648,616,615,622,621,623,842,841,840,838,649,651,650,819,821,521,653,652,496,495,534,538,539,541,540,537,542,600,589,587,586,90,591,590,597,593,592,594,595,596,588,579,554,553,567,560,558,559,578,561,555,556,557,551,552,87,562,564,95,94,565,566,571,573,574,575,569,570,568,576,572,632,577,654,655,598,309,313,305,308,329,322,323,326,328,327,324,325,484,315,131,321,130,319,316,340,333,75,76,331,318,341,320,83,830,829,334,339,338,332,335,342,337,304,48,273,274,280,278,279,276,277,275,272,241,240,251,243,242,249,247,256,269,255,257,245,244,246,248,270,254,253,271,250,261,266,258,260,259,283,268,262,263,264,265,267,234,235,230,231,238,227,229,239,237,228,232,236,233,252,226,225,217,343,344,354,345,346,348,349,353,352,351,504,81,355,347,179,178,358,359,85,356,697,699,696,176,177,175,698,181,301,302,82,303,811,84,813,812,70,777,89,544,778,779,787,786,807,783,781,782,785,784,806,788,780,791,789,790,802,801,800,798,799,804,803,817,796,797,795,794,793,827,810,808,809,805,494,792,312,815,814,71,816,658,86,357,317,67,700,311,314,563,818,153,154,148,147,156,150,149,152,155,151,3,4,5,6,7,8,9,10,11,2,641,644,1,645,119,120,118,113,642,643,646,21,20,22,23,18,19,614,38,37,670,671,24,25,17,29,28,30,31,117,116,143,610,611,612,141,145,138,139,142,604,307,157,160,162,164,163,161,170,168,169,165,159,836,834,835,837,839,825,823,135,69,822,166,167,158,34,843,845,846,844,171,128,127,137,144,140,820,640,603,824,826,832,828,833,80,99,102,104,88,100,517,146,601,602,132,133,136,134,518,115,68,51,52,53,54,55,56,57,58,59,60,61,62,79,657,350,543,536,535,12,13,16,103,14,15,108,105,107,106,124,639,636,635,637,638,613,683,677,672,684,673,685,674,686,675,687,676,688,695,678,679,680,681,682,689,690,691,692,693,694,97,110,111,112,63,65,64,66,532,533,96,46,634,633,114,125,126,659,40,39,42,41,35,36,668,660,661,74,73,662,663,669,122,121,664,665,666,667'.split(',');
var rimgs='',
    tile_with = 160,
    tile_height = 160,
    cols = 7,
    rows = 122;
var img_x = 0;
var img_y = 0;
for(var i=0;i<imgs.length;i++){

	if(img_x==cols){
		img_x = 0;
		img_y++;
	}
	if(i==305||i==535||i==636){
		img_x = 0;
		img_y++;
	}
	rimgs+='<image x="'+(img_x*tile_with)+'" y="'+(img_y*tile_height)+'" width="'+tile_with+'" height="'+tile_height+'" xlink:href="img/'+imgs[i]+'.png"/>'
	img_x++;
}
var svg = '<svg version="1.1" baseProfile="tiny" id="svg-root"'
+ '  width="'+(tile_with*cols)+'" height="'+(tile_height*rows)+'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'
+ '<title>Emoji</title>'
+ '<g> '
+ rimgs
+ '</g>'
+ '</svg>';
console.log(svg);