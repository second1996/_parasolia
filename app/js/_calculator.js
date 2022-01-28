const calcForm = document.querySelector('#calc-form');
const calcOrganizationInputs = document.querySelectorAll('input[name*="calc-organization"]');
const calcIndividual = document.querySelector('#individual');
const calcLegal = document.querySelector('#legal');

calcOrganizationInputs.forEach((el) => {
  el.addEventListener('change', (e) => {
    let organization = e.currentTarget.dataset.organization;

    if (organization === 'individual') {
      calcIndividual.classList.remove('d-none');
      calcLegal.classList.add('d-none');
    }

    if (organization === 'legal') {
      calcLegal.classList.remove('d-none');
      calcIndividual.classList.add('d-none');
    }
  });
});

const quizIndividual = [
  {
    question: 'На якій ви системі оподаткування?',
    descr: 'Оберіть систему оподаткування вашого ФОП чи ТОВ.',
    answers: [
      {
        text: 'Спрощена система',
        nextNode: 'tax-group',
      },
      {
        text: 'Загальна система',
        nextNode: 'tax-payer',
      },
    ],
    node: 'tax-system',
    parentNode: null,
  },
  {
    question: 'Яка у вас група єдиного податку?',
    descr: 'Оберіть систему оподаткування вашого ФОП чи ТОВ.',
    answers: [
      {
        text: '2 група',
        nextNode: 'workers',
      },
      {
        text: '3 група',
        nextNode: 'workers',
      },
    ],
    node: 'tax-group',
    parentNode: 'tax-system',
  },
  {
    question: 'Чи є ви платником ПДВ',
    descr: 'Оберіть систему оподаткування вашого ФОП чи ТОВ.',
    answers: [
      {
        text: 'Ні',
        nextNode: 'workers',
      },
      {
        text: 'Так',
        nextNode: 'workers',
      },
    ],
    node: 'tax-payer',
    parentNode: 'tax-system',
  },
  {
    question: 'Чи є у вас наймані працівники?',
    descr: 'Оберіть систему оподаткування вашого ФОП чи ТОВ.',
    answers: [
      {
        text: 'Ні',
        nextNode: null,
      },
      {
        text: 'Так',
        nextNode: null,
      },
    ],
    node: 'workers',
    parentNode: 'tax-group',
  },
];

function renderCard(obj) {
  const { question, descr, answers, node } = obj;

  return `<div class="calculator-section" data-section-id="${node}">
      <div class="heading">
        <h3 class="heading-title text-lg">${question}</h3>
        <div class="heading-descr">
          <p>${descr}</p>
        </div>
      </div>
      <div class="options">
      ${answers
        .map(({ text, nextNode }) => {
          return `<label class="options-check">
            <input class="options-check-input" type="radio" name="calc-individual-${node}[]" data-next-node-id="${nextNode}">
            <span class="options-check-box"></span>
            ${text}
          </label>`;
        })
        .join('')}
      </div>
    </div>`;
}

// Render first card
quizIndividual.forEach((obj, index) => {
  if (index === 0) {
    calcIndividual.innerHTML = renderCard(obj);
  }
});

// Individual logic
let calcCheckInputs = document.querySelectorAll('.options-check-input');

calcIndividual.addEventListener('click', (e) => {
  if (e.target.className === 'options-check-input') {
    let sectionId = e.target.closest('.calculator-section').dataset.sectionId;

    e.target.addEventListener('change', (e) => {
      let nextNodeId = e.currentTarget.dataset.nextNodeId;
      console.log(sectionId);

      if (e.target.closest('.calculator-section').dataset.sectionId !== sectionId) {
        const result = quizIndividual.find((obj) => {
          return obj.node == nextNodeId;
        });

        calcIndividual.innerHTML += renderCard(result);
      }
    });
  }
});

// let previousSectionId;
// calcCheckInputs.forEach((el) => {
//   el.addEventListener('change', (e) => {
//     let sectionId = e.currentTarget.dataset.nextNodeId;
//     // let sectionEl = el
//     //   .closest('.calculator-tree')
//     //   .querySelector(`.calculator-section[data-section-id=${sectionId}]`);

//     previousSectionId = sectionId;

//     calcIndividual.querySelector(`[data-section-id="${previousSectionId}"`).classList.add('d-none');
//     calcIndividual.querySelector(`[data-section-id="${sectionId}"`).classList.remove('d-none');
//   });
// });
