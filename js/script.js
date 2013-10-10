$(document).ready(function () {	
	$('.subMenu').smint({
		'scrollSpeed' : 500
	});

	var vars = {};
	var parts = window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});

	if('n' in vars)
	{
		$('#entry_2018695921').val(unescape(vars['n']));
	}
	if('e' in vars)
	{
		$('#entry_104545326').val(unescape(vars['e']));
	}
	if('p' in vars)
	{
		$('#entry_1861589902').val(unescape(vars['p']));
	}
});
