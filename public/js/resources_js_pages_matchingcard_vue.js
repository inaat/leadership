"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_matchingcard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/matchingcard.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/matchingcard.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AudioController = /*#__PURE__*/function () {
  function AudioController() {
    _classCallCheck(this, AudioController);

    this.bgMusic = new Audio('../../Assets/Audio/creepy.mp3');
    this.flipSound = new Audio('../../Assets/Audio/flip.wav');
    this.matchSound = new Audio('../../Assets/Audio/match.wav');
    this.victorySound = new Audio('../../Assets/Audio/victory.wav');
    this.gameOverSound = new Audio('../../Assets/Audio/gameOver.wav');
    this.bgMusic.volume = 0.5;
    this.bgMusic.loop = true;
  }

  _createClass(AudioController, [{
    key: "startMusic",
    value: function startMusic() {// this.bgMusic.play();
    }
  }, {
    key: "stopMusic",
    value: function stopMusic() {
      // this.bgMusic.pause();
      this.bgMusic.currentTime = 0;
    }
  }, {
    key: "flip",
    value: function flip() {// this.flipSound.play();
    }
  }, {
    key: "match",
    value: function match() {// this.matchSound.play();
    }
  }, {
    key: "victory",
    value: function victory() {
      this.stopMusic(); // this.victorySound.play();
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      this.stopMusic(); // this.gameOverSound.play();
    }
  }]);

  return AudioController;
}();

var MixOrMatch = /*#__PURE__*/function () {
  function MixOrMatch(totalTime, cards) {
    _classCallCheck(this, MixOrMatch);

    this.cardsArray = cards;
    this.totalTime = totalTime;
    this.timeRemaining = totalTime;
    this.timer = document.getElementById('time-remaining');
    this.ticker = document.getElementById('flips');
    this.audioController = new AudioController();
  }

  _createClass(MixOrMatch, [{
    key: "startGame",
    value: function startGame() {
      var _this = this;

      this.totalClicks = 0;
      this.timeRemaining = this.totalTime;
      this.cardToCheck = null;
      this.matchedCards = [];
      this.busy = true;
      setTimeout(function () {
        _this.audioController.startMusic();

        _this.shuffleCards(_this.cardsArray);

        _this.countdown = _this.startCountdown();
        _this.busy = false;
      }, 500);
      this.hideCards();
      this.timer.innerText = this.timeRemaining;
      this.ticker.innerText = this.totalClicks;
    }
  }, {
    key: "startCountdown",
    value: function startCountdown() {
      var _this2 = this;

      return setInterval(function () {
        _this2.timeRemaining--;
        _this2.timer.innerText = _this2.timeRemaining;
        if (_this2.timeRemaining === 0) _this2.gameOver();
      }, 1000);
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      clearInterval(this.countdown);
      this.audioController.gameOver();
      document.getElementById('game-over-text').classList.add('visible');
    }
  }, {
    key: "victory",
    value: function victory() {
      clearInterval(this.countdown);
      this.audioController.victory();
      document.getElementById('victory-text').classList.add('visible');
    }
  }, {
    key: "hideCards",
    value: function hideCards() {
      this.cardsArray.forEach(function (card) {
        card.classList.remove('visible');
        card.classList.remove('matched');
      });
    }
  }, {
    key: "flipCard",
    value: function flipCard(card) {
      if (this.canFlipCard(card)) {
        this.audioController.flip();
        this.totalClicks++;
        this.ticker.innerText = this.totalClicks;
        card.classList.add('visible');

        if (this.cardToCheck) {
          this.checkForCardMatch(card);
        } else {
          this.cardToCheck = card;
        }
      }
    }
  }, {
    key: "checkForCardMatch",
    value: function checkForCardMatch(card) {
      if (this.getCardType(card) === this.getCardType(this.cardToCheck)) this.cardMatch(card, this.cardToCheck);else this.cardMismatch(card, this.cardToCheck);
      this.cardToCheck = null;
    }
  }, {
    key: "cardMatch",
    value: function cardMatch(card1, card2) {
      this.matchedCards.push(card1);
      this.matchedCards.push(card2);
      card1.classList.add('matched');
      card2.classList.add('matched');
      this.audioController.match();
      if (this.matchedCards.length === this.cardsArray.length) this.victory();
    }
  }, {
    key: "cardMismatch",
    value: function cardMismatch(card1, card2) {
      var _this3 = this;

      this.busy = true;
      setTimeout(function () {
        card1.classList.remove('visible');
        card2.classList.remove('visible');
        _this3.busy = false;
      }, 1000);
    }
  }, {
    key: "shuffleCards",
    value: function shuffleCards(cardsArray) {
      // Fisher-Yates Shuffle Algorithm.
      for (var i = cardsArray.length - 1; i > 0; i--) {
        var randIndex = Math.floor(Math.random() * (i + 1));
        cardsArray[randIndex].style.order = i;
        cardsArray[i].style.order = randIndex;
      }
    }
  }, {
    key: "getCardType",
    value: function getCardType(card) {
      return card.getElementsByClassName('card-value')[0].src;
    }
  }, {
    key: "canFlipCard",
    value: function canFlipCard(card) {
      return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
    }
  }]);

  return MixOrMatch;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  data: function data() {
    return {
      form: {},
      success: null,
      error: null
    };
  },
  methods: {
    start_game_click: function start_game_click(event) {
      var overlays = Array.from(document.getElementsByClassName('overlay-text'));
      var cards = Array.from(document.getElementsByClassName('card'));
      var game = new MixOrMatch(100, cards);
      overlays.forEach(function (overlay) {
        overlay.addEventListener('click', function () {
          overlay.classList.remove('visible');
          game.startGame();
        });
      });
      cards.forEach(function (card) {
        card.addEventListener('click', function () {
          game.flipCard(card);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/matchingcard.vue?vue&type=template&id=efe79014&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/matchingcard.vue?vue&type=template&id=efe79014&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Assets/Images/Cobweb.png */ "./resources/Assets/Images/Cobweb.png");
/* harmony import */ var _Assets_Images_Spider_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Assets/Images/Spider.png */ "./resources/Assets/Images/Spider.png");
/* harmony import */ var _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Assets/Images/CobwebGrey.png */ "./resources/Assets/Images/CobwebGrey.png");
/* harmony import */ var _Assets_Images_Bat_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Assets/Images/Bat.png */ "./resources/Assets/Images/Bat.png");
/* harmony import */ var _Assets_Images_Bones_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Assets/Images/Bones.png */ "./resources/Assets/Images/Bones.png");
/* harmony import */ var _Assets_Images_Cauldron_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Assets/Images/Cauldron.png */ "./resources/Assets/Images/Cauldron.png");
/* harmony import */ var _Assets_Images_Eye_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Assets/Images/Eye.png */ "./resources/Assets/Images/Eye.png");
/* harmony import */ var _Assets_Images_Skull_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Assets/Images/Skull.png */ "./resources/Assets/Images/Skull.png");
/* harmony import */ var _Assets_Images_Pumpkin_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Assets/Images/Pumpkin.png */ "./resources/Assets/Images/Pumpkin.png");
/* harmony import */ var _Assets_Images_Ghost_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Assets/Images/Ghost.png */ "./resources/Assets/Images/Ghost.png");
/* harmony import */ var _Assets_Images_Dracula_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Assets/Images/Dracula.png */ "./resources/Assets/Images/Dracula.png");













var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-efe79014"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "game-ground"
};

var _hoisted_2 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "page-title"
  }, "Mix-Or-Match", -1
  /* HOISTED */
  );
});

var _hoisted_3 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    id: "game-over-text",
    "class": "overlay-text"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" GAME OVER "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "overlay-text-small"
  }, "Click to Restart")], -1
  /* HOISTED */
  );
});

var _hoisted_4 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    id: "victory-text",
    "class": "overlay-text"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" VICTORY "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "overlay-text-small"
  }, "Click to Restart")], -1
  /* HOISTED */
  );
});

var _hoisted_5 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "game-container"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "game-info-container"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "game-info"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Time "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    id: "time-remaining"
  }, "100")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "game-info"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Flips "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    id: "flips"
  }, "0")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-back card-face"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-left",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-right",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-left",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-right",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "spider",
    src: _Assets_Images_Spider_png__WEBPACK_IMPORTED_MODULE_2__["default"]
  })]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-front card-face"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-left",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-right",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-left",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-right",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "card-value",
    src: _Assets_Images_Bat_png__WEBPACK_IMPORTED_MODULE_4__["default"]
  })])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-back card-face"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-left",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-right",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-left",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-right",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "spider",
    src: _Assets_Images_Spider_png__WEBPACK_IMPORTED_MODULE_2__["default"]
  })]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-front card-face"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-left",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-right",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-left",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-right",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "card-value",
    src: _Assets_Images_Bat_png__WEBPACK_IMPORTED_MODULE_4__["default"]
  })])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-back card-face"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-left",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-right",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-left",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-right",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "spider",
    src: _Assets_Images_Spider_png__WEBPACK_IMPORTED_MODULE_2__["default"]
  })]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-front card-face"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-left",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-right",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-left",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-right",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "card-value",
    src: _Assets_Images_Bones_png__WEBPACK_IMPORTED_MODULE_5__["default"]
  })])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-back card-face"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-left",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-right",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-left",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-right",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "spider",
    src: _Assets_Images_Spider_png__WEBPACK_IMPORTED_MODULE_2__["default"]
  })]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-front card-face"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-left",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-right",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-left",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-right",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "card-value",
    src: _Assets_Images_Bones_png__WEBPACK_IMPORTED_MODULE_5__["default"]
  })])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-back card-face"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-left",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-right",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-left",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-right",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "spider",
    src: _Assets_Images_Spider_png__WEBPACK_IMPORTED_MODULE_2__["default"]
  })]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-front card-face"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-left",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-right",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-left",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-right",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "card-value",
    src: _Assets_Images_Cauldron_png__WEBPACK_IMPORTED_MODULE_6__["default"]
  })])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-back card-face"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-left",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-right",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-left",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-right",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "spider",
    src: _Assets_Images_Spider_png__WEBPACK_IMPORTED_MODULE_2__["default"]
  })]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-front card-face"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-left",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-right",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-left",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-right",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "card-value",
    src: _Assets_Images_Cauldron_png__WEBPACK_IMPORTED_MODULE_6__["default"]
  })])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-back card-face"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-left",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-right",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-left",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-right",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "spider",
    src: _Assets_Images_Spider_png__WEBPACK_IMPORTED_MODULE_2__["default"]
  })]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-front card-face"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-left",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-right",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-left",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-right",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "card-value",
    src: _Assets_Images_Eye_png__WEBPACK_IMPORTED_MODULE_7__["default"]
  })])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-back card-face"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-left",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-right",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-left",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-right",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "spider",
    src: _Assets_Images_Spider_png__WEBPACK_IMPORTED_MODULE_2__["default"]
  })]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-front card-face"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-left",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-right",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-left",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-right",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "card-value",
    src: _Assets_Images_Eye_png__WEBPACK_IMPORTED_MODULE_7__["default"]
  })])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-back card-face"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-left",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-right",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-left",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-right",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "spider",
    src: _Assets_Images_Spider_png__WEBPACK_IMPORTED_MODULE_2__["default"]
  })]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-front card-face"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-left",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-right",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-left",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-right",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "card-value",
    src: _Assets_Images_Skull_png__WEBPACK_IMPORTED_MODULE_8__["default"]
  })])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-back card-face"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-left",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-right",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-left",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-right",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "spider",
    src: _Assets_Images_Spider_png__WEBPACK_IMPORTED_MODULE_2__["default"]
  })]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-front card-face"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-left",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-right",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-left",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-right",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "card-value",
    src: _Assets_Images_Skull_png__WEBPACK_IMPORTED_MODULE_8__["default"]
  })])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-back card-face"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-left",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-right",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-left",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-right",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "spider",
    src: _Assets_Images_Spider_png__WEBPACK_IMPORTED_MODULE_2__["default"]
  })]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-front card-face"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-left",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-right",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-left",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-right",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "card-value",
    src: _Assets_Images_Pumpkin_png__WEBPACK_IMPORTED_MODULE_9__["default"]
  })])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-back card-face"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-left",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-right",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-left",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-right",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "spider",
    src: _Assets_Images_Spider_png__WEBPACK_IMPORTED_MODULE_2__["default"]
  })]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-front card-face"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-left",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-right",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-left",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-right",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "card-value",
    src: _Assets_Images_Pumpkin_png__WEBPACK_IMPORTED_MODULE_9__["default"]
  })])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-back card-face"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-left",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-right",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-left",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-right",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "spider",
    src: _Assets_Images_Spider_png__WEBPACK_IMPORTED_MODULE_2__["default"]
  })]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-front card-face"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-left",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-right",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-left",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-right",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "card-value",
    src: _Assets_Images_Ghost_png__WEBPACK_IMPORTED_MODULE_10__["default"]
  })])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-back card-face"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-left",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-right",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-left",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-right",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "spider",
    src: _Assets_Images_Spider_png__WEBPACK_IMPORTED_MODULE_2__["default"]
  })]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-front card-face"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-left",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-right",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-left",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-right",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "card-value",
    src: _Assets_Images_Ghost_png__WEBPACK_IMPORTED_MODULE_10__["default"]
  })])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-back card-face"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-left",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-right",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-left",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-right",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "spider",
    src: _Assets_Images_Spider_png__WEBPACK_IMPORTED_MODULE_2__["default"]
  })]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-front card-face"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-left",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-right",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-left",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-right",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "card-value",
    src: _Assets_Images_Dracula_png__WEBPACK_IMPORTED_MODULE_11__["default"]
  })])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-back card-face"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-left",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-right",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-left",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-right",
    src: _Assets_Images_Cobweb_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "spider",
    src: _Assets_Images_Spider_png__WEBPACK_IMPORTED_MODULE_2__["default"]
  })]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-front card-face"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-left",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-top-right",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-left",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "cob-web cob-web-bottom-right",
    src: _Assets_Images_CobwebGrey_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "card-value",
    src: _Assets_Images_Dracula_png__WEBPACK_IMPORTED_MODULE_11__["default"]
  })])])], -1
  /* HOISTED */
  );
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "overlay-text visible",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.start_game_click && $options.start_game_click.apply($options, arguments);
    })
  }, " Click to Start "), _hoisted_3, _hoisted_4, _hoisted_5]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/matchingcard.vue?vue&type=style&index=0&id=efe79014&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/matchingcard.vue?vue&type=style&index=0&id=efe79014&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Assets_Fonts_Creepy_woff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Assets/Fonts/Creepy.woff */ "./resources/Assets/Fonts/Creepy.woff");
/* harmony import */ var _Assets_Fonts_Creepy_woff2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Assets/Fonts/Creepy.woff2 */ "./resources/Assets/Fonts/Creepy.woff2");
/* harmony import */ var _Assets_Fonts_Lunacy_woff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Assets/Fonts/Lunacy.woff */ "./resources/Assets/Fonts/Lunacy.woff");
/* harmony import */ var _Assets_Fonts_Lunacy_woff2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Assets/Fonts/Lunacy.woff2 */ "./resources/Assets/Fonts/Lunacy.woff2");
/* harmony import */ var _Assets_Cursors_Ghost_cur__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Assets/Cursors/Ghost.cur */ "./resources/Assets/Cursors/Ghost.cur");
/* harmony import */ var _Assets_Cursors_GhostHover_cur__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Assets/Cursors/GhostHover.cur */ "./resources/Assets/Cursors/GhostHover.cur");
// Imports








var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Assets_Fonts_Creepy_woff__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Assets_Fonts_Creepy_woff2__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Assets_Fonts_Lunacy_woff__WEBPACK_IMPORTED_MODULE_4__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Assets_Fonts_Lunacy_woff2__WEBPACK_IMPORTED_MODULE_5__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Assets_Cursors_Ghost_cur__WEBPACK_IMPORTED_MODULE_6__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Assets_Cursors_GhostHover_cur__WEBPACK_IMPORTED_MODULE_7__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n@font-face {\r\n    font-family: \"Creepy\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff\"),\r\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff2\");\n}\n@font-face {\r\n    font-family: \"Lunacy\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff\"),\r\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff2\");\n}\n.game-ground[data-v-efe79014] {\r\n      box-sizing: border-box;\r\n  min-height: 100vh;\r\n  cursor: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + "), auto;\r\n  font-family: Lunacy;\r\n  margin: 0;\r\n  background: radial-gradient(#9D5900, #3D2200);\n}\n.page-title[data-v-efe79014] {\r\n  color: #FF6D00;\r\n  font-family: Creepy, serif;\r\n  font-weight: normal;\r\n  text-align: center;\r\n  font-size: 6em;\n}\n.game-info-container[data-v-efe79014] {\r\n  grid-column: 1 / -1;\r\n  display: flex;\r\n  justify-content: space-between;\n}\n.game-info[data-v-efe79014] {\r\n  color: #FFBB89;\r\n  font-size: 4em;\n}\n.game-container[data-v-efe79014] {\r\n  margin: 50px auto;\r\n  display: grid;\r\n  grid-template-columns: repeat(4, auto);\r\n  grid-gap: 10px;\r\n  justify-content: center;\r\n  perspective: 500px;\n}\n.card[data-v-efe79014] {\r\n  position: relative;\r\n  cursor: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + "), auto;\r\n  height: 175px;\r\n  width: 125px;\n}\n.card-face[data-v-efe79014] {\r\n  position: absolute;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 12px;\r\n  border-width: 1px;\r\n  border-style: solid;\r\n  overflow: hidden;\r\n  transition: transform 500ms ease-in-out;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\n}\n.card.visible .card-back[data-v-efe79014] {\r\n  transform: rotateY(-180deg);\n}\n.card.visible .card-front[data-v-efe79014] {\r\n  transform: rotateY(0);\n}\n.card.matched .card-front .card-value[data-v-efe79014] {\r\n  -webkit-animation: dance-efe79014 1s linear infinite 500ms;\r\n          animation: dance-efe79014 1s linear infinite 500ms;\n}\n.card-back[data-v-efe79014] {\r\n  background-color: black;\r\n  border-color: #FF6D00;\r\n  transform: rotateY(0);\n}\n.cob-web[data-v-efe79014] {\r\n  position: absolute;\r\n  transition: width 100ms ease-in-out, height 100ms ease-in-out;\r\n  width: 47px;\r\n  height: 47px;\n}\n.card-face:hover .cob-web[data-v-efe79014] {\r\n  width: 52px;\r\n  height: 52px;\n}\n.cob-web-top-left[data-v-efe79014] {\r\n  transform: rotate(270deg);\r\n  top: 0;\r\n  left: 0;\n}\n.cob-web-top-right[data-v-efe79014] {\r\n  top: 0;\r\n  right: 0;\n}\n.cob-web-bottom-left[data-v-efe79014] {\r\n  transform: rotate(180deg);\r\n  bottom: 0;\r\n  left: 0;\n}\n.cob-web-bottom-right[data-v-efe79014] {\r\n  transform: rotate(90deg);\r\n  bottom: 0;\r\n  right: 0;\n}\n.spider[data-v-efe79014] {\r\n  align-self: flex-start;\r\n  transition: transform 100ms ease-in-out;\r\n  transform: translateY(-10px);\n}\n.card-back:hover .spider[data-v-efe79014] {\r\n  transform: translateY(0);\n}\n.card-value[data-v-efe79014] {\r\n  position: relative;\r\n  transition: transform 100ms ease-in-out;\r\n  transform: scale(.9);\n}\n.card-front:hover .card-value[data-v-efe79014] {\r\n  transform: scale(1);\n}\n.card-front[data-v-efe79014] {\r\n  background-color: #FFBB89;\r\n  border-color: #333;\r\n  transform: rotateY(180deg);\n}\n.overlay-text[data-v-efe79014] {\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  z-index: 100;\r\n  display: none;\r\n  position: fixed;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  color: #FF6D00;\r\n  font-family: Creepy, serif;\r\n  transition: background-color 500ms, font-size 500ms;\n}\n.overlay-text-small[data-v-efe79014] {\r\n  font-size: .3em;\n}\n.overlay-text.visible[data-v-efe79014] {\r\n  display: flex;\r\n  -webkit-animation: overlay-grow-efe79014 500ms forwards;\r\n          animation: overlay-grow-efe79014 500ms forwards;\n}\n@-webkit-keyframes dance-efe79014 {\n0%, 100% {\r\n    transform: rotate(0)\n}\n25% {\r\n    transform: rotate(-30deg)\n}\n75% {\r\n    transform: rotate(30deg)\n}\n}\n@keyframes dance-efe79014 {\n0%, 100% {\r\n    transform: rotate(0)\n}\n25% {\r\n    transform: rotate(-30deg)\n}\n75% {\r\n    transform: rotate(30deg)\n}\n}\n@-webkit-keyframes overlay-grow-efe79014 {\nfrom {\r\n    background-color: rgba(0, 0, 0, 0);\r\n    font-size: 0;\n}\nto {\r\n    background-color: rgba(0, 0, 0, .8);\r\n    font-size: 10em;\n}\n}\n@keyframes overlay-grow-efe79014 {\nfrom {\r\n    background-color: rgba(0, 0, 0, 0);\r\n    font-size: 0;\n}\nto {\r\n    background-color: rgba(0, 0, 0, .8);\r\n    font-size: 10em;\n}\n}\n@media (max-width: 600px) {\n.game-container[data-v-efe79014] {\r\n    grid-template-columns: repeat(2, auto)\n}\n.game-info-container[data-v-efe79014] {\r\n    flex-direction: column;\r\n    align-items: center;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/Assets/Images/Bat.png":
/*!*****************************************!*\
  !*** ./resources/Assets/Images/Bat.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/Bat.png?e413f4b9c915c0e82d62cf96d47bd8c8");

/***/ }),

/***/ "./resources/Assets/Images/Bones.png":
/*!*******************************************!*\
  !*** ./resources/Assets/Images/Bones.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/Bones.png?a36eaf2d2752a83f40d8b67843ffdb48");

/***/ }),

/***/ "./resources/Assets/Images/Cauldron.png":
/*!**********************************************!*\
  !*** ./resources/Assets/Images/Cauldron.png ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/Cauldron.png?687f5edb83405763fe5638cff5aa8714");

/***/ }),

/***/ "./resources/Assets/Images/Cobweb.png":
/*!********************************************!*\
  !*** ./resources/Assets/Images/Cobweb.png ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/Cobweb.png?d4c786269d698b0458f2da4f0507eaae");

/***/ }),

/***/ "./resources/Assets/Images/CobwebGrey.png":
/*!************************************************!*\
  !*** ./resources/Assets/Images/CobwebGrey.png ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/CobwebGrey.png?c55085adeefbb37a70318300f1f08b95");

/***/ }),

/***/ "./resources/Assets/Images/Dracula.png":
/*!*********************************************!*\
  !*** ./resources/Assets/Images/Dracula.png ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/Dracula.png?91fb77ab4d9be758f8af5090bb45201a");

/***/ }),

/***/ "./resources/Assets/Images/Eye.png":
/*!*****************************************!*\
  !*** ./resources/Assets/Images/Eye.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/Eye.png?29cd170822d815a34889894814e75e92");

/***/ }),

/***/ "./resources/Assets/Images/Ghost.png":
/*!*******************************************!*\
  !*** ./resources/Assets/Images/Ghost.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/Ghost.png?db0a2a46cf34bd1bd38bdfd7715941cd");

/***/ }),

/***/ "./resources/Assets/Images/Pumpkin.png":
/*!*********************************************!*\
  !*** ./resources/Assets/Images/Pumpkin.png ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/Pumpkin.png?49d39e8b870fee3d8f4fc5ef550275d9");

/***/ }),

/***/ "./resources/Assets/Images/Skull.png":
/*!*******************************************!*\
  !*** ./resources/Assets/Images/Skull.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/Skull.png?3ced5a4803ad1f30fad4a44faad7da71");

/***/ }),

/***/ "./resources/Assets/Images/Spider.png":
/*!********************************************!*\
  !*** ./resources/Assets/Images/Spider.png ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/Spider.png?1cbb0fedd519da5b604a756de5bbc636");

/***/ }),

/***/ "./resources/Assets/Fonts/Creepy.woff":
/*!********************************************!*\
  !*** ./resources/Assets/Fonts/Creepy.woff ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/Creepy.woff?1d374d1e3bbf1638c4f4a1af8a7e65b3");

/***/ }),

/***/ "./resources/Assets/Fonts/Creepy.woff2":
/*!*********************************************!*\
  !*** ./resources/Assets/Fonts/Creepy.woff2 ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/Creepy.woff2?9d148c27fcd3af74028787ed08110e7f");

/***/ }),

/***/ "./resources/Assets/Fonts/Lunacy.woff":
/*!********************************************!*\
  !*** ./resources/Assets/Fonts/Lunacy.woff ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/Lunacy.woff?15d8f3e180b02a7a957f8d0e892e973b");

/***/ }),

/***/ "./resources/Assets/Fonts/Lunacy.woff2":
/*!*********************************************!*\
  !*** ./resources/Assets/Fonts/Lunacy.woff2 ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/Lunacy.woff2?801ef479598f94470598823cba1dc06e");

/***/ }),

/***/ "./resources/Assets/Cursors/Ghost.cur":
/*!********************************************!*\
  !*** ./resources/Assets/Cursors/Ghost.cur ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/Ghost.cur?5386a9009b3953b1a77352957eda30b7");

/***/ }),

/***/ "./resources/Assets/Cursors/GhostHover.cur":
/*!*************************************************!*\
  !*** ./resources/Assets/Cursors/GhostHover.cur ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/GhostHover.cur?f7ec2d0762faa8a81423ce7ce539df72");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/matchingcard.vue?vue&type=style&index=0&id=efe79014&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/matchingcard.vue?vue&type=style&index=0&id=efe79014&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_matchingcard_vue_vue_type_style_index_0_id_efe79014_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./matchingcard.vue?vue&type=style&index=0&id=efe79014&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/matchingcard.vue?vue&type=style&index=0&id=efe79014&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_matchingcard_vue_vue_type_style_index_0_id_efe79014_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_matchingcard_vue_vue_type_style_index_0_id_efe79014_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/pages/matchingcard.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/matchingcard.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _matchingcard_vue_vue_type_template_id_efe79014_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matchingcard.vue?vue&type=template&id=efe79014&scoped=true */ "./resources/js/pages/matchingcard.vue?vue&type=template&id=efe79014&scoped=true");
/* harmony import */ var _matchingcard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matchingcard.vue?vue&type=script&lang=js */ "./resources/js/pages/matchingcard.vue?vue&type=script&lang=js");
/* harmony import */ var _matchingcard_vue_vue_type_style_index_0_id_efe79014_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matchingcard.vue?vue&type=style&index=0&id=efe79014&scoped=true&lang=css */ "./resources/js/pages/matchingcard.vue?vue&type=style&index=0&id=efe79014&scoped=true&lang=css");
/* harmony import */ var C_Users_enayatkhan_Desktop_mariyakerfati_leadership_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_enayatkhan_Desktop_mariyakerfati_leadership_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_matchingcard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_matchingcard_vue_vue_type_template_id_efe79014_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-efe79014"],['__file',"resources/js/pages/matchingcard.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/matchingcard.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/matchingcard.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_matchingcard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_matchingcard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./matchingcard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/matchingcard.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/matchingcard.vue?vue&type=template&id=efe79014&scoped=true":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/matchingcard.vue?vue&type=template&id=efe79014&scoped=true ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_matchingcard_vue_vue_type_template_id_efe79014_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_matchingcard_vue_vue_type_template_id_efe79014_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./matchingcard.vue?vue&type=template&id=efe79014&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/matchingcard.vue?vue&type=template&id=efe79014&scoped=true");


/***/ }),

/***/ "./resources/js/pages/matchingcard.vue?vue&type=style&index=0&id=efe79014&scoped=true&lang=css":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/pages/matchingcard.vue?vue&type=style&index=0&id=efe79014&scoped=true&lang=css ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_matchingcard_vue_vue_type_style_index_0_id_efe79014_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./matchingcard.vue?vue&type=style&index=0&id=efe79014&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/matchingcard.vue?vue&type=style&index=0&id=efe79014&scoped=true&lang=css");


/***/ })

}]);