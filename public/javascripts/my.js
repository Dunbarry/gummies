console.log("Drone online");

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
  'http://itsugar.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/a/party_python.png'
]

var words=[
  "MOAR!!1!~",
  "yes Yes YESSSSS",
  "scrumptious",
  "Keep it coming.",
  "Hit me!"
]

function randomPic(){
  rng=(Math.floor(Math.random()*10))
  console.log(rng)
}

function randomText(){
  rngT=(Math.floor(Math.random()*5))
  console.log(rngT)
}

$(document).on('click', '#YES', function(){
  randomPic();
  randomText();
  console.log(pics[rng])
  console.log(words[rngT])
  $('#imgInsert').attr('src', ""+pics[rng]+"");
  $('#YES').text(""+words[rngT]+"")
  $('#NO').text("I was so wrong...")
})
