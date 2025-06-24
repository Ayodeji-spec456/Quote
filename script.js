letdemo = (document.getElementById ("demo").innerHTML =
"<h1>Quote of the Day</h1>");
document.addEventListener("DOMContentLoaded", () => {
    let url = "https://dummyjson.com/quotes";
    let quotee = document.getElementById("quote");
    let quotePen = " ";

    fetch(url)
      .then((res) => res.json())
      .then((data) =>  {
        quotee.innerHTML = " ";

      for (let i = 0; i < data.quotes.length; i++) {
        const quotes = data.quotes[i];

        const quote = quotes.quote;
        const author = quotes.author;

        quotePen = `
            
              <div class="quoteMe">

              <h2>Daily Quote: ${quote}<h2>
              <p>Author: ${author}<p>
              </div>
        `;
      }

      quotee.innerHTML = quotePen;

      console.log(data.quotes);
});

});



function check(){
    let quotePen = " ";
    let url = "https://dummyjson.com/quotes";
    fetch(url)
    .then((res) => res.json())
    .then((data) => {


        for (let i = 0; i < data.quotes.length; i++) {
            let randomNum = Math.floor(Math.random() *data.quotes.length);
            let parables = data.quotes[randomNum];
            console.log("parables: ",parables.author);
            quotePen =


            `
                        <div class= "quoteMa">
                          
                           <h2>Daily Quote: ${parables.quote}<h2>
                            <p>Author: ${parables.author}<p>
                            </div>
            `;
            
        }

        document.getElementById("quote").innerHTML = quotePen

    })
}
