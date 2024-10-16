import { When } from "cypress-cucumber-preprocessor/steps";
import QuizFormElements from "../elements/quiz_form_elements";
import FormUtilities from "../utilities/form.utilities";

When("preencher o campo {string} com {string}", (fieldName, value) => {
  const field = QuizFormElements.inputs[fieldName];
  FormUtilities.typeText(field.elm, value, field?.envVar);
});

When("preencher a pergunta {string} com {string}", (questionIndex, value) => {
  const questionInfos = QuizFormElements.inputs.questions(questionIndex);
  FormUtilities.typeText(questionInfos.elm, value);
});

When(
  "preencher a resposta {string} da pergunta {string} com {string}",
  (answerIndex, questionIndex, value) => {
    const answerInfos = QuizFormElements.inputs
      .questions(questionIndex)
      .answers(answerIndex);
    FormUtilities.typeText(answerInfos.elm, value);
  }
);

When("entra e sai do campo {string}", (field) => {
  FormUtilities.forceBlur(QuizFormElements.inputs[field].elm);
});

When("O campo {string} deve estar com uma mensagem de erro", (field) => {
  const error = QuizFormElements.inputs[field].errors.required;
  FormUtilities.checkInputError(error.elm, error.message);
});
