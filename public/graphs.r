setwd("~/projects/rxcode/app/public/")
png(filename = "sample1.png",
    width = 2400, height = 2400, units = "px", 
    bg = "white",
    #type = c("cairo", "cairo-png", "Xlib", "quartz"),
    )

svg()


vec = seq(1.5,5,1)
my_colors = colorRampPalette(c(rgb(0,0,0,0.5),rgb(0.2,0.5,0.5,0.5), rgb(1,1,1,1)),alpha=T)( length(vec) )
curve(dweibull(x,shape = 1,scale=1),from = -1, to=10 , n=2000, axes=FALSE, xlab = NA, ylab = NA, col="white")
for (i in seq_along(vec)) {
  curve(dweibull(x, 3,vec[i],log = F), from = -1, 10 , n= 2000, add = TRUE,col=my_colors[i],lw=1)
  #print(((0.1)+(i/5)))
  print(vec[i])
}
dev.off()

