// let divElement = document.querySelector("#div-element")
// let h2element = document.createElement("h2")


// let button = document.createElement("button")
// button.textContent = "paspausk"

// button.addEventListener("click", () => {
//     fetch("https://api.chucknorris.io/jokes/random")
//         .then((res) => {
//             // h2element.textContent = "loading..."
//             return res.json()
//         })
//         .then((joke) => {


//             h2element.textContent = joke.value



//         })
// })
// divElement.append(h2element, button)




// ////////////////////




// let jokeSelect = document.querySelector("#joke-select")
// let buttonElement = document.querySelector("#button-element")



// fetch("https://api.chucknorris.io/jokes/categories")
//     .then((res) => res.json())
//     .then((categories) => {
//         categories.map((category) => {

//             let optionSelect = document.createElement("option")
//             optionSelect.textContent = category
//             optionSelect.classList.add("option-list")
//             jokeSelect.append(optionSelect)

//             //kodel negalejau nauoti optionSelect fetch'e , o naudojau jokeSelect
//         })
//         buttonElement.addEventListener("click", () => {
//             let formChuck = document.querySelector("#form-chuck")
//             fetch(`https://api.chucknorris.io/jokes/random?category=${jokeSelect.value}`)
//                 .then((res) => res.json())
//                 .then((joke) => {

//                     let joketext = document.createElement("h3")
//                     joketext.textContent = joke.value
//                     formChuck.append(joketext)


//                 })

//         })

//     })



// /////////////////////


// wordText = document.querySelector("#word-text")
// wordButton = document.querySelector("#word-button")

// divWordElement = document.querySelector("#word-fraze")


// wordButton.addEventListener("click", () => {

//     formResset = document.querySelector("#form-word")


//     let word = wordText.value
//     fetch(`https://api.chucknorris.io/jokes/search?query=${word}`)
//         .then((res) => {
//             if (res.status >= 400 && res.status < 600) {
//                 divWordElement.textContent = ("Tokios raides arba zodzio nera");
//             }
//             return res.json();
//         })

//     .then((random) => {
//         mathRandom(random)


//     })
//     formResset.reset()

// })

// function mathRandom(random, ) {
//     divWordElement = document.querySelector("#word-fraze")

//     function getRandomInt(min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min) + 2);
//     }

//     let wordCount = random.total

//     divWordElement.textContent = (random.result[getRandomInt(1, wordCount)].value)
//     divWordElement.reset()



// }



// //     2. Sukurti galimybę pasirinkti juokelių kategoriją:
// //   2.1. Sukurti formą, kurioje bus <select> elementas.
// //   2.2. <select> elementas savyje turės <option> elementus. Juose galima pasirinkti juokelių kategoriją. Šie elementai turi susigeneruoti automatiškai, priklausomai nuo to, kokias kategorijas turi API.
// //   2.3. Sukurti mygtuką, kurį paspaudus, sugeneruotų atsitiktinį juokelį pagal pasirinktą kategoriją.


// // [12:10 PM] Romanas Venckus
// // 3. Sukurti galimybę ieškoti juokelių pagal užklausos frazę.
// // 4. Sukurti galimybę ieškoti juokelių pagal užklausos frazę nurodytoje kategorijoje.



// {
//     /* <form action="" id="chuck-form">
//     <select name="" id="chuck-sellect">
//     </select>
//     <input type="button" value="Chuck Joke">
//     </form> */
// }
///labas test

let chuckForm = document.querySelector("#chuck-form")
let chuckSellect = document.querySelector("#chuck-select")
let chuckButton = document.querySelector("#chuck-button")
let chuckJokes = document.querySelector("#chuckJokes")
let chuckJokesWord = document.querySelector("#chuckJokesWord")
let chuckWordText = document.querySelector("#chuck-word-text")



fetch("https://api.chucknorris.io/jokes/categories")
    .then((res) => res.json())
    .then((categories) => {

        categories.map((categori) => {


            let optionElement = document.createElement("option")
            optionElement.textContent = categori
            chuckSellect.append(optionElement)

        })
        chuckButton.addEventListener('click', (e) => {
            e.preventDefault()
                // if(chuckWordText.value)
            if (chuckWordText.value.length < 1) {
                e.preventDefault()
                fetch(`https://api.chucknorris.io/jokes/random?category=${chuckSellect.value}`)
                    .then((res) => res.json())
                    .then((chuckJoke) => {


                        chuckJokes.textContent = chuckJoke.value
                        chuckJokesWord.textContent = ""
                    })

            } else {
                fetch(`https://api.chucknorris.io/jokes/search?query=${chuckWordText.value}`)
                    .then((res) => {
                        if (res.status >= 400 && res.status < 600) {
                            alert("tokios raides arba zodzio nera");
                        }
                        return res.json();
                    })
                    .then((chuckWord) => {
                        // chuckWord.result.map((item) => {
                        //     console.log(item.value)
                        // })


                        let objectCountNumber = chuckWord.result.length


                        chuckJokesWord.textContent = chuckWord.result[randomNumber(objectCountNumber)].value
                            ///funkcija random numberio



                        function randomNumber(count) {
                            max = Math.floor(count);
                            return Math.floor(Math.random() * (max - 1) + 1)
                        }

                    })
                chuckJokes.textContent = ""
            }
        })
    })