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

// Individual logic
const calcCheckInputs = document.querySelectorAll('.options-check-input');

calcCheckInputs.forEach((el) => {
  el.addEventListener('change', (e) => {
    let sectionId = e.currentTarget.dataset.id;
    let sectionEl = el
      .closest('.calculator-tree')
      .querySelector(`.calculator-section[data-section-id=${sectionId}]`);
  });
});
