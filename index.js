        const abc = document.body
        // Adding Elements
        // abc.appendChild("Hello World");

        // ***********************************************************************

        // Creating Elements
        // const div = document.createElement("div");
        // abc.append(div);

        // ***********************************************************************

        //Modifying Element Text
        const edit = document.createElement("div");
        // edit.innerText = "Bye";
        // edit.textContent="Hey";
        // abc.append(edit);
        const selector = document.querySelector("div");
        // console.log(selector.textContent)
        // console.log(selector.innerText)

        // ***********************************************************************

        // Modifying Element HTML

        const style = document.createElement("span");
        // div.append(style);
        // abc.append(div);
        // style.innerHTML="<strong>Morning</strong>";

        const strong = document.createElement("Strong");
        // div.append(strong);
        // abc.append(div);
        // strong.innerText = "Evening"

        // ***********************************************************************

        const div = document.querySelector("div");
        const firstName = document.querySelector("#firstname");
        const lastName = document.querySelector("#lastname");

        // Removing Element
        // firstName.remove();
        // div.append(firstName);
        // div.removeChild(firstName);


        // Modifying Element Attributes
        // console.log(firstName.getAttribute("title"));
        // console.log(firstName.setAttribute("title","only name"));
        // console.log(firstName.removeAttribute("id"));

        // Modifying Data Attributes
        // console.log(firstName.dataset.test);
        // firstName.dataset.newdata='hi';

        // Modifying Element Classes
        // lastName.classList.add('new');
        // lastName.classList.remove('new');
        // lastName.classList.toggle('pqr');
        // lastName.classList.toggle('pqr',true);

        // Modifying Element Style
        firstName.style.color = "white";
        firstName.style.backgroundColor = "black";



        