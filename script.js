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
                // document.querySelector("#chuck-button").removeAttribute("disabled")

        })
        chuckButton.addEventListener('click', (e) => {
            e.preventDefault()


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


                        let chuckSelectInput = document.querySelector("#chuck-select")

                        let array = []


                        chuckWord.result.map((item) => {

                            item.categories.map((categoryItem) => {

                                if (categoryItem === chuckSelectInput.value) {

                                    array.push(item.value)


                                    chuckJokesWord.textContent = array[1]



                                }
                            })


                        })

                        if (array.length > 0) {
                            let arrayLenght = array.length
                            console.log(array)
                            chuckJokesWord.textContent = array[randomNumber(arrayLenght)]

                        } else {
                            chuckJokesWord.textContent = "tokios frazes nera"

                        }




                        function randomNumber(count) {
                            max = Math.floor(count);
                            return Math.floor(Math.random() * (max - 0))
                        }

                    })
                chuckWordText.value = ""
                chuckJokes.textContent = ""
            }
        })
    })