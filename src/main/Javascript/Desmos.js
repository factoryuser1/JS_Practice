var graphObject = {
    version:1,
    graph:{
        viewport:{
            xmin:-10,
            ymin:-3.367158671586716,
            xmax:10,
            ymax:3.367158671586716
        }
    },
    expressions:{
        list:[
            {
                id:"1",
                type:"expression",
                latex:"y=x",
                domain:{
                    min:0,
                    max:1
                },
                hidden:false,
                color:"#C0504D",
                style:"normal"
            }, {
                id:"2",
                type:"expression",
                latex:"y=2x",
                domain:{
                    min:0,
                    max:1
                },
                hidden:false,
                color:"#4F81BD",
                style:"normal"
            }, {
                id:"4",
                type:"text",
                text:"Access me!"
            }, {
                id:"5",
                type:"expression",
                latex:"",
                domain:{
                    min:0,
                    max:1
                },
                hidden:false,
                color:"#8064A2",
                style:"normal"
            }
        ]
    }
};
console.log(Object.keys(graphObject))
console.log(Object.keys(graphObject).length)
// console.log(Object.keys(graphObject.graph))
// console.log(Object.keys(graphObject.graph.viewport))
console.log(Object.keys(graphObject.expressions))
console.log(Object.keys(graphObject.expressions).length)
console.log(Object.keys(graphObject.expressions.list))
console.log(Object.keys(graphObject.expressions.list).length)
console.log(graphObject.expressions.list[2].text)