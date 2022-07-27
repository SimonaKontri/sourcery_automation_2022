// @ts-check
const { test, expect } = require('@playwright/test');

const data = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8'
]

data.forEach(version => {
  test.describe(version + ': Elements accessibility', () => {
    test('Number 1 field should be visible', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await expect(page.locator('#number1Field'), 'Number 1 field is invisible').toBeVisible();
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Elements accessibility', () => {
    test('Number 2 field should be visible', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await expect(page.locator('#number2Field'), 'Number 2 field is invisible').toBeVisible();
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Elements accessibility', () => {
    test('Operation options should be visible', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await expect(page.locator('#selectOperationDropdown'), 'Operation options are invisible').toBeVisible();
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Elements accessibility', () => {
    test('Calculate button should be visible and enabled', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await expect(page.locator('#calculateButton'), 'Calculate button is invisible').toBeVisible();
      await expect(page.locator('#calculateButton'), 'Calculate button is disabled').toBeEnabled();
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Elements accessibility', () => {
    test('Answer field should be visible', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await expect(page.locator('#numberAnswerField'), 'Answer field should be visible').toBeVisible();
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Elements accessibility', () => {
    test('When "Concatenate" is selected, then "Integers only" option should be not visible', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('5');
      await page.locator('#number2Field').type('8');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#integerSelect'), 'When "Concatenate" is selected, then "Integers only" option is visible').toBeDisabled();
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Elements accessibility', () => {
    test('Checkbox "Integers only" should be not checked', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await expect(page.locator('#integerSelect'), 'Checkbox "Integers only" is checked').not.toBeChecked();
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Elements functionality', () => {
    test('Clear button should clean answer field when Add operation is selected', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('10');
      await page.locator('#number2Field').type('12');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
      await page.locator('#clearButton').click();
      await expect(page.locator('#numberAnswerField'), 'Clear button does not clean answer field when Add operation is selected').toHaveValue('');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Elements functionality', () => {
    test('Clear button should clean answer field when Subtract operation is selected', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('10');
      await page.locator('#number2Field').type('12');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
      await page.locator('#clearButton').click();
      await expect(page.locator('#numberAnswerField'), 'Clear button does not clean answer field when Subtract operation is selected').toHaveValue('');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Elements functionality', () => {
    test('Clear button should clean answer field when Multiply operation is selected', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('10');
      await page.locator('#number2Field').type('12');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
      await page.locator('#clearButton').click();
      await expect(page.locator('#numberAnswerField'), 'Clear button does not clean answer field when Multiply operation is selected').toHaveValue('');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Elements functionality', () => {
    test('Clear button should clean answer field when Divide operation is selected', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('10');
      await page.locator('#number2Field').type('12');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
      await page.locator('#clearButton').click();
      await expect(page.locator('#numberAnswerField'), 'Clear button does not clean answer field when Divide operation is selected').toHaveValue('');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Elements functionality', () => {
    test('Clear button should clean answer field when Concatenate operation is selected', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('10');
      await page.locator('#number2Field').type('12');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();
      await page.locator('#clearButton').click();
      await expect(page.locator('#numberAnswerField'), 'Clear button does not clean answer field when Concatenate operation is selected').toHaveValue('');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Elements functionality', () => {
    test('"Integers only" checkbox should convert answer value to an integer number when Add operation is selected', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('15.15');
      await page.locator('#number2Field').type('5.5');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
      await page.locator('#integerSelect').click();
      await expect(page.locator('#numberAnswerField'), '"Integers only" checkbox does not convert answer value to an integer number when Add operation is selected').toHaveValue('20');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Elements functionality', () => {
    test('"Integers only" checkbox should convert answer value to an integer number when Subtract operation is selected', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('15.15');
      await page.locator('#number2Field').type('5.5');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
      await page.locator('#integerSelect').click();
      await expect(page.locator('#numberAnswerField'), '"Integers only" checkbox does not convert answer value to an integer number when Subtract operation is selected').toHaveValue('9');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Elements functionality', () => {
    test('"Integers only" checkbox should convert answer value to an integer number when Multiply operation is selected', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('15.15');
      await page.locator('#number2Field').type('5.5');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
      await page.locator('#integerSelect').click();
      await expect(page.locator('#numberAnswerField'), '"Integers only" checkbox does not convert answer value to an integer number when Multiply operation is selected').toHaveValue('83');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Elements functionality', () => {
    test('"Integers only" checkbox should convert answer value to an integer number when Divide operation is selected', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('15.15');
      await page.locator('#number2Field').type('5.5');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
      await page.locator('#integerSelect').click();
      await expect(page.locator('#numberAnswerField'), '"Integers only" checkbox does not convert answer value to an integer number when Divide operation is selected').toHaveValue('2');
    });
  });
});

test.describe('9' + ': Elements accessibility', () => {
  test('Number 1 field should be visible in 9 build', async ({ page }) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator');
    await page.selectOption('#selectBuild', { label: '9'});
    await expect(page.locator('#number1Field'), 'Number 1 field is invisible').toBeVisible();
  });
});

test.describe('9' + ': Elements accessibility', () => {
  test('Number 2 field should be visible in 9 build', async ({ page }) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator');
    await page.selectOption('#selectBuild', { label: '9'});
    await expect(page.locator('#number2Field'), 'Number 2 field is invisible').toBeVisible();
  });
});

test.describe('9' + ': Elements accessibility', () => {
  test('Operation options should be visible in 9 build', async ({ page }) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator');
    await page.selectOption('#selectBuild', { label: '9'});
    await expect(page.locator('#selectOperationDropdown'), 'Operation options are invisible').toBeVisible();
  });
});

test.describe('9' + ': Elements accessibility', () => {
  test('Calculate button should be visible and enabled in 9 build', async ({ page }) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator');
    await page.selectOption('#selectBuild', { label: '9'});
    await expect(page.locator('#calculateButton'), 'Calculate button is invisible').toBeVisible();
    await expect(page.locator('#calculateButton'), 'Calculate button is disabled').toBeEnabled();
  });
});

test.describe('9' + ': Elements accessibility', () => {
  test('Answer field should be visible in 9 build', async ({ page }) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator');
    await page.selectOption('#selectBuild', { label: '9'});
    await expect(page.locator('#numberAnswerField'), 'Answer field should be visible').toBeVisible();
  });
});

data.forEach(version => {
  test.describe(version + ': Input acceptance', () => {
    test('Typing 2.5.5 with "Add" shows "Number 1 is not a number"', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2.5.5');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#errorMsgField'), 'Typing 2.5.5 with "Add" does not show error message "Number 1 is not a number"').toHaveText('Number 1 is not a number');
    });
  });
});
/*
data.forEach(version => {
  test.describe(version + ': Input acceptance', () => {
    test('Typing AAA with "Add" shows "Number 1 is not a number"', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('AAA');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#errorMsgField'), 'Typing AAA with "Add" does not show error message "Number 1 is not a number"').toHaveText('Number 1 is not a number');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Input acceptance', () => {
    test('Typing 2.5.5 with "Add" shows "Number 2 is not a number"', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number2Field').type('2.5.5');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#errorMsgField'), 'Typing 2.5.5 with "Add" does not show error message "Number 2 is not a number"').toHaveText('Number 2 is not a number');
    });
  });
});
*/
data.forEach(version => {
  test.describe(version + ': Input acceptance', () => {
    test('Typing AAA with "Add" shows "Number 2 is not a number"', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number2Field').type('AAA');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#errorMsgField'), 'Typing AAA with "Add" does not show error message "Number 2 is not a number"').toHaveText('Number 2 is not a number');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Input acceptance', () => {
    test('Typing 2.5.5 with "Subtract" shows "Number 1 is not a number"', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2.5.5');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#errorMsgField'), 'Typing 2.5.5 with "Subtract" does not show error message "Number 1 is not a number"').toHaveText('Number 1 is not a number');
    });
  });
});
/*
data.forEach(version => {
  test.describe(version + ': Input acceptance', () => {
    test('Typing AAA with "Subtract" shows "Number 1 is not a number"', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('AAA');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#errorMsgField'), 'Typing AAA with "Subtract" does not show error message "Number 1 is not a number"').toHaveText('Number 1 is not a number');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Input acceptance', () => {
    test('Typing 2.5.5 with "Subtract" shows "Number 2 is not a number"', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number2Field').type('2.5.5');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#errorMsgField'), 'Typing 2.5.5 with "Subtract" does not show error message "Number 2 is not a number"').toHaveText('Number 2 is not a number');
    });
  });
});
*/
data.forEach(version => {
  test.describe(version + ': Input acceptance', () => {
    test('Typing AAA with "Subtract" shows "Number 2 is not a number"', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number2Field').type('AAA');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#errorMsgField'), 'Typing AAA with "Subtract" does not show error message "Number 2 is not a number"').toHaveText('Number 2 is not a number');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Input acceptance', () => {
    test('Typing 2.5.5 with "Multiply" shows "Number 1 is not a number"', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2.5.5');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#errorMsgField'), 'Typing 2.5.5 with "Multiply" does not show error message "Number 1 is not a number"').toHaveText('Number 1 is not a number');
    });
  });
});
/*
data.forEach(version => {
  test.describe(version + ': Input acceptance', () => {
    test('Typing AAA with "Multiply" shows "Number 1 is not a number"', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('AAA');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#errorMsgField'), 'Typing AAA with "Multiply" does not show error message "Number 1 is not a number"').toHaveText('Number 1 is not a number');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Input acceptance', () => {
    test('Typing 2.5.5 with "Multiply" shows "Number 2 is not a number"', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number2Field').type('2.5.5');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#errorMsgField'), 'Typing 2.5.5 with "Multiply" does not show error message "Number 2 is not a number"').toHaveText('Number 2 is not a number');
    });
  });
});
*/
data.forEach(version => {
  test.describe(version + ': Input acceptance', () => {
    test('Typing AAA with "Multiply" shows "Number 2 is not a number"', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number2Field').type('AAA');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#errorMsgField'), 'Typing AAA with "Multiply" does not show error message "Number 2 is not a number"').toHaveText('Number 2 is not a number');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Input acceptance', () => {
    test('Typing 2.5.5 with "Divide" shows "Number 1 is not a number"', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2.5.5');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#errorMsgField'), 'Typing 2.5.5 with "Divide" does not show error message "Number 1 is not a number"').toHaveText('Number 1 is not a number');
    });
  });
});
/*
data.forEach(version => {
  test.describe(version + ': Input acceptance', () => {
    test('Typing AAA with "Divide" shows "Number 1 is not a number"', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('AAA');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#errorMsgField'), 'Typing AAA with "Divide" does not show error message "Number 1 is not a number"').toHaveText('Number 1 is not a number');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Input acceptance', () => {
    test('Typing 2.5.5 with "Divide" shows "Number 2 is not a number"', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number2Field').type('2.5.5');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#errorMsgField'), 'Typing 2.5.5 with "Divide" does not show error message "Number 2 is not a number"').toHaveText('Number 2 is not a number');
    });
  });
});
*/
data.forEach(version => {
  test.describe(version + ': Input acceptance', () => {
    test('Typing AAA with "Divide" shows "Number 2 is not a number"', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number2Field').type('AAA');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#errorMsgField'), 'Typing AAA with "Divide" does not show error message "Number 2 is not a number"').toHaveText('Number 2 is not a number');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Add', () => {
    test('Adding 10 to 12 is equal 22', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('10');
      await page.locator('#number2Field').type('12');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Adding 10 to 12 is not equal 22').toHaveValue('22');
    });
  });
});
/*
data.forEach(version => {
  test.describe(version + ': Operation Add', () => {
    test('Adding -10 to -12 is equal -22', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-10');
      await page.locator('#number2Field').type('-12');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Adding -10 to -12 is not equal -22').toHaveValue('-22');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Add', () => {
    test('Adding 10 to -12 is equal -2', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('10');
      await page.locator('#number2Field').type('-12');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Adding 10 to -12 is not equal -2').toHaveValue('-2');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Add', () => {
    test('Adding -10 to 12 is equal 2', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-10');
      await page.locator('#number2Field').type('12');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Adding -10 to 12 is not equal 2').toHaveValue('2');
    });
  });
});
*/
data.forEach(version => {
  test.describe(version + ': Operation Add', () => {
    test('Adding 6.1 to 3.2 is equal 9.3', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('6.1');
      await page.locator('#number2Field').type('3.2');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Adding 6.1 to 3.2 is not equal 9.3').toHaveValue('9.3');
    });
  });
});
/*
data.forEach(version => {
  test.describe(version + ': Operation Add', () => {
    test('Adding -6.1 to -3.2 is equal -9.3', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-6.1');
      await page.locator('#number2Field').type('-3.2');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Adding -6.1 to -3.2 is not equal -9.3').toHaveValue('-9.3');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Add', () => {
    test('Adding 6.1 to -3.2 is equal 2.9', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('6.1');
      await page.locator('#number2Field').type('-3.2');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Adding 6.1 to -3.2 is not equal 2.9').toHaveValue('2.9');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Add', () => {
    test('Adding -6.1 to 3.2 is equal -2.9', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-6.1');
      await page.locator('#number2Field').type('3.2');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Adding -6.1 to 3.2 is not equal -2.9').toHaveValue('-2.9');
    });
  });
});
*/
data.forEach(version => {
  test.describe(version + ': Operation Add', () => {
    test('Adding -6 to blank is equal -6', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-6');
      await page.locator('#number2Field').type('');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Adding -6 to blank is not equal -6').toHaveValue('-6');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Add', () => {
    test('Adding blank to 3 is equal 3', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Adding blank to 3 is not equal 3').toHaveValue('3');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Add', () => {
    test('Adding -6.1 to blank is equal -6.1', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-6.1');
      await page.locator('#number2Field').type('');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Adding -6.1 to blank is not equal -6.1').toHaveValue('-6.1');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Add', () => {
    test('Adding blank to blank is equal 0', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('');
      await page.locator('#number2Field').type('');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Adding blank to blank is not equal 0').toHaveValue('0');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Subtract', () => {
    test('Subtracting 10 from 12 is equal 2', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('12');
      await page.locator('#number2Field').type('10');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Subtracting 10 from 12 is not equal 2').toHaveValue('2');
    });
  });
});
/*
data.forEach(version => {
  test.describe(version + ': Operation Subtract', () => {
    test('Subtracting 12 from 10 is equal -2', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('10');
      await page.locator('#number2Field').type('12');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Subtracting 12 from 10 is not equal -2').toHaveValue('-2');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Subtract', () => {
    test('Subtracting -10 from -12 is equal -2', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-12');
      await page.locator('#number2Field').type('-10');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Subtracting -10 from -12 is not equal -2').toHaveValue('-2');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Subtract', () => {
    test('Subtracting 10 from -12 is equal -22', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-12');
      await page.locator('#number2Field').type('10');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Subtracting 10 from -12 is not equal -22').toHaveValue('-22');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Subtract', () => {
    test('Subtracting -10 from 12 is equal 22', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('12');
      await page.locator('#number2Field').type('-10');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Subtracting -10 from 12 is not equal 22').toHaveValue('22');
    });
  });
});
*/
data.forEach(version => {
  test.describe(version + ': Operation Subtract', () => {
    test('Subtracting 6.1 from 3.2 is equal -2.9', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('3.2');
      await page.locator('#number2Field').type('6.1');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Subtracting 6.1 from 3.2 is not equal -2.9').toHaveValue('-2.9');
    });
  });
});
/*
data.forEach(version => {
  test.describe(version + ': Operation Subtract', () => {
    test('Subtracting 3.2 from 6.1 is equal 2.9', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('6.1');
      await page.locator('#number2Field').type('3.2');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Subtracting 3.2 from 6.1 is not equal 2.9').toHaveValue('2.9');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Subtract', () => {
    test('Subtracting -6.1 from -3.2 is equal 2.9', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-6.1');
      await page.locator('#number2Field').type('-3.2');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Subtracting -6.1 from -3.2 is not equal -9.3').toHaveValue('2.9');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Subtract', () => {
    test('Subtracting -3.2 from -6.1 is equal -2.9', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-6.1');
      await page.locator('#number2Field').type('-3.2');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Subtracting -3.2 from -6.1 is not equal -2.9').toHaveValue('-2.9');
    });
  });
});
*/
data.forEach(version => {
  test.describe(version + ': Operation Subtract', () => {
    test('Subtracting 6.1 from -3.2 gives -9.3', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-3.2');
      await page.locator('#number2Field').type('6.1');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Subtracting 6.1 from -3.2 does not give -9.3').toHaveValue('-9.3');
    });
  });
});
/*
data.forEach(version => {
  test.describe(version + ': Operation Subtract', () => {
    test('Subtracting -6.1 from 3.2 is equal 9.3', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('3.2');
      await page.locator('#number2Field').type('-6.1');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Subtracting -6.1 from 3.2 is not equal 9.3').toHaveValue('9.3');
    });
  });
});
*/
data.forEach(version => {
  test.describe(version + ': Operation Subtract', () => {
    test('Subtracting blank from 15.2 is equal 15.2', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('15.2');
      await page.locator('#number2Field').type('');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Subtracting blank from 15.2 is not equal 15.2').toHaveValue('15.2');
    });
  });
});
/*
data.forEach(version => {
  test.describe(version + ': Operation Subtract', () => {
    test('Subtracting blank from -15.2 is equal -15.2', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-15.2');
      await page.locator('#number2Field').type('');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Subtracting blank from -15.2 is not equal -15.2').toHaveValue('-15.2');
    });
  });
});
*/
data.forEach(version => {
  test.describe(version + ': Operation Subtract', () => {
    test('Subtracting 15.2 from blank is equal -15.2', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('');
      await page.locator('#number2Field').type('15.2');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Subtracting 15.2 from blank is not equal -15.2').toHaveValue('-15.2');
    });
  });
});
/*
data.forEach(version => {
  test.describe(version + ': Operation Subtract', () => {
    test('Subtracting -15.2 from blank is equal 15.2', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('');
      await page.locator('#number2Field').type('-15.2');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Subtracting -15.2 from blank is not equal 15.2').toHaveValue('15.2');
    });
  });
});
*/
data.forEach(version => {
  test.describe(version + ': Operation Subtract', () => {
    test('Subtracting blank from blank is equal 0', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('');
      await page.locator('#number2Field').type('');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Subtracting blank from blank is not equal 0').toHaveValue('0');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Multiply', () => {
    test('Multiplying 10 with 12 is equal 120', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('10');
      await page.locator('#number2Field').type('12');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Multiplying 10 with 12 is not equal 120').toHaveValue('120');
    });
  });
});
/*
data.forEach(version => {
  test.describe(version + ': Operation Multiply', () => {
    test('Multiplying -10 with -12 is equal 120', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-10');
      await page.locator('#number2Field').type('-12');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Multiplying -10 with -12 is not equal -22').toHaveValue('120');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Multiply', () => {
    test('Multiplying 10 with -12 is equal -120', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('10');
      await page.locator('#number2Field').type('-12');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Multiplying 10 with -12 is not equal -120').toHaveValue('-120');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Multiply', () => {
    test('Multiplying -10 with 12 is equal -120', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-10');
      await page.locator('#number2Field').type('12');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Multiplying -10 with 12 is not equal -120').toHaveValue('-120');
    });
  });
});
*/
data.forEach(version => {
  test.describe(version + ': Operation Multiply', () => {
    test('Multiplying 6.1 with 3.2 is equal 19.52', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('6.1');
      await page.locator('#number2Field').type('3.2');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Multiplying 6.1 with 3.2 is not equal 19.52').toHaveValue('19.52');
    });
  });
});
/*
data.forEach(version => {
  test.describe(version + ': Operation Multiply', () => {
    test('Multiplying -6.1 with -3.2 is equal 19.52', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-6.1');
      await page.locator('#number2Field').type('-3.2');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Multiplying -6.1 with -3.2 is not equal 19.52').toHaveValue('19.52');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Multiply', () => {
    test('Multiplying 6.1 with -3.2 is equal -19.52', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('6.1');
      await page.locator('#number2Field').type('-3.2');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Multiplying 6.1 with -3.2 is not equal 19.52').toHaveValue('-19.52');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Multiply', () => {
    test('Multiplying -6.1 with 3.2 is equal -19.52', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-6.1');
      await page.locator('#number2Field').type('3.2');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Multiplying -6.1 with 3.2 is not equal -19.52').toHaveValue('-19.52');
    });
  });
});
*/
data.forEach(version => {
  test.describe(version + ': Operation Multiply', () => {
    test('Multiplying -6 with blank is equal 0', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-6');
      await page.locator('#number2Field').type('');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Multiplying -6 with blank is not equal 0').toHaveValue('0');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Multiply', () => {
    test('Multiplying 6 with blank is equal 0', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('6');
      await page.locator('#number2Field').type('');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Multiplying 6 with blank is not equal 0').toHaveValue('0');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Multiply', () => {
    test('Multiplying blank with 3 is equal 0', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Multiplying blank with 3 is not equal 0').toHaveValue('0');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Multiply', () => {
    test('Multiplying blank with -3 is equal 0', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('');
      await page.locator('#number2Field').type('-3');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Multiplying blank with -3 is not equal 0').toHaveValue('0');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Multiply', () => {
    test('Multiplying -6.1 with blank is equal 0', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-6.1');
      await page.locator('#number2Field').type('');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Multiplying -6.1 with blank is not equal 0').toHaveValue('0');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Multiply', () => {
    test('Multiplying 6.1 with blank is equal 0', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('6.1');
      await page.locator('#number2Field').type('');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Multiplying 6.1 with blank is not equal 0').toHaveValue('0');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Multiply', () => {
    test('Multiplying blank with blank is equal 0', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('');
      await page.locator('#number2Field').type('');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Multiply blank with blank is not equal 0').toHaveValue('0');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Divide', () => {
    test('Dividing 16 by 2 is equal 8', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('16');
      await page.locator('#number2Field').type('2');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Dividing 16 by 2 is not equal 8').toHaveValue('8');
    });
  });
});
/*
data.forEach(version => {
  test.describe(version + ': Operation Divide', () => {
    test('Dividing -16 by 2 is equal -8', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-16');
      await page.locator('#number2Field').type('2');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Dividing -16 by 2 is not equal -8').toHaveValue('-8');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Divide', () => {
    test('Dividing 16 by -2 is equal -8', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('16');
      await page.locator('#number2Field').type('-2');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Dividing 16 by -2 is not equal -8').toHaveValue('-8');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Divide', () => {
    test('Dividing -48 to -12 is equal 4', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-48');
      await page.locator('#number2Field').type('-12');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Dividing -48 by -12 is not equal 4').toHaveValue('4');
    });
  });
});
*/
data.forEach(version => {
  test.describe(version + ': Operation Divide', () => {
    test('Dividing 6.6 by 1.5 is equal 4.4', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('6.6');
      await page.locator('#number2Field').type('1.5');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Dividing 6.6 by 1.5 is not equal 4.4').toHaveValue('4.4');
    });
  });
});
/*
data.forEach(version => {
  test.describe(version + ': Operation Divide', () => {
    test('Dividing -6.6 by -1.5 is equal 4.4', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-6.6');
      await page.locator('#number2Field').type('-1.5');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Dividing -6.6 by -1.5 is not equal 4.4').toHaveValue('4.4');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Divide', () => {
    test('Dividing 6.6 by -1.5 is equal -4.4', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('6.6');
      await page.locator('#number2Field').type('-1.5');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Dividing 6.6 by -1.5 is not equal -4.4').toHaveValue('-4.4');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Divide', () => {
    test('Dividing -6.6 by 1.5 is equal -4.4', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-6.6');
      await page.locator('#number2Field').type('1.5');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Dividing -6.6 by 1.5 is not equal -4.4').toHaveValue('-4.4');
    });
  });
});
*/
data.forEach(version => {
  test.describe(version + ': Operation Divide', () => {
    test('Dividing -6 by blank shows error message "Divide by zero error!"', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-6');
      await page.locator('#number2Field').type('');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#errorMsgField'), 'Dividing -6 by blank does not show error message "Divide by zero error!"').toHaveText('Divide by zero error!');
    });
  });
});
/*
data.forEach(version => {
  test.describe(version + ': Operation Divide', () => {
    test('Dividing 6 by blank shows error message "Divide by zero error!"', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('6');
      await page.locator('#number2Field').type('');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#errorMsgField'), 'Dividing 6 by blank does not show error message "Divide by zero error!"').toHaveText('Divide by zero error!');
    });
  });
});
*/
data.forEach(version => {
  test.describe(version + ': Operation Divide', () => {
    test('Dividing 6 by 0 shows error message "Divide by zero error!"', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('6');
      await page.locator('#number2Field').type('0');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#errorMsgField'), 'Dividing 6 by 0 does not show error message "Divide by zero error!"').toHaveText('Divide by zero error!');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Divide', () => {
    test('Dividing blank by 3 is equal 0', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Dividing blank by 3 is not equal 0').toHaveValue('0');
    });
  });
});
/*
data.forEach(version => {
  test.describe(version + ': Operation Divide', () => {
    test('Dividing blank by -3 is equal 0', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('');
      await page.locator('#number2Field').type('-3');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Dividing blank by -3 is not equal 0').toHaveValue('0');
    });
  });
});
*/
data.forEach(version => {
  test.describe(version + ': Operation Divide', () => {
    test('Dividing 6.1 by 0 shows error message "Divide by zero error!"', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('6.1');
      await page.locator('#number2Field').type('0');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#errorMsgField'), 'Dividing 6.1 by 0 does not show error message "Divide by zero error!"').toHaveText('Divide by zero error!');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Divide', () => {
    test('Dividing -6.1 by 0 shows error message "Divide by zero error!"', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-6.1');
      await page.locator('#number2Field').type('0');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#errorMsgField'), 'Dividing -6.1 by 0 does not show error message "Divide by zero error!"').toHaveText('Divide by zero error!');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Concatenate', () => {
    test('Concatenating 10 with 12 is equal 1012', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('10');
      await page.locator('#number2Field').type('12');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Concatenating 10 with 12 is not equal 1012').toHaveValue('1012');
    });
  });
});
/*
data.forEach(version => {
  test.describe(version + ': Operation Concatenate', () => {
    test('Concatenating -10 with -12 is equal -10-12', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-10');
      await page.locator('#number2Field').type('-12');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Concatenate -10 with -12 is not equal -10-12').toHaveValue('-10-12');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Concatenate', () => {
    test('Concatenating 10 with -12 is equal 10-12', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('10');
      await page.locator('#number2Field').type('-12');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Concatenating 10 with -12 is not equal 10-12').toHaveValue('10-12');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Concatenate', () => {
    test('Concatenating -10 with 12 is equal -1012', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-10');
      await page.locator('#number2Field').type('12');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Concatenating -10 with 12 is not equal -1012').toHaveValue('-1012');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Concatenate', () => {
    test('Concatenating 6.1 with 3.2 is equal 6.13.2', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('6.1');
      await page.locator('#number2Field').type('3.2');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Concatenating 6.1 with 3.2 is not equal 6.13.2').toHaveValue('6.13.2');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Concatenate', () => {
    test('Concatenating -6.1 with -3.2 is equal -6.1-3.2', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-6.1');
      await page.locator('#number2Field').type('-3.2');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Concatenating -6.1 with -3.2 is not equal -6.1-3.2').toHaveValue('-6.1-3.2');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Concatenate', () => {
    test('Concatenating 6.1 with -3.2 is equal 6.1-3.2', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('6.1');
      await page.locator('#number2Field').type('-3.2');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Concatenating 6.1 with -3.2 is not equal 6.1-3.2').toHaveValue('6.1-3.2');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Concatenate', () => {
    test('Concatenating -6.1 with 3.2 is equal -6.13.2', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-6.1');
      await page.locator('#number2Field').type('3.2');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Concatenating -6.1 with 3.2 is not equal -6.13.2').toHaveValue('-6.13.2');
    });
  });
});
*/
data.forEach(version => {
  test.describe(version + ': Operation Concatenate', () => {
    test('Concatenating -6 with blank is equal -6', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-6');
      await page.locator('#number2Field').type('');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Concatenating -6 with blank is not equal -6').toHaveValue('-6');
    });
  });
});
/*
data.forEach(version => {
  test.describe(version + ': Operation Concatenate', () => {
    test('Concatenating blank to 3 is equal 3', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Concatenating blank to 3 is not equal 3').toHaveValue('3');
    });
  });
});
*/
data.forEach(version => {
  test.describe(version + ': Operation Concatenate', () => {
    test('Concatenating -6.1 with blank is equal -6.1', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-6.1');
      await page.locator('#number2Field').type('');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Concatenating -6.1 with blank is not equal -6.1').toHaveValue('-6.1');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Concatenate', () => {
    test('Concatenating blank with blank is equal blank', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('');
      await page.locator('#number2Field').type('');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Concatenating blank with blank is not equal blank').toHaveValue('');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Concatenate', () => {
    test('Concatenating 1.2.3.4 with 5 is equal 1.2.3.45', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('1.2.3.4');
      await page.locator('#number2Field').type('5');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Concatenating 1.2.3.4 with 5 is not equal 1.2.3.45').toHaveValue('1.2.3.45');
    });
  });
});
/*
data.forEach(version => {
  test.describe(version + ': Operation Concatenate', () => {
    test('Concatenating 5 with 1.2.3.4 is equal 51.2.3.4', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('5');
      await page.locator('#number2Field').type('1.2.3.4');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Concatenating 5 with 1.2.3.4 is not equal 51.2.3.4').toHaveValue('51.2.3.4');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Concatenate', () => {
    test('Concatenating AAAA with 5 is equal AAAA5', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('AAAA');
      await page.locator('#number2Field').type('5');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Concatenating AAAA with 5 is not equal AAAA5').toHaveValue('AAAA5');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Operation Concatenate', () => {
    test('Concatenating 5 with AAAA is equal 5AAAA', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('5');
      await page.locator('#number2Field').type('AAAA');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField'), 'Concatenating 5 with AAAA is not equal 5AAAA').toHaveValue('5AAAA');
    });
  });
});
*/