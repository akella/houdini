class SuperRedWorklet{

	static get inputProperties() {
		return [
			'--circle-fill',
			'--circle-x',
			'--circle-y',
			'--circle-size',
			'background-color'
		];
	}
	// static﻿ get contextOptions() { return {alpha: true}; } 
	paint(ctx,geom,properties){
		const fill = properties.get('--circle-fill').toString();
		const bg = properties.get('background-color').toString();
		let size = properties.get('--circle-size').toString();
		const x = properties.get('--circle-x').toString();
		const y = properties.get('--circle-y').toString();
		ctx.fillStyle = fill;
		if(size < 0)
		  size = 0;
		if(size > 1000)
		  size = 1000;

		ctx.fillStyle = bg;
		ctx.fillRect(0, 0, geom.width, geom.height);

		ctx.fillStyle = fill;
		ctx.globalAlpha = 1 - size/1000;
		ctx.arc(
		  x, y, // center
		  geom.width * size/1000, // radius
		  0, // startAngle
		  2 * Math.PI //endAngle
		);
		ctx.fill();
	}
}
registerPaint('SuperRed',SuperRedWorklet);