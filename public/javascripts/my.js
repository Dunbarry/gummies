console.log("Drone online");


var picTest=0;
var textTest=0;
var rngT=0;
var rng=0;
var pics=[
  'http://cdn.hiconsumption.com/wp-content/uploads/2012/08/Worlds-Largest-Gummy-Bear.jpg',
  'http://media.techeblog.com/images/worldslargest_gummy_bear.jpg',
  'https://i.ytimg.com/vi/7RXmNRr8x7I/maxresdefault.jpg',
  'https://i.ytimg.com/vi/7_taTEtkj6Q/hqdefault.jpg',
  'http://i2.asntown.net/4/huge_gummy_bears_.jpg',
  'https://i.ytimg.com/vi/EyaFVhC5VPk/maxresdefault.jpg',
  'https://images.vat19.com/worlds-largest-gummy-worm/worlds-largest-gummy-worm-dirt-cake.jpg',
  'http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=4296639',
  'https://i.ytimg.com/vi/NTzw0t69dks/maxresdefault.jpg',
  'http://itsugar.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/a/party_python.png',
  'https://s-media-cache-ak0.pinimg.com/236x/5e/70/31/5e7031f14f197ea4ed7bb58f62a2dff2.jpg',
  'https://i.ytimg.com/vi/6geM4Q9pPkw/maxresdefault.jpg',
  'https://s-media-cache-ak0.pinimg.com/236x/3e/2f/70/3e2f70e5f399b83899846b90437bca1b.jpg'
]

var words=[
  "MOAR!!1!~",
  "yes Yes YESSSSS",
  "scrumptious",
  "Keep it coming.",
  "Hit me!"
]


function randomPic(){
  rng=(Math.floor(Math.random()*13))
}

function randomText(){
  rngT=(Math.floor(Math.random()*5))
}

function curtainOFF(){
  $('.curtain').removeClass('curtainClose');
}

function curtainON(){
  $('.curtain').addClass('curtainClose');
  setTimeout(curtainOFF,4100)
}

function picDelay(){
  $('#imgInsert').attr('src', ""+pics[rng]+"");
  $('#YES').text(""+words[rngT]+"")
  $('#NO').text("I was so wrong...")
}

$(document).on('click', '#YES', function(){
  curtainON();
  randomPic();
  console.log("<~~ "+picTest,rng);
  if((picTest-0)===(rng-0)){
    console.log("They Match!")
    if(rng===12){
      rng=0;
    }
    else{
      rng=rng+1;
    }
  }
  // check++;
  randomText();
  console.log(picTest,rng);
  setTimeout(picDelay,2000);
  picTest=rng;
})
