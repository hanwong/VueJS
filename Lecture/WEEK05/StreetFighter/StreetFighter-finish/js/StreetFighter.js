/*! StreetFighter.js © yamoo9.net, 2017 */
(function(global, Vue){
  'use strict';

  var stages = 'ryu factory palace air'.split(' ');
  var buttons = [
    'attack',
    'special attack',
    'heal',
    'give up'
  ];
  var players = [
    'Ryu',
    'Bison',
    'Chun-li',
    'Ken'
  ];
  var randomCount = function(n){
    return Math.floor(Math.random()*n);
  };
  var randomStage = function(){
    var stage = stages[randomCount(stages.length)];
    return 'stage-' + stage;
  };
  var randomPlayer = function() {
    var index = randomCount(players.length);
    return players.splice(index, 1)[0];
  };
  var randomDamage = function(min, max) {
    return Math.max( min, randomCount(max) );
  };
  var checkWin = function(p1, p2) {
    if ( p1.HP <= 0 ) {
      this.is_finish = true;
      this.finish_message = p1.name + ' Lose...';
      p1.HP = 0;
    }
    if ( p2.HP <= 0 ) {
      this.is_finish = true;
      this.finish_message = p1.name + ' Win!';
      p2.HP = 0;
    }
  };
  var player1 = randomPlayer();
  var player2 = randomPlayer();

  new Vue({
    el: '#StreetFighter',
    data: {
      stage_class: randomStage(),
      is_start: false,
      is_finish: false,
      start_message: 'Start New Game!',
      finish_message: '',
      players: [
        {
          name: player1,
          HP: 100,
          style: 'animation: infinite-scale 2.4s infinite alternate',
          image: 'images/Character/'+player1+'.png'
        },
        {
          name: player2,
          HP: 100,
          style: 'animation: infinite-scale 2.4s infinite alternate 0.3s',
          image: 'images/Character/'+ player2 +'.png'
        },
      ],
      buttons: buttons
    },
    methods: {
      startGame: function() {
        this.is_start = true;
      },
      gameOver: function() {
        this.is_start = false;
        this.reGame();
      },
      reGame: function(){
        this.is_finish = false;
        this.players.forEach(function(player){
          player.HP = 100;
        });
      },
      detectClickButtons: function(e) {
        switch(e.target.textContent) {
          case 'attack': this.attack(); break;
          case 'special attack': this.speicalAttack(); break;
          case 'heal': this.heal(); break;
          case 'give up': this.giveUp();
        }
      },
      attack: function(booster) {
        var p1 = this.players[0];
        var p2 = this.players[1];
        p1.HP -= randomDamage(5, 10);
        p2.HP -= booster ? randomDamage(2*booster, 5*booster) : randomDamage(1, 10);
        checkWin.call(this, p1, p2);
      },
      speicalAttack: function() {
        this.attack(4);
      },
      heal: function() {
        var p1 = this.players[0];
        if ( p1.HP <= 90 ) {
          p1.HP += 10;
        } else {
          p1.HP = 100;
        }
      },
      giveUp: function() {
        this.gameOver();
      }
    },
    computed: {
      sceneClass: function(){
        return this.is_start || 'scene-blur';
      }
    }
  });

})(window, window.Vue);