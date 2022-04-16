function emit_graph()
{
	var h, w;

	h = DRAW_TOP_PAD + DRAW_HEIGHT + DRAW_BOTTOM_PAD;
	w = DRAW_LEFT_PAD + DRAW_WIDTH + DRAW_RIGHT_PAD;

	h = "height='" + h + "'";
	w = "width='" + w + "'";

	outbuf = "<svg class='emited_graph' viewbox='50 0 600 350'" + h + w + ">"

	emit_axes();
	emit_box();
	emit_labels();
	emit_points();

	outbuf += "</svg><br>";

	stdout.innerHTML += outbuf;
}
