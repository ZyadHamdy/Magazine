var xhr = new XMLHttpRequest();

xhr.onload = function() {
    if (this.status == 200 && this.readyState == 4) {
        var myArticles = JSON.parse(this.responseText).articles;
        for (var i = 0; i < myArticles.length; i++) {
            document.getElementById('row').innerHTML +=
                `
            <div class="col-sm-6 col-md-3 mt-5 " data-aos="zoom-in" data-aos-duration="1500">
            <div class="panel panel-default panel-card">
                <div class="panel-heading">
                    <img src="${myArticles[i].urlToImage}" />
                    <button class="btn btn-primary btn-sm text-sm-center" role="button">${myArticles[i].author}</button>
                </div>
              
                <div class="panel-body text-center">
                    <h4 class="panel-header"><a href="${myArticles[i].url}">${myArticles[i].title}</a></h4>
                    <small>${myArticles[i].publishedAt}</small>
                </div>
              
                </div>
            </div>

        </div>`;
            document.getElementById('row-tow').innerHTML +=
                `
            <div class="col-sm-6 col-md-3 mt-5" carousel ">
            <div class="content-our-team" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
            <div class="panel panel-default panel-card">
                <div class="panel-heading">
                    <img src="${myArticles[i].urlToImage}" />
                    <button class="btn btn-primary btn-sm text-sm-center" role="button">${myArticles[i].author}</button>
                </div>
              
                <div class="panel-body text-center">
                    <h4 class="panel-header"><a href="${myArticles[i].url}">${myArticles[i].title}</a></h4>
                    <small>${myArticles[i].publishedAt}</small>
                </div>
              
                </div>
            </div>

        </div>`;

        }


    }
}
xhr.open('GET',
    'https://newsapi.org/v2/everything?q=technology&apiKey=a78ddcf257c24f3997ceb6478c073773');
xhr.send();