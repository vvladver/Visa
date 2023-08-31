let calcEl = document.getElementById("calc-el")
let countEl = document.getElementById("count-el")
let inputElY = document.getElementById("studyU-y")
let inputElW = document.getElementById("work-y")
let inputElC = document.getElementById("studyC-y")


document.getElementById('studyU-y').value = '0';
    document.getElementById('work-y').value = '0';
    document.getElementById('studyC-y').value = '0';
    document.getElementById('count-el').textContent = '0';


/*let count = 0*/

/*function getNumber() {
   let numberStudy = inputElY.value 
   //let numberWork = inputElW.value
   let numberStudyCourses = inputElC.value 

   numberStudy= numberStudy/2; 
}*/

function calculate(){
    
   let numberStudy = parseFloat(inputElY.value); 
   let numberWork = parseFloat(inputElW.value);
   let numberStudyCourses = parseFloat(inputElC.value);
   numberStudy= numberStudy/2;
   
   if (!isNaN(numberStudyCourses) && !isNaN(numberStudy) && !isNaN(numberWork) && numberStudyCourses >= 0 && numberStudy >= 0 && numberWork >= 0){
       let result = numberWork + numberStudy + numberStudyCourses + "years"
       console.log(result)
       countEl.textContent = result
   } else {
       alert("Please enter a valid number.")
   }
}

document.getElementById('reset-button').addEventListener('click', function() {
    document.getElementById('studyU-y').value = '0';
    document.getElementById('work-y').value = '0';
    document.getElementById('studyC-y').value = '0';
    document.getElementById('count-el').textContent = '0';

  });

  


//Design https://coolors.co/palette/177e89-084c61-db3a34-ffc857-323031
//Write in git cousre and what ive done 
