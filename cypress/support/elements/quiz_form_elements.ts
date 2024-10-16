const QuizFormElements = {
  addQuestionBtn: '[data-testid="question-form-add"]',
  submitBtn: '[data-testid="submit-quiz-form-btn"]',
  inputs: {
    name: {
      elm: '[data-testid="quiz-form-name-input"]',
      envVar: "quizName",
      errors: {
        required: {
          elm: '[data-testid="quiz-form-name-input-error-msg"]',
          message: "Nome deve conter no minimo 3 caracteres",
        },
      },
    },
    description: {
      elm: '[data-testid="quiz-form-description-input"]',
    },
    questions: (questionIndex: number) => ({
      deleteBtn: `[data-testid="question-form-delete-${questionIndex}-btn"]`,
      elm: `[data-testid="question-form-title-${questionIndex}-input"]`,
      errors: {
        required: {
          elm: `[data-testid="question-form-title-${questionIndex}-input-error-msg"]`,
          message: "Titulo é um campo obrigatório",
        },
      },
      correctAnswer: {
        elm: `[data-testid="answer-form-correct-select-${questionIndex}"]`,
      },
      answers: (answerIndex: number) => ({
        elm: `[data-testid="answer-form-input-${questionIndex}-${answerIndex}"]`,
        errors: {
          required: {
            elm: `[data-testid="answer-form-input-${questionIndex}-${answerIndex}-error-msg"]`,
            message: "Pergunta é um campo obrigatório",
          },
        },
      }),
    }),
  },
};

export default QuizFormElements;
