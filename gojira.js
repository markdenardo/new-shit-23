//gojira
//mdn 2023
 
shape(3,0.1,0.1).rotate(1,1).repeat(2,1).pixelate(100,100).out(o0)
render(o0)

s0.initVideo("https://64.media.tumblr.com/aeadd8c6abf2914b70a698c092ec3c4d/tumblr_n5gqc7rPS01qcga5ro1_500.mp4")
	src(s0).out(o1)
s1.initVideo()

src(o0).blend(o1).add(osc(1,1,1).color(1,0,0)).out(o2)

render(o2)
