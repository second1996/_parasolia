// Individual data
const individualData = [
  {
    id: 0,
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
  },
  {
    id: 1,
    question: 'Яка у вас група єдиного податку?',
    descr: 'Оберіть систему оподаткування вашого ФОП чи ТОВ.',
    answers: [
      {
        text: '2 група',
        nextNode: 'workers',
        value: 300,
      },
      {
        text: '3 група',
        nextNode: 'workers',
      },
    ],
    node: 'tax-group',
  },
  {
    id: 2,
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
  },
  {
    id: 3,
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
          question: 'Кількість працівників?',
          descr: 'Введіть числове значення к-ті працівників у вашій компанії.',
          field: 'Кількість працівників',
        },
      },
    ],
    node: 'workers',
  },
];

let totalSum = 0;

const calcForm = document.querySelector('#calc-form');
const calcOrganizationInputs = document.querySelectorAll('input[name*="calc-organization"]');
const calcIndividual = document.querySelector('#individual');
const calcLegal = document.querySelector('#legal');

// Tabs
calcOrganizationInputs.forEach((el) => {
  el.addEventListener('change', (e) => {
    let organization = e.currentTarget.dataset.organization;

    totalSum = 0;

    if (organization === 'individual') {
      calcIndividual.classList.remove('d-none');
      calcLegal.classList.add('d-none');

      calcLegal.innerHTML = '';
      calcIndividual.insertAdjacentHTML('afterbegin', renderCard(individualData[0]));
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
  totalSum = 0;

  if (e.target.className === 'options-check-input') {
    e.target.onchange = (el) => {
      let nextNodeId= el.target.dataset.nextNodeId;
      let currentIndex = el.target.closest('.calculator-section').dataset.sectionIndex;
      let cardObj = individualData.find((obj) => obj.node === nextNodeId);
      let sections = el.target.closest('.calculator-tree').querySelectorAll('.calculator-section');
      let inputs = el.target.closest('.calculator-tree').querySelectorAll('.options-check-input');

      // Render card
      if (nextNodeId !== 'null') {
        calcIndividual.insertAdjacentHTML('beforeend', renderCard(cardObj));
      }

      // Removes sections that section index bigger than current section index
      for (const section of sections) {
        if (section.dataset.sectionIndex > currentIndex) {
          section.querySelectorAll('.options-check-input').forEach((el) => {
            if (el.checked) {
              totalSum -= +el.dataset.value;

              if (el.dataset.multiplier) {
                totalSum -= +el.dataset.multiplier;
              }
            }
          });

          section.remove();
        }
      }

      // Calculate total sum
      inputs.forEach((el) => {
        if (el.checked && el.dataset.value) {
          totalSum += +el.dataset.value;

          if (el.dataset.multiplier) {
            totalSum += +el.dataset.multiplier;
          }
        }
      });

      console.log(totalSum);
    };
  }
});

function renderCard(obj) {
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
          if (answer.additional) {
            const { question, descr, field } = answer.additional;

            console.log(field);
          }

          return `<label class="options-check">
            <input 
              class="options-check-input" 
              type="radio" 
              name="calc-individual-${node}[]" 
              data-next-node-id="${answer.nextNode}" 
              ${answer.value ? `data-value="${answer.value}"` : ''} 
              ${answer.multiplier ? `data-multiplier="${answer.multiplier}"` : ''}>
            <span class="options-check-box"></span>
            ${answer.text}
          </label>`;
        })
        .join('')}
      </div>
    </div>`;
}

function appendSection(cardObj) {
  calcIndividual.insertAdjacentHTML('beforeend', renderCard(cardObj));
}
