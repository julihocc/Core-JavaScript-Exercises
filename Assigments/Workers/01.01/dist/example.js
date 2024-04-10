import example from "../data/example.json" assert { type: "json" };
function isDev(el) {
    return "techs" in el;
}
const devs = example.filter(isDev);
console.log(devs);
example.forEach((obj) => {
    if (isDev(obj)) {
        console.log(obj.techs);
    }
    isDev(obj);
});
//DEFINE custom type in such a way that when use handlers can use the type and it can use the properties
