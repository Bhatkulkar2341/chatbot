function getBotResponse(input) {
    //rock paper scissors
    if (input == "hii") {
        return "can i help you";
    } else if (input == "can i help you") {
        return "bye";
    } else if (input == "bye") {
        return "hii";
    }

    //programmer
    if (input == "program") {
        return "front-end";
    } else if (input == "Front-End") {
        return "back-end";
    } else if (input == "back-end") {
        return "program";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}