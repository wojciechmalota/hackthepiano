$(function(){
	var settings = {
		numberOfKeys: 88,
		shiftSize: 0.113,
		newNoteInterval: 5000,
		animationStep: 70,
		animationInterval: 20,
		notesPerClef: 10,
		notesInSet: 1,
		averageAlpha: 0.05
	};
	var symbolTypes = { note: 'note', clef: 'clef' };
	var symbols = {
			line: '<svg viewBox="0 -470 500 1066.201" shape-rendering="crispEdges">'
			  +'<line vector-effect="non-scaling-stroke" stroke="black" stroke-width="1" x1="0" x2="500" y1="0" y2="0" />'
			  +'</svg>',
			clefs: {
				treble: '<svg viewBox="-1447.331 -156.776 288.38 1066.201">'
					+'<path d="M-1158.951,433.38c0,25.182-6.497,47.303-19.485,66.385c-13.002,19.089-31.472,33.093-55.423,42.02'
					+'c0.81,4.473,5.072,23.954,12.791,58.466c5.27,23.952,7.917,43.851,7.917,59.687c0,23.949-8.433,43.545-25.276,58.768'
					+'c-16.851,15.228-37.254,22.84-61.205,22.84c-21.526,0-40.604-6.093-57.248-18.271c-17.871-12.998-26.797-29.841-26.797-50.549'
					+'c0-13.809,4.664-26.702,14.006-38.672c9.338-11.981,20.498-17.965,33.495-17.965c12.99,0,23.849,4.873,32.583,14.615'
					+'c8.726,9.744,13.096,21.105,13.096,34.103c0,13.801-4.472,24.365-13.397,31.671c-8.938,7.31-20.309,10.962-34.107,10.962'
					+'c7.707,12.18,20.708,18.271,38.977,18.271c22.323,0,39.483-6.909,51.462-20.703c11.973-13.812,17.966-32.08,17.966-54.812'
					+'c0-14.221-2.438-31.473-7.307-51.768c-4.064-17.053-8.128-33.904-12.18-50.549c-12.18,2.845-24.773,4.261-37.761,4.261'
					+'c-44.668,0-82.625-17.052-113.886-51.155c-31.269-34.107-46.894-73.484-46.894-118.152c0-36.939,14.006-75.106,42.02-114.493'
					+'c15.427-22.736,43.033-53.993,82.826-93.792c-10.152-36.13-15.223-70.234-15.223-102.313c0-25.979,3.655-51.16,10.961-75.52'
					+'c9.338-29.63,22.324-50.946,38.976-63.948c8.53-6.489,14.82-9.743,18.884-9.743c3.651,0,8.525,3.862,14.616,11.573'
					+'c23.543,32.884,35.322,73.901,35.322,123.021c0,73.492-25.38,133.785-76.127,180.876l16.442,79.782'
					+'c8.121-1.618,14.208-2.437,18.273-2.437c30.451,0,55.417,12.391,74.908,37.152C-1167.885,375.322-1158.951,402.123-1158.951,433.38'
					+'z M-1252.132,532.04l-31.059-157.734c-13.399,3.655-24.971,11.479-34.714,23.447c-9.743,11.981-14.617,24.876-14.617,38.67'
					+'c0,11.784,3.656,22.336,10.962,31.672c4.465,6.498,10.965,12.588,19.49,18.271c6.897,5.282,10.354,8.327,10.354,9.137'
					+'c0,1.218-1.627,2.035-4.874,2.438c-18.271-4.467-33.4-14.211-45.37-29.234c-11.981-15.017-17.965-32.071-17.965-51.161'
					+'c0-20.294,6.183-39.48,18.573-57.55c12.382-18.06,27.911-30.757,46.588-38.063l-13.398-71.258'
					+'c-71.056,58.467-106.575,115.715-106.575,171.746c0,32.486,12.581,60.094,37.758,82.825c23.952,22.333,52.375,33.495,85.263,33.495'
					+'C-1281.972,538.739-1268.784,536.514-1252.132,532.04z M-1237.516,30.82c0-24.76-7.715-37.151-23.14-37.151'
					+'c-18.273,0-33.298,15.835-45.069,47.505c-9.342,24.769-14.005,48.319-14.005,70.643c0,18.681,3.242,35.734,9.744,51.161'
					+'c17.053-10.553,33.392-30.146,49.024-58.772C-1245.338,75.583-1237.516,51.124-1237.516,30.82z M-1191.229,446.171'
					+'c0-19.892-7.822-37.151-23.447-51.768c-15.637-14.617-33.603-21.923-53.899-21.923l31.059,154.687'
					+'C-1206.663,514.592-1191.229,487.584-1191.229,446.171z"/>'
					+'</svg>',
				bass: '<svg viewBox="-1846.636 -156.776 359 1066.201">'
					+'<path d="M-1574.669,213.475c0,71.723-31.834,136.994-95.49,195.818c-50.767,47.14-109.599,81.195-176.477,102.14'
					+'c70.108-50.768,118.247-93.876,144.446-129.338c37.064-50.766,55.604-113.017,55.604-186.751c0-64.46-24.99-96.7-74.945-96.7'
					+'c-39.888,0-69.907,17.132-90.052,51.373c15.309-8.054,29.408-12.087,42.307-12.087c15.309,0,26.895,5.345,34.753,16.018'
					+'c7.857,10.676,11.784,24.079,11.784,40.187c0,16.526-5.439,29.22-16.317,38.077c-10.877,8.87-24.58,13.296-41.098,13.296'
					+'c-18.132,0-32.543-5.136-43.212-15.411c-10.681-10.275-16.017-24.674-16.017-43.212c0-36.658,13.693-64.264,41.097-82.798'
					+'c22.969-15.308,53.386-22.969,91.261-22.969c39.483,0,71.412,11.89,95.794,35.659'
					+'C-1586.862,140.556-1574.669,172.783-1574.669,213.475z M-1487.637,134.301c0,19.341-9.473,29.01-28.408,29.01'
					+'c-18.538,0-27.8-9.865-27.8-29.612c0-8.464,2.72-15.309,8.159-20.551c5.438-5.23,12.391-7.856,20.85-7.856'
					+'c7.648,0,14.1,2.823,19.342,8.463C-1490.264,119.402-1487.637,126.247-1487.637,134.301z M-1487.637,250.343'
					+'c0,19.338-9.066,29.01-27.199,29.01c-19.337,0-29.009-9.672-29.009-29.01c0-19.342,9.672-29.011,29.009-29.011'
					+'c7.256,0,13.599,2.927,19.038,8.764C-1490.357,235.94-1487.637,242.694-1487.637,250.343z"/>'
					+'</svg>',
				alto: '<svg viewBox="-2633.196 -156.776 321.431 1066.201">'
					+'<path fill-rule="evenodd" clip-rule="evenodd" d="M-2614.821,80.247c13.801,0,27.603,0,41.403,0'
					+'c1.907,0.431,4.282,0.092,5.145,1.959c1.051,2.276,0.49,11.324,0.49,13.965c0,34.331,0.245,70.368,0.245,102.652'
					+'c0,113.151,0,225.14,0,338.09c0,9.041,1.758,15.36-5.39,15.926c-12.375,0.977-31.301,0.561-45.323,0'
					+'c-5.5-0.22-12.154,0.611-13.965-1.471c-1.43-1.643-0.979-9.099-0.979-14.455c0-148.123,0-293.639,0-440.987'
					+'c0-6.022-1.001-14.016,1.959-15.19C-2626.331,80.006-2619.725,80.978-2614.821,80.247z"/>'
					+'<path fill-rule="evenodd" clip-rule="evenodd" d="M-2543.529,80.247c3.512,0,7.024,0,10.535,0c5.34-0.189,3.921,7.761,3.921,14.454'
					+'c0,69.755,0.477,143.055,0.734,211.674c0.987,0.251,1.468-0.935,1.959-1.47c18.15-19.746,33.507-44.965,36.75-80.357'
					+'c0.477-5.211-0.485-12.599,1.47-15.68c1.449-2.284,5.649-2.81,8.085-1.715c3.679,1.654,3.593,5.366,3.92,11.27'
					+'c0.748,13.512,4.821,26.091,9.799,35.034c7.356,13.214,15.716,22.465,32.094,27.684c17.668,5.63,37.292,0.192,46.549-9.063'
					+'c9.994-9.995,14.004-26.419,15.679-44.1c1.726-18.202,1.569-39.138,0-58.063c-3.089-37.269-13.261-66.069-45.568-73.988'
					+'c-16.712-4.096-38.174-4.016-42.385,12.495c-0.618,2.422-1.178,5.34-0.735,8.82c0.621,4.86,3.763,8.582,6.371,10.535'
					+'c2.682,2.008,6.384,2.526,9.31,4.409c4.01,2.583,6.799,7.063,7.594,12.74c2.225,15.867-8.291,29.121-19.6,34.79'
					+'c-5.368,2.691-14.038,5.118-23.028,3.43c-13.685-2.57-24.324-12.987-27.93-26.949c-1.846-7.149-0.906-16.706,0.979-24.5'
					+'c3.293-13.603,10.911-25.241,20.825-33.809c9.409-8.131,21.753-15.104,37.974-16.904c16.817-1.868,34.596-0.38,50.714,2.939'
					+'c46.521,9.582,73.732,35.583,82.806,81.583c2.992,15.163,4.13,34.272,0.981,50.468c-5.82,29.936-23.572,50.48-45.569,63.943'
					+'c-11.192,6.851-24.981,12.312-39.934,14.944c-8.411,1.481-17.485,2.618-24.989,1.471c-7.345-1.124-13.544-4.919-19.354-7.84'
					+'c-6.393-3.214-12.477-7.172-20.825-6.125c-7.865,0.987-12.5,5.692-15.189,12.25c-5.185,12.647-4.712,35.638,1.471,46.794'
					+'c4.424,7.982,14.314,12.151,25.969,7.35c4.449-1.833,8.596-4.041,12.74-6.125c4.179-2.102,8.547-4.652,13.229-5.635'
					+'c7.493-1.573,17.77-0.219,24.989,0.98c36.755,6.102,62.928,25.25,78.152,53.163c6.247,11.453,10.714,25.713,11.27,41.159'
					+'c0,2.205,0,4.41,0,6.614c-0.342,10.994-1.671,21.093-3.43,30.135c-8.886,45.71-37.477,71.537-83.542,80.603'
					+'c-16.803,3.306-42.166,5.633-60.023,0.49c-16.737-4.82-29.355-14.622-38.463-27.194c-8.066-11.135-16.45-33.186-8.82-51.203'
					+'c5.998-14.166,21.868-26.564,42.139-21.07c8.252,2.237,14.577,6.89,19.354,13.475c4.342,5.982,9.242,14.854,7.105,25.479'
					+'c-0.92,4.574-3.386,7.488-5.879,9.8c-2.88,2.668-6.82,3.32-10.29,5.635c-5.315,3.544-8.875,11.153-6.371,20.091'
					+'c2.177,7.764,9.1,12.152,15.68,13.719c7.552,1.795,19.301,0.231,26.459-1.472c15.855-3.771,26.624-13.137,33.564-25.479'
					+'c13.429-23.877,14.824-66.757,12.25-103.876c-1.873-27.017-9.078-49.999-32.339-56.104c-7.254-1.904-16.537-3.26-26.704-0.98'
					+'c-15.959,3.579-27.006,14.84-33.565,25.479c-5.773,9.367-9.5,20.127-11.024,33.074c-0.435,3.697,0.204,10.702-1.225,13.72'
					+'c-1.421,3.002-7.244,4.809-10.29,2.204c-2.883-2.464-2.079-10.294-2.45-14.944c-1.363-17.088-5.15-29.829-10.535-42.384'
					+'c-6.175-14.4-15.543-29.49-26.214-39.934c-0.656-0.643-1.512-2.048-1.959-0.979c-0.455,1.089,0.114,4.47,0,6.859'
					+'c-0.118,2.468-0.245,4.901-0.245,6.86c0,66.431,0.515,131.707-0.489,197.464c-0.071,4.587,0.538,11.593-0.981,13.229'
					+'c-1.752,1.889-6.388,1.508-9.064,1.47c-4.15-0.06-6.911-0.362-8.331-2.205c-1.328-1.727-0.979-9.326-0.979-14.454'
					+'c0-147.799,0.246-293.805,0.246-440.008C-2548.183,88.414-2549.718,80.022-2543.529,80.247z"/>'
					+'</svg>',
				tenor: '<svg viewBox="-2239.359 -156.776 321.594 1066.201">'
					+'<path fill-rule="evenodd" clip-rule="evenodd" d="M-2220.821-38.024c13.801,0,27.603,0,41.403,0'
					+'c1.907,0.431,4.282,0.092,5.145,1.959c1.051,2.276,0.49,11.324,0.49,13.965c0,34.331,0.245,70.368,0.245,102.652'
					+'c0,113.151,0,225.14,0,338.09c0,9.041,1.758,15.36-5.39,15.926c-12.375,0.977-31.301,0.561-45.323,0'
					+'c-5.5-0.22-12.154,0.611-13.965-1.471c-1.43-1.643-0.979-9.099-0.979-14.455c0-148.122,0-293.639,0-440.987'
					+'c0-6.022-1.001-14.016,1.959-15.19C-2232.331-38.266-2225.725-37.293-2220.821-38.024z"/>'
					+'<path fill-rule="evenodd" clip-rule="evenodd" d="M-2149.529-38.024c3.512,0,7.024,0,10.535,0c5.34-0.189,3.921,7.761,3.921,14.454'
					+'c0,69.755,0.477,143.055,0.734,211.674c0.987,0.251,1.468-0.935,1.959-1.47c18.15-19.746,33.507-44.965,36.75-80.357'
					+'c0.477-5.211-0.485-12.599,1.47-15.68c1.449-2.284,5.649-2.81,8.085-1.715c3.679,1.654,3.593,5.366,3.92,11.27'
					+'c0.748,13.512,4.821,26.091,9.799,35.034c7.356,13.214,15.716,22.465,32.094,27.684c17.668,5.63,37.292,0.192,46.549-9.063'
					+'c9.994-9.995,14.004-26.419,15.679-44.1c1.726-18.202,1.569-39.138,0-58.063c-3.089-37.269-13.261-66.069-45.568-73.988'
					+'c-16.712-4.096-38.174-4.016-42.385,12.495c-0.618,2.422-1.178,5.34-0.735,8.82c0.621,4.86,3.763,8.582,6.371,10.535'
					+'c2.682,2.008,6.384,2.526,9.31,4.409c4.01,2.583,6.799,7.063,7.594,12.74c2.225,15.867-8.291,29.121-19.6,34.79'
					+'c-5.368,2.691-14.038,5.118-23.028,3.43c-13.685-2.57-24.324-12.987-27.93-26.949c-1.846-7.149-0.906-16.706,0.979-24.5'
					+'c3.293-13.603,10.911-25.241,20.825-33.809c9.409-8.131,21.753-15.104,37.974-16.904c16.817-1.868,34.596-0.38,50.714,2.939'
					+'c46.521,9.582,73.732,35.583,82.806,81.583c2.992,15.163,4.13,34.272,0.981,50.468c-5.82,29.936-23.572,50.48-45.569,63.943'
					+'c-11.192,6.851-24.981,12.312-39.934,14.944c-8.411,1.481-17.485,2.618-24.989,1.471c-7.345-1.124-13.544-4.919-19.354-7.84'
					+'c-6.393-3.214-12.477-7.172-20.825-6.125c-7.865,0.987-12.5,5.692-15.189,12.25c-5.185,12.647-4.712,35.638,1.471,46.794'
					+'c4.424,7.982,14.314,12.151,25.969,7.35c4.449-1.833,8.596-4.041,12.74-6.125c4.179-2.102,8.547-4.652,13.229-5.635'
					+'c7.493-1.573,17.77-0.219,24.989,0.98c36.755,6.102,62.928,25.25,78.152,53.163c6.247,11.453,10.714,25.713,11.27,41.159'
					+'c0,2.205,0,4.41,0,6.614c-0.342,10.994-1.671,21.093-3.43,30.135c-8.886,45.71-37.477,71.537-83.542,80.603'
					+'c-16.803,3.306-42.166,5.633-60.023,0.49c-16.737-4.82-29.355-14.622-38.463-27.194c-8.066-11.135-16.45-33.186-8.82-51.203'
					+'c5.998-14.166,21.868-26.564,42.139-21.07c8.252,2.237,14.577,6.89,19.354,13.475c4.342,5.982,9.242,14.854,7.105,25.479'
					+'c-0.92,4.574-3.386,7.488-5.879,9.8c-2.88,2.668-6.82,3.32-10.29,5.635c-5.315,3.544-8.875,11.153-6.371,20.091'
					+'c2.177,7.764,9.1,12.152,15.68,13.719c7.552,1.795,19.301,0.231,26.459-1.472c15.855-3.771,26.624-13.137,33.564-25.479'
					+'c13.429-23.877,14.824-66.757,12.25-103.877c-1.873-27.016-9.078-49.998-32.339-56.103c-7.254-1.904-16.537-3.26-26.704-0.98'
					+'c-15.959,3.579-27.006,14.84-33.565,25.479c-5.773,9.366-9.5,20.127-11.024,33.074c-0.435,3.697,0.204,10.701-1.225,13.72'
					+'c-1.421,3.002-7.244,4.809-10.29,2.204c-2.883-2.464-2.079-10.295-2.45-14.944c-1.363-17.088-5.15-29.829-10.535-42.384'
					+'c-6.175-14.4-15.543-29.49-26.214-39.934c-0.656-0.643-1.512-2.048-1.959-0.979c-0.455,1.089,0.114,4.47,0,6.859'
					+'c-0.118,2.468-0.245,4.901-0.245,6.86c0,66.43,0.515,131.707-0.489,197.464c-0.071,4.587,0.538,11.593-0.981,13.229'
					+'c-1.752,1.889-6.388,1.508-9.064,1.47c-4.15-0.06-6.911-0.362-8.331-2.205c-1.328-1.727-0.979-9.326-0.979-14.454'
					+'c0-147.799,0.246-293.805,0.246-440.008C-2154.183-29.858-2155.718-38.25-2149.529-38.024z"/>'
					+'</svg>'
			},
			decorators: {
				sharp: '<svg viewBox="-710.378 -156.776 106.368 1066.201">'
					+'<path d="M-604.01,384.593l-23.099,5.473v88.736h-14.585v-85.092l-32.215,8.511v92.385h-13.979v-88.742l-22.489,5.474v-48.625'
					+'l22.489-6.687v-67.468l-22.489,6.081v-47.411l22.489-6.076v-92.385h13.979v88.737l32.215-7.902v-91.779h14.585v88.131l23.099-4.86'
					+'v46.191l-23.099,6.685v67.468l23.099-5.469V384.593z M-641.694,345.088v-68.074l-32.215,7.901v67.464L-641.694,345.088z"/>'
					+'</svg>',
				flat: '<svg viewBox="-430.184 -156.776 96.033 1066.201">'
					+'<path d="M-334.151,291.601c0,16.62-12.563,36.665-37.683,60.172c-19.453,15.803-38.898,31.806-58.35,48.017V121.416h13.981v145.871'
					+'c11.338-10.124,25.527-15.194,42.546-15.194c11.749,0,21.269,3.648,28.566,10.94C-337.8,270.329-334.151,279.854-334.151,291.601z'
					+'M-368.796,292.818c0-15.396-6.484-23.1-19.448-23.1c-12.567,0-21.883,6.29-27.958,18.841v79.625'
					+'C-384.599,342.247-368.796,317.129-368.796,292.818z"/>'
					+'</svg>'
			},
			notes: {
				none: '<svg viewBox="-890.286 -156.776 141.012 1066.201">'
					+'<path d="M-749.274,303.148c0,19.448-10.54,37.082-31.604,52.886c-19.452,14.979-39.313,22.483-59.568,22.483'
					+'c-17.835,0-30.598-4.048-38.294-12.152c-7.7-8.112-11.546-21.073-11.546-38.904c0-20.257,10.532-38.293,31.604-54.098'
					+'c19.452-14.172,39.708-21.271,60.784-21.271c17.828,0,30.392,4.055,37.685,12.16C-752.917,272.356-749.274,285.324-749.274,303.148'
					+'z M-763.861,280.056c0-6.479-4.663-9.729-13.979-9.729c-14.996,0-35.054,9.523-60.174,28.566'
					+'c-25.132,19.044-37.684,35.656-37.684,49.844c0,6.884,4.044,10.331,12.156,10.331c16.2,0,36.868-9.423,61.997-28.262'
					+'C-776.426,311.96-763.861,295.051-763.861,280.056z"/>'
					+'</svg>',
				natural: '<svg viewBox="-997.866 -156.776 248.592 1066.201">'
					+'<path d="M-997.866,415.594V114.729h14.587v117.912l79.018-20.665v302.082h-15.197V396.142L-997.866,415.594z M-983.279,286.132'
					+'v71.718l63.82-16.41v-71.721L-983.279,286.132z"/>'
					+'<path d="M-749.274,303.148c0,19.448-10.54,37.082-31.604,52.886c-19.452,14.979-39.313,22.483-59.568,22.483'
					+'c-17.835,0-30.598-4.048-38.294-12.152c-7.7-8.112-11.546-21.073-11.546-38.904c0-20.257,10.532-38.293,31.604-54.098'
					+'c19.452-14.172,39.708-21.271,60.784-21.271c17.828,0,30.392,4.055,37.685,12.16C-752.917,272.356-749.274,285.324-749.274,303.148'
					+'z M-763.861,280.056c0-6.479-4.663-9.729-13.979-9.729c-14.996,0-35.054,9.523-60.174,28.566'
					+'c-25.132,19.044-37.684,35.656-37.684,49.844c0,6.884,4.044,10.331,12.156,10.331c16.2,0,36.868-9.423,61.997-28.262'
					+'C-776.426,311.96-763.861,295.051-763.861,280.056z"/>'
					+'</svg>',
				sharp: '<svg viewBox="-710.378 -156.776 261.355 1066.201">'
					+'<path d="M-604.01,384.593l-23.099,5.473v88.736h-14.585v-85.092l-32.215,8.511v92.385h-13.979v-88.742l-22.489,5.474v-48.625'
					+'l22.489-6.687v-67.468l-22.489,6.081v-47.411l22.489-6.076v-92.385h13.979v88.737l32.215-7.902v-91.779h14.585v88.131l23.099-4.86'
					+'v46.191l-23.099,6.685v67.468l23.099-5.469V384.593z M-641.694,345.088v-68.074l-32.215,7.901v67.464L-641.694,345.088z"/>'
					+'<path d="M-449.022,303.148c0,19.447-10.54,37.081-31.604,52.885c-19.452,14.98-39.313,22.483-59.568,22.483'
					+'c-17.835,0-30.598-4.048-38.294-12.152c-7.7-8.112-11.546-21.073-11.546-38.904c0-20.257,10.532-38.294,31.604-54.098'
					+'c19.452-14.172,39.708-21.271,60.784-21.271c17.828,0,30.392,4.055,37.685,12.16C-452.666,272.355-449.022,285.324-449.022,303.148'
					+'z M-463.61,280.057c0-6.48-4.663-9.729-13.979-9.729c-14.996,0-35.054,9.522-60.174,28.566'
					+'c-25.132,19.044-37.684,35.656-37.684,49.844c0,6.884,4.044,10.33,12.156,10.33c16.2,0,36.868-9.423,61.997-28.262'
					+'C-476.174,311.961-463.61,295.051-463.61,280.057z"/>'
					+'</svg>',
				flat: '<svg viewBox="-430.184 -156.776 251.017 1066.201">'
					+'<path d="M-334.151,291.601c0,16.62-12.563,36.665-37.683,60.172c-19.453,15.803-38.898,31.806-58.35,48.017V121.416h13.981v145.871'
					+'c11.338-10.124,25.527-15.194,42.546-15.194c11.749,0,21.269,3.648,28.566,10.94C-337.8,270.329-334.151,279.854-334.151,291.601z'
					+'M-368.796,292.818c0-15.396-6.484-23.1-19.448-23.1c-12.567,0-21.883,6.29-27.958,18.841v79.625'
					+'C-384.599,342.247-368.796,317.129-368.796,292.818z"/>'
					+'<path d="M-179.167,303.148c0,19.447-10.54,37.081-31.604,52.885c-19.452,14.98-39.313,22.483-59.568,22.483'
					+'c-17.835,0-30.598-4.048-38.294-12.152c-7.7-8.112-11.546-21.073-11.546-38.904c0-20.257,10.532-38.294,31.604-54.098'
					+'c19.452-14.172,39.708-21.271,60.784-21.271c17.828,0,30.392,4.055,37.685,12.16C-182.811,272.355-179.167,285.324-179.167,303.148'
					+'z M-193.754,280.057c0-6.48-4.663-9.729-13.979-9.729c-14.996,0-35.054,9.522-60.174,28.566'
					+'c-25.132,19.044-37.684,35.656-37.684,49.844c0,6.884,4.044,10.33,12.156,10.33c16.2,0,36.868-9.423,61.997-28.262'
					+'C-206.319,311.961-193.754,295.051-193.754,280.057z"/>'
					+'</svg>'
			}
	};
	var decorators = { sharp: 'sharp', flat: 'flat', natural: 'natural', none: 'none' };
	var clefs = {
		treble: {
			id: 'treble',
			shift: 0,
			keys: {
				sharp: [
			        {shift: 1},
			        {shift: 2},
			        {shift: 3},
			        {shift: 4},
			        {shift: 5},
			        {shift: -1},
			        {}
				],
				flat: [
				    {shift: 1},
				    {shift: 2},
				    {shift: 3},
				    {},
				    {shift: -2},
				    {shift: -1},
				    {shift: 0}
				]
			}
		},
		bass: {
			id: 'bass',
			shift: 12,
			keys: {
				sharp: [
			        {shift: -1},
			        {shift: 0},
			        {shift: 1},
			        {shift: 2},
			        {shift: 3},
			        {shift: -3},
			        {}
				],
				flat: [
				    {shift: -1},
				    {shift: 0},
				    {shift: 1},
				    {},
				    {shift: -4},
				    {shift: -3},
				    {shift: -2}
				]
			}
		},
		alto: {
			id: 'alto',
			shift: 6,
			keys: {
				sharp: [
			        {shift: 0},
			        {shift: 1},
			        {shift: 2},
			        {shift: 3},
			        {shift: 4},
			        {shift: -2},
			        {}
				],
				flat: [
				    {shift: 0},
				    {shift: 1},
				    {shift: 2},
				    {},
				    {shift: -3},
				    {shift: -2},
				    {shift: -1}
				]
			}
		},
		tenor: {
			id: 'tenor',
			shift: 8,
			keys: {
				sharp: [
			        {shift: 2},
			        {shift: 3},
			        {shift: 4},
			        {shift: 5},
			        {shift: 6},
			        {shift: 0},
			        {}
				],
				flat: [
				    {shift: 2},
				    {shift: 3},
				    {shift: 4},
				    {},
				    {shift: -1},
				    {shift: 0},
				    {shift: 1}
				]
			}
		}
	};
	var keys = {
            C: {decorator: decorators.sharp, lines: []},
			G: {decorator: decorators.sharp, lines: [3]},
			D: {decorator: decorators.sharp, lines: [3, 0]},
			A: {decorator: decorators.sharp, lines: [3, 0, 4]},
			E: {decorator: decorators.sharp, lines: [3, 0, 4, 1]},
			B: {decorator: decorators.sharp, lines: [3, 0, 4, 1, 5]},
			Fsharp: {decorator: decorators.sharp, lines: [3, 0, 4, 1, 5, 2]},
			F: {decorator: decorators.flat, lines: [6]},
			Bflat: {decorator: decorators.flat, lines: [6, 2]},
			Eflat: {decorator: decorators.flat, lines: [6, 2, 5]},
			Aflat: {decorator: decorators.flat, lines: [6, 2, 5, 1]},
			Dflat: {decorator: decorators.flat, lines: [6, 2, 5, 1, 4]},
			Gflat: {decorator: decorators.flat, lines: [6, 2, 5, 1, 4, 0]}
	};
	var staffs = {
	    staff1: {id: 'staff1'},
	    staff2: {id: 'staff2'}
	};
	var clefSets = {
	    both: {staff1: 'treble', staff2: 'bass'},
	    treble: {staff1: 'treble', staff2: 'treble'},
	    bass: {staff1: 'bass', staff2: 'bass'},
	    alto: {staff1: 'alto'},
	    tenor: {staff1: 'tenor'}
	};
	var levels = {
		beginner1: {
			name: 'Beginner 1',
			staffs: [staffs.staff1],
			clefSets: [clefSets.treble],
			keys: [keys.C],
			decorators: [decorators.natural],
			shiftFrom: -4,	shiftTo: 4,
			shiftsEven: true, shiftsOdd: false
		},
		beginner2: {
			name: 'Beginner 2',
			staffs: [staffs.staff1],
			clefSets: [clefSets.treble],
			keys: [keys.C],
			decorators: [decorators.natural],
			shiftFrom: -4,	shiftTo: 4,
			shiftsEven: false, shiftsOdd: true
		},
		beginner3: {
			name: 'Beginner 3',
			staffs: [staffs.staff1],
			clefSets: [clefSets.treble],
			keys: [keys.C],
			decorators: [decorators.natural],
			shiftFrom: -4,	shiftTo: 4,
			shiftsEven: true, shiftsOdd: true
		},
		beginner4: {
			name: 'Beginner 4',
			staffs: [staffs.staff2],
			clefSets: [clefSets.bass],
			keys: [keys.C],
			decorators: [decorators.natural],
			shiftFrom: -4,	shiftTo: 4,
			shiftsEven: true, shiftsOdd: false
		},
		beginner5: {
			name: 'Beginner 5',
			staffs: [staffs.staff2],
			clefSets: [clefSets.bass],
			keys: [keys.C],
			decorators: [decorators.natural],
			shiftFrom: -4,	shiftTo: 4,
			shiftsEven: false, shiftsOdd: true
		},
		beginner6: {
			name: 'Beginner 6',
			staffs: [staffs.staff2],
			clefSets: [clefSets.bass],
			keys: [keys.C],
			decorators: [decorators.natural],
			shiftFrom: -4,	shiftTo: 4,
			shiftsEven: true, shiftsOdd: true
		},
		beginner7: {
			name: 'Beginner 7',
			staffs: [staffs.staff1, staffs.staff2],
			clefSets: [clefSets.both],
			keys: [keys.C],
			decorators: [decorators.natural],
			shiftFrom: -4,	shiftTo: 4,
			shiftsEven: true, shiftsOdd: true
		},
		intermediate1: {
			name: 'Intermediate 1',
			staffs: [staffs.staff1, staffs.staff2],
			clefSets: [clefSets.both, clefSets.treble, clefSets.bass],
			keys: [keys.C],
			decorators: [decorators.natural],
			shiftFrom: -8,	shiftTo: 8,
			shiftsEven: true, shiftsOdd: false
		},
		intermediate2: {
			name: 'Intermediate 2',
			staffs: [staffs.staff1, staffs.staff2],
			clefSets: [clefSets.both, clefSets.treble, clefSets.bass],
			keys: [keys.C],
			decorators: [decorators.natural],
			shiftFrom: -8,	shiftTo: 8,
			shiftsEven: false, shiftsOdd: true
		},
		intermediate3: {
			name: 'Intermediate 3',
			staffs: [staffs.staff1, staffs.staff2],
			clefSets: [clefSets.both, clefSets.treble, clefSets.bass],
			keys: [keys.C],
			decorators: [decorators.natural],
			shiftFrom: -8,	shiftTo: 8,
			shiftsEven: true, shiftsOdd: true
		},
		intermediate4: {
			name: 'Intermediate 4',
			staffs: [staffs.staff1, staffs.staff2],
			clefSets: [clefSets.both, clefSets.treble, clefSets.bass],
			keys: [keys.C],
			decorators: [decorators.natural],
			shiftFrom: -12,	shiftTo: 12,
			shiftsEven: true, shiftsOdd: false
		},
		intermediate5: {
			name: 'Intermediate 5',
			staffs: [staffs.staff1, staffs.staff2],
			clefSets: [clefSets.both, clefSets.treble, clefSets.bass],
			keys: [keys.C],
			decorators: [decorators.natural],
			shiftFrom: -12,	shiftTo: 12,
			shiftsEven: false, shiftsOdd: true
		},
		intermediate6: {
			name: 'Intermediate 6',
			staffs: [staffs.staff1, staffs.staff2],
			clefSets: [clefSets.both, clefSets.treble, clefSets.bass],
			keys: [keys.C],
			decorators: [decorators.natural],
			shiftFrom: -12,	shiftTo: 12,
			shiftsEven: true, shiftsOdd: true
		},
		advanced1: {
			name: 'Advanced 1',
			staffs: [staffs.staff1, staffs.staff2],
			clefSets: [clefSets.both, clefSets.treble, clefSets.bass],
			keys: [keys.C],
			decorators: [decorators.natural, decorators.sharp, decorators.flat],
			shiftFrom: -12,	shiftTo: 12,
			shiftsEven: true, shiftsOdd: true
		},
		advanced2: {
			name: 'Advanced 2',
			staffs: [staffs.staff1, staffs.staff2],
			clefSets: [clefSets.both, clefSets.treble, clefSets.bass],
			keys: [keys.C, keys.G, keys.F],
			decorators: [decorators.natural, decorators.sharp, decorators.flat],
			shiftFrom: -12,	shiftTo: 12,
			shiftsEven: true, shiftsOdd: true
		},
		advanced3: {
			name: 'Advanced 3',
			staffs: [staffs.staff1, staffs.staff2],
			clefSets: [clefSets.both, clefSets.treble, clefSets.bass],
			keys: [keys.C, keys.G, keys.F, keys.D, keys.Bflat],
			decorators: [decorators.natural, decorators.sharp, decorators.flat],
			shiftFrom: -12,	shiftTo: 12,
			shiftsEven: true, shiftsOdd: true
		},
		advanced4: {
			name: 'Advanced 4',
			staffs: [staffs.staff1, staffs.staff2],
			clefSets: [clefSets.both, clefSets.treble, clefSets.bass],
			keys: [keys.C, keys.G, keys.F, keys.D, keys.Bflat, keys.A, keys.Eflat],
			decorators: [decorators.natural, decorators.sharp, decorators.flat],
			shiftFrom: -12,	shiftTo: 12,
			shiftsEven: true, shiftsOdd: true
		},
		advanced5: {
			name: 'Advanced 5',
			staffs: [staffs.staff1, staffs.staff2],
			clefSets: [clefSets.both, clefSets.treble, clefSets.bass],
			keys: [keys.C, keys.G, keys.F, keys.D, keys.Bflat, keys.A, keys.Eflat, keys.E, keys.Aflat],
			decorators: [decorators.natural, decorators.sharp, decorators.flat],
			shiftFrom: -12,	shiftTo: 12,
			shiftsEven: true, shiftsOdd: true
		},
		advanced6: {
			name: 'Advanced 6',
			staffs: [staffs.staff1, staffs.staff2],
			clefSets: [clefSets.both, clefSets.treble, clefSets.bass],
			keys: [keys.C, keys.G, keys.F, keys.D, keys.Bflat, keys.A, keys.Eflat, keys.E, keys.Aflat,
			       keys.B, keys.Dflat],
			decorators: [decorators.natural, decorators.sharp, decorators.flat],
			shiftFrom: -12,	shiftTo: 12,
			shiftsEven: true, shiftsOdd: true
		},
		advanced7: {
			name: 'Advanced 7',
			staffs: [staffs.staff1, staffs.staff2],
			clefSets: [clefSets.both, clefSets.treble, clefSets.bass],
			keys: [keys.C, keys.G, keys.F, keys.D, keys.Bflat, keys.A, keys.Eflat, keys.E, keys.Aflat,
			       keys.B, keys.Dflat, keys.Fsharp, keys.Gflat],
			decorators: [decorators.natural, decorators.sharp, decorators.flat],
			shiftFrom: -12,	shiftTo: 12,
			shiftsEven: true, shiftsOdd: true
		},
		alto_beginner1: {
			name: 'Alto Beginner 1',
			staffs: [staffs.staff1],
			clefSets: [clefSets.alto],
			keys: [keys.C],
			decorators: [decorators.natural],
			shiftFrom: -4,	shiftTo: 4,
			shiftsEven: true, shiftsOdd: false
		},
		alto_beginner2: {
			name: 'Alto Beginner 2',
			staffs: [staffs.staff1],
			clefSets: [clefSets.alto],
			keys: [keys.C],
			decorators: [decorators.natural],
			shiftFrom: -4,	shiftTo: 4,
			shiftsEven: false, shiftsOdd: true
		},
		alto_beginner3: {
			name: 'Alto Beginner 3',
			staffs: [staffs.staff1],
			clefSets: [clefSets.alto],
			keys: [keys.C],
			decorators: [decorators.natural],
			shiftFrom: -4,	shiftTo: 4,
			shiftsEven: true, shiftsOdd: true
		},
		alto_intermediate1: {
			name: 'Alto Intermediate 1',
			staffs: [staffs.staff1],
			clefSets: [clefSets.alto],
			keys: [keys.C],
			decorators: [decorators.natural],
			shiftFrom: -8,	shiftTo: 8,
			shiftsEven: true, shiftsOdd: true
		},
		alto_intermediate2: {
			name: 'Alto Intermediate 2',
			staffs: [staffs.staff1],
			clefSets: [clefSets.alto],
			keys: [keys.C],
			decorators: [decorators.natural],
			shiftFrom: -12,	shiftTo: 12,
			shiftsEven: true, shiftsOdd: true
		},
		alto_advanced1: {
			name: 'Alto Advanced 1',
			staffs: [staffs.staff1],
			clefSets: [clefSets.alto],
			keys: [keys.C],
			decorators: [decorators.natural, decorators.sharp, decorators.flat],
			shiftFrom: -12,	shiftTo: 12,
			shiftsEven: true, shiftsOdd: true
		},
		alto_advanced2: {
			name: 'Alto Advanced 2',
			staffs: [staffs.staff1],
			clefSets: [clefSets.alto],
			keys: [keys.C, keys.G, keys.F],
			decorators: [decorators.natural, decorators.sharp, decorators.flat],
			shiftFrom: -12,	shiftTo: 12,
			shiftsEven: true, shiftsOdd: true
		},
		alto_advanced3: {
			name: 'Alto Advanced 3',
			staffs: [staffs.staff1],
			clefSets: [clefSets.alto],
			keys: [keys.C, keys.G, keys.F, keys.D, keys.Bflat],
			decorators: [decorators.natural, decorators.sharp, decorators.flat],
			shiftFrom: -12,	shiftTo: 12,
			shiftsEven: true, shiftsOdd: true
		},
		alto_advanced4: {
			name: 'Alto Advanced 4',
			staffs: [staffs.staff1],
			clefSets: [clefSets.alto],
			keys: [keys.C, keys.G, keys.F, keys.D, keys.Bflat, keys.A, keys.Eflat],
			decorators: [decorators.natural, decorators.sharp, decorators.flat],
			shiftFrom: -12,	shiftTo: 12,
			shiftsEven: true, shiftsOdd: true
		},
		alto_advanced5: {
			name: 'Alto Advanced 5',
			staffs: [staffs.staff1],
			clefSets: [clefSets.alto],
			keys: [keys.C, keys.G, keys.F, keys.D, keys.Bflat, keys.A, keys.Eflat, keys.E, keys.Aflat],
			decorators: [decorators.natural, decorators.sharp, decorators.flat],
			shiftFrom: -12,	shiftTo: 12,
			shiftsEven: true, shiftsOdd: true
		},
		alto_advanced6: {
			name: 'Alto Advanced 6',
			staffs: [staffs.staff1],
			clefSets: [clefSets.alto],
			keys: [keys.C, keys.G, keys.F, keys.D, keys.Bflat, keys.A, keys.Eflat, keys.E, keys.Aflat,
			       keys.B, keys.Dflat],
			decorators: [decorators.natural, decorators.sharp, decorators.flat],
			shiftFrom: -12,	shiftTo: 12,
			shiftsEven: true, shiftsOdd: true
		},
		alto_advanced7: {
			name: 'Alto Advanced 7',
			staffs: [staffs.staff1],
			clefSets: [clefSets.alto],
			keys: [keys.C, keys.G, keys.F, keys.D, keys.Bflat, keys.A, keys.Eflat, keys.E, keys.Aflat,
			       keys.B, keys.Dflat, keys.Fsharp, keys.Gflat],
			decorators: [decorators.natural, decorators.sharp, decorators.flat],
			shiftFrom: -12,	shiftTo: 12,
			shiftsEven: true, shiftsOdd: true
		},
		tenor_beginner1: {
			name: 'Tenor Beginner 1',
			staffs: [staffs.staff1],
			clefSets: [clefSets.tenor],
			keys: [keys.C],
			decorators: [decorators.natural],
			shiftFrom: -4,	shiftTo: 4,
			shiftsEven: true, shiftsOdd: false
		},
		tenor_beginner2: {
			name: 'Tenor Beginner 2',
			staffs: [staffs.staff1],
			clefSets: [clefSets.tenor],
			keys: [keys.C],
			decorators: [decorators.natural],
			shiftFrom: -4,	shiftTo: 4,
			shiftsEven: false, shiftsOdd: true
		},
		tenor_beginner3: {
			name: 'Tenor Beginner 3',
			staffs: [staffs.staff1],
			clefSets: [clefSets.tenor],
			keys: [keys.C],
			decorators: [decorators.natural],
			shiftFrom: -4,	shiftTo: 4,
			shiftsEven: true, shiftsOdd: true
		},
		tenor_intermediate1: {
			name: 'Tenor Intermediate 1',
			staffs: [staffs.staff1],
			clefSets: [clefSets.tenor],
			keys: [keys.C],
			decorators: [decorators.natural],
			shiftFrom: -8,	shiftTo: 8,
			shiftsEven: true, shiftsOdd: true
		},
		tenor_intermediate2: {
			name: 'Tenor Intermediate 2',
			staffs: [staffs.staff1],
			clefSets: [clefSets.tenor],
			keys: [keys.C],
			decorators: [decorators.natural],
			shiftFrom: -12,	shiftTo: 12,
			shiftsEven: true, shiftsOdd: true
		},
		tenor_advanced1: {
			name: 'Tenor Advanced 1',
			staffs: [staffs.staff1],
			clefSets: [clefSets.tenor],
			keys: [keys.C],
			decorators: [decorators.natural, decorators.sharp, decorators.flat],
			shiftFrom: -12,	shiftTo: 12,
			shiftsEven: true, shiftsOdd: true
		},
		tenor_advanced2: {
			name: 'Tenor Advanced 2',
			staffs: [staffs.staff1],
			clefSets: [clefSets.tenor],
			keys: [keys.C, keys.G, keys.F],
			decorators: [decorators.natural, decorators.sharp, decorators.flat],
			shiftFrom: -12,	shiftTo: 12,
			shiftsEven: true, shiftsOdd: true
		},
		tenor_advanced3: {
			name: 'Tenor Advanced 3',
			staffs: [staffs.staff1],
			clefSets: [clefSets.tenor],
			keys: [keys.C, keys.G, keys.F, keys.D, keys.Bflat],
			decorators: [decorators.natural, decorators.sharp, decorators.flat],
			shiftFrom: -12,	shiftTo: 12,
			shiftsEven: true, shiftsOdd: true
		},
		tenor_advanced4: {
			name: 'Tenor Advanced 4',
			staffs: [staffs.staff1],
			clefSets: [clefSets.tenor],
			keys: [keys.C, keys.G, keys.F, keys.D, keys.Bflat, keys.A, keys.Eflat],
			decorators: [decorators.natural, decorators.sharp, decorators.flat],
			shiftFrom: -12,	shiftTo: 12,
			shiftsEven: true, shiftsOdd: true
		},
		tenor_advanced5: {
			name: 'Tenor Advanced 5',
			staffs: [staffs.staff1],
			clefSets: [clefSets.tenor],
			keys: [keys.C, keys.G, keys.F, keys.D, keys.Bflat, keys.A, keys.Eflat, keys.E, keys.Aflat],
			decorators: [decorators.natural, decorators.sharp, decorators.flat],
			shiftFrom: -12,	shiftTo: 12,
			shiftsEven: true, shiftsOdd: true
		},
		tenor_advanced6: {
			name: 'Tenor Advanced 6',
			staffs: [staffs.staff1],
			clefSets: [clefSets.tenor],
			keys: [keys.C, keys.G, keys.F, keys.D, keys.Bflat, keys.A, keys.Eflat, keys.E, keys.Aflat,
			       keys.B, keys.Dflat],
			decorators: [decorators.natural, decorators.sharp, decorators.flat],
			shiftFrom: -12,	shiftTo: 12,
			shiftsEven: true, shiftsOdd: true
		},
		tenor_advanced7: {
			name: 'Tenor Advanced 7',
			staffs: [staffs.staff1],
			clefSets: [clefSets.tenor],
			keys: [keys.C, keys.G, keys.F, keys.D, keys.Bflat, keys.A, keys.Eflat, keys.E, keys.Aflat,
			       keys.B, keys.Dflat, keys.Fsharp, keys.Gflat],
			decorators: [decorators.natural, decorators.sharp, decorators.flat],
			shiftFrom: -12,	shiftTo: 12,
			shiftsEven: true, shiftsOdd: true
		}
	};
	var state = {
			level: levels.beginner1,
			noteIndex: 0,
			activeKey: null,
			activeClefSet: null,
			activeNotes: [],
			newNoteInterval: settings.newNoteInterval,
			newNoteHandler: null,
			midiMessages: []
	};
	var defaultStats = {
		averageTime: null,
		numberOfWrongAnswers: 0,
		numberOfCorrectAnswers: 0
	};
	var stats;
	var getShift = function(keyIndex){
		var base = keyIndex - 39;
		var octave = Math.floor(base / 12) * 7;
		var offset = base % 12;
		if (offset < 0)
			offset = offset + 12;
		// 0 - c -> -6
		// 1 - cis, des -> -6
		// 2 - d -> -5
		// 3 - dis, es -> -5
		// 4 - e -> -4
		// 5 - f -> -3
		// 6 - fis, ges -> -3
		// 7 - g -> -2
		// 8 - gis, aes -> -2
		// 9 - a -> -1
		// 10 - ais, bes -> -1 
		// 11 - b -> 0
		if (offset == 0 || offset == 1)
			return octave - 6;
		if (offset == 2 || offset == 3)
			return octave - 5;
		if (offset == 4)
			return octave - 4;
		if (offset == 5 || offset == 6)
			return octave - 3;
		if (offset == 7 || offset == 8)
			return octave - 2;
		if (offset == 9 || offset == 10)
			return octave - 1;
		
		return  octave;
	};
	var getSound = function(keyIndex){
		return keyIndex - 39 + 60;
	};
	var getDecorators = function(keyIndex){
		var octave = keyIndex - 39;
		var offset = octave % 12;
		if (offset < 0)
			offset = offset + 12;
		if (offset == 1 || offset == 3 || offset == 6 || offset == 8 || offset == 10)
			return [{decorator: decorators.sharp, shift: 0}, {decorator: decorators.flat, shift: 1}];
		if (offset == 5)
			return [{decorator: decorators.natural, shift: 0}, {decorator: decorators.sharp, shift: -1}];
		if (offset == 11)
			return [{decorator: decorators.natural, shift: 0}, {decorator: decorators.flat, shift: 1}];
		return [{decorator: decorators.natural, shift: 0}];
	};
	var getLine = function(keyIndex){
		var octave = keyIndex - 39;
		var offset = octave % 12;
		if (offset < 0)
			offset = offset + 12;
		
		if (offset == 0 || offset == 1)
			return 0;
		if (offset == 2 || offset == 3)
			return 1;
		if (offset == 4)
			return 2;
		if (offset == 5 || offset == 6)
			return 3;
		if (offset == 7 || offset == 8)
			return 4;
		if (offset == 9 || offset == 10)
			return 5;
		
		return  6;
	};
	var getName = function(keyIndex, decorator){
		var octave = keyIndex - 39;
		var offset = octave % 12;
		if (offset < 0)
			offset = offset + 12;
		
		if (offset == 0 && decorator == decorators.natural)
			return 'C';
		if (offset == 1)
		{
			if (decorator == decorators.sharp)
				return 'Cis';
			if (decorator == decorators.flat)
				return 'Des';
		}
		if (offset == 2  && decorator == decorators.natural)
			return 'D';
		if (offset == 3)
		{
			if (decorator == decorators.sharp)
				return 'Dis';
			if (decorator == decorators.flat)
				return 'Es';
		}
		if (offset == 4 && decorator == decorators.natural)
			return 'E';
		if (offset == 5 && decorator == decorators.natural)
			return 'F';
		if (offset == 6)
		{
			if (decorator == decorators.sharp)
				return 'Fis';
			if (decorator == decorators.flat)
				return 'Ges';
		}
		if (offset == 7 && decorator == decorators.natural)
			return 'G';
		if (offset == 8)
		{
			if (decorator == decorators.sharp)
				return 'Gis';
			if (decorator == decorators.flat)
				return 'Aes';
		}
		if (offset == 9 && decorator == decorators.natural)
			return 'A';
		if (offset == 10)
		{
			if (decorator == decorators.sharp)
				return 'Ais';
			if (decorator == decorators.flat)
				return 'Bes';
		}
		if (offset == 11 && decorator == decorators.natural)
			return 'B';
	}
	var getClefsForNote = function(noteShift){
		var availableClefs = {};
		Object.keys(clefs).forEach(function(c){
			availableClefs[c] = {shift: noteShift + clefs[c].shift};
		});
		return availableClefs;
	};
	var notes = [];
	for(var i = 0; i < settings.numberOfKeys; i++)
	{
		var shift = getShift(i);
		var sound = getSound(i);
		var decs = getDecorators(i);
		var line = getLine(i);
		decs.forEach(function(d){
			notes.push({index: i,
		    	decorator: d.decorator,
		    	sound: sound,
		    	line: line + d.shift,
		    	name: getName(i, d.decorator),
		    	clefs: getClefsForNote(shift + d.shift)});
		});
	}
	var getRandom = function(from, to){
		return Math.floor(Math.random() * (to - from + 1)) + from;
	};
	var getRandomArrayEl = function(arr){
		return arr[getRandom(0, arr.length - 1)];
	};
	var shuffleArray = function(array) {
	    for (var i = array.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = array[i];
	        array[i] = array[j];
	        array[j] = temp;
	    }
	    return array;
	};
	var getNotesForClef = function(clef, numberOfNotes){
		var availableNotes = shuffleArray(notes.filter(function(n){
			var shift = n.clefs[clef].shift;
			if (shift < state.level.shiftFrom || shift > state.level.shiftTo)
				return false;
			var isEven = shift % 2 == 0;
			if ((isEven && !state.level.shiftsEven) || (!isEven && !state.level.shiftsOdd))
				return false;
			return state.level.decorators.includes(n.decorator);
		})).slice(0, numberOfNotes);

		var selectedNotes = [];
		availableNotes.forEach(function(n){
			n = Object.assign({}, n);
			var exists = state.activeKey.lines.includes(n.line);
			if ((exists && state.activeKey.decorator == n.decorator)
				|| (!exists && n.decorator == decorators.natural))
			{
				n.decorator = decorators.none;
			}
			selectedNotes.push(n);
		});
		return selectedNotes;
	};
	var removeSymbolsSet = function(index){
		state.activeNotes[index].symbol.remove();
		state.activeNotes.splice(index, 1);
	};
	var removeAllNotes = function(){
		for (var i = state.activeNotes.length - 1; i >= 0; i--)
			removeSymbolsSet(i);
		state.noteIndex = 0;
		state.activeClefSet = null;
		state.activeKey = null;
	}
	var addSymbol = function(staffEl, note){
		note.time = 0;
		staffEl.append(note.symbol);
		setTimeout(function(){
			note.width = 100 * note.symbol.outerWidth();
			state.activeNotes.push(note);
		}, 10);
	};
	var setClefs = function(){
		var clefSet = getRandomArrayEl(state.level.clefSets);
		var key = getRandomArrayEl(state.level.keys);
		
		if (state.activeClefSet === clefSet && state.activeKey === key)
			return false;
		
		state.activeClefSet = clefSet;
		state.activeKey = key;
		
		var position = 0;
		if (state.activeNotes.length)
		{
			var lastSymbol = state.activeNotes[state.activeNotes.length - 1];
			position = lastSymbol.position + lastSymbol.width;
		}
		
		state.level.staffs.forEach(function(staff){
			staff.clef = clefSet[staff.id];
			var clef = clefs[staff.clef];
			var staffEl = $('#' + staff.id);
			var startPosition = Math.max(100 * staffEl.width(), position);
			var symbol = $('<div class="symbol clef ' + clef.id + '"></div>');
			symbol.append(symbols.clefs[staff.clef]);
			key.lines.forEach(function(l){
				var shift = clef.keys[key.decorator][l].shift;
				symbol.append($(symbols.decorators[key.decorator]).css({top: (-shift * settings.shiftSize)+'em'}));
			});
			
			addSymbol(staffEl, {type: symbolTypes.clef, symbol: symbol, position: startPosition, staff: staff.id});
		});
		
		return true;
	};
	var getNumberOfAdditionalLines = function(shift){
		if (shift > 5)
			return Math.floor((shift - 4) / 2);
		if (shift < -5)
			return Math.ceil((shift + 4) / 2);
		return 0;
	};
	var addAdditionalLines = function(symbol, numberOfAdditionalLines){
		var sign = numberOfAdditionalLines > 0 ? 1 : -1;
		for (var i = Math.abs(numberOfAdditionalLines) + 2; i >= 3; i--)
			symbol.append($(symbols.line).addClass('line').css({top: (-sign * 2 * i * settings.shiftSize)+'em'}));
	};
	var createNewNote = function(){
		state.newNoteHandler = setTimeout(createNewNote, state.newNoteInterval);
		
		if (state.activeNotes.length > 50)
			return;
		
		state.noteIndex--;
		if (state.noteIndex < 0)
			state.noteIndex = settings.notesPerClef;
		if (state.noteIndex == settings.notesPerClef && setClefs())
			return;

		var staff = getRandomArrayEl(state.level.staffs);
		var clef = clefs[staff.clef];
		var notes = getNotesForClef(staff.clef, settings.notesInSet);
		var staffEl = $('#' + staff.id);
		var startPosition = 100 * staffEl.width();
		if (state.activeNotes.length)
		{
			var lastSymbol = state.activeNotes[state.activeNotes.length - 1];
			var position = lastSymbol.position + lastSymbol.width;
			startPosition = Math.max(startPosition, position);
		}
		var symbol = $('<div class="symbol note"></div>')
		var activeNote = {type: symbolTypes.note, notes: [], symbol: symbol, position: startPosition, staff: staff.id}
		var numberOfAdditionalTopLines = 0;
		var numberOfAdditionalBottomLines = 0;
		notes.forEach(function(note){
			var shiftInClef = note.clefs[clef.id].shift;
			var numberOfAdditionalLines = getNumberOfAdditionalLines(shiftInClef);
			numberOfAdditionalTopLines = Math.max(numberOfAdditionalTopLines, numberOfAdditionalLines);
			numberOfAdditionalBottomLines = Math.min(numberOfAdditionalBottomLines, numberOfAdditionalLines);
			symbol.append($(symbols.notes[note.decorator]).css({top: (-shiftInClef * settings.shiftSize)+'em'}));
			activeNote.notes.push(note);
		});
		addAdditionalLines(symbol, numberOfAdditionalTopLines);
		addAdditionalLines(symbol, numberOfAdditionalBottomLines);
		addSymbol(staffEl, activeNote);
	};
	setInterval(function() {
		var borderLine = null;
		var staffWidth = 100 * $('#' + state.level.staffs[0].id).width();
		if (state.activeNotes.length)
		{
			var clefSymbol = state.activeNotes[0];
			borderLine = clefSymbol.position + clefSymbol.width;
		}
		var firstNote = false;
		for (var i = 0; i < state.activeNotes.length; i++)
		{
			var note = state.activeNotes[i];
			var symbol = note.symbol;
			note.time += settings.animationInterval;
			if (note.type == symbolTypes.clef)
			{
				if (!note.main)
				{
					for(var j = 0; j < i; j++)
					{
						var tmpNote = state.activeNotes[j];
						if (tmpNote.type != symbolTypes.clef
							|| note.staff != tmpNote.staff)
						{
							continue;
						}
						if (tmpNote.animate
							|| tmpNote.position + tmpNote.width < note.position)
						{
							break;
						}
					
						note.main = true;
						tmpNote.main = false;
						tmpNote.animate = true;
					}
				}
				if (note.position <= 0 && !note.animate)
					continue;
			}
			else if (note.type == symbolTypes.note && !firstNote)
			{
				firstNote = true;
				if (!note.isVisible && note.position + note.width <= staffWidth)
				{
					note.isVisible = true;
					note.playable = true;
					note.time = 0;
					note.symbol.addClass('visible');
					
					/*note.notes.forEach(function(n){
						state.midiMessages.push({command: [0x90, n.sound, 0x50]});
						state.midiMessages.push({command: [0x90, n.sound, 0x00], timeOffset: 1000});
					});*/
				}
				
			}
			note.position -= settings.animationStep;
			symbol.css({left: Math.round(note.position / 100)+'px'});
			if (note.type == symbolTypes.clef)
			{
				if (note.position < -note.width)
				{
					removeSymbolsSet(i);
					i--;
				}
			}
			else if (borderLine !== null && note.position < borderLine - note.width)
			{
				state.newNoteInterval = settings.newNoteInterval;
				removeAllNotes();
				return;				
			}
		}
	}, settings.animationInterval);

	var updateResults = function(){
		if (stats.averageTime === null)
		{
			$('#reactionTime').html('--');
			$('#accuracy').html('--');
			return;
		}
		$('#reactionTime').html((stats.averageTime / 1000).toFixed(2)+'s');
		$('#accuracy').html((100 * stats.numberOfCorrectAnswers / (stats.numberOfCorrectAnswers + stats.numberOfWrongAnswers)).toFixed(2)+'%');
	};
	var findFirstNoteIndex = function(){
		for (var i = 0; i < state.activeNotes.length; i++)
		{
			if (state.activeNotes[i].type != symbolTypes.note)
				continue;
			
			return i;
		}
		
		return null;
	};
	var noteSetActive = function(symbol, note, isActive)
	{
		if (!symbol.notes || !symbol.notes.length)
			return;
		
		var found = false;
		symbol.notes.forEach(function(n){
			if (n.sound != note)
				return;
			
			n.isActive = isActive;
			found = true;
		});
		if (!found && isActive)
		{
			stats.numberOfWrongAnswers++;
			updateResults();
		}
	};
	var noteEvent = function(note, isOn){
		var activeNoteIndex = findFirstNoteIndex();
		if (activeNoteIndex === null)
			return;
		
		var activeNote = state.activeNotes[activeNoteIndex];
		if (!activeNote.playable)
			return;
		
		noteSetActive(activeNote, note, isOn);
		if (isOn)
		{
			var notActiveNotes = activeNote.notes.filter(function(n){
				return !n.isActive;
			});
			if (notActiveNotes.length)
				return;
			
			state.newNoteInterval = (1 - settings.averageAlpha) * state.newNoteInterval + settings.averageAlpha * activeNote.time;
			if (stats.averageTime === null)
				stats.averageTime = activeNote.time;
			else
				stats.averageTime = (1 - settings.averageAlpha) * stats.averageTime + settings.averageAlpha * activeNote.time;
			stats.numberOfCorrectAnswers++;
			updateResults();

			removeSymbolsSet(activeNoteIndex);
		}
	};
	var onMIDIFailure = function(e){
	    console.log('No access to MIDI devices or your browser doesn\'t support WebMIDI API. Please use WebMIDIAPIShim ' + e);
	    
		ga('send', {
			nonInteraction: true,
			hitType: 'event',
			eventCategory: 'MIDISupport',
			eventAction: 'no'
		});
	};
	var onMIDIMessage = function(event){
	    var data = event.data;
	    var cmd = data[0] >> 4;
	    var channel = data[0] & 0xf;
	    var type = data[0] & 0xf0;
	    var note = data[1];
	    var velocity = data[2];
	    
	    if (type == 240)
	    	return;
	    
		ga('send', {
			nonInteraction: true,
			hitType: 'event',
			eventCategory: 'MIDIMessageType',
			eventAction: type
		});
	    
	    if (type == 144)
	    	noteEvent(note, velocity > 0);
	    else if (type == 128)
	    	noteEvent(note, false);
	};
	var onMIDISuccess = function(midiAccess){
		ga('send', {
			nonInteraction: true,
			hitType: 'event',
			eventCategory: 'MIDISupport',
			eventAction: 'yes'
		});
		
		for (var entry of midiAccess.inputs) {
			var input = entry[1];
			console.log( "Input port [type:'" + input.type + "'] id:'" + input.id +
		      "' manufacturer:'" + input.manufacturer + "' name:'" + input.name +
		      "' version:'" + input.version + "'" );
			
			entry[1].onmidimessage = onMIDIMessage;
			
			ga('send', {
				nonInteraction: true,
				hitType: 'event',
				eventCategory: 'MIDIDevice',
				eventAction: input.manufacturer + ' ' + input.name
			});
		}
		for (var entry of midiAccess.outputs) {
			var output = entry[1];
		    console.log( "Output port [type:'" + output.type + "'] id:'" + output.id +
		      "' manufacturer:'" + output.manufacturer + "' name:'" + output.name +
		      "' version:'" + output.version + "'" );
		}
		
		/*var output = midiAccess.outputs.get('output-1');
		setInterval(function(){
			for (var i = 0; i < state.midiMessages.length; i++)
			{
				var message = state.midiMessages[i];
				output.send(message.command, window.performance.now() + (message.timeOffset||0));
			}
			state.midiMessages = [];
		}, 100);*/
	};
	if (navigator.requestMIDIAccess)
	{
	    navigator.requestMIDIAccess({
	        sysex: false 
	    }).then(onMIDISuccess, onMIDIFailure);
	}
	else
	{
		console.log('No MIDI support in your browser');
		
		ga('send', {
			nonInteraction: true,
			hitType: 'event',
			eventCategory: 'MIDISupport',
			eventAction: 'no'
		});
	}

	var setup = function(level){
		if (state.newNoteHandler)
		{
			clearTimeout(state.newNoteHandler);
			state.newNoteHandler = null;
		}
		
		state.level = levels[level];
		state.newNoteInterval = settings.newNoteInterval;
		stats = Object.assign({}, defaultStats);
		var paddingTop = Math.max(0, state.level.shiftTo - 4) * settings.shiftSize;
		var paddingBottom = Math.max(0, -state.level.shiftFrom - 4) * settings.shiftSize;
		
		$('.staffContainer').css({'padding-top': paddingTop+'em', 'padding-bottom': paddingBottom+'em'});
		
		removeAllNotes();
		updateResults();
		createNewNote();
		
		ga('send', {
			nonInteraction: true,
			hitType: 'event',
			eventCategory: 'DifficultyLevel',
			eventAction: level
		});
	};

	Object.keys(levels).forEach(function(l){
		$('#level').append('<option value="' + l + '">' + levels[l].name + '</option>');
	});
	$('#level').change(function() {
		setup($(this).val());
	});
	setup(Object.keys(levels)[0]);
});