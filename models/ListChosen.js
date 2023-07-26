const showImages = (type, tabPanes) => {
    let list = tabPanes.map((item) => {
        if (item.type === type) {
            return `
                    <div class="col-4 text-center mt-3" >
                        <img src="${item.imgSrc_jpg}" class="img-fluid">
                        <h3>${item.name}</h3>
                        <button class='btn btn-success w-50 on' data-img="${item.imgSrc_png}" data-type="${item.type}"> Thử đồ </button>
                    </div>
            `
        }
    }).join('');

    document.querySelector('#imageList').innerHTML = list;
    tryOnButtons()
}




// const showImages = (type, tabPanes) => {
//     let list = tabPanes.map((item) => {
//         if(item.type === type){
//             `
//             '<div class="row">'
//             '<div class="col-4">'
//             '<img src="' + ${item.imgSrc_jpg} + '" class="img-fluid">'
//             '<h3>' + ${item.name} + '</h3>';
//             '<button>' + 'thử đồ' + '</button>'
//             '</div>'
//             `
//         }
//     }).join('');
//     document.querySelector('#imageList').innerHTML = item;
// }
