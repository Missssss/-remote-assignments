// =======================================================
// Assignment 2 : Callback Function and Advanced HTML DOM
function ajax(src, callback) {
    // write code here
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (){
        if(xhr.readyState === 4 && xhr.status === 200){
            let response = JSON.parse(xhr.responseText);
            callback(response);
        }
    };
    xhr.open('GET',src);
    xhr.send();
}

function render(data){
    // write code here
    let body = document.getElementsByTagName('body')[0];
    if(data.length > 0){
        let mytable = document.createElement('table');
        let tr = document.createElement('tr');
        let tbody = document.createElement('tbody');
        // data 欄位 columns
        let columns_arr = Object.keys(data[0]);
        let columns = '';
        for(let j in columns_arr){
            columns += `<th>${columns_arr[j]}</th>`;
        }
        tr.innerHTML += columns;

        // data rows
        for(let i in data){
            let row = `<tr>
                            <td>${data[i].name}</td>
                            <td>${data[i].price}</td>
                            <td>${data[i].description}</td>
                        </tr>`;
            tbody.innerHTML += row;
        }
        mytable.appendChild(tr);
        mytable.appendChild(tbody);
        body.appendChild(mytable);
    }
    else{
        let result = document.createElement('p');
        result.textContent = 'no data';
        body.appendChild(result);
    }
}

ajax(
    'https://appworks-school.github.io/Remote-Aassigiment-Data/products'
    ,
    function(response){
        render(response);
    }
); 
// you should get product information in JSON format and render data in the page


