export function getFullName() {
    // 1
    // return `${prompt("Enter your name")} ${prompt("Enter your surname")}`;
    // Запрашивает несколько раз. Почему?

    // 2
    // let fullName = prompt("Enter your full name");
    // if(fullName.search(/[A-Z][a-z]+\s+[A-Z][a-z]+/) !== -1) {
    //     return fullName;
    // }else {
    //     return "The entered name is incorrect";
    // }     // Та же проблема

    // 3
    return "Marine Grigorian";
}