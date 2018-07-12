function Player(r,x,y,vx=0,vy=0){
  this.r=r;
  this.x=x;
  this.y=y;
  this.vx=vx;
  this.vy=vy;
}

Player.prototype.desenha = function(ctx)
{
  ctx.lineWidth = -1;
  ctx.beginPath();
  ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
  ctx.stroke();
}

Player.prototype.move = function(dt)
{
  this.x = this.x + this.vx*dt;
  this.y = this.y + this.vy*dt;
}
