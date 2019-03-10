// Rsponsible for changes to HTML and CSS
// (Instance, because we only need on variant)
let ViewManager = {

    init: function() {
        this.domWrapper = document.querySelector(".wrapper");
        this.domHeader = this.domWrapper.querySelector(".header");
        this.domPlayer = this.domWrapper.querySelector(".player");
        this.domInterface = this.domWrapper.querySelector(".interface");
        // domActions: domInterface.querySelector(".actions"),
        // domInfo: domInterface.querySelector(".info"),
        this.domEnemy = this.domWrapper.querySelector(".enemy");
    },

    setPreFightView: function() {

        // this.clearPage();

        // // Quit Button
        // this.createAndAttachChildNode(this.domHeader, "a", {
        //     "text": "Quit",
        //     "href": "#",
        //     "class": "btn-quit",
        //     "onclick": "GameManager.quit()"
        // })

        init();

        // Player
        this.createCharacterView(this.domPlayer, player);

        // Create Paragraph node and insert text into it
        this.createAndAttachChildNode(this.domHeader, "p", {
            "text": "Task: Find an enemy!"
        });

        // Create Anchor node (which has a button attribute), to find an enemy
        this.createAndAttachChildNode(this.domInterface, "a", {
            "text": "Search for an enemy!",
            "href": "#",
            "class": "btn-prefight",
            "onclick": "GameManager.startFight()"
        });
    },

    setFightView: function() {

        this.removeAllChildrenElements(this.domHeader);
        this.removeAllChildrenElements(this.domInterface);

        // Prompt
        this.createAndAttachChildNode(this.domHeader, "p", {
            "text": "Task: Choose your move"
        });
        
        // Button
        this.createAndAttachChildNode(this.domInterface, "a", {
            "text": "Melee!",
            "href": "#",
            "class": "btn-fight",
            "onclick": "player.setAction(Actions['MELEE_ATTACK'])"
        });
        this.createAndAttachChildNode(this.domInterface, "a", {
            "text": "Cast Spell!",
            "href": "#",
            "class": "btn-spell",
            "onclick": "player.setAction(Actions['SPELL_ATTACK'])"
        });
        this.createAndAttachChildNode(this.domInterface, "a", {
            "text": "Block!",
            "href": "#",
            "class": "btn-block",
            "onclick": "player.setAction(Actions['BLOCK'])"
        });
        
        // this.createAndAttachChildNode(this.domActions, "a", {
        //     "text": "White Flag!",
        //     "href": "#",
        //     "class": "btn-retreat",
        //     "onclick": "GameManager.retreat()"
        // });

        this.createAndAttachChildNode(this.domInterface, "a", {
            "text": "Go!",
            "href": "#",
            "class": "btn-go",
            "onclick": "GameManager.go()"
        });
        
        // Creating the enemy view
        ViewManager.createCharacterView(this.domEnemy, enemy);
    },

    createAndAttachChildNode: function(parentNode, tagName, attributes=undefined) {
        let node = document.createElement(tagName);
        
        // Setting any attributes (and text) for the child node
        if (attributes !== undefined) {
            for (key in attributes) {

                // Text is not an actual HTML attribute
                if (key == "text") {
                    let textNode = document.createTextNode(attributes[key]);
                    node.appendChild(textNode);
                } else {
                    node.setAttribute(key, attributes[key]);
                }
            }
        }

        parentNode.appendChild(node);
    },

    createCharacterView: function(parentNode, character) {

        // Removing any content which may be in the character view (i.e. div)
        this.removeAllChildrenElements(parentNode);
        
        // Image
        this.createAndAttachChildNode(parentNode, "img", {
            "src": "img/" + character.type + "/" + character.classType.toLowerCase() + ".jpg",
            "class": "img-avatar"
        });

        // Div containing a header (h3), and paragraphs for each character stat
        this.createAndAttachChildNode(parentNode, "div", undefined);
        let divNode = parentNode.querySelector("div");
        this.createAndAttachChildNode(divNode, "h3", {
            "class": "character-name",
            "text": character.classType
        });

        // TODO: Make a character stats class. would allow a for loop to be used here
        this.createAndAttachChildNode(divNode, "p", {
            "class": character.type + "-health" + " character-text",
            "text": "Health: "+ character.health
        });
        this.createAndAttachChildNode(divNode, "p", {
            "class": character.type + "-spells" + " character-text",
            "text": "Spells: "+ character.spells
        });
        this.createAndAttachChildNode(divNode, "p", {
            "class": character.type + "-strength" + " character-text",
            "text": "Strength: "+ character.strength
        });
        this.createAndAttachChildNode(divNode, "p", {
            "class": character.type + "-agility" + " character-text",
            "text": "Agility: "+ character.agility
        });
        this.createAndAttachChildNode(divNode, "p", {
            "class": character.type + "-speed" + " character-text",
            "text": "Speed: "+ character.speed
        });
    },

    removeAllChildrenElements: function(parentElement) {
        parentElement.innerHTML = "";
    },

    // Remove all elements from the main divs
    // TODO: make an object for all divs - would allow us to enumerate through all with a loop
    clearPage: function() {
        this.removeAllChildrenElements(this.domHeader);
        this.removeAllChildrenElements(this.domPlayer);
        this.removeAllChildrenElements(this.domInterface);
        this.removeAllChildrenElements(this.domEnemy);
    },

    // TODO: listeners on player and enemey healthHTML - 

    // For the home screen
    // Opens the help panel
    loadInfo: function() {
        domInfo = wrapper.querySelector(".info");

        domInfo.querySelector("div").querySelector("button").innerHTML = "Hide Info";
        domInfo.querySelector("div").querySelector("button").setAttribute("onclick", "ViewManager.hideInfo()");

        this.createAndAttachChildNode(domInfo.querySelector("div"), "p", {
            "class": "text",
            "text": "Health: Allows you to absorb damage from your opponent."
        });
        this.createAndAttachChildNode(domInfo.querySelector("div"), "p", {
            "class": "text",
            "text": "Spells: Increases your Spell attack damage."
        });
        this.createAndAttachChildNode(domInfo.querySelector("div"), "p", {
            "class": "text",
            "text": "Strength: Increases your Melee attack damage."
        });
        this.createAndAttachChildNode(domInfo.querySelector("div"), "p", {
            "class": "text",
            "text": "Agility: Increases damage reflected from a Block. Also increases damage from attacks."
        });
        this.createAndAttachChildNode(domInfo.querySelector("div"), "p", {
            "class": "text",
            "text": "Speed: Increases your chances of acting / reacting before your opponent."
        });
    },
    
    // For the home screen:
    hideInfo: function() {
        domInfo = wrapper.querySelector(".info");
        
        const textItems = domInfo.querySelector("div").querySelectorAll(".text");
        const numItems = textItems.length;
        for (let i = 0; i < numItems; i++) {
            textItems[i].remove();
        }

        domInfo.querySelector("div").querySelector("button").innerHTML = "More Info!";
        domInfo.querySelector("div").querySelector("button").setAttribute("onclick", "ViewManager.loadInfo()");
    }

};