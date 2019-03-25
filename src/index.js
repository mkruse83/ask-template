const Alexa = require("ask-sdk-core");
const LaunchRequestHandler = require("./handler/LaunchRequestHandler");
const HelpHandler = require("./handler/HelpHandler");
const ExitHandler = require("./handler/ExitHandler");
const ErrorHandler = require("./handler/ErrorHandler");
const SessionEndedRequestHandler = require("./handler/SessionEndedRequestHandler");

const skillBuilder = Alexa.SkillBuilders.custom();
exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    HelpHandler,
    ExitHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
