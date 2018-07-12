function Walls(x,y,x1,y1,vx=0,vy=0){
  this.x=x;
  this.y=y;
  this.x1=x1;
  this.y1=y1;
  this.vx=vx;
  this.vy=vy;
  this.passou = false;
}

Walls.prototype.desenha = function(ctx)
{
  ctx.lineWidth = -1;
  ctx.fillStyle = "green";
  ctx.fillRect(this.x, this.y, this.x1, this.y1);
}

Walls.prototype.move = function(dt)
{
  this.x = this.x + this.vx*dt;
  this.y = this.y + this.vy*dt;
}
