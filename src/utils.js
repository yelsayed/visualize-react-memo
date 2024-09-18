import {faker} from "@faker-js/faker";

export function shuffle(array) {
    let currentIndex = array.length - 1, randomIndex;
    const newArray = [...array];

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);

        // And swap it with the current element.
        [newArray[currentIndex], newArray[randomIndex]] = [newArray[randomIndex], newArray[currentIndex]];

        currentIndex--;
    }

    return newArray;
}

export const generateRandomPerson = () => {
  const sex = faker.person.sexType();
  const name = faker.person.fullName({sex});
  const age = faker.number.int({
    min: 18,
    max: 65
  });

  const colors = [
    {
      id: 1,
      name: faker.color.human(),
    },
    {
      id: 2,
      name: faker.color.human(),
    },
    {
      id: 3,
      name: faker.color.human()
    }
  ]

  return {
    name,
    sex,
    age,
    colors
  }
}
export const generateDataList = (n) => {
  return Array.from(Array(n).keys()).map((e, index) =>
    (
      {id: index + 1, ...generateRandomPerson()}
    )
  );
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export const addAnimation = (cardId) => {
  const card = document.getElementById(cardId);
  if (!card) return;

  card.classList.add("name-card__fade");
  card.addEventListener("animationend", () => {
    card.classList.remove("name-card__fade");
  });
}
