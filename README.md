Recipe Finder

This is the Recipe Finder, a website dedicated to satisfying your cravings through your own cooking. Dive in to start your cooking journey! 

<img width="1895" height="913" alt="Screenshot 2026-08-31 145535" src="https://github.com/user-attachments/assets/f935d24e-6892-4a83-b444-5431e58792d4" />
<img width="1896" height="910" alt="Screenshot 2026-08-31 145605" src="https://github.com/user-attachments/assets/e7c23ca6-e5ce-4cd2-adde-5028b6b7b783" />

Here is the demo link: https://vigaash-lingeswaran.github.io/Recipe-Finder/. I would recommend viewing the website at a 80% zoom rate for the best look!

Features: 
- Recipe Finder: This is the first page you are directed to. This is where you can find many different recipes online. This is available through a free API provided by MealDB. This allows for the website to search through 1000s of different recipes.
- Ingredient Recipe Finder: This is the second page you can use. This is where you can input the different ingredients that you have, and the website will give you possible recipes and instructions. This doesn't use an API, but rather ingredients and recipes taken from an online website 

Building Notes/Tech Stack:
- The code: The coding languages used for this project were HTML, Javascript, CSS. HTML was used for the actual layout of the website (divs, headers, buttons). Javascript was used for the logic of the whole program. This is where the API is found and used, and also where all of the queries get processed, which leads to results getting outputted. CSS was used for the styles of the website (font size, color,etc).
- The images: All of the images were provided by the MealDB API.
- No AI Use

Problems and Solutions:
- Ingredient Recipe Finder: This was a little hard for me because I had to stray away from using an API that was free. The only API suitable for the project was only accessible by paying. To combat this, I decided to make an array that would contain all of the basic ingredients of a dish. I would then search through that array based on the query that the user put in. I then used the filter and sort functions to allow the ingredients that had the most matches with the recipe to be shown.
- API Use: This was a challenge for me because it was my first time using an API. The main problem that I had with this is that I didn't know how to reference it. After some research, I was able to solve this problem using the fetch function, which allowed me to fetch the free API's website and use it.
- Reloading Last Used Recipe: This was a challenge for me because I wanted to be able to always have the last opened recipe available on standby for people, but I didn't have a clue about how to do it. Eventually, I figured otu that through using localStorage, I could store the last query and fetch that whenever the person opens the website again.

Running it Locally:
1. Clone this repository
2. Open the cloned repository
3. Open the folder in your preferred code editor. Now, you have access to all of the website's code, including the free API.

I still plan to expand this project by including more recipes in the ingredient recipe finder page.

Credits:
- Built using VScode (Windows)
- All API credits go to their creators
- All recipe credits go to their original creators
