//let nameAgeMapping = new Map();
 
//1. Add entries
//nameAgeMapping.set(1,1);
//nameAgeMapping.set(2,2);

 
//2. Get entries
//nameAgeMapping.get("John");     //40

//Clear whole Map
//nameAgeMapping.clear();             //Clear all entries


//stack overflow

function countItems(arr: string[]) {
  const countMap = Object.create(null);

  for (const element of arr) {
    // Basicamente, estamos dizendo: atribua à `countMap[element]` o valor
    // atual (ou zero, caso não existir) somado ao número 1.
    countMap[element] = (countMap[element] || 0) + 1;
  }

  return Object.entries(countMap).map(([value, count]) => ({
    numero: value,
    quantidade: count
  }));
}

const arr = ['1', '1', '2', '2', '2'];
console.log(countItems(arr));