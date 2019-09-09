
; /* Start:"a:4:{s:4:"full";s:93:"/local/templates/main/components/asd/subscribe.quick.form/subsribeRu/script.js?15192181961183";s:6:"source";s:78:"/local/templates/main/components/asd/subscribe.quick.form/subsribeRu/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
if (typeof($) !== 'undefined') {
	$(document).ready(function() {
		$('#asd_subscribe_submit').click(function(){
			if (!$.trim($('#asd_subscribe_form input[name$="asd_email"]').val()).length) {
				return false;
			}
			var arPost = {};
			arPost.asd_rub = [];
			$.each($('#asd_subscribe_form input'), function() {
				if ($(this).attr('type')!='checkbox') {
					arPost[$(this).attr('name')] = $(this).val();
				}
				else if ($(this).attr('type')=='checkbox' && $(this).is(':checked')) {
					arPost.asd_rub.push($(this).val());
				}
			});
			$('#asd_subscribe_res').hide();
			$('#asd_subscribe_submit').attr('disabled', 'disabled');
			$.post('/bitrix/components/asd/subscribe.quick.form/action.php', arPost,
					function(data) {
						$('#asd_subscribe_submit').removeAttr('disabled');
						if (data.status == 'error') {
							$('#asd_subscribe_res').css('color', 'red').html(data.message);
						} else {
							$('#asd_subscribe_res').css('color', 'green');
                            $('.kd-subscribe').addClass('sended');
						}
						//$('#asd_subscribe_res').html(data.message);
						$('#asd_subscribe_res').show();
					}, 'json');
			return false;
		});
	});
}
/* End */
;; /* /local/templates/main/components/asd/subscribe.quick.form/subsribeRu/script.js?15192181961183*/
