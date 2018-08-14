$(document).ready(function() {

	var flag = 0;
	//console.log($('.recompenses_block').find('p').text());
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		var winHeight = $(window).height();
		var paris = $('.paris');
		var statistic = $('.statistic');
		var statisticOffset = statistic.offset();
		var train = $('.train');
		var luxembourgFoto = $('.luxembourg_foto');
		var luxembourgFotoOffset = luxembourgFoto.offset();
		var belgiqueFoto = $('.belgique_foto');
		var belgiqueFotoOffset = belgiqueFoto.offset();
		var massege = $('.massege');
		var massegeOffset = massege.offset();
		var cube = $('.cube_wrap');
		var cubeOffset = cube.offset();
		var propos = $('.propos');
		var proposOffset = propos.offset();
		var meteir = $('.meteir');
		var meteirOffset = meteir.offset();
		var activity = $('.activity');
		var activityOffset = activity.offset();
		var raylights = $('.raylights');
		var raylightsOffset = raylights.offset();
		var recompensesBlock = $('.recompenses_block');
		var recompensesBlockOffset = recompensesBlock.offset();
		//cub.children().eq(1).css('background', '#000');
		if (paris.height() >= scroll) {               //паралакс секции PARIS
			paris.css('background-position', '50% ' + scroll * 0.3 +'px');
		} else {
			paris.css('background-position', '50% ' + paris.height() * 0.3  +'px');
		}
		if (luxembourgFotoOffset.top < scroll + winHeight) {  // паралакс секции LUXEMBURG
			getScroll(luxembourgFoto, luxembourgFotoOffset);
		} 
		if (belgiqueFotoOffset.top < scroll + winHeight) {   // паралакс секции BELGIQUE
			getScroll(belgiqueFoto, belgiqueFotoOffset);
		} 
		function getScroll(el, offsetEl){                    // функция паралакса
			var onsetEl = offsetEl.top + el.height();
			if (scroll < onsetEl) {
				el.css('background-position', '50% ' + (offsetEl.top - (winHeight + scroll)) * 0.3  +'px');	
			} else {
				el.css('background-position', '50% ' + el.height() * 0.3  +'px');
			}
		}
		if (scroll > statisticOffset.top) {                  // движение поезда
			train.css({'transform' : 'translateX(' + (scroll - statisticOffset.top) * 3 + 'px)'});
		}
		if (scroll > statisticOffset.top + statistic.height()) {
			train.css({'transform' : 'translateX(' + (statistic.height()) * 3 + 'px)'});
		}

		if (scroll > proposOffset.top - winHeight * 0.66) {
			getRotate(propos, proposOffset);
		} else{
			propos.css('background', '#dcdbdc');
		}

		if (scroll > meteirOffset.top - winHeight * 0.66) {
			getRotate(meteir, meteirOffset);
		} else{
			meteir.css('background', '#dcdbdc');
		}
		
		if (massegeOffset.top < scroll + winHeight * 0.66 && massegeOffset.top > scroll + winHeight * 0.2) {   
			massege.removeClass('overblink').addClass('blink');
		} else{
			massege.removeClass('blink').addClass('overblink');
		}
		if (activityOffset.top < scroll + winHeight * 0.7) {   
			activity.css('background', '#704663');
		} else{
			activity.css('background', '#7B7B7B');
		}
		if (raylightsOffset.top < scroll + winHeight) { 
			if (scroll < raylightsOffset.top + raylights.height()) {
				raylights.css({'transform' : 'rotate(' + (scroll - (raylightsOffset.top - winHeight)) * 0.1 + 'deg)'});
			}
		} 
		if (recompensesBlockOffset.top < scroll + winHeight * 0.85) {                                   // анимация цифр при появлении блока
			var start = 0;
			var end = 10;
			if (start < end && flag == 0) {
				var int = setInterval(function(){
					recompensesBlock.find('p').text(start);
					start += 1;
					if (start == end){
						clearInterval(int);
						recompensesBlock.find('p').text(end);
					}
				}, 200);
			}
			flag = 1;
		}
		function getRotate(el, offsetEl){
			var step = (scroll - (offsetEl.top - winHeight * 0.66)) * 0.25;
			if (step > 90) {
				step = 90;
			}
			el.css({'transform' : 'rotateX(' + step + 'deg)'})
			.css('background', '#ccc');
		}
		// console.log(activityFrontOffset.top, scroll + winHeight * 0.7);
	});
});