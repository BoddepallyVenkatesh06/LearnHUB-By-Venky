$(document).ready(function(){
	$('div.faq-panel-heading').on('click',function(){
		$(this).addClass("kk");
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$('div.faq-panel-body').removeClass('active');
		} else{
			$(this).addClass('active');
			$('div.faq-panel-body').addClass('active');
		}
		/*$("div.faq-panel-heading").each(function(){
			if(!$(this).hasClass('kk')){
				$(this).removeClass('active');
			}
		});*/
		setTimeout(function(){
			$("div.faq-panel-heading").removeClass("kk");
		},100);
		$(this).next().slideToggle("500").siblings('div.faq-panel-body').slideUp();
	});
	$(function () {
	    $("select#search-subject").change();
	});
	$('select.search-subject').on('change', function() {
		var subject_id = this.value ;
		var agegroup_ids = $(this).find(':selected').data('agegroup');
		agegroup_ids = agegroup_ids.toString();
		var valNew = [];
		if(!agegroup_ids.includes(",")){
		   valNew.push(agegroup_ids);
		} else{
		   valNew = agegroup_ids.split(',');
		}
		$('select.search-agegroup option').addClass('hideoption');
		$('select.search-agegroup option').each(function() {
		    if( $.inArray($(this).val(), valNew) !== -1 ) {
		    	$(this).removeClass('hideoption');
			}
		});
		
		/*var optionValues = [];
		$('select.search-agegroup option').each(function() {
		    optionValues.push($(this).val());
		});
		var index = [];
		$.each( optionValues, function( key, value ) {
			if (subject_id.length == 0) {
				$("select.search-agegroup option[value='']").removeClass('hideoption');
				$("select.search-agegroup option[value='"+value+"']").removeClass('hideoption');
			} else {
				$("select.search-agegroup option[value='']").removeClass('hideoption');
				$("select.search-agegroup option[value='"+value+"']").addClass('hideoption');
			}
			if ($.inArray( value, valNew ) != -1) {
				$("select.search-agegroup option[value='"+value+"']").removeClass('hideoption');
				
			}
		});*/
	});
	var input = document.querySelector("#phone");
	var country_code = document.querySelector("#country_code");
	var iso_code = document.querySelector("#iso_code");
	if(input){
		var iti = window.intlTelInput(input, {
		separateDialCode: true,
		formatOnDisplay:false,
		initialCountry: "auto",
		autoPlaceholder:null,
		utilsScript: "//cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/utils.js",
		geoIpLookup: function(success, failure) {
		    $.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
		      var countryCode = (resp && resp.country) ? resp.country : "";
		      success(countryCode);
		      iti.setCountry(iso_code.value);
		      //console.log(countryCode);
		    });
		  },
		});
		input.addEventListener('countrychange', function(e) {
			country_code.value = iti.getSelectedCountryData().dialCode;
			iso_code.value = iti.getSelectedCountryData().iso2;
		});
	}
    
});
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".top-nav-wrap").addClass("sticky");
        $(".top-nav-wrap").addClass("show");
    }
    var scroll = $(window).scrollTop();

    if (scroll <= 100) {
        $(".top-nav-wrap").removeClass("sticky");
        $(".top-nav-wrap").removeClass("show");
    }
});