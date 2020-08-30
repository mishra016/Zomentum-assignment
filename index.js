
function newMessage() {
	message = $(".input_msg_write input").val();
	if($.trim(message) == '') {
		return false;
	}
  $('<class="received_withd_msg"><p>' + message + '</p>').appendTo($('.last'));
	$('.input_msg_write input').val(null);
	$('.active_chat .preview').html('<span>You: </span>' + message);
	$(".msg_history").animate({ scrollTop: $(document).height() }, "fast");
};

$('.msg_send_btn').click(function() {
  newMessage();
});
