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
				none: '<svg viewBox="-890.286 -156.776 141.013 1066.201">'
					+'<path d="M-749.273,297.072c0,21.063-10.743,39.298-32.218,54.702c-19.447,14.588-40.115,21.88-61.994,21.88'
					+'c-12.563,0-23.506-3.854-32.823-11.546c-9.324-7.704-13.979-17.628-13.979-29.785c0-21.063,10.531-39.299,31.603-54.703'
					+'c19.452-13.771,40.119-20.663,61.999-20.663C-765.077,256.957-749.273,270.329-749.273,297.072z"/>'
					+'</svg>',
				natural: '<svg viewBox="-997.866 -156.776 248.593 1066.201">'
					+'<path d="M-997.866,415.594V114.729h14.587v117.912l79.018-20.665v302.082h-15.197V396.142L-997.866,415.594z M-983.279,286.132'
					+'v71.718l63.82-16.41v-71.721L-983.279,286.132z"/>'
					+'<path d="M-749.273,297.072c0,21.063-10.743,39.298-32.218,54.702c-19.447,14.588-40.115,21.88-61.994,21.88'
					+'c-12.563,0-23.506-3.854-32.823-11.546c-9.324-7.704-13.979-17.628-13.979-29.785c0-21.063,10.531-39.299,31.603-54.703'
					+'c19.452-13.771,40.119-20.663,61.999-20.663C-765.077,256.957-749.273,270.329-749.273,297.072z"/>'
					+'</svg>',
				sharp: '<svg viewBox="-710.378 -156.776 261.357 1066.201">'
					+'<path d="M-604.01,384.593l-23.099,5.473v88.736h-14.585v-85.092l-32.215,8.511v92.385h-13.979v-88.742l-22.489,5.474v-48.625'
					+'l22.489-6.687v-67.468l-22.489,6.081v-47.411l22.489-6.076v-92.385h13.979v88.737l32.215-7.902v-91.779h14.585v88.131l23.099-4.86'
					+'v46.191l-23.099,6.685v67.468l23.099-5.469V384.593z M-641.694,345.088v-68.074l-32.215,7.901v67.464L-641.694,345.088z"/>'
					+'<path d="M-449.021,297.072c0,21.063-10.742,39.298-32.218,54.702c-19.447,14.588-40.115,21.88-61.993,21.88'
					+'c-12.564,0-23.508-3.854-32.824-11.546c-9.324-7.704-13.978-17.628-13.978-29.785c0-21.063,10.533-39.299,31.604-54.703'
					+'c19.451-13.771,40.118-20.663,61.998-20.663C-464.825,256.957-449.021,270.329-449.021,297.072z"/>'
					+'</svg>',
				flat: '<svg viewBox="-430.184 -156.776 251.018 1066.201">'
					+'<path d="M-334.151,291.601c0,16.62-12.563,36.665-37.683,60.172c-19.453,15.803-38.898,31.806-58.35,48.017V121.416h13.981v145.871'
					+'c11.338-10.124,25.527-15.194,42.546-15.194c11.749,0,21.269,3.648,28.566,10.94C-337.8,270.329-334.151,279.854-334.151,291.601z'
					+'M-368.796,292.818c0-15.396-6.484-23.1-19.448-23.1c-12.567,0-21.883,6.29-27.958,18.841v79.625'
					+'C-384.599,342.247-368.796,317.129-368.796,292.818z"/>'
					+'<path d="M-179.166,297.072c0,21.063-10.741,39.298-32.216,54.702c-19.448,14.588-40.116,21.88-61.994,21.88'
					+'c-12.565,0-23.509-3.854-32.824-11.546c-9.325-7.704-13.978-17.628-13.978-29.785c0-21.063,10.533-39.299,31.604-54.703'
					+'c19.451-13.771,40.119-20.663,61.998-20.663C-194.97,256.957-179.166,270.329-179.166,297.072z"/>'
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
	    bass: {staff1: 'bass', staff2: 'bass'}
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
		}
	};
	var state = {
			level: levels.advanced7,
			noteIndex: 0,
			activeKey: null,
			activeClefSet: null,
			activeNotes: [],
			newNoteInterval: settings.newNoteInterval,
			midiMessages: []
	};
	var stats = {
		averageTime: null,
		numberOfWrongAnswers: 0,
		numberOfCorrectAnswers: 0
	};
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
			return;
		
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
	setTimeout(function createNewNote(){
		setTimeout(createNewNote, state.newNoteInterval);
		
		if (state.activeNotes.length > 50)
			return;
		
		state.noteIndex--;
		if (state.noteIndex < 0)
			state.noteIndex = settings.notesPerClef;
		if (state.noteIndex == settings.notesPerClef)
		{
			setClefs();
			return;
		}

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
	}, state.newNoteInterval);
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
	};
	var onMIDIMessage = function(event){
	    var data = event.data;
	    var cmd = data[0] >> 4;
	    var channel = data[0] & 0xf;
	    var type = data[0] & 0xf0;
	    var note = data[1];
	    var velocity = data[2];
	    
	    if (type != 144)
	    	return;
	    
    	noteEvent(note, velocity > 0);
	};
	var onMIDISuccess = function(midiAccess){
		for (var entry of midiAccess.inputs) {
			var input = entry[1];
			console.log( "Input port [type:'" + input.type + "'] id:'" + input.id +
		      "' manufacturer:'" + input.manufacturer + "' name:'" + input.name +
		      "' version:'" + input.version + "'" );
			
			entry[1].onmidimessage = onMIDIMessage;
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
		console.log('No MIDI support in your browser');


});