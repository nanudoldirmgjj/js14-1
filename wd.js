
function createBlock(img, name, lan, population, money) {
    const col = document.querySelector('.col');
    let imge = document.querySelector('img');
    imge.src = img;
    document.querySelector('h5').innerHTML = name;
    document.getElementById('popul').innerHTML = population;
    document.getElementById('lan').innerHTML = lan;
    document.getElementById('mon').innerHTML = money;
    let newCol = col.cloneNode(true);

    return newCol;
    }
    
    let content = document.getElementById('content');
    
    fetch('https://restcountries.com/v3.1/all')
    .then((Response) => Response.json())
    .then((data) => {
    
    
        for (let i = 0; i < data.length; i++){
            // let lan = Object.values(data[i].languages)[0];  
            let lan = Object.values(data[i].languages)[0];  
    
            let population = data[i].population;
            
        //    let currenci;
           let cur = Object.values(data[i].currencies)[0].name;
        //    for (let key in cur) {
        //      currenci = cur[key];
        //      break;
        //    }

            content.append(createBlock(data[i].flags.png, data[i].name.official, lan, population, cur))
        }
    
        // content.firstChild.remove();
    
     
    })