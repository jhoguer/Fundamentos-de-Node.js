function recursiveExample() {

  var step = 'one';
  processData();

  function processData() {

      switch (step) {
          case 'one':
              setTimeout(stepOne(), 200);
              break;

          case 'two':
              setTimeout(stepTwo(), 200);
              break;

          case 'three':
              setTimeout(stepThree(), 200);
              break;

          case 'finalize':
              stepFinalize();
              break;
      }
  }

  function stepOne() {
      console.log('Do step one');
      step = 'two';
      processData();
  }

  function stepTwo() {
      console.log('Do step two');
      step = 'three';
      processData();
  }

  function stepThree() {
      console.log('Do step three');
      step = 'finalize';
      processData();
  }

  function stepFinalize() {
      console.log('Finalize process');
      return;
  }

}

recursiveExample()