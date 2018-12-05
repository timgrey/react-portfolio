import React, { Component, createRef, createContext } from 'react';

const { Provider, Consumer } = createContext();

export default class CanvasContext extends Component {
    constructor() {
        super();

        this.canvas = createRef();
        this.ctx = null
        this.canvasSetup = this.canvasSetup.bind(this)
        this.animate = this.animate.bind(this)
        this.circleArr = []
        this.lineArr = []
    }

    componentDidMount() {
        const canvas = this.canvas.current;
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        this.animate()
    }

    canvasSetup = () => {

        const canvas = this.canvas.current;
        const ctx = this.ctx

        const colorArray = [
            'rgba(255,255,255,.7)',
            'rgba(177,177,177,.4)',
            'rgba(127,127,127,.4)',
            'rgba(75,75,75,.4)',
            'rgba(25,25,25,.4)',
        ]

        // const colorArray2 = [
        //     'rgba(71,255,175, 1)',
        //     'rgba(227,232,52, 1)',
        //     'rgba(255,162,70, 1)',
        //     'rgba(232,52,177, 1)',
        //     'rgba(58,85,255, 1)',
        // ]

        function Line(x, y, x2, y2, dx, dy, color) {
            this.x = x;
            this.y = y;
            this.x2 = x2;
            this.y2 = y2;
            this.dx = dx;
            this.dy = dy;
            this.color = color

            this.draw = function () {
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x2, this.y2);
                ctx.strokeStyle = this.color
                ctx.stroke();
            }

            this.update = function () {
                if (this.x > canvas.width || this.x < 0) {
                    this.dx = -this.dx
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.dy = -this.dy
                }
                this.x += this.dx
                this.y += this.dy
                this.x2 = this.x + (this.y / 3)
                this.draw()
            }
        }


        function Circle(x, y, dx, dy, radius, color) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.radius = radius;
            this.color = color

            this.draw = function () {

                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
                ctx.fillStyle = this.color
                ctx.fill();

            }

            this.update = function () {
                if (this.x > canvas.width || this.x < 0) {
                    this.dx = -this.dx
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.dy = -this.dy
                }
                this.x += this.dx
                this.y += this.dy

                this.draw()

            }

        }

        while (this.circleArr.length < 50) {
                let radius = 1;
                let x = Math.random() * (canvas.width - radius * 2) + radius;
                let y = Math.random() * (canvas.height - radius * 2) + radius;
                let x2 = x + (y / 3);
                let y2 = 0;
                let dx = (Math.random() - 0.5) * .85;
                let dy = (Math.random() - 0.5) * .85;
                // let getColor = colorArray2[Math.floor(Math.random() * colorArray2.length)]
                let getLineColor = colorArray[Math.floor(Math.random() * colorArray.length)]
                this.circleArr.push(new Circle(x, y, dx, dy, radius, "#666"))
                this.lineArr.push(new Line(x, y, x2, y2, dx, dy, getLineColor))
        }
    }



    animate = () => {
        const canvas = this.canvas.current;
        this.ctx = canvas.getContext('2d');
        // const ctx = this.ctx
        requestAnimationFrame(this.animate);

        this.ctx.clearRect(0, 0, canvas.width, canvas.height)

        this.canvasSetup()

        for (let i = 0; i < this.circleArr.length; i++) {
            this.circleArr[i].update();
            this.lineArr[i].update();
        }
    }


    render() {
        const value = {
            canvas: this.canvas,
        }
        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }
}

export const withCanvasContext = C => props => (
    <Consumer>
        {value => <C {...value}{...props} />}
    </Consumer>
)
