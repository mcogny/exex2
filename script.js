// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Transmit",
      "url": "backend.php",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 685,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "어서오세요 사장님들 실험을 시작해 보겠습니다",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "circle",
          "left": 364,
          "top": 265,
          "angle": 0,
          "width": 55,
          "height": 55,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black"
        },
        {
          "type": "aoi",
          "left": 365,
          "top": 265,
          "angle": 0,
          "width": 50,
          "height": 50,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "rgba(0, 0, 0, 0.2)",
          "label": "next"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "click @next": "next"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Screen",
      "plugins": []
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "": "1"
        },
        {
          "": "2"
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.html.Page",
        "items": [
          {
            "type": "text",
            "title": "hi",
            "content": "hi"
          }
        ],
        "scrollTop": true,
        "submitButtonText": "Continue →",
        "submitButtonPosition": "right",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Page"
      }
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 192,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "바이바이바이",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "circle",
          "left": 364,
          "top": 265,
          "angle": 0,
          "width": 55,
          "height": 55,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black"
        },
        {
          "type": "aoi",
          "left": 365,
          "top": 265,
          "angle": 0,
          "width": 50,
          "height": 50,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "rgba(0, 0, 0, 0.2)",
          "label": "next"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "click @next": "next"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Screen",
      "plugins": []
    }
  ]
})

// Let's go!
study.run()