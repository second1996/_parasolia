// Individual data
const individualData = [
  {
    id: 0,
    node: 'tax-system',
    question: 'На якій ви системі оподаткування?',
    descr: 'Оберіть систему оподаткування вашого ФОП чи ТОВ.',
    answers: [
      {
        text: 'Спрощена система',
        nextNode: 'tax-simple',
      },

      {
        text: 'Загальна система',
        nextNode: 'tax-general',
      },
    ],
  },
  {
    id: 1,
    node: 'tax-simple',
    question: 'Яка у вас група єдиного податку?',
    descr: 'Оберіть систему оподаткування вашого ФОП чи ТОВ.',
    answers: [
      {
        text: '2 група',
        nextNode: 'tax-simple-workers',
      },
      {
        text: '3 група',
        nextNode: 'tax-simple-pdv',
      },
    ],
  },
  {
    id: 2,
    node: 'tax-simple-workers',
    question: 'Чи є у вас наймані працівники?',
    descr: 'Оберіть систему оподаткування вашого ФОП чи ТОВ.',
    answers: [
      {
        text: 'Ні',
        nextNode: null,
        value: 1500,
      },
      {
        text: 'Так',
        nextNode: null,
        value: 1500,
        multiplier: 700,
        additional: {
          question: 'Скільки чоловік?',
          descr: 'Введіть числове значення к-ті працівників у вашій компанії.',
          field: 'Кількість працівників',
        },
      },
    ],
  },
  {
    id: 3,
    node: 'tax-simple-pdv',
    question: 'Чи є ви платником ПДВ?',
    descr: 'Оберіть систему оподаткування вашого ФОП чи ТОВ.',
    answers: [
      {
        text: 'Ні',
        nextNode: 'tax-simple-workers-pdv-no',
      },
      {
        text: 'Так',
        nextNode: 'tax-simple-workers-pdv-yes',
      },
    ],
  },
  {
    id: 4,
    node: 'tax-simple-workers-pdv-no',
    question: 'Чи є у вас наймані працівники?',
    descr: 'Оберіть систему оподаткування вашого ФОП чи ТОВ.',
    answers: [
      {
        text: 'Ні',
        nextNode: null,
        value: 1800,
      },
      {
        text: 'Так',
        nextNode: null,
        value: 1800,
        multiplier: 700,
        additional: {
          question: 'Скільки чоловік?',
          descr: 'Введіть числове значення к-ті працівників у вашій компанії.',
          field: 'Кількість працівників',
        },
      },
    ],
  },
  {
    id: 5,
    node: 'tax-simple-workers-pdv-yes',
    question: 'Чи є у вас наймані працівники?',
    descr: 'Оберіть систему оподаткування вашого ФОП чи ТОВ.',
    answers: [
      {
        text: 'Ні',
        nextNode: null,
        value: 3300,
      },
      {
        text: 'Так',
        nextNode: null,
        value: 3300,
        multiplier: 700,
        additional: {
          question: 'Скільки чоловік?',
          descr: 'Введіть числове значення к-ті працівників у вашій компанії.',
          field: 'Кількість працівників',
        },
      },
    ],
  },
  {
    id: 6,
    node: 'tax-general',
    question: 'Чи є ви платником ПДВ?',
    descr: 'Оберіть систему оподаткування вашого ФОП чи ТОВ.',
    answers: [
      {
        text: 'Ні',
        nextNode: 'tax-general-no',
      },
      {
        text: 'Так',
        nextNode: 'tax-general-yes',
      },
    ],
  },
  {
    id: 7,
    node: 'tax-general-no',
    question: 'Чи є ви платником АП?',
    descr: 'Оберіть систему оподаткування вашого ФОП чи ТОВ.',
    answers: [
      {
        text: 'Ні',
        nextNode: 'tax-general-no-ap-no',
      },
      {
        text: 'Так',
        nextNode: 'tax-general-no-ap-yes',
      },
    ],
  },
  {
    id: 8,
    node: 'tax-general-yes',
    question: 'Чи є ви платником АП?',
    descr: 'Оберіть систему оподаткування вашого ФОП чи ТОВ.',
    answers: [
      {
        text: 'Ні',
        nextNode: 'tax-general-yes-ap-no',
      },
      {
        text: 'Так',
        nextNode: 'tax-general-yes-ap-yes',
      },
    ],
  },
  {
    id: 9,
    node: 'tax-general-no-ap-no',
    question: 'Чи є у вас наймані працівники?',
    descr: 'Оберіть систему оподаткування вашого ФОП чи ТОВ.',
    answers: [
      {
        text: 'Ні',
        nextNode: null,
        value: 3000,
      },
      {
        text: 'Так',
        nextNode: null,
        value: 3000,
        multiplier: 700,
        additional: {
          question: 'Скільки чоловік?',
          descr: 'Введіть числове значення к-ті працівників у вашій компанії.',
          field: 'Кількість працівників',
        },
      },
    ],
  },
  {
    id: 10,
    node: 'tax-general-yes-ap-no',
    question: 'Чи є у вас наймані працівники?',
    descr: 'Оберіть систему оподаткування вашого ФОП чи ТОВ.',
    answers: [
      {
        text: 'Ні',
        nextNode: null,
        value: 3000,
      },
      {
        text: 'Так',
        nextNode: null,
        value: 3000,
        multiplier: 700,
        additional: {
          question: 'Скільки чоловік?',
          descr: 'Введіть числове значення к-ті працівників у вашій компанії.',
          field: 'Кількість працівників',
        },
      },
    ],
  },
  {
    id: 11,
    node: 'tax-general-no-ap-yes',
    question: 'Чи є у вас наймані працівники?',
    descr: 'Оберіть систему оподаткування вашого ФОП чи ТОВ.',
    answers: [
      {
        text: 'Ні',
        nextNode: null,
        value: 4000,
      },
      {
        text: 'Так',
        nextNode: null,
        value: 4000,
        multiplier: 700,
        additional: {
          question: 'Скільки чоловік?',
          descr: 'Введіть числове значення к-ті працівників у вашій компанії.',
          field: 'Кількість працівників',
        },
      },
    ],
  },
  {
    id: 12,
    node: 'tax-general-yes-ap-yes',
    question: 'Чи є у вас наймані працівники?',
    descr: 'Оберіть систему оподаткування вашого ФОП чи ТОВ.',
    answers: [
      {
        text: 'Ні',
        nextNode: null,
        value: 5500,
      },
      {
        text: 'Так',
        nextNode: null,
        value: 5500,
        multiplier: 700,
        additional: {
          question: 'Скільки чоловік?',
          descr: 'Введіть числове значення к-ті працівників у вашій компанії.',
          field: 'Кількість працівників',
        },
      },
    ],
  },
];

let totalSum = {
  value: 0,
  multiplier: 0,
};

const calcForm = document.querySelector('#calc-form');
const calcOrganizationInputs = document.querySelectorAll('input[name*="calc-organization"]');
const calcIndividual = document.querySelector('#individual');
const calcLegal = document.querySelector('#legal');
const calcTotal = document.querySelector('#calculator-total');
const calcTotalValue = calcTotal.querySelector('.calculator-total-summary .value');
const calcApplyForm = document.querySelector('#calculator-apply-form');

// Tabs
calcOrganizationInputs.forEach((el) => {
  el.addEventListener('change', (e) => {
    let organization = e.currentTarget.dataset.organization;

    totalSum.value = 0;
    totalSum.multiplier = 0;

    calcTotal.classList.remove('d-none');

    if (organization === 'individual') {
      calcIndividual.classList.remove('d-none');
      calcLegal.classList.add('d-none');

      calcLegal.innerHTML = '';
      calcIndividual.insertAdjacentHTML('afterbegin', renderSection(individualData[0]));
    }

    if (organization === 'legal') {
      calcIndividual.innerHTML = '';

      calcLegal.classList.remove('d-none');
      calcIndividual.classList.add('d-none');
    }
  });
});

// Individual logic
calcIndividual.addEventListener('click', (e) => {
  const additionalInputs = document.querySelectorAll('.calculator-section .additional-field');

  if (e.target.className === 'options-check-input') {
    e.target.onchange = (el) => {
      const nextNodeId= el.target.dataset.nextNodeId;
      const cardObj = individualData.find((obj) => obj.node === nextNodeId);
      const currentIndex = +el.target.closest('.calculator-section').dataset.sectionIndex;
      const sections = el.target.closest('.calculator-tree').querySelectorAll('.calculator-section');
      const inputs = el.target.closest('.calculator-tree').querySelectorAll('.options-check-input');
      const additionalEl = el.target.closest('.calculator-section').querySelector('.additional');

      totalSum.value = 0;
      totalSum.multiplier = 0;

      // Render card
      if (nextNodeId !== 'null') {
        calcIndividual.insertAdjacentHTML('beforeend', renderSection(cardObj));
      } else {
        calcApplyForm.classList.remove('d-none');
      }

      // Removes sections that section index bigger than current section index
      for (const section of sections) {
        const sectionIndex = +section.dataset.sectionIndex;
        if (sectionIndex > currentIndex) {
          section.remove();
          calcApplyForm.classList.add('d-none');
        }
      }

      // Toggle additional field if element has attribute "has-additional"
      if (additionalEl) {
        const additionalElField = additionalEl.querySelector('.additional-field')
        if (e.target.dataset.hasAdditional) {
          additionalEl.classList.remove('d-none');
          additionalElField.setAttribute('required', '');
        } else {
          totalSum.multiplier = 0;
          additionalEl.classList.add('d-none');
          additionalElField.removeAttribute('required', '');
          additionalElField.value = '';
        }
      }

      additionalInputs.forEach(el => {
        el.oninput = (e) => {
          totalSum.multiplier = +e.target.dataset.multiplier * +e.target.value;

          inputsTotal(inputs);
          calcTotalSum();
        }
      });

      // Calculate
      inputsTotal(inputs);
      calcTotalSum();
    };
  }
});

function renderSection(obj) {
  const { id, question, descr, answers, node } = obj;

  return `<div class="calculator-section" data-section-id="${node}" data-section-index="${id}">
      <div class="heading">
        <h3 class="heading-title text-lg">${question}</h3>
        <div class="heading-descr">
          <p>${descr}</p>
        </div>
      </div>
      <div class="options">
      ${answers
        .map(answer => {
          return `<label class="options-check">
            <input 
              class="options-check-input" 
              type="radio" 
              name="calc-individual-${node}[]" 
              data-next-node-id="${answer.nextNode}" 
              ${answer.value ? `data-value="${answer.value}"` : ''} 
              ${answer.additional ? 'data-has-additional="true"' : ''}>
            <span class="options-check-box"></span>
            ${answer.text}
          </label>`;
        })
        .join('')}
      </div>
      ${answers
        .map(answer => {
          if (answer.additional) {
            const { question, descr, field } = answer.additional;

            return `<div class="additional d-none">
                <h4 class="additional-title">${question}</h4>
                <p class="additional-descr">${descr}</p>
                <input 
                  class="additional-field form-control form-control--number" 
                  type="number" 
                  min="1" 
                  max="9999" 
                  maxlength="4" 
                  step="1" 
                  placeholder="${field}" 
                  ${answer.multiplier ? `data-multiplier="${answer.multiplier}"` : ''} 
                  required>
              </div>`;
          }
        })
        .join('')}
    </div>`;
}

function calcTotalSum() {
  const result = totalSum.value + totalSum.multiplier

  calcTotalValue.innerHTML = result.toLocaleString();
}

function inputsTotal(inputs) {
  totalSum.value = 0;

  inputs.forEach((input) => {
    if (input.checked && input.dataset.value && calcForm.contains(input)) {
      totalSum.value += +input.dataset.value;
    }
  });
}