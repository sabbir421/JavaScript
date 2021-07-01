function Playar  (Name,Match,Century,Fifty,Avarage,SR){
    this.name=Name;
    this.match=Match;
    this.century=Century;
    this.fifty=Fifty;
    this.avarage=Avarage;
    this.sr=SR;

    this.display=function(){
        document.write(this.name );
        document.write(this.match); 
        document.write(this.century);
        document.write(this.fifty);
        document.write(this.avarage);
        document.write(this.sr)
    
    }
}
var tamim=new Playar("tamim ",' 107 ' , '30 ','50 ','75 ',95 +"<br>");
var shakib=new Playar("shakib",107,30,50,75,95 +"<br>");
var musfiq=new Playar("musfiq",107,30,50,75,95 + "<br>");
var mahmudullah=new Playar("mahmudullah",107,30,50,75,95 +"<br>");
var imrul=new Playar("imrul",107,30,50,75,95)
tamim.display();
shakib.display();
musfiq.display();
mahmudullah.display();
imrul.display();
