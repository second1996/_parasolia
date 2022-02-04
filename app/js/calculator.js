const individualData = [
  {
    id: 0,
    node: 'tax-system',
    question: 'На якій ви системі оподаткування?',
    descr: 'Оберіть систему оподаткування вашого ФОП чи ТОВ.',
    answers: [
      {
        text: 'Спрощена',
        nextNode: 'tax-simple',
      },

      {
        text: 'Загальна',
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
          id: 1,
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
          id: 1,
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
          id: 1,
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
          id: 1,
          question: 'Скільки чоловік?',
          descr: 'Введіть числове значення к-ті працівників у вашій компанії.',
          field: 'Кількість працівників',
        },
      },
    ],
  },
  {
    id: 9,
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
          id: 1,
          question: 'Скільки чоловік?',
          descr: 'Введіть числове значення к-ті працівників у вашій компанії.',
          field: 'Кількість працівників',
        },
      },
    ],
  },
  {
    id: 10,
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
    id: 11,
    node: 'tax-general-yes-ap-no',
    question: 'Чи є у вас наймані працівники?',
    descr: 'Оберіть систему оподаткування вашого ФОП чи ТОВ.',
    answers: [
      {
        text: 'Ні',
        nextNode: null,
        value: 4500,
      },
      {
        text: 'Так',
        nextNode: null,
        value: 4500,
        multiplier: 700,
        additional: {
          id: 1,
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
          id: 1,
          question: 'Скільки чоловік?',
          descr: 'Введіть числове значення к-ті працівників у вашій компанії.',
          field: 'Кількість працівників',
        },
      },
    ],
  },
];

const legalData = [
  {
    id: 0,
    node: 'tax-system',
    question: 'На якій ви системі оподаткування?',
    descr: 'Оберіть систему оподаткування вашого ФОП чи ТОВ.',
    answers: [
      {
        text: 'Спрощена 3 група',
        nextNode: 'tax-simple',
      },

      {
        text: 'Загальна',
        nextNode: 'tax-general',
      },
    ],
  },
  {
    id: 1,
    node: 'tax-simple',
    question: 'Чи є ви платником ПДВ?',
    descr: 'Оберіть систему оподаткування вашого ФОП чи ТОВ.',
    answers: [
      {
        text: 'Ні',
        nextNode: null,
        value: 6000,
      },
      {
        text: 'Так',
        nextNode: null,
        value: 6000,
        multiplier: 80,
        additional: {
          id: 1,
          question: 'Яка кількість ПН за місяць (вх/вих)?',
          descr: 'Введіть числове значення к-ті податкових накладних за місяць.',
          field: 'Кількість ПН',
        },
      },
    ],
  },
  {
    id: 2,
    node: 'tax-general',
    question: 'Чи є ви платником ПДВ?',
    descr: 'Оберіть систему оподаткування вашого ФОП чи ТОВ.',
    answers: [
      {
        text: 'Ні',
        nextNode: 'tax-general-no-ap',
      },
      {
        text: 'Так',
        nextNode: 'tax-general-yes-ap',
      },
    ],
  },
  {
    id: 3,
    node: 'tax-general-no-ap',
    question: 'Чи є ви платником АП?',
    descr: 'Оберіть систему оподаткування вашого ФОП чи ТОВ.',
    answers: [
      {
        text: 'Ні',
        nextNode: null,
        value: 7000,
      },
      {
        text: 'Так',
        nextNode: null,
        value: 8500,
      },
    ],
  },
  {
    id: 4,
    node: 'tax-general-yes-ap',
    question: 'Чи є ви платником АП?',
    descr: 'Оберіть систему оподаткування вашого ФОП чи ТОВ.',
    answers: [
      {
        text: 'Ні',
        nextNode: null,
        value: 8500,
        multiplier: 80,
        additional: {
          id: 1,
          question: 'Яка кількість ПН за місяць (вх/вих)?',
          descr: 'Введіть числове значення к-ті податкових накладних за місяць.',
          field: 'Кількість ПН',
        },
      },
      {
        text: 'Так',
        nextNode: null,
        value: 10000,
        multiplier: 80,
        additional: {
          id: 2,
          question: 'Яка кількість ПН за місяць (вх/вих)?',
          descr: 'Введіть числове значення к-ті податкових накладних за місяць.',
          field: 'Кількість ПН',
        },
      },
    ],
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const calcForm = document.querySelector('#calc-form');
  const calcOrganizationInputs = document.querySelectorAll('input[name*="calc-organization"]');
  const calcTree = document.querySelectorAll('.calculator-tree');
  const calcIndividual = document.querySelector('#individual');
  const calcLegal = document.querySelector('#legal');
  const calcTotal = document.querySelector('#calculator-total');
  const calcTotalValue = calcTotal.querySelector('.calculator-total-summary .value');
  const calcApplyForm = document.querySelector('#calculator-apply-form');

  let currentOrganization = {
    data: null,
    section: calcIndividual,
  };
  let totalSum = {
    value: 0,
    multiplier: 0,
  };

  // Tabs
  calcOrganizationInputs.forEach((el) => {
    el.addEventListener('change', (e) => {
      let organization = e.currentTarget.dataset.organization;

      totalSum.value = 0;
      totalSum.multiplier = 0;

      calcTotal.classList.remove('d-none');

      if (organization === 'individual') {
        currentOrganization.data = individualData;
        currentOrganization.section = calcIndividual;

        calcIndividual.classList.remove('d-none');
        calcLegal.classList.add('d-none');

        calcLegal.innerHTML = '';
        calcIndividual.insertAdjacentHTML('afterbegin', renderSection(currentOrganization.data[0]));
      }

      if (organization === 'legal') {
        currentOrganization.data = legalData;
        currentOrganization.section = calcLegal;

        calcLegal.classList.remove('d-none');
        calcIndividual.classList.add('d-none');

        calcIndividual.innerHTML = '';
        calcLegal.insertAdjacentHTML('afterbegin', renderSection(currentOrganization.data[0]));
      }
    });
  });

  // Calculator logic
  calcTree.forEach((section) => {
    section.addEventListener('click', (e) => {
      if (e.target.className === 'options-check-input') {
        e.target.onchange = (el) => {
          const nextNodeId = el.target.dataset.nextNodeId;
          const cardObj = currentOrganization.data.find((obj) => obj.node === nextNodeId);
          const currentIndex = +el.target.closest('.calculator-section').dataset.sectionIndex;
          const sections = el.target
            .closest('.calculator-tree')
            .querySelectorAll('.calculator-section');
          const inputs = el.target
            .closest('.calculator-tree')
            .querySelectorAll('.options-check-input');
          const additionalEl = el.target
            .closest('.calculator-section')
            .querySelectorAll('.additional');
          const additionalInputs = el.target
            .closest('.calculator-section')
            .querySelectorAll('.additional-field');
          let mask;

          totalSum.value = 0;
          totalSum.multiplier = 0;

          // Render card
          if (nextNodeId !== 'null') {
            currentOrganization.section.insertAdjacentHTML('beforeend', renderSection(cardObj));
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
            const maskOptions = {
              mask: /^[1-9]\d{0,2}$/,
            };

            additionalEl.forEach((el) => {
              const additionalInput = el.querySelector('.additional-field');
              const additionalInputId = +e.target.dataset.hasAdditional;
              const additionalElId = +el.dataset.additionalId;

              if (additionalInputId === additionalElId) {
                el.classList.remove('d-none');
                additionalInput.setAttribute('required', '');
              } else {
                totalSum.multiplier = 0;
                el.classList.add('d-none');
                additionalInput.removeAttribute('required', '');
              }
            });

            additionalInputs.forEach((el) => {
              mask = IMask(el, maskOptions);
              mask.value = '';
              mask.updateValue();

              el.oninput = (e) => {
                totalSum.multiplier = +e.target.dataset.multiplier * +e.target.value;
                inputsTotal(inputs);
                calcTotalSum();
              };
            });
          }

          // Calculate
          inputsTotal(inputs);
          calcTotalSum();

          // Smooth scroll to next section
          setTimeout(() => {
            scrollToSection(e.target);
          }, 150);
        };
      }
    });
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
        .map((answer) => {
          return `<label class="options-check">
            <input 
              class="options-check-input" 
              type="radio" 
              name="calc-${node}[]" 
              data-next-node-id="${answer.nextNode}" 
              ${answer.value ? `data-value="${answer.value}"` : ''} 
              ${answer.additional ? `data-has-additional="${answer.additional.id}"` : ''}>
            <span class="options-check-box"></span>
            ${answer.text}
          </label>`;
        })
        .join('')}
      </div>
      ${answers
        .map((answer) => {
          if (answer.additional) {
            const { id, question, descr, field } = answer.additional;

            return `<div class="additional d-none" data-additional-id="${id}">
                <h4 class="additional-title">${question}</h4>
                <p class="additional-descr">${descr}</p>
                <input 
                  class="additional-field form-control form-control--number" 
                  type="number" 
                  name="calc-additional-${node}_${id}" 
                  min="1" 
                  max="1000" 
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
    const result = totalSum.value + totalSum.multiplier;

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

  function scrollToSection(e) {
    const nextSectionNode = e.closest('.calculator-section').nextSibling;

    if (nextSectionNode) {
      nextSectionNode.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }
});
