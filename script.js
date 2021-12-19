'use strict';

const totalCardEl = document.querySelector("#totalCards-el");
const userScoreEl = document.querySelector("#userScore-el");
const computerScoreEl = document.querySelector("#computerScore-el");
const userContentScoreEl = document.querySelector("#userContentScore");
const botContentScoreEl = document.querySelector("#botContentScore");
const messageBoxTextEl = document.querySelector("#messageboxText-El");
const drawBtnText = document.querySelector(".draw__btn");
let ribbonMsg = document.querySelector(".ribbon__container-text");
let win = false;
let userScore = 0;
let compScore = 0;
let backCardEl = document.querySelector(".backCard");
let sumOfTotalCards;
let okBtnEl = document.querySelector(".message__box");
let messageCardEl = document.querySelector(".message__card");
let botNum;
let botContentElHide = document.querySelector(".bot__content");
let messageCardUser = document.querySelector(".message__card-user");
let messageCardBot = document.querySelector(".message__card-bot");


//objects for the Card of Hearts
const backCard = {
    firstBackCard : document.querySelector("#first-backCard"),
    secondBackCard : document.querySelector("#second-backCard"),
    thirdBackCard : document.querySelector("#third-backCard"),
    parent : document.querySelector(".cards-item-deck").children
}
const heartCards = {
    aHeartFirst : document.querySelector("#first-aHeart"),
    twoHeartFirst : document.querySelector("#first-twoHeart"),
    threeHeartFirst : document.querySelector("#first-threeHeart"),
    fourHeartFirst : document.querySelector("#first-fourHeart"),
    fiveHeartFirst : document.querySelector("#first-fiveHeart"),
    sixHeartFirst : document.querySelector("#first-sixHeart"),
    sevenHeartFirst : document.querySelector("#first-sevenHeart"),
    eightHeartFirst : document.querySelector("#first-eightHeart"),
    nineHeartFirst : document.querySelector("#first-nineHeart"),
    tenHeartFirst : document.querySelector("#first-tenHeart"),
    // ===================================================
    aHeartSecond : document.querySelector("#second-aHeart"),
    twoHeartSecond : document.querySelector("#second-twoHeart"),
    threeHeartSecond : document.querySelector("#second-threeHeart"),
    fourHeartSecond : document.querySelector("#second-fourHeart"),
    fiveHeartSecond : document.querySelector("#second-fiveHeart"),
    sixHeartSecond : document.querySelector("#second-sixHeart"),
    sevenHeartSecond : document.querySelector("#second-sevenHeart"),
    eightHeartSecond : document.querySelector("#second-eightHeart"),
    nineHeartSecond : document.querySelector("#second-nineHeart"),
    tenHeartSecond : document.querySelector("#second-tenHeart"),
    // ===================================================
    aHeartThird : document.querySelector("#third-aHeart"),
    twoHeartThird : document.querySelector("#third-twoHeart"),
    threeHeartThird : document.querySelector("#third-threeHeart"),
    fourHeartThird : document.querySelector("#third-fourHeart"),
    fiveHeartThird : document.querySelector("#third-fiveHeart"),
    sixHeartThird : document.querySelector("#third-sixHeart"),
    sevenHeartThird : document.querySelector("#third-sevenHeart"),
    eightHeartThird : document.querySelector("#third-eightHeart"),
    nineHeartThird : document.querySelector("#third-nineHeart"),
    tenHeartThird : document.querySelector("#third-tenHeart")
}
const diamondCards = {
    aDiamondFirst : document.querySelector("#first-aDiamond"),
    twoDiamondFirst : document.querySelector("#first-twoDiamond"),
    threeDiamondFirst : document.querySelector("#first-threeDiamond"),
    fourDiamondFirst : document.querySelector("#first-fourDiamond"),
    fiveDiamondFirst : document.querySelector("#first-fiveDiamond"),
    sixDiamondFirst : document.querySelector("#first-sixDiamond"),
    sevenDiamondFirst : document.querySelector("#first-sevenDiamond"),
    eightDiamondFirst : document.querySelector("#first-eightDiamond"),
    nineDiamondFirst : document.querySelector("#first-nineDiamond"),
    tenDiamondFirst : document.querySelector("#first-tenDiamond"),
    // ===================================================
    aDiamondSecond : document.querySelector("#second-aDiamond"),
    twoDiamondSecond : document.querySelector("#second-twoDiamond"),
    threeDiamondSecond : document.querySelector("#second-threeDiamond"),
    fourDiamondSecond : document.querySelector("#second-fourDiamond"),
    fiveDiamondSecond : document.querySelector("#second-fiveDiamond"),
    sixDiamondSecond : document.querySelector("#second-sixDiamond"),
    sevenDiamondSecond : document.querySelector("#second-sevenDiamond"),
    eightDiamondSecond : document.querySelector("#second-eightDiamond"),
    nineDiamondSecond : document.querySelector("#second-nineDiamond"),
    tenDiamondSecond : document.querySelector("#second-tenDiamond"),
    // ===================================================
    aDiamondThird : document.querySelector("#third-aDiamond"),
    twoDiamondThird : document.querySelector("#third-twoDiamond"),
    threeDiamondThird : document.querySelector("#third-threeDiamond"),
    fourDiamondThird : document.querySelector("#third-fourDiamond"),
    fiveDiamondThird : document.querySelector("#third-fiveDiamond"),
    sixDiamondThird : document.querySelector("#third-sixDiamond"),
    sevenDiamondThird : document.querySelector("#third-sevenDiamond"),
    eightDiamondThird : document.querySelector("#third-eightDiamond"),
    nineDiamondThird : document.querySelector("#third-nineDiamond"),
    tenDiamondThird : document.querySelector("#third-tenDiamond")
}
const spadesCards = {
    aSpadesFirst : document.querySelector("#first-aSpades"),
    twoSpadesFirst : document.querySelector("#first-twoSpades"),
    threeSpadesFirst : document.querySelector("#first-threeSpades"),
    fourSpadesFirst : document.querySelector("#first-fourSpades"),
    fiveSpadesFirst : document.querySelector("#first-fiveSpades"),
    sixSpadesFirst : document.querySelector("#first-sixSpades"),
    sevenSpadesFirst : document.querySelector("#first-sevenSpades"),
    eightSpadesFirst : document.querySelector("#first-eightSpades"),
    nineSpadesFirst : document.querySelector("#first-nineSpades"),
    tenSpadesFirst : document.querySelector("#first-tenSpades"),
    // ===================================================
    aSpadesSecond : document.querySelector("#second-aSpades"),
    twoSpadesSecond : document.querySelector("#second-twoSpades"),
    threeSpadesSecond : document.querySelector("#second-threeSpades"),
    fourSpadesSecond : document.querySelector("#second-fourSpades"),
    fiveSpadesSecond : document.querySelector("#second-fiveSpades"),
    sixSpadesSecond : document.querySelector("#second-sixSpades"),
    sevenSpadesSecond : document.querySelector("#second-sevenSpades"),
    eightSpadesSecond : document.querySelector("#second-eightSpades"),
    nineSpadesSecond : document.querySelector("#second-nineSpades"),
    tenSpadesSecond : document.querySelector("#second-tenSpades"),
    // ===================================================
    aSpadesThird : document.querySelector("#third-aSpades"),
    twoSpadesThird : document.querySelector("#third-twoSpades"),
    threeSpadesThird : document.querySelector("#third-threeSpades"),
    fourSpadesThird : document.querySelector("#third-fourSpades"),
    fiveSpadesThird : document.querySelector("#third-fiveSpades"),
    sixSpadesThird : document.querySelector("#third-sixSpades"),
    sevenSpadesThird : document.querySelector("#third-sevenSpades"),
    eightSpadesThird : document.querySelector("#third-eightSpades"),
    nineSpadesThird : document.querySelector("#third-nineSpades"),
    tenSpadesThird : document.querySelector("#third-tenSpades")
}
const clubCards = {
    aClubsFirst : document.querySelector("#first-aClubs"),
    twoClubsFirst : document.querySelector("#first-twoClubs"),
    threeClubsFirst : document.querySelector("#first-threeClubs"),
    fourClubsFirst : document.querySelector("#first-fourClubs"),
    fiveClubsFirst : document.querySelector("#first-fiveClubs"),
    sixClubsFirst : document.querySelector("#first-sixClubs"),
    sevenClubsFirst : document.querySelector("#first-sevenClubs"),
    eightClubsFirst : document.querySelector("#first-eightClubs"),
    nineClubsFirst : document.querySelector("#first-nineClubs"),
    tenClubsFirst : document.querySelector("#first-tenClubs"),
     // ===================================================
    aClubsSecond : document.querySelector("#second-aClubs"),
    twoClubsSecond : document.querySelector("#second-twoClubs"),
    threeClubsSecond : document.querySelector("#second-threeClubs"),
    fourClubsSecond : document.querySelector("#second-fourClubs"),
    fiveClubsSecond : document.querySelector("#second-fiveClubs"),
    sixClubsSecond : document.querySelector("#second-sixClubs"),
    sevenClubsSecond : document.querySelector("#second-sevenClubs"),
    eightClubsSecond : document.querySelector("#second-eightClubs"),
    nineClubsSecond : document.querySelector("#second-nineClubs"),
    tenClubsSecond : document.querySelector("#second-tenClubs"),
    // ===================================================
    aClubsThird : document.querySelector("#third-aClubs"),
    twoClubsThird : document.querySelector("#third-twoClubs"),
    threeClubsThird : document.querySelector("#third-threeClubs"),
    fourClubsThird : document.querySelector("#third-fourClubs"),
    fiveClubsThird : document.querySelector("#third-fiveClubs"),
    sixClubsThird : document.querySelector("#third-sixClubs"),
    sevenClubsThird : document.querySelector("#third-sevenClubs"),
    eightClubsThird : document.querySelector("#third-eightClubs"),
    nineClubsThird : document.querySelector("#third-nineClubs"),
    tenClubsThird : document.querySelector("#third-tenClubs")
}

//it generates a random number from 1-4 for what kind of card would it be
function generateRandomTypeOfCard() {
    return Math.floor((Math.random() * 4) + 1);
}

//it generates a random number from 1-10
function generateRandomCard(min, max) {
    // return Math.floor((Math.random() * 10) + 1);
    return Math.floor(Math.random() * (9 - 0 + 1)) + 0;
}

// it generates a random number for bot
function generateBotNumber(min, max) {
    return Math.floor(Math.random() * (8 - 3 + 1)) + 3;
}

// for Draw button
function drawCard() {

    document.querySelector(".fight__btn").disabled = false;
    botNum = generateBotNumber();

    if (drawBtnText.textContent === "DRAW 1 CARD") {
        renderThirdCard()
        document.querySelector(".third-deck").classList.add("flipInY");
        drawBtnText.textContent= "DRAW CARDS";
        document.querySelector(".draw__btn").disabled = true;

    } else {
        renderFirstCard();
        renderSecondCard();
        document.querySelector(".first-deck").classList.add("flipInY");
        document.querySelector(".second-deck").classList.add("flipInY");

        if (totalCardEl.textContent === 10) {
            totalCardEl.textContent === 0;
        }
    }

    generateTotalCardsValue();
    drawBtnText.textContent= "DRAW 1 CARD";
    
    console.log("bot: " + botNum);
}

// for Fight button
function fightBtn() {
    messagePopup();
}

// for drawing first Card
function renderFirstCard() {
    const drawTypeOfCard = generateRandomTypeOfCard();
    console.log("First type:" + drawTypeOfCard);
    const firstCard = generateRandomCard();
    sumOfTotalCards = firstCard;

    // just for viewing the on console
    console.log("first:" + firstCard);

        if (firstCard === 1 && drawTypeOfCard === 1) {
            heartCards.aHeartFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            heartCards.aHeartFirst.style.display = "none";
        }
        if (firstCard === 2 && drawTypeOfCard === 1) {
            heartCards.twoHeartFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            heartCards.twoHeartFirst.style.display = "none";
        }
        if (firstCard === 3 && drawTypeOfCard === 1) {
            heartCards.threeHeartFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            heartCards.threeHeartFirst.style.display = "none";
        }
        if (firstCard === 4 && drawTypeOfCard === 1) {
            heartCards.fourHeartFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            heartCards.fourHeartFirst.style.display = "none";
        }
        if (firstCard === 5 && drawTypeOfCard === 1) {
            heartCards.fiveHeartFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            heartCards.fiveHeartFirst.style.display = "none";
        }
        if (firstCard === 6 && drawTypeOfCard === 1) {
            heartCards.sixHeartFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            heartCards.sixHeartFirst.style.display = "none";
        }
        if (firstCard === 7 && drawTypeOfCard === 1) {
            heartCards.sevenHeartFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            heartCards.sevenHeartFirst.style.display = "none";
        }
        if (firstCard === 8 && drawTypeOfCard === 1) {
            heartCards.eightHeartFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            heartCards.eightHeartFirst.style.display = "none";
        }
        if (firstCard === 9 && drawTypeOfCard === 1) {
            heartCards.nineHeartFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            heartCards.nineHeartFirst.style.display = "none";
        }
        if (firstCard === 0 && drawTypeOfCard === 1) {
            heartCards.tenHeartFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            heartCards.tenHeartFirst.style.display = "none";
        }

        // ===========================================
        if (firstCard === 1 && drawTypeOfCard === 2) {
            diamondCards.aDiamondFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            diamondCards.aDiamondFirst.style.display = "none";
        }
        if (firstCard === 2 && drawTypeOfCard === 2) {
            diamondCards.twoDiamondFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            diamondCards.twoDiamondFirst.style.display = "none";
        }
        if (firstCard === 3 && drawTypeOfCard === 2) {
            diamondCards.threeDiamondFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            diamondCards.threeDiamondFirst.style.display = "none";
        }
        if (firstCard === 4 && drawTypeOfCard === 2) {
            diamondCards.fourDiamondFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            diamondCards.fourDiamondFirst.style.display = "none";
        }
        if (firstCard === 5 && drawTypeOfCard === 2) {
            diamondCards.fiveDiamondFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            diamondCards.fiveDiamondFirst.style.display = "none";
        }
        if (firstCard === 6 && drawTypeOfCard === 2) {
            diamondCards.sixDiamondFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            diamondCards.sixDiamondFirst.style.display = "none";
        }
        if (firstCard === 7 && drawTypeOfCard === 2) {
            diamondCards.sevenDiamondFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            diamondCards.sevenDiamondFirst.style.display = "none";
        }
        if (firstCard === 8 && drawTypeOfCard === 2) {
            diamondCards.eightDiamondFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            diamondCards.eightDiamondFirst.style.display = "none";
        }
        if (firstCard === 9 && drawTypeOfCard === 2) {
            diamondCards.nineDiamondFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            diamondCards.nineDiamondFirst.style.display = "none";
        }
        if (firstCard === 0 && drawTypeOfCard === 2) {
            diamondCards.tenDiamondFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            diamondCards.tenDiamondFirst.style.display = "none";
        }

        // ==============================================
        if (firstCard === 1 && drawTypeOfCard === 3) {
            spadesCards.aSpadesFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            spadesCards.aSpadesFirst.style.display = "none";
        }
        if (firstCard === 2 && drawTypeOfCard === 3) {
            spadesCards.twoSpadesFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            spadesCards.twoSpadesFirst.style.display = "none";
        }
        if (firstCard === 3 && drawTypeOfCard === 3) {
            spadesCards.threeSpadesFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            spadesCards.threeSpadesFirst.style.display = "none";
        }
        if (firstCard === 4 && drawTypeOfCard === 3) {
            spadesCards.fourSpadesFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            spadesCards.fourSpadesFirst.style.display = "none";
        }
        if (firstCard === 5 && drawTypeOfCard === 3) {
            spadesCards.fiveSpadesFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            spadesCards.fiveSpadesFirst.style.display = "none";
        }
        if (firstCard === 6 && drawTypeOfCard === 3) {
            spadesCards.sixSpadesFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            spadesCards.sixSpadesFirst.style.display = "none";
        }
        if (firstCard === 7 && drawTypeOfCard === 3) {
            spadesCards.sevenSpadesFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            spadesCards.sevenSpadesFirst.style.display = "none";
        }
        if (firstCard === 8 && drawTypeOfCard === 3) {
            spadesCards.eightSpadesFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            spadesCards.eightSpadesFirst.style.display = "none";
        }
        if (firstCard === 9 && drawTypeOfCard === 3) {
            spadesCards.nineSpadesFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            spadesCards.nineSpadesFirst.style.display = "none";
        }
        if (firstCard === 0 && drawTypeOfCard === 3) {
            spadesCards.tenSpadesFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            spadesCards.tenSpadesFirst.style.display = "none";
        }

        // ===========================================
        if (firstCard === 1 && drawTypeOfCard === 4) {
            clubCards.aClubsFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            clubCards.aClubsFirst.style.display = "none";
        }
        if (firstCard === 2 && drawTypeOfCard === 4) {
            clubCards.twoClubsFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            clubCards.twoClubsFirst.style.display = "none";
        }
        if (firstCard === 3 && drawTypeOfCard === 4) {
            clubCards.threeClubsFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            clubCards.threeClubsFirst.style.display = "none";
        }
        if (firstCard === 4 && drawTypeOfCard === 4) {
            clubCards.fourClubsFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            clubCards.fourClubsFirst.style.display = "none";
        }
        if (firstCard === 5 && drawTypeOfCard === 4) {
            clubCards.fiveClubsFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            clubCards.fiveClubsFirst.style.display = "none";
        }
        if (firstCard === 6 && drawTypeOfCard === 4) {
            clubCards.sixClubsFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            clubCards.sixClubsFirst.style.display = "none";
        }
        if (firstCard === 7 && drawTypeOfCard === 4) {
            clubCards.sevenClubsFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            clubCards.sevenClubsFirst.style.display = "none";
        }
        if (firstCard === 8 && drawTypeOfCard === 4) {
            clubCards.eightClubsFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            clubCards.eightClubsFirst.style.display = "none";
        }
        if (firstCard === 9 && drawTypeOfCard === 4) {
            clubCards.nineClubsFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            clubCards.nineClubsFirst.style.display = "none";
        }
        if (firstCard === 0 && drawTypeOfCard === 4) {
            clubCards.tenClubsFirst.style.display = "block";
            backCard.firstBackCard.style.display = "none";
        } else {
            clubCards.tenClubsFirst.style.display = "none";
        }

        // document.querySelector(".first-deck").classList.add("flipInY");
}

// for drawing second Card
function renderSecondCard() {
    const drawTypeOfCard = generateRandomTypeOfCard();
    console.log("Second type:" + drawTypeOfCard);
    const secondCard = generateRandomCard();
    sumOfTotalCards += secondCard;
    totalCardEl.textContent = sumOfTotalCards;

    // just for viewing the on console
    console.log("second:" + secondCard);
    if (secondCard === 1 && drawTypeOfCard === 1) {
        heartCards.aHeartSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        heartCards.aHeartSecond.style.display = "none";
    }
    if (secondCard === 2 && drawTypeOfCard === 1) {
        heartCards.twoHeartSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        heartCards.twoHeartSecond.style.display = "none";
    }
    if (secondCard === 3 && drawTypeOfCard === 1) {
        heartCards.threeHeartSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        heartCards.threeHeartSecond.style.display = "none";
    }
    if (secondCard === 4 && drawTypeOfCard === 1) {
        heartCards.fourHeartSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        heartCards.fourHeartSecond.style.display = "none";
    }
    if (secondCard === 5 && drawTypeOfCard === 1) {
        heartCards.fiveHeartSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        heartCards.fiveHeartSecond.style.display = "none";
    }
    if (secondCard === 6 && drawTypeOfCard === 1) {
        heartCards.sixHeartSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        heartCards.sixHeartSecond.style.display = "none";
    }
    if (secondCard === 7 && drawTypeOfCard === 1) {
        heartCards.sevenHeartSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        heartCards.sevenHeartSecond.style.display = "none";
    }
    if (secondCard === 8 && drawTypeOfCard === 1) {
        heartCards.eightHeartSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        heartCards.eightHeartSecond.style.display = "none";
    }
    if (secondCard === 9 && drawTypeOfCard === 1) {
        heartCards.nineHeartSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        heartCards.nineHeartSecond.style.display = "none";
    }
    if (secondCard === 0 && drawTypeOfCard === 1) {
        heartCards.tenHeartSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        heartCards.tenHeartSecond.style.display = "none";
    }

    // ===========================================
    if (secondCard === 1 && drawTypeOfCard === 2) {
        diamondCards.aDiamondSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        diamondCards.aDiamondSecond.style.display = "none";
    }
    if (secondCard === 2 && drawTypeOfCard === 2) {
        diamondCards.twoDiamondSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        diamondCards.twoDiamondSecond.style.display = "none";
    }
    if (secondCard === 3 && drawTypeOfCard === 2) {
        diamondCards.threeDiamondSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        diamondCards.threeDiamondSecond.style.display = "none";
    }
    if (secondCard === 4 && drawTypeOfCard === 2) {
        diamondCards.fourDiamondSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        diamondCards.fourDiamondSecond.style.display = "none";
    }
    if (secondCard === 5 && drawTypeOfCard === 2) {
        diamondCards.fiveDiamondSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        diamondCards.fiveDiamondSecond.style.display = "none";
    }
    if (secondCard === 6 && drawTypeOfCard === 2) {
        diamondCards.sixDiamondSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        diamondCards.sixDiamondSecond.style.display = "none";
    }
    if (secondCard === 7 && drawTypeOfCard === 2) {
        diamondCards.sevenDiamondSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        diamondCards.sevenDiamondSecond.style.display = "none";
    }
    if (secondCard === 8 && drawTypeOfCard === 2) {
        diamondCards.eightDiamondSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        diamondCards.eightDiamondSecond.style.display = "none";
    }
    if (secondCard === 9 && drawTypeOfCard === 2) {
        diamondCards.nineDiamondSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        diamondCards.nineDiamondSecond.style.display = "none";
    }
    if (secondCard === 0 && drawTypeOfCard === 2) {
        diamondCards.tenDiamondSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        diamondCards.tenDiamondSecond.style.display = "none";
    }

    // ==============================================
    if (secondCard === 1 && drawTypeOfCard === 3) {
        spadesCards.aSpadesSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        spadesCards.aSpadesSecond.style.display = "none";
    }
    if (secondCard === 2 && drawTypeOfCard === 3) {
        spadesCards.twoSpadesSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        spadesCards.twoSpadesSecond.style.display = "none";
    }
    if (secondCard === 3 && drawTypeOfCard === 3) {
        spadesCards.threeSpadesSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        spadesCards.threeSpadesSecond.style.display = "none";
    }
    if (secondCard === 4 && drawTypeOfCard === 3) {
        spadesCards.fourSpadesSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        spadesCards.fourSpadesSecond.style.display = "none";
    }
    if (secondCard === 5 && drawTypeOfCard === 3) {
        spadesCards.fiveSpadesSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        spadesCards.fiveSpadesSecond.style.display = "none";
    }
    if (secondCard === 6 && drawTypeOfCard === 3) {
        spadesCards.sixSpadesSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        spadesCards.sixSpadesSecond.style.display = "none";
    }
    if (secondCard === 7 && drawTypeOfCard === 3) {
        spadesCards.sevenSpadesSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        spadesCards.sevenSpadesSecond.style.display = "none";
    }
    if (secondCard === 8 && drawTypeOfCard === 3) {
        spadesCards.eightSpadesSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        spadesCards.eightSpadesSecond.style.display = "none";
    }
    if (secondCard === 9 && drawTypeOfCard === 3) {
        spadesCards.nineSpadesSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        spadesCards.nineSpadesSecond.style.display = "none";
    }
    if (secondCard === 0 && drawTypeOfCard === 3) {
        spadesCards.tenSpadesSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        spadesCards.tenSpadesSecond.style.display = "none";
    }

    // ===========================================
    if (secondCard === 1 && drawTypeOfCard === 4) {
        clubCards.aClubsSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        clubCards.aClubsSecond.style.display = "none";
    }
    if (secondCard === 2 && drawTypeOfCard === 4) {
        clubCards.twoClubsSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        clubCards.twoClubsSecond.style.display = "none";
    }
    if (secondCard === 3 && drawTypeOfCard === 4) {
        clubCards.threeClubsSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        clubCards.threeClubsSecond.style.display = "none";
    }
    if (secondCard === 4 && drawTypeOfCard === 4) {
        clubCards.fourClubsSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        clubCards.fourClubsSecond.style.display = "none";
    }
    if (secondCard === 5 && drawTypeOfCard === 4) {
        clubCards.fiveClubsSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        clubCards.fiveClubsSecond.style.display = "none";
    }
    if (secondCard === 6 && drawTypeOfCard === 4) {
        clubCards.sixClubsSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        clubCards.sixClubsSecond.style.display = "none";
    }
    if (secondCard === 7 && drawTypeOfCard === 4) {
        clubCards.sevenClubsSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        clubCards.sevenClubsSecond.style.display = "none";
    }
    if (secondCard === 8 && drawTypeOfCard === 4) {
        clubCards.eightClubsSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        clubCards.eightClubsSecond.style.display = "none";
    }
    if (secondCard === 9 && drawTypeOfCard === 4) {
        clubCards.nineClubsSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        clubCards.nineClubsSecond.style.display = "none";
    }
    if (secondCard === 0 && drawTypeOfCard === 4) {
        clubCards.tenClubsSecond.style.display = "block";
        backCard.secondBackCard.style.display = "none";
    } else {
        clubCards.tenClubsSecond.style.display = "none";
    }
    console.log("total:" + sumOfTotalCards);

    // document.querySelector(".second-deck").classList.add("flipInY");
}

// for drawing third Card
function renderThirdCard() {
    const drawTypeOfCard = generateRandomTypeOfCard();
    console.log("Third type:" + drawTypeOfCard);
    const thirdCard = generateRandomCard();
    sumOfTotalCards += thirdCard;
    totalCardEl.textContent = sumOfTotalCards;


    // just for viewing the on console
    console.log("third:" + thirdCard);
    if (thirdCard === 1 && drawTypeOfCard === 1) {
        heartCards.aHeartThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        heartCards.aHeartThird.style.display = "none";
    }
    if (thirdCard === 2 && drawTypeOfCard === 1) {
        heartCards.twoHeartThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        heartCards.twoHeartThird.style.display = "none";
    }
    if (thirdCard === 3 && drawTypeOfCard === 1) {
        heartCards.threeHeartThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        heartCards.threeHeartThird.style.display = "none";
    }
    if (thirdCard === 4 && drawTypeOfCard === 1) {
        heartCards.fourHeartThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        heartCards.fourHeartThird.style.display = "none";
    }
    if (thirdCard === 5 && drawTypeOfCard === 1) {
        heartCards.fiveHeartThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        heartCards.fiveHeartThird.style.display = "none";
    }
    if (thirdCard === 6 && drawTypeOfCard === 1) {
        heartCards.sixHeartThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        heartCards.sixHeartThird.style.display = "none";
    }
    if (thirdCard === 7 && drawTypeOfCard === 1) {
        heartCards.sevenHeartThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        heartCards.sevenHeartThird.style.display = "none";
    }
    if (thirdCard === 8 && drawTypeOfCard === 1) {
        heartCards.eightHeartThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        heartCards.eightHeartThird.style.display = "none";
    }
    if (thirdCard === 9 && drawTypeOfCard === 1) {
        heartCards.nineHeartThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        heartCards.nineHeartThird.style.display = "none";
    }
    if (thirdCard === 0 && drawTypeOfCard === 1) {
        heartCards.tenHeartThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        heartCards.tenHeartThird.style.display = "none";
    }

    // ===========================================
    if (thirdCard === 1 && drawTypeOfCard === 2) {
        diamondCards.aDiamondThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        diamondCards.aDiamondThird.style.display = "none";
    }
    if (thirdCard === 2 && drawTypeOfCard === 2) {
        diamondCards.twoDiamondThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        diamondCards.twoDiamondThird.style.display = "none";
    }
    if (thirdCard === 3 && drawTypeOfCard === 2) {
        diamondCards.threeDiamondThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        diamondCards.threeDiamondThird.style.display = "none";
    }
    if (thirdCard === 4 && drawTypeOfCard === 2) {
        diamondCards.fourDiamondThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        diamondCards.fourDiamondThird.style.display = "none";
    }
    if (thirdCard === 5 && drawTypeOfCard === 2) {
        diamondCards.fiveDiamondThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        diamondCards.fiveDiamondThird.style.display = "none";
    }
    if (thirdCard === 6 && drawTypeOfCard === 2) {
        diamondCards.sixDiamondThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        diamondCards.sixDiamondThird.style.display = "none";
    }
    if (thirdCard === 7 && drawTypeOfCard === 2) {
        diamondCards.sevenDiamondThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        diamondCards.sevenDiamondThird.style.display = "none";
    }
    if (thirdCard === 8 && drawTypeOfCard === 2) {
        diamondCards.eightDiamondThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        diamondCards.eightDiamondThird.style.display = "none";
    }
    if (thirdCard === 9 && drawTypeOfCard === 2) {
        diamondCards.nineDiamondThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        diamondCards.nineDiamondThird.style.display = "none";
    }
    if (thirdCard === 0 && drawTypeOfCard === 2) {
        diamondCards.tenDiamondThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        diamondCards.tenDiamondThird.style.display = "none";
    }

    // ==============================================
    if (thirdCard === 1 && drawTypeOfCard === 3) {
        spadesCards.aSpadesThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        spadesCards.aSpadesThird.style.display = "none";
    }
    if (thirdCard === 2 && drawTypeOfCard === 3) {
        spadesCards.twoSpadesThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        spadesCards.twoSpadesThird.style.display = "none";
    }
    if (thirdCard === 3 && drawTypeOfCard === 3) {
        spadesCards.threeSpadesThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        spadesCards.threeSpadesThird.style.display = "none";
    }
    if (thirdCard === 4 && drawTypeOfCard === 3) {
        spadesCards.fourSpadesThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        spadesCards.fourSpadesThird.style.display = "none";
    }
    if (thirdCard === 5 && drawTypeOfCard === 3) {
        spadesCards.fiveSpadesThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        spadesCards.fiveSpadesThird.style.display = "none";
    }
    if (thirdCard === 6 && drawTypeOfCard === 3) {
        spadesCards.sixSpadesThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        spadesCards.sixSpadesThird.style.display = "none";
    }
    if (thirdCard === 7 && drawTypeOfCard === 3) {
        spadesCards.sevenSpadesThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        spadesCards.sevenSpadesThird.style.display = "none";
    }
    if (thirdCard === 8 && drawTypeOfCard === 3) {
        spadesCards.eightSpadesThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        spadesCards.eightSpadesThird.style.display = "none";
    }
    if (thirdCard === 9 && drawTypeOfCard === 3) {
        spadesCards.nineSpadesThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        spadesCards.nineSpadesThird.style.display = "none";
    }
    if (thirdCard === 0 && drawTypeOfCard === 3) {
        spadesCards.tenSpadesThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        spadesCards.tenSpadesThird.style.display = "none";
    }

    // ===========================================
    if (thirdCard === 1 && drawTypeOfCard === 4) {
        clubCards.aClubsThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        clubCards.aClubsThird.style.display = "none";
    }
    if (thirdCard === 2 && drawTypeOfCard === 4) {
        clubCards.twoClubsThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        clubCards.twoClubsThird.style.display = "none";
    }
    if (thirdCard === 3 && drawTypeOfCard === 4) {
        clubCards.threeClubsThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        clubCards.threeClubsThird.style.display = "none";
    }
    if (thirdCard === 4 && drawTypeOfCard === 4) {
        clubCards.fourClubsThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        clubCards.fourClubsThird.style.display = "none";
    }
    if (thirdCard === 5 && drawTypeOfCard === 4) {
        clubCards.fiveClubsThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        clubCards.fiveClubsThird.style.display = "none";
    }
    if (thirdCard === 6 && drawTypeOfCard === 4) {
        clubCards.sixClubsThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        clubCards.sixClubsThird.style.display = "none";
    }
    if (thirdCard === 7 && drawTypeOfCard === 4) {
        clubCards.sevenClubsThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        clubCards.sevenClubsThird.style.display = "none";
    }
    if (thirdCard === 8 && drawTypeOfCard === 4) {
        clubCards.eightClubsThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        clubCards.eightClubsThird.style.display = "none";
    }
    if (thirdCard === 9 && drawTypeOfCard === 4) {
        clubCards.nineClubsThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        clubCards.nineClubsThird.style.display = "none";
    }
    if (thirdCard === 0 && drawTypeOfCard === 4) {
        clubCards.tenClubsThird.style.display = "block";
        backCard.thirdBackCard.style.display = "none";
    } else {
        clubCards.tenClubsThird.style.display = "none";
    }
    console.log("total:" + sumOfTotalCards);
}

// reset all commands
function reset() {
    drawBtnText.textContent= "DRAW CARDS";
    backCard.firstBackCard.style.display = "block";
    backCard.secondBackCard.style.display = "block";
    backCard.thirdBackCard.style.display = "block";
    botContentElHide.style.display = "block";
    totalCardEl.textContent = 0;
    document.querySelector(".draw__btn").disabled = false;
    document.querySelector(".fight__btn").disabled = true;

    document.querySelector(".first-deck").classList.remove("flipInY");
    document.querySelector(".second-deck").classList.remove("flipInY");
    document.querySelector(".third-deck").classList.remove("flipInY");
}

// for generating score
function generateScore() {

    if (sumOfTotalCards > botNum) {
        messageBoxTextEl.textContent = "YOU WIN";
        messageBoxTextEl.style.backgroundColor = "#3DCE71";
    } else if (sumOfTotalCards < botNum) {
        messageBoxTextEl.textContent = "YOU LOSE";
        messageBoxTextEl.style.backgroundColor = "#F24E4B";
    } else if (sumOfTotalCards === botNum) {
        messageBoxTextEl.textContent = "DRAW";
        messageBoxTextEl.style.backgroundColor = "#963B00";
    }
}

// for Ok button 
function okBtn() {
    okBtnEl.style.visibility = "hidden";
    reset();

    if (sumOfTotalCards > botNum) {
        userScore += 1;
        userScoreEl.textContent = userScore;
    } else if (sumOfTotalCards < botNum) {
        compScore += 1;
        computerScoreEl.textContent = compScore;
    }

    scoreBoard();
    document.querySelector(".first-deck").classList.remove("flipInY");
    document.querySelector(".second-deck").classList.remove("flipInY");
    document.querySelector(".third-deck").classList.remove("flipInY");
    okBtnEl.classList.remove("popIn");
}

// for MessageBox 
function messagePopup() {
    okBtnEl.style.visibility = "visible";
    okBtnEl.classList.add("popIn");
    
    botContentScoreEl.textContent = botNum;
    userContentScoreEl.textContent = sumOfTotalCards;

    drawBtnText.textContent= "DRAW CARDS";
    document.querySelector(".draw__btn").disabled = true;
    document.querySelector(".fight__btn").disabled = true;
    
    generateScore();
    document.querySelector(".first-deck").classList.remove("flipInY");
    document.querySelector(".second-deck").classList.remove("flipInY");
    document.querySelector(".third-deck").classList.remove("flipInY");
}

//  for totalCardsValue 
function generateTotalCardsValue() {

    if (totalCardEl.textContent === "9") {
        win = true;
        botContentElHide.style.display = "none";
        messagePopup();
        userContentScoreEl.textContent = "LUCKY 9!";
        messageBoxTextEl.textContent = "YOU WIN";
        messageBoxTextEl.style.backgroundColor = "#3DCE71";

    } else if (totalCardEl.textContent > 9) {
        sumOfTotalCards -= 10;
        totalCardEl.textContent -= 10;
    }

}

// for deciding the winner
function scoreBoard() {
    
    if (userScoreEl.textContent === "10") {
        messageCardUser.style.visibility = "visible";
        messageCardUser.classList.add("popIn");
        document.querySelector(".container").style.visibility = "hidden";
    } else if (computerScoreEl.textContent === "10") {
        messageCardBot.style.visibility = "visible";
        messageCardBot.classList.add("popIn");
        document.querySelector(".container").style.visibility = "hidden";
    }
}

// new game 
function newGame() {
    messageCardUser.classList.remove("popIn");
    messageCardBot.classList.remove("popIn");

    document.querySelector(".container").style.visibility = "visible";
    userScore = 0;
    compScore = 0;
    userScoreEl.textContent = 0;
    computerScoreEl.textContent = 0;

    messageCardUser.style.visibility = "hidden";
    messageCardBot.style.visibility = "hidden";
}

function welcomeBtn() {
    const welcomeCard = document.querySelector('.welcome__card');
    const ribbonText = document.querySelector('.ribbon__container-text');

    document.querySelector(".container").style.visibility = "visible";

    welcomeCard.classList.remove("driveInBottom");
    welcomeCard.style.visibility = "hidden";
    ribbonText.textContent = "DRAW YOUR LUCK!"

//    addFlipCard();
}
