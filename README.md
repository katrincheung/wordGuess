# wordGuess

Word guessing game with simple ui.

Rules: (N players)

A random word will be sent to N-1 players.

After received all N-1 words, all duplicated words will be removed.

E.g. 

word = Apple, received hints = fruit, red, fruit, sweet

=> resultant hints = red, sweet

The hints will be sent to all N players. Then the guess player can make a guess.

Result will be sent to all players after the guessPlayer finished the guess.
