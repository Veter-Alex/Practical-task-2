function getElectorToState() {
    var table = document.getElementById("stateTable");
    var rows = table.rows.length;
    var states = [
        "Алабама",
        "Аляска",
        "Аризона",
        "Арканзас",
        "Калифорния",
        "Колорадо",
        "Коннектикут",
        "Делавэр",
        "Флорида",
        "Джорджия",
        "Гавайи",
        "Айдахо",
        "Иллинойс",
        "Индиана",
        "Айова",
        "Канзас",
        "Кентукки",
        "Луизиана",
        "Мэйн",
        "Мэриленд",
        "Массачусетс",
        "Мичиган",
        "Миннесота",
        "Миссисипи",
        "Миссури",
        "Монтана",
        "Небраска",
        "Невада",
        "Нью-Гэмпшир",
        "Нью-Джерси",
        "Нью-Мексико",
        "Нью-Йорк",
        "Северная Каролина",
        "Северная Дакота",
        "Огайо",
        "Оклахома",
        "Орегон",
        "Пенсильвания",
        "Род-Айленд",
        "Южная Каролина",
        "Южная Дакота",
        "Теннесси",
        "Техас",
        "Юта",
        "Вермонт",
        "Виргиния",
        "Вашингтон",
        "Западная Виргиния",
        "Висконсин",
        "Вайоминг",
    ];
    var stateNames = states.sort();

    var resultTable = document.getElementById("resultTable");
    var tables = resultTable.getElementsByTagName("table");
    while (tables.length > 0) {
        tables[0].parentNode.removeChild(tables[0]);
    }
    var images = resultTable.getElementsByTagName("img");
    while (images.length > 0) {
        images[0].parentNode.removeChild(images[0]);
    }
    var paragraphs = resultTable.getElementsByTagName("p");
    while (paragraphs.length > 0) {
        paragraphs[0].parentNode.removeChild(paragraphs[0]);
    }

    for (var i = 0; i < stateNames.length; i++) {
        var row = table.rows[i + 1];
        if (table.rows.length > i + 2) {
            var cell = row.cells[1];
            cell.innerHTML = generateRandomName();
        } else {
            var row = table.insertRow(i + 1);
            var cell = row.insertCell(0);
            cell.innerHTML = stateNames[i];
            var cell = row.insertCell(1);
            cell.innerHTML = generateRandomName();
        }
    }

    holdElections = document.getElementById("holdElections");
    holdElections.disabled = false;
    holdElections.style.pointerEvents = "auto";
    holdElections.style.backgroundColor = "#00698f";
}

function holdElections() {
    var stateTable = document.getElementById("stateTable");
    var rows = stateTable.rows;
    if (rows.length < 3) {
        holdElections = document.getElementById("holdElections");
        holdElections.disabled = true;
        holdElections.style.pointerEvents = "none";
        holdElections.style.backgroundColor = "#bfbfbf";
        return; // Завершить функцию если меньше 2 строк
    }

    // Создаем блок div для результатов выборов
    var resultDiv = document.getElementById("resultTable");

    var firstCandidate = document.getElementById("firstCandidate");
    var firstCandidatefoto = document.getElementById("firstCandidatefoto");
    var firstCandidatepercent = document.getElementById(
        "firstCandidatepercent"
    );

    var secondCandidate = document.getElementById("secondCandidate");
    var secondCandidatefoto = document.getElementById("secondCandidatefoto");
    var secondCandidatepercent = document.getElementById(
        "secondCandidatepercent"
    );

    // Кандидат 1
    var image1 = document.createElement("img");
    image1.src = "image/harris.png";
    image1.alt = "HARRIS";
    image1.style.height = "100px";

    var image1Caption = document.createElement("p");
    image1Caption.innerHTML = "HARRIS";
    firstCandidatefoto.appendChild(image1);
    firstCandidatefoto.appendChild(image1Caption);

    var strfirstCandidatepercent = document.createElement("p");
    strfirstCandidatepercent.innerHTML = "0 %";
    strfirstCandidatepercent.id = "strfirstCandidatepercent";
    firstCandidatepercent.appendChild(strfirstCandidatepercent);
    firstCandidatepercent.style.fontWeight = "bold";
    firstCandidatepercent.style.fontSize = "50px";

    // Кандидат 2
    var image2 = document.createElement("img");
    image2.src = "image/trump.png";
    image2.alt = "TRUMP";
    image2.style.height = "100px";

    var image2Caption = document.createElement("p");
    image2Caption.innerHTML = "TRUMP";
    secondCandidatefoto.appendChild(image2);
    secondCandidatefoto.appendChild(image2Caption);

    var strsecondCandidatepercent = document.createElement("p");
    strsecondCandidatepercent.id = "strsecondCandidatepercent";
    strsecondCandidatepercent.innerHTML = "0 %";
    secondCandidatepercent.appendChild(strsecondCandidatepercent);
    secondCandidatepercent.style.fontWeight = "bold";
    secondCandidatepercent.style.fontSize = "50px";

    // Создаем две новые таблицы
    var firstCandidateTable = document.createElement("table");
    firstCandidateTable.id = "firstCandidateTable";
    var secondCandidateTable = document.createElement("table");
    secondCandidateTable.id = "secondCandidateTable";

    // Добавляем таблицы в блок div
    firstCandidate.appendChild(firstCandidateTable);
    secondCandidate.appendChild(secondCandidateTable);
    // Добавляем заголовки
    var firstCandidateTableHeader = firstCandidateTable.createTHead();
    var firstCandidateTableRow = firstCandidateTableHeader.insertRow(0);
    var firstCandidateTableCell1 = firstCandidateTableRow.insertCell(0);
    var firstCandidateTableCell2 = firstCandidateTableRow.insertCell(1);
    firstCandidateTableCell1.innerHTML = "Штат";
    firstCandidateTableCell2.innerHTML = "Выборщик от штата";
    firstCandidateTable.style.height = "min-content";
    firstCandidateTableRow.style.fontWeight = "bold";
    firstCandidateTableRow.style.backgroundColor = "#f0f0f0";

    var secondCandidateTableHeader = secondCandidateTable.createTHead();
    var secondCandidateTableRow = secondCandidateTableHeader.insertRow(0);
    var secondCandidateTableCell1 = secondCandidateTableRow.insertCell(0);
    var secondCandidateTableCell2 = secondCandidateTableRow.insertCell(1);
    secondCandidateTableCell1.innerHTML = "Штат";
    secondCandidateTableCell2.innerHTML = "Выборщик от штата";
    secondCandidateTable.style.height = "min-content";
    secondCandidateTableRow.style.fontWeight = "bold";
    secondCandidateTableRow.style.backgroundColor = "#f0f0f0";

    // Получаем строки таблицы stateTable
    var rows = stateTable.rows;

    // Создаем массив строк
    var rowsArray = [];
    for (var i = 1; i < rows.length; i++) {
        rowsArray.push(rows[i]);
    }

    // Перемешиваем массив строк
    rowsArray.sort(function () {
        return Math.random() - 0.5;
    });

    let voidToHarris = 0;
    let voidToTrump = 0;

    // Переносим строки в случайном порядке в таблицу firstCandidateTable или secondCandidateTable
    for (var i = 0; i < rowsArray.length; i++) {
        var row = rowsArray[i];
        let randomTable = Math.floor(Math.random() * 2) + 1; // 1 или 2
        switch (randomTable) {
            case 1:
                newTable = firstCandidateTable;
                break;
            case 2:
                newTable = secondCandidateTable;
                break;
        }

        var delay = Math.floor(Math.random() * 3000);
        setTimeout(
            function (row, newTable) {
                newTable.appendChild(row);
                switch (randomTable) {
                    case 1:
                        voidToHarris++;
                        strfirstCandidatepercent.innerHTML = `${
                            voidToHarris * 2
                        } %`;
                        break;
                    case 2:
                        voidToTrump++;
                        strsecondCandidatepercent.innerHTML = `${
                            voidToTrump * 2
                        } %`;
                        break;
                }
            }.bind(null, row, newTable),
            delay
        );
    }

    // получаем кнопку interfereElections
    var interfereElectionsButton =
        document.getElementById("interfereElections");

    // устанавливаем обработчик события на таблицу stateTable
    stateTable.addEventListener("DOMSubtreeModified", function () {
        // получаем количество строк в таблице stateTable
        var rows = stateTable.rows.length;

        // если количество строк равно 1, показываем кнопку interfereElections
        if (rows == 1) {
            interfereElectionsButton.style.display = "inline";
        } else {
            interfereElectionsButton.style.display = "none";
        }
    });

    holdElections = document.getElementById("holdElections");
    holdElections.disabled = true;
    holdElections.style.pointerEvents = "none";
    holdElections.style.backgroundColor = "#bfbfbf";
}

function interfereElections() {
    firstCandidateTable = document.getElementById("firstCandidateTable");
    secondCandidateTable = document.getElementById("secondCandidateTable");
    strfirstCandidatepercent = document.getElementById(
        "strfirstCandidatepercent"
    );
    strsecondCandidatepercent = document.getElementById(
        "strsecondCandidatepercent"
    );

    voidToHarris = strfirstCandidatepercent.innerHTML.split(" ")[0] / 2;
    voidToTrump = strsecondCandidatepercent.innerHTML.split(" ")[0] / 2;

    if (voidToHarris >= voidToTrump) {
        while (voidToHarris >= voidToTrump) {
            var rows = firstCandidateTable.rows;
            var randomIndex = Math.floor(Math.random() * rows.length) + 1;
            var row = rows[randomIndex];
            secondCandidateTable.appendChild(row);
            // firstCandidateTable.deleteRow(randomIndex);
            voidToHarris--;
            voidToTrump++;
            strfirstCandidatepercent.innerHTML = `${voidToHarris * 2} %`;
            strsecondCandidatepercent.innerHTML = `${voidToTrump * 2} %`;
        }
    } else if (voidToHarris <= voidToTrump) {
        while (voidToHarris <= voidToTrump) {
            var rows = secondCandidateTable.rows;
            var randomIndex = Math.floor(Math.random() * rows.length) + 1;
            var row = rows[randomIndex];
            firstCandidateTable.appendChild(row);
            // secondCandidateTable.deleteRow(randomIndex);
            voidToHarris++;
            voidToTrump--;
            strfirstCandidatepercent.innerHTML = `${voidToHarris * 2} %`;
            strsecondCandidatepercent.innerHTML = `${voidToTrump * 2} %`;
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("holdElections");
    button.addEventListener("click", holdElections);
});

document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("getElectorToState");
    button.addEventListener("click", getElectorToState);
});

document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("interfereElections");
    button.addEventListener("click", interfereElections);
});

function generateRandomName() {
    var firstName = [
        "James",
        "Mary",
        "John",
        "Patricia",
        "Robert",
        "Jennifer",
        "Michael",
        "Linda",
        "William",
        "Elizabeth",
        "David",
        "Barbara",
        "Richard",
        "Susan",
        "Joseph",
        "Jessica",
        "Charles",
        "Sarah",
        "Thomas",
        "Karen",
    ];
    var lastName = [
        "Smith",
        "Johnson",
        "Williams",
        "Jones",
        "Brown",
        "Davis",
        "Miller",
        "Wilson",
        "Moore",
        "Taylor",
        "Anderson",
        "Thomas",
        "Jackson",
        "White",
        "Harris",
        "Martin",
        "Thompson",
        "Garcia",
        "Martinez",
        "Robinson",
        "Clark",
        "Rodriguez",
        "Lewis",
        "Lee",
        "Walker",
        "Hall",
        "Allen",
        "Young",
        "Hernandez",
        "King",
        "Wright",
        "Scott",
        "Torres",
        "Nguyen",
        "Hill",
        "Flores",
        "Green",
        "Adams",
        "Nelson",
        "Baker",
        "Hall",
        "Rivera",
        "Campbell",
        "Mitchell",
        "Carter",
        "Roberts",
        "Gonzalez",
        "Stewart",
        "Parker",
        "Reed",
        "Cook",
        "Howard",
        "Bell",
        "Murphy",
        "Bailey",
        "Rivers",
        "Rivera",
        "Cooper",
        "Richardson",
        "Cox",
        "Howard",
        "Ward",
        "Torres",
        "Peterson",
        "Gray",
        "Ramirez",
        "James",
        "Watson",
        "Brooks",
        "Kelly",
    ];
    return (
        firstName[Math.floor(Math.random() * firstName.length)] +
        " " +
        lastName[Math.floor(Math.random() * lastName.length)]
    );
}
