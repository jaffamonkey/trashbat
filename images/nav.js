var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
if (document.images) {
	var barleyHi = new Image();
	barleyHi.src = "images/but_barley_hi.jpg";
	var barleyLo = new Image();
	barleyLo.src = "images/but_barley_lo-2.jpg";
	
	var dvdHi = new Image();
	dvdHi.src = "images/but_dvd_hi.jpg";
	var dvdLo = new Image();
	dvdLo.src = "images/but_dvd_lo-2.jpg";
}
	
function ImageRollOver(imgName) {
	if (document.images){
		document[imgName].src=eval(imgName+"Hi.src");
	}
}
	
function ImageRollOut(imgName) {
	if (document.images){
		document[imgName].src=eval(imgName+"Lo.src");
	}
}
}

/*
     FILE ARCHIVED ON 00:25:43 Feb 12, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:22:50 May 14, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.428
  load_resource: 50.981
  PetaboxLoader3.resolve: 35.397
  PetaboxLoader3.datanode: 14.641
*/