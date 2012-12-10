(function($){
	chrome.storage.local.get('cheatSheet-active',function(data){
		var active = data['cheatSheet-active'];
		if (typeof active !== 'undefined') {
			var act = $('#nav li:contains(' + active + ')').addClass('active');
			$('#container').load($('a',act).data('url'));
		} else {
			var first = $('#nav li').first().addClass('active');
			$('#container').load($('a',first).data('url'));
		}
	});

	var contrast = 0;
	chrome.storage.local.get('contrast',function(data){
		contrast = data['contrast'];
		if(typeof contrast !== 'undefined' && contrast===true){
			$('body').first().toggleClass('inverted');
		}
	});

	$('#nav a').live('click',function(e){
		e.preventDefault();
		var $this = $(this);
		$('.active').removeClass('active');
		$this.closest('li').addClass('active');
		$('#container').load($this.data('url'));
		console.log($(this).closest('li').text());
		chrome.storage.local.set({'cheatSheet-active':$(this).closest('li').text()});
		return false;
	});
	$('#contrast').click(function(e){
		e.preventDefault();
		$('body').first().toggleClass('inverted');

		contrast = !contrast;
		chrome.storage.local.set({'contrast':contrast});

		return false;
	});

	$('#close').click(function(e){
		window.close();
	});

	$('#jquery a').live('click',function(e){
		var $this = $(this);
		var href = $this.attr('href');
		if (/^http/.test(href) && $this.attr('target') != "_top") {
			e.preventDefault();
			$('<iframe>').attr('src',href).css({
				height:$(window).height()-40,
				width:$(window).width(),
				display:'none'
			}).appendTo('body').fadeIn('slow',function(){
				$('<div id="closeiframe">').html('<p><a href="#">Click to close<a></p>').appendTo('body');
				$('#closeiframe a').click(function(){
					$('iframe,#closeiframe').fadeOut('fast',function(){
						$(this).remove();
					});
				});
			});
			// $('body').click(function(){ $('iframe').remove(); });
			return false;
		}
		return true;
	});
})(jQuery);