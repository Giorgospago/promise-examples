const _ = require("lodash");
const users = require("./generated.json");

const insertUser = (user) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 100);
    });
};


async function app() {

    console.time("insert users");
    // let i = 0;
    // const promises = [];
    // for (const user of users) {
    //     promises.push(insertUser(user));
    //     console.log("user inserted", i++);
    // }
    // Promise.all(promises);

    const chunks = _.chunk(users, 20);

    for (const chunk of chunks) {

        const promises = [];
        for (const user of chunk) {
            promises.push(insertUser(user));
        }

        Promise.all(promises);
        console.log(chunk.length , " users inserted");

    }



    console.timeEnd("insert users");




}

app();











