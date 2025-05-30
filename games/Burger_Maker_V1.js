/*
@title: Burger_Maker
@description: Burger Maker is a puzzle game where you play as Mr. Chef, an up-and-coming burger maker showcasing your new secret ingredient to become the best in the world. The objective is to push burger ingredients into their designated spots on a grid to create a perfect burger, maneuvering around obstacles that form a maze. Ingredients cannot be pushed into each other, adding an extra layer of challenge to the gameplay.
@author: Captain_AJ
@tags: ['puzzle']
@addedOn: 2022-12-28
*/

// Version: 1.2

// Story

/* You play as Mr. Chef!
A quickly rising burger maker.
You're becoming one best in the world!
And now, with this new secret ingredient, 
you're finally showcasing that you may be the THE best.
So get out there and assemble those burgers during the grand unveiling of:
Mr. Chef's Super Secret, Super Tasty, Sauce!
*/

//Controls

/* w - up
   s - down
   a - left
   d - right
   j - restart level
*/

//How to play

/* Push the ingredients into their proper places
(i.e. cheese into the yellow circle) to make a complete burger.
But! there are mazes to manuever around.
Ingredients can not push other ingredients.
*/

const mrchef = "m";
const logo = "l";
const bun = "b";
const patty = "p";
const background = "n";
const wall = "w";
const lettuce = "e";
const cheese = "c";
const tomato = "t";
const tomatopoint = "a";
const cheesepoint = "h";
const lettucepoint = "d";
const pattypoint = "f";
const bunpoint = "g";
const secret = "s";
const secretpoint = "k";

setLegend(
  [
    mrchef,
    bitmap`
................
.....0000000....
....0.......0...
....0.0..0..0...
....0.......0...
....0.....0.0...
....0..000..0...
....0.......0...
.....0000000....
.......222......
11.....322......
11110002220.....
.......222.0....
.......000..0...
.......0.0......
......00.00.....`, 
  ],
  [
    logo,
    bitmap`
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF`,
  ],
  [
    bun,
    bitmap`
................
................
................
................
..FFFFFFFFFFFF..
.FFFFFFFFFFFFFF.
.FFFFFFFFFFFFFF.
.FFFFFFFFFFFFFF.
.FFFFFFFFFFFFFF.
.FFFFFFFFFFFFFF.
.FFFFFFFFFFFFFF.
..FFFFFFFFFFFF..
................
................
................
................`, 
  ],
  [
    patty,
    bitmap`
................
................
....CCCCCCCC....
...CCCCCCCCCC...
..CCCCCCCCCCCC..
.CCCCCCCCCCCCCC.
.CCCCCCCCCCCCCC.
.CCCCCCCCCCCCCC.
.CCCCCCCCCCCCCC.
.CCCCCCCCCCCCCC.
.CCCCCCCCCCCCCC.
.CCCCCCCCCCCCCC.
..CCCCCCCCCCCC..
...CCCCCCCCCC...
....CCCCCCCC....
................`, 
  ],
  [
    background,
    bitmap`
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111`,
  ],
  [
    wall,
    bitmap`
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL`,
  ],
  [
    lettuce,
    bitmap`
................
................
....44444444....
..444444444444..
..444444444444..
.44444444444444.
.44444444444444.
.44444444444444.
.44444444444444.
.44444444444444.
..444444444444..
..444444444444..
....44444444....
................
................
................`,
  ],
  [
    cheese,
    bitmap`
................
................
................
................
................
..666666666666..
..666666666666..
..666666666666..
..666666666666..
..666666666666..
..666666666666..
................
................
................
................
................`,
  ],
  [
    tomato,
    bitmap`
................
................
....3333333.....
..33333333333...
..33333333333...
.3333333333333..
.3333333333333..
.3333333333333..
.3333333333333..
.3333333333333..
.3333333333333..
..33333333333...
..33333333333...
....3333333.....
................
................`,
  ],
   [
    tomatopoint,
    bitmap`
................
................
....3333333.....
..33.......33...
..3.........3...
.3...........3..
.3...........3..
.3...........3..
.3...........3..
.3...........3..
.3...........3..
..3.........3...
..33.......33...
....3333333.....
................
................`,
  ],
  [
    cheesepoint,
    bitmap`
................
................
................
................
................
..666666666666..
..6..........6..
..6..........6..
..6..........6..
..6..........6..
..666666666666..
................
................
................
................
................`,
  ],
  [
    lettucepoint,
    bitmap`
................
................
....44444444....
..44........44..
..4..........4..
.4............4.
.4............4.
.4............4.
.4............4.
.4............4.
..4..........4..
..44........44..
....44444444....
................
................
................`,
  ],
  [
    pattypoint,
    bitmap`
................
................
....CCCCCCCC....
...C........C...
..C..........C..
.C............C.
.C............C.
.C............C.
.C............C.
.C............C.
.C............C.
.C............C.
..C..........C..
...C........C...
....CCCCCCCC....
................`,
  ],
  [
    bunpoint,
    bitmap`
................
................
................
................
..FFFFFFFFFFFF..
.F............F.
.F............F.
.F............F.
.F............F.
.F............F.
.F............F.
..FFFFFFFFFFFF..
................
................
................
................`,
  ],
  [
    secret,
    bitmap`
................
.......3........
.......3........
.......3........
...111111111....
...L2222222L....
...LCCCCCCCL....
...LCCCCCCCL....
...LCCCCCCCL....
...LCCCCCCCL....
...LCCCCCCCL....
...LCCCCCCCL....
...L2222222L....
...LLLLLLLLL....
................
................`, // The Secret Sauce (Tomato Paste, Mushrooms, Sauerkraut)
  ],
  [
    secretpoint,
    bitmap`
.......3........
......3.3.......
......3.3.......
......3.3.......
...111...111....
...L.......L....
...L.......L....
...L.......L....
...L.......L....
...L.......L....
...L.......L....
...L.......L....
...L.......L....
...LLLLLLLLL....
................
................`,
  ],
);

const menu = tune`
200: f4-200,
200: f4-200,
200,
200: c4~200,
200: c4~200,
200: a4/200 + f4/200,
200: a4/200 + f4/200,
200,
200: f4-200,
200: f4-200,
200,
200: c4~200,
200: c4~200,
200: a4/200 + f4/200,
200: a4/200 + f4/200,
200,
200: a4/200,
200: b4/200,
200: c5/200,
200: d5/200,
200: d5-200 + c5-200 + c4-200,
200,
200: d5-200 + b4-200 + c4-200,
200,
200: a4/200,
200: b4/200,
200: c5/200,
200: d5/200,
200: d5-200 + c5-200 + c4-200,
200,
200: d5-200 + b4-200 + c4-200,
200`;
const theme = tune`
215.8273381294964: b4~215.8273381294964 + a4~215.8273381294964,
215.8273381294964: a4~215.8273381294964,
215.8273381294964,
215.8273381294964: b4~215.8273381294964 + a4~215.8273381294964,
215.8273381294964: a4~215.8273381294964,
215.8273381294964,
215.8273381294964: d5-215.8273381294964,
215.8273381294964: d5-215.8273381294964,
215.8273381294964: b4~215.8273381294964 + a4~215.8273381294964,
215.8273381294964: a4~215.8273381294964,
215.8273381294964,
215.8273381294964: b4~215.8273381294964 + a4~215.8273381294964,
215.8273381294964: a4~215.8273381294964,
215.8273381294964,
215.8273381294964: d5-215.8273381294964,
215.8273381294964: d5-215.8273381294964,
431.6546762589928,
215.8273381294964: g4^215.8273381294964 + d4~215.8273381294964 + c4~215.8273381294964,
215.8273381294964: g4^215.8273381294964 + c4~215.8273381294964,
215.8273381294964,
215.8273381294964: f4^215.8273381294964 + b4-215.8273381294964,
215.8273381294964: d4~215.8273381294964 + c4~215.8273381294964,
215.8273381294964: c4~215.8273381294964,
431.6546762589928,
215.8273381294964: d4~215.8273381294964 + c4~215.8273381294964,
215.8273381294964: c4~215.8273381294964,
215.8273381294964,
215.8273381294964: d4~215.8273381294964 + c4~215.8273381294964,
215.8273381294964: c4~215.8273381294964,
215.8273381294964`;
const walk = tune`
107.9136690647482: g5~107.9136690647482,
107.9136690647482: g5~107.9136690647482,
3237.410071942446`;
const playback = playTune(menu, Infinity);

setSolids([mrchef, bun, patty, lettuce, tomato, cheese, wall, secret]);

let level = 0;
const levels = [
  map`
...............................................
......llll...l...l..llll...lll...lllll..llll...
......l...l..l...l..l...l.l...l..l......l...l..
......l...l..l...l..l...l.l......l......l...l..
......llll...l...l..llll..l......llll...llll...
......l...l..l...l..l.l...l.lll..l......l.l....
......l...l..l...l..l..l..l...l..l......l..l...
......llll....lll...l...l..lll...lllll..l...l..
...............................................
...............................................
......l...l...lll...l...l.lllll..llll..........
......ll.ll..l...l..l..l..l......l...l.........
......l.l.l..l...l..l.l...l......l...l.........
......l.l.l..lllll..ll....llll...llll..........
......l...l..l...l..l.l...l......l.l...........
......l...l..l...l..l..l..l......l..l..........
......l...l..l...l..l...l.lllll..l...l.........
...............................................
...............................................
...............................................
...............................................
...............................................
...............................................
...............................................
...............................................
...............................................
...............................................`, //menu screen
  map`
...................................................................
...................................................................
...................................................................
...................................................................
...................................................................
...................................................................
...................................................................
...................................................................
...................................................................
...................................................................
...................................................................
...................................................................
...................................................................
...................................................................
...................................................................
...................................................................
...................................................................
...................................................................
...................................................................
...................................................................
...................................................................
...................................................................
...................................................................
...................................................................
...................................................................
...................................................................
...................................................................
...................................................................
...................................................................
...................................................................
...................................................................
...................................................................
...................................................................
...................................................................
...................................................................
...................................................................
...................................................................`, // text
  map`
...............
...............
...............
...............
...............
...............
...............
...............
...............`, // text
  map`
...............
...............
...............
...............
...............
...............
...............
...............
...............`, // text
  map`
...............
...............
...............
...............
...............
...............
...............
...............
...............`, // text
  map`
...............
...............
...............
...............
...............
...............
...............
...............
...............`, // text
  map`
...............
...............
...............
...............
...............
...............
...............
...............
...............`, // text
  map`
...............
...............
...............
...............
...............
...............
...............
...............
...............`, // text
  map`
...............
...............
...............
...............
...............
...............
...............
...............
...............`, // text  
  map`
........w....
.........c.p.
..m...g.wwww.
......h......
.bw...k......
......f...w..
ww..wwgww.www
......s...b..
....w...w....`, // level1 (map9)
  map`
ww..bg.w...
.....h.w.c.
.pws.k.w...
..w..f..b..
..wm.g...ww`, // level2
  map`
.wwwww..g..wwwww.
......m.d........
..wwww..h..wwww..
..c.....k..e...s.
.pwwww..f..wwww..
..b.....g......b.
.wwwww.....wwwww.`, // level3
  map`
....wwwww......
...w......w....
w.w....g..w..b.
.....w.d.....w.
...w..mh...w.e.
..cw...k..w..w.
...w...f.......
.wsw...gw.www.w
.w.....p..w..b.
...www.ww......`, // level4
  map`
....w..w.........
ww.........ww.w..
.e......ww.b.....
..w..w...ww....wg
....w.....w.w...h
....w.s...w.w...a
..p.w.......ww.wd
w...www.........k
ww..........w...f
...ww..........wg
.t........w.....b
m.....wc..w..w...
..www...w..w.ww..`, // level5
  map`
.....ww.www......m.....ww........
.....p.........wwww..w.....ww....
w..www.......w..w..ww.......w..w.
....w....w.....ww..ww..s....t....
....w....................w.w.w...
.w.w...w.w...w...gw..w...w.w.....
.w.....w....w....d...ww.w..ww..w.
........w........k....w....w.....
......w.........wf..........b....
..www...w.w...w..f..w....w.w.....
....c...w.w......h..w......w.....
..w.cw.........w.hw.........w....
.........w.......a.....w....w....
w..w.............g..w..w...w.....
...w........w...w......w......w..
...w...w........w........w....w..
...w....w...........w.........w..
.w.........w.......w......e..w...
.w...p......w...w..w.w.....w.w...
....w.w.w.....w..w.w.b...www.....
..www.www.w.w................w...`, // level6
  map`
.w..wgm.w..
.w..ek.b...
..w..aw.wp.
.t...d.....
....wf.sc..
.w.b.h...ww
.w.w.gw.ww.`, // level7
  map`
bbbbbbbbbeeeeeeettttttccccccssssssppppppppp
...........................................
...........................................
...........................................
...........................................
...........................................
...........................................
...........................................
...........................................
l...l...lll...l...l....l...l..l..l...l..l..
l...l..l...l..l...l....l...l..l..l...l..l..
.l.l...l...l..l...l....l...l..l..ll..l..l..
..l....l...l..l...l....l.l.l..l..l.l.l..l..
..l....l...l..l...l....l.l.l..l..l..ll..l..
..l....l...l..l...l....l.l.l..l..l...l.....
..l.....lll....lll......l.l...l..l...l..l..
...........................................
...........................................
...........................................
...........................................
...........................................
...........................................
...........................................
...........................................
...........................................
wwwwwwwwwwwwwwwwwwwwmwwwwwwwwwwwwwwwwwwwwww`, // win screen
];

const currentLevel = levels[level];
setMap(currentLevel);

setMap(levels[level]);
addText("Press i", { x: 7, y: 11, color: color`0` });
//setBackground(background);

  if (level >= 9) {
   clearText();
  }

onInput("i", () => {
  clearText();
 
if (level == 0) {
   
  } 
   if (level == 1) {
    addText("You play as", { x: 1, y: 3, color: color`C` });
    addText("Mr. Chef, an up and", { x: 1, y: 6, color: color`C` });
    addText("coming burger chef.", { x: 1, y: 9, color: color`C` });
  } else if (level == 2) {
    addText("You're becoming one", { x: 1, y: 3, color: color`C` });
    addText("of the best", { x: 1, y: 6, color: color`C` });
    addText("in the world!", { x: 1, y: 9, color: color`C` });
  } else if (level == 3) {
    addText("And now, with", { x: 1, y: 3, color: color`C` });
    addText("this new secret ", { x: 1, y: 6, color: color`C` });
    addText("ingredient, ", { x: 1, y: 9, color: color`C` });
     
  } else if (level == 4) {
    addText("you're quickly", { x: 1, y: 3, color: color`C` });
     addText("showcasing you may", { x: 1, y: 6, color: color`C` });
     addText("be the THE best.", { x: 1, y: 9, color: color`C` });
  } else if (level == 5) {
    addText("So get out", { x: 1, y: 3, color: color`C` });
     addText("there and", { x: 1, y: 6, color: color`C` });
     addText("assemble those...", { x: 1, y: 9, color: color`C` });
  } else if (level == 6) {
    addText("burgers during", { x: 1, y: 3, color: color`C` });
     addText("the grand", { x: 1, y: 6, color: color`C` });
     addText("unveiling of:", { x: 1, y: 9, color: color`C` });
  } else if (level == 7) {
    addText("Mr. Chef's", { x: 1, y: 3, color: color`C` });
     addText("Super Secret,", { x: 1, y: 6, color: color`C` });
     addText("Super Tasty...", { x: 1, y: 9, color: color`C` });
     addText("Sauce! - MCSSSTS :)", { x: 1, y: 12, color: color`C` });
     
  }

  if (level <= 8) {
    level++;
    setMap(levels[level]);
  }
  
});

 if(level >= 9){
      clearText();
    }

setPushables({
  [mrchef]: [bun, patty, lettuce, tomato, cheese, secret],
});

onInput("s", () => {
  if(!getFirst(mrchef)) return;
  getFirst(mrchef).y += 1;
    playTune(walk);
});

onInput("w", () => {
  if(!getFirst(mrchef)) return;
  getFirst(mrchef).y -= 1;
    playTune(walk);
});

onInput("a", () => {
  if(!getFirst(mrchef)) return;
  getFirst(mrchef).x -= 1;
    playTune(walk);
});

onInput("d", () => {
  if(!getFirst(mrchef)) return;
  getFirst(mrchef).x += 1;
    playTune(walk);
});


onInput("j", () => {
  const currentLevel = levels[level];
  if (currentLevel !== undefined) {
    clearText();
    setMap(currentLevel);
  }
});

// const burgerComplete = tilesWith.length (cheese, cheesepoint) && tilesWith.length (bun, bunpoint) && tilesWith.length (lettuce, lettucepoint) && tilesWith.length (patty, pattypoint) && tilesWith.length (secret, secretpoint) && tilesWith.length (tomato, tomato);

afterInput(() => {
  const numberCoveredBun = tilesWith(bunpoint, bun).length;
  const targetNumberBun = tilesWith(bunpoint).length;

  const numberCoveredPatty = tilesWith(pattypoint, patty).length;
  const targetNumberPatty = tilesWith(pattypoint).length;

  const numberCoveredSecret = tilesWith(secretpoint, secret).length;
  const targetNumberSecret = tilesWith(secretpoint).length;

  const numberCoveredTomato = tilesWith(tomatopoint, tomato).length;
  const targetNumberTomato = tilesWith(tomatopoint).length;

  const numberCoveredCheese = tilesWith(cheesepoint, cheese).length;
  const targetNumberCheese = tilesWith(cheesepoint).length;

  const numberCoveredLettuce = tilesWith(lettucepoint, lettuce).length;
  const targetNumberLettuce = tilesWith(lettucepoint).length;

  var isBun = numberCoveredBun === targetNumberBun;
  var isPatty = numberCoveredPatty === targetNumberPatty;
  var isSecret = numberCoveredSecret === targetNumberSecret;
  var isTomato = numberCoveredTomato === targetNumberTomato;
  var isCheese = numberCoveredCheese === targetNumberCheese;
  var isLettuce = numberCoveredLettuce === targetNumberLettuce;
  var isBurgerReady = isBun && isPatty && isSecret && isCheese && isLettuce && isTomato;
  
  // const numberCovered = tilesWith(goal, box).length;
  //const targetNumber = tilesWith(goal).length;

  
  if ((level >= 9) && (level <= 15) && isBurgerReady) {
    level++;
    setMap(levels[level]);
    clearText()

  }

  
});
