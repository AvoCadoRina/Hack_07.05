let data = new Date();

function NewformatOfTime(data) {
    const date = data.getDate().toString().padStart(2, "0");
    const month = (data.getMonth() + 1).toString().padStart(2, "0");
    const year = data.getFullYear();

    const h = data.getHours().toString().padStart(2, "0");
    const m = data.getMinutes().toString().padStart(2, "0");

    return `${date}.${month}.${year}, ${h}:${m}`
}

console.log(NewformatOfTime(data))