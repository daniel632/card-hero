# Card Hero
JS card game.

Card assets from the 'The Witcher 3'.

Initial inspiration from mmtuts youtube JS tutorials. 

# TODOs:
- UI (arena, replace alerts, prepare for player state, etc)

- Go button, which confirms and calculates the result of your (chosen) and the opponents (randomly chosen) actions, and then displays it
- Other attacks (Melee Attack (Strength), Cast Spell (spells), Stun (speed, agility), Block (agility, str)). Several combinations:
    - BLOCK & ATTACK -> blocker receives no dmg, attacker receives some dmg
    - STUN: success -> opponent fails to do anything, fail -> opponent acts 
    - GET RID OF ACTION ORDER!
- Player depletion & recharge of agility
- Special Ability: Can only be used once per round
- Rounds?

- Player state & saving
- RPG player leveling
- Audio?

# CODE TODOs:
- (Architecture) Decouple ui changes from logic / data manipulation (e.g. presenter -> controller -> data-layer, MVC, etc)
- Character singleton?
- Config file (for CSS names, etc)?

# Bugs:
- Info button does not work on mobile