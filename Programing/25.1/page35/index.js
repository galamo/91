function ex4() {
  let voteForCounter = 0;
  let voteAgainstCounter = 0;
  let voteAbstainedCounter = 0;
  let voteNullCounter = 0;

  const forString = "FOR";
  const againstString = "AGAINST";
  const abstainedString = "ABSTAINED";
  const NUMBER_OF_VOTERS = 8;

  for (let index = 0; index < NUMBER_OF_VOTERS; index++) {
    const userVote = prompt("Please enter your Vote?");
    const userVoteToUpper = userVote.toUpperCase();
    if (isVeto(userVoteToUpper)) {
      console.log(`Someone Voted Veto: ${index}`);
      return;
    }
    switch (userVoteToUpper) {
      case forString: {
        voteForCounter++;
        break;
      }
      case againstString: {
        voteAgainstCounter++;
        break;
      }
      case abstainedString: {
        voteAbstainedCounter++;
        break;
      }
      default: {
        voteNullCounter++;
      }
    }
  }

  console.log(
    `Number of Voters is ${NUMBER_OF_VOTERS}, vote ${forString}: ${voteForCounter},
    vote ${againstString}: ${voteAgainstCounter}
    vote ${abstainedString}: ${voteAbstainedCounter}
    vote error: ${voteNullCounter}
    `
  );
}

function isVeto(v) {
  if (v === "VETO") {
    return true;
  } else {
    return false;
  }
  //   return v.toLowerCase() === "veto"; // same as the code above
}

ex4();
// if(SELECTED_VALUE === "for"){

// }else if (SELECTED_VALUE === "against"){

// }else if(SELECTED_VALUE === "abstained"){

// }else{

// }

