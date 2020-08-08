;(() => {
	let color = {
		white: "#fff",
		black: '#000',
		red: '#ff0000',
		green: '#00ff00',
		blue: '#0000ff',
		yellow: '#ffff00',
		fuschia: '#ff00ff',
		aqua: '#00ffff'
	}
	class Turtle {
		constructor(render) {
			this.colors = color
			if(typeof render == 'string') {
				render = document.querySelector(render)
			}

			if(render && render.getContext) {
				this.ctx = render.getContext('2d')
			}
			else {
				throw new Error('The element selected is not a canvas or your browser does not support the canvas tag')
			}
			return new Vehicle(this.ctx, render)
		}
	}
	class Vehicle {
		constructor(ctx, render) {
			this.loc = {
				x: 0,
				y: 0,
				angle: 0
			}
			this.pen = {
				down: false,
				color: color.black,
				width: 2
			}
			this.ctx = ctx
			this.render
		}
		clear() {
			this.ctx.clearRect(0, 0, render.width || render.style.width, render.height || render.style.height)
		}
		penDown() {
			this.pen.down = true
		}
		penUp() {
			this.pen.down = false
		}
		moveTo(x, y) {
			this.loc.x = x
			this.loc.y = y
		}
		forward(len) {
			let {x, y, angle} = this.loc
			let ctx = this.ctx
			this.loc.x += len * Math.sin(angle)
			this.loc.y += len * Math.cos(angle)

			if(this.pen.down) {
				ctx.beginPath()
				ctx.lineWidth = this.pen.width
				ctx.strokeStyle = this.pen.color
				ctx.moveTo(x, y)
				ctx.lineTo(this.loc.x, this.loc.y)
				ctx.stroke()
			}
			else {
				ctx.moveTo(this.loc.x, this.loc.y)
			}
			return this
		}
		backward(len) {
			this.forward(-len)
			return this
		}
		left(deg) {
			this.loc.angle += deg * Math.PI / 180
			return this
		}
		right(deg) {
			this.left(-deg)
			return this
		}
	}
	if(typeof window !== 'undefined') {
		window.Turtle = Turtle
	}
	else {
		module.exports = Turtle
	}
})()
