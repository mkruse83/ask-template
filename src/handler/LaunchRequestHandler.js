module.exports = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === "LaunchRequest";
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(
        "Hallo. Ich bin eine Vorlage für einen Alexa Skill. Bitte programmiere mich fertig."
      )
      .reprompt("Kannst du mich fertigstellen?")
      .getResponse();
  }
};
