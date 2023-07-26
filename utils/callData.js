fetch('../data/Data.json')
  .then(r => r.json())
  .then(data => {
      let navPills = data.navPills.map((item) => `
        <ul class="nav nav-pills">
            <li class="nav-item">
                <a class="nav-link" data-type="${item.type}" href="#${item.tabName}">${item.showName}</a>
            </li>
        </ul>
        `).join('');
    document.querySelector('#navPills').innerHTML = navPills;
    // Bấm vào để show hình
    const links = document.querySelectorAll('#navPills a');
    links.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        let type = this.getAttribute('data-type');
        showImages(type, data.tabPanes);
        links.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
      });
    });
  });

// for (let link of links) {
    //   link.addEventListener('click', function(event) {
    //     event.preventDefault();
    //     let type = this.getAttribute('data-type');
    //     showImages(type, data.tabPanes);
    //   });
    // }