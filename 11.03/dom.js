const demoId = document.getElementById('demo');
// Alterar a cor da borda
demoId.style.border = '1px solid purple';

const demoClass = document.getElementsByClassName('demo');
// demoClass [indice0, indice1]
for (i=0; i < demoClass.length; i++){
    demoClass[i].style.border = '2px dotted orange';
}

const articleTag = document.getElementsByTagName('article');
for (i = 0; i< articleTag.length; i++){
    articleTag[i].style.border = '3px dashed blue';
}

const demoQuery = document.querySelector('#demo-query');
demoQuery.style.border = '1px solid red';


const demoQueryAll = document.querySelectorAll('.demo-query-all');
demoQueryAll.forEach(query => {
    query.style.border = '1px solid green';
    query.style.backgroundColor = 'MediumSpringGreen';
    query.style.color ='gray';
    query.style.fontFamily = 'gblOpenSans';
});
    
